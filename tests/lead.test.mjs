import assert from "node:assert/strict";
import test from "node:test";
import handler, { __testables } from "../api/lead.js";

const validBody = {
  fullName: "Test Lead",
  phone: "9565550100",
  email: "lead@example.com",
  lotInterest: "standard",
  budget: "85-95",
  timeline: "soon",
  interestType: "availability",
  notes: "Preview test",
  lang: "en",
};

function mockResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(value) {
      this.body = value;
      return this;
    },
    end() {
      return this;
    },
  };
}

test("parses three comma-separated client recipients", () => {
  assert.deepEqual(
    __testables.parseRecipientEmails("first@example.com, second@example.com, owner@example.com"),
    ["first@example.com", "second@example.com", "owner@example.com"]
  );
});

test("requires three unique production recipients", () => {
  assert.doesNotThrow(() =>
    __testables.validateRecipientEmails(
      ["first@example.com", "second@example.com", "owner@example.com"],
      "production"
    )
  );
  assert.throws(
    () => __testables.validateRecipientEmails(["first@example.com", "second@example.com"], "production"),
    /three unique addresses/
  );
  assert.throws(
    () =>
      __testables.validateRecipientEmails(
        ["first@example.com", "FIRST@example.com", "owner@example.com"],
        "production"
      ),
    /three unique addresses/
  );
});

test("validates field lengths and enum values", () => {
  assert.equal(__testables.validateLead(validBody).lead.email, "lead@example.com");
  assert.equal(__testables.validateLead({ ...validBody, notes: "x".repeat(2_001) }).error, "notes is too long.");
  assert.equal(__testables.validateLead({ ...validBody, budget: "anything" }).error, "budget is invalid.");
});

test("carries lead source fields through validation and describes them", () => {
  const { lead } = __testables.validateLead({
    ...validBody,
    utmSource: "facebook",
    utmMedium: "social",
    utmCampaign: "sept-launch",
    referrer: "l.facebook.com",
    landingPage: "/es",
    utmTerm: "x".repeat(500),
  });
  assert.equal(lead.utmSource, "facebook");
  assert.equal(lead.landingPage, "/es");
  assert.equal(lead.utmTerm.length, 200);
  assert.equal(__testables.describeSource(lead), "facebook / social / sept-launch (" + "x".repeat(200) + ")");
  assert.equal(__testables.describeSource(__testables.validateLead(validBody).lead), "direct");
  assert.equal(
    __testables.describeSource(__testables.validateLead({ ...validBody, referrer: "google.com" }).lead),
    "referral: google.com"
  );
  assert.equal(__testables.validateFieldTypes({ ...validBody, utmSource: 5 }).error, "utmSource must be a string.");
});

test("rejects non-string fields and invalid phone values", () => {
  assert.equal(__testables.validateLead({ ...validBody, phone: ["9565550100"] }).error, "phone must be a string.");
  assert.equal(__testables.validateLead({ ...validBody, phone: "call-me" }).error, "Phone is invalid.");
  assert.equal(__testables.validateLead({ ...validBody, phone: "+52 (956) 555-0100" }).lead.phone, "+52 (956) 555-0100");
});

test("requires a complete Resend batch result", () => {
  assert.doesNotThrow(() =>
    __testables.assertResendResult(
      { data: { data: [{ id: "one" }, { id: "two" }, { id: "three" }] }, error: null },
      3
    )
  );
  assert.throws(
    () => __testables.assertResendResult({ data: null, error: { message: "invalid recipient" } }, 3),
    /Resend rejected the email batch/
  );
  assert.throws(
    () => __testables.assertResendResult({ data: { data: [{ id: "one" }, { id: "two" }] }, error: null }, 3),
    /Resend rejected the email batch/
  );
});

test("honeypot submissions return success without calling external services", async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalled = false;
  globalThis.fetch = async () => {
    fetchCalled = true;
    throw new Error("External service should not be called");
  };

  try {
    const response = mockResponse();
    await handler(
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: { ...validBody, companyWebsite: "https://spam.example" },
      },
      response
    );
    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, { ok: true });
    assert.equal(fetchCalled, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("rejects oversized parsed bodies without a Content-Length header", async () => {
  const response = mockResponse();
  await handler(
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: { ...validBody, extra: "x".repeat(16_384) },
    },
    response
  );
  assert.equal(response.statusCode, 413);
  assert.deepEqual(response.body, { ok: false, error: "Request is too large." });
});

test("successful submissions expose no notification-channel details", async () => {
  const environmentKeys = [
    "VERCEL_ENV",
    "TURNSTILE_SECRET_KEY",
    "RESEND_API_KEY",
    "FROM_EMAIL",
    "CLIENT_EMAILS",
    "CLIENT_EMAIL",
    "SLACK_WEBHOOK_URL",
  ];
  const previousEnvironment = Object.fromEntries(environmentKeys.map((key) => [key, process.env[key]]));
  for (const key of environmentKeys) delete process.env[key];

  try {
    const response = mockResponse();
    await handler(
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: validBody,
      },
      response
    );
    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, { ok: true });
  } finally {
    for (const key of environmentKeys) {
      if (previousEnvironment[key] === undefined) delete process.env[key];
      else process.env[key] = previousEnvironment[key];
    }
  }
});

test("production fails closed when the Turnstile secret is missing", async () => {
  const previousEnvironment = process.env.VERCEL_ENV;
  const previousSecret = process.env.TURNSTILE_SECRET_KEY;
  process.env.VERCEL_ENV = "production";
  delete process.env.TURNSTILE_SECRET_KEY;

  try {
    const response = mockResponse();
    await handler(
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: validBody,
      },
      response
    );
    assert.equal(response.statusCode, 503);
    assert.equal(response.body.ok, false);
  } finally {
    if (previousEnvironment === undefined) delete process.env.VERCEL_ENV;
    else process.env.VERCEL_ENV = previousEnvironment;
    if (previousSecret === undefined) delete process.env.TURNSTILE_SECRET_KEY;
    else process.env.TURNSTILE_SECRET_KEY = previousSecret;
  }
});

test("Turnstile verification sends the token and visitor IP to Siteverify", async () => {
  const previousSecret = process.env.TURNSTILE_SECRET_KEY;
  const originalFetch = globalThis.fetch;
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  let requestBody;

  globalThis.fetch = async (_url, options) => {
    requestBody = options.body;
    return { ok: true, json: async () => ({ success: true }) };
  };

  try {
    const result = await __testables.verifyTurnstile("test-token", {
      headers: { "x-forwarded-for": "203.0.113.2, 10.0.0.1" },
    });
    assert.equal(result.ok, true);
    assert.equal(requestBody.get("response"), "test-token");
    assert.equal(requestBody.get("remoteip"), "203.0.113.2");
  } finally {
    globalThis.fetch = originalFetch;
    if (previousSecret === undefined) delete process.env.TURNSTILE_SECRET_KEY;
    else process.env.TURNSTILE_SECRET_KEY = previousSecret;
  }
});
