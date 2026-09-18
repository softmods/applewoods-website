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

test("requires a successful individual Resend result", () => {
  assert.doesNotThrow(() => __testables.assertResendResult({ data: { id: "one" }, error: null }));
  for (const result of [{ data: null, error: { message: "rejected" } }, { data: {} }]) {
    assert.throws(() => __testables.assertResendResult(result), /Resend rejected the email/);
  }
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

test("contact card preserves Unicode, escapes fields, and omits missing details", () => {
  const card = __testables.contactCard({ fullName: 'José; García, Jr.\\Test\nORG:Injected' + 'é'.repeat(90), email: 'jose@example.com' });
  for (const line of card.split('\r\n')) assert.ok(Buffer.byteLength(line) <= 75);
  const unfolded = card.replace(/\r\n /g, '');
  assert.ok(unfolded.includes('José\\; García\\, Jr.\\\\Test\\nORG:Injected'));
  assert.equal(unfolded.split('\r\n').filter(line => line.startsWith('ORG:')).length, 1);
  assert.ok(!unfolded.includes('TEL;'));
  assert.ok(!card.includes('\ufffd'));
  assert.ok(__testables.contactCard({ phone: '+52 8112345678' }).includes('FN:+52 8112345678\r\n'));
});

test("form submission sends private contact attachments to the team only", async () => {
  const keys = ['VERCEL_ENV', 'TURNSTILE_SECRET_KEY', 'RESEND_API_KEY', 'FROM_EMAIL', 'CLIENT_EMAILS', 'CLIENT_EMAIL', 'SLACK_WEBHOOK_URL', 'SEND_LEAD_AUTOREPLY'];
  const previous = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  const originalFetch = globalThis.fetch;
  for (const key of keys) delete process.env[key];
  Object.assign(process.env, { RESEND_API_KEY: 're_test', FROM_EMAIL: 'site@example.com', CLIENT_EMAILS: 'one@example.com,two@example.com,three@example.com', SEND_LEAD_AUTOREPLY: 'true' });
  const sent = [];
  globalThis.fetch = async (url, options) => {
    assert.equal(String(url), 'https://api.resend.com/emails');
    sent.push(JSON.parse(options.body));
    return new Response(JSON.stringify({ id: `email-${sent.length}` }), { status: 200, headers: { 'content-type': 'application/json' } });
  };
  try {
    const response = mockResponse();
    await handler({ method: 'POST', headers: { 'content-type': 'application/json' }, body: validBody }, response);
    assert.equal(response.statusCode, 200);
    assert.equal(sent.length, 4);
    for (const [index, message] of sent.slice(0, 3).entries()) {
      assert.deepEqual([message.to].flat(), [['one@example.com', 'two@example.com', 'three@example.com'][index]]);
      assert.equal(message.reply_to, validBody.email);
      assert.equal(message.attachments.length, 1);
      const attachment = message.attachments[0];
      assert.equal(attachment.filename, 'applewoods-contact.vcf');
      const card = Buffer.from(attachment.content, 'base64').toString('utf8');
      assert.ok(card.includes('FN:Test Lead\r\n'));
      assert.ok(card.includes('TEL;TYPE=CELL:9565550100\r\n'));
      assert.ok(card.includes('EMAIL;TYPE=INTERNET:lead@example.com\r\n'));
      assert.ok(card.includes('ORG:Interested in Apple Woods\r\n'));
    }
    assert.equal(sent[3].attachments, undefined);
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of keys) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  }
});

test("failed recipient does not prevent later sends, and total failure returns 502", async () => {
  const keys = ['VERCEL_ENV', 'TURNSTILE_SECRET_KEY', 'RESEND_API_KEY', 'FROM_EMAIL', 'CLIENT_EMAILS', 'SLACK_WEBHOOK_URL', 'SEND_LEAD_AUTOREPLY'];
  const previous = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  const originalFetch = globalThis.fetch;
  for (const key of keys) delete process.env[key];
  Object.assign(process.env, { VERCEL_ENV: 'production', TURNSTILE_SECRET_KEY: 'test', RESEND_API_KEY: 're_test', FROM_EMAIL: 'site@example.com', CLIENT_EMAILS: 'one@example.com,two@example.com,three@example.com' });
  let attempts = 0;
  globalThis.fetch = async (url) => {
    if (String(url).includes('siteverify')) return new Response(JSON.stringify({ success: true }));
    attempts++;
    return new Response(JSON.stringify({ name: 'validation_error', message: 'Rejected' }), { status: 422 });
  };
  try {
    const response = mockResponse();
    await handler({ method: 'POST', headers: { 'content-type': 'application/json' }, body: { ...validBody, turnstileToken: 'test' } }, response);
    assert.equal(attempts, 3);
    assert.equal(response.statusCode, 502);
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of keys) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  }
});
