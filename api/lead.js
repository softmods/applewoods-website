import { Resend } from "resend";

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const MAX_BODY_BYTES = 16_384;
const MAX_LENGTHS = {
  fullName: 120,
  phone: 40,
  email: 254,
  notes: 2_000,
};
// Where the lead came from (src/lead-source.js). Optional, informational only.
const SOURCE_FIELDS = ["utmSource", "utmMedium", "utmCampaign", "utmContent", "utmTerm", "referrer", "landingPage"];
const SOURCE_MAX_LENGTH = 200;
const ALLOWED_VALUES = {
  lotInterest: new Set(["not-sure", "standard", "premier", "corner"]),
  budget: new Set(["not-sure", "85-95", "95-plus", "depends"]),
  timeline: new Set(["not-sure", "now", "soon", "later"]),
  interestType: new Set(["availability", "buy", "build"]),
  lang: new Set(["en", "es"]),
};
const STRING_FIELDS = [
  "leadStage",
  "fullName",
  "phone",
  "email",
  "lotInterest",
  "budget",
  "timeline",
  "interestType",
  "notes",
  "lang",
  "companyWebsite",
  "turnstileToken",
  ...SOURCE_FIELDS,
];

const clean = (value) => (typeof value === "string" ? value.trim() : "");

function validateFieldTypes(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { error: "Request body must be an object." };
  }

  for (const field of STRING_FIELDS) {
    if (body[field] !== undefined && typeof body[field] !== "string") {
      return { error: `${field} must be a string.` };
    }
  }

  return {};
}

function serializedBodyBytes(body) {
  try {
    return Buffer.byteLength(JSON.stringify(body), "utf8");
  } catch {
    return Number.POSITIVE_INFINITY;
  }
}

function parseRecipientEmails(value) {
  return String(value || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function validateRecipientEmails(emails, environment = process.env.VERCEL_ENV) {
  if (emails.some((email) => !isValidEmail(email))) {
    throw new Error("CLIENT_EMAILS contains an invalid email address");
  }
  const uniqueEmails = new Set(emails.map((email) => email.toLowerCase()));
  if (environment === "production" && (emails.length !== 3 || uniqueEmails.size !== 3)) {
    throw new Error("CLIENT_EMAILS must contain three unique addresses in production");
  }
}

function validateLead(body) {
  const typeValidation = validateFieldTypes(body);
  if (typeValidation.error) return typeValidation;

  const lead = {
    leadStage: "complete",
    fullName: clean(body.fullName),
    phone: clean(body.phone),
    email: clean(body.email),
    lotInterest: clean(body.lotInterest) || "not-sure",
    budget: clean(body.budget) || "not-sure",
    timeline: clean(body.timeline) || "not-sure",
    interestType: clean(body.interestType) || "availability",
    notes: clean(body.notes),
    lang: clean(body.lang) || "en",
    receivedAt: new Date().toISOString(),
  };
  for (const field of SOURCE_FIELDS) {
    lead[field] = clean(body[field]).slice(0, SOURCE_MAX_LENGTH);
  }

  if (!lead.phone && !lead.email) return { error: "A phone or email is required." };
  if (lead.phone) {
    const digits = lead.phone.match(/\d/g) || [];
    if (!/^[\d+().\s-]+$/.test(lead.phone) || digits.length < 7) {
      return { error: "Phone is invalid." };
    }
  }
  if (lead.email && !isValidEmail(lead.email)) return { error: "Email is invalid." };

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    if (lead[field].length > max) return { error: `${field} is too long.` };
  }

  for (const [field, allowed] of Object.entries(ALLOWED_VALUES)) {
    if (!allowed.has(lead[field])) return { error: `${field} is invalid.` };
  }

  return { lead };
}

function assertResendResult(result, expectedEmails) {
  if (result?.error || !Array.isArray(result?.data?.data) || result.data.data.length !== expectedEmails) {
    throw new Error("Resend rejected the email batch");
  }
}

function visitorIp(request) {
  const forwarded = request.headers?.["x-forwarded-for"];
  return String(Array.isArray(forwarded) ? forwarded[0] : forwarded || "")
    .split(",")[0]
    .trim();
}

async function verifyTurnstile(token, request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // Keep local development usable without production credentials, but fail
  // closed on Vercel production if the secret was not configured.
  if (!secret) {
    return process.env.VERCEL_ENV === "production"
      ? { ok: false, configurationError: true }
      : { ok: true, skipped: true };
  }

  if (!token || token.length > 2_048) return { ok: false };

  const payload = new URLSearchParams({ secret, response: token });
  const ip = visitorIp(request);
  if (ip) payload.set("remoteip", ip);

  try {
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload,
      signal: AbortSignal.timeout(5_000),
    });
    if (!verification.ok) return { ok: false, serviceError: true };

    const result = await verification.json();
    return { ok: result.success === true, errors: result["error-codes"] || [] };
  } catch (error) {
    console.error("Applewoods Turnstile verification failed", error);
    return { ok: false, serviceError: true };
  }
}

// Plain-text summary of the lead for the team notification email.
// One line a salesperson can read: "facebook / social / sept-launch" or
// "direct", plus the landing page language.
function describeSource(lead) {
  const campaign = [lead.utmSource, lead.utmMedium, lead.utmCampaign].filter(Boolean).join(" / ");
  const origin = campaign || (lead.referrer ? `referral: ${lead.referrer}` : "direct");
  return lead.utmContent || lead.utmTerm ? `${origin} (${[lead.utmContent, lead.utmTerm].filter(Boolean).join(", ")})` : origin;
}

function leadSummary(lead) {
  return [
    `Name: ${lead.fullName || "—"}`,
    `Phone: ${lead.phone || "—"}`,
    `Email: ${lead.email || "—"}`,
    "",
    `Lot interest: ${lead.lotInterest || "—"}`,
    `Budget: ${lead.budget || "—"}`,
    `Timeline: ${lead.timeline || "—"}`,
    `Interest: ${lead.interestType || "—"}`,
    `Language: ${lead.lang}`,
    `Source: ${describeSource(lead)}`,
    `Landing page: ${lead.landingPage || "—"}`,
    "",
    "Notes:",
    lead.notes || "—",
    "",
    `Received: ${lead.receivedAt}`,
  ].join("\n");
}

// Auto-reply sent to the lead (English only for now — a Spanish version needs
// the client's wording before it ships; see docs/applewoods-lead-form-setup.md).
function autoReply(lead) {
  return [
    `Hi${lead.fullName ? ` ${lead.fullName}` : ""},`,
    "",
    "Thanks for reaching out about Apple Woods. We got your message and someone from our team will follow up with you shortly.",
    "",
    "If it's easier, feel free to call or message us directly. We're happy to walk you through homesites, pricing, or anything else about the community.",
    "",
    "Talk soon,",
    "The Apple Woods Team",
  ].join("\n");
}

// Notify the team and (optionally) auto-reply to the lead via Resend. Until
// RESEND_API_KEY / FROM_EMAIL / CLIENT_EMAILS are set, email is a no-op while
// Slack continues independently.
async function sendResendEmails(lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL;
  const clientEmails = parseRecipientEmails(process.env.CLIENT_EMAILS || process.env.CLIENT_EMAIL);

  if (!apiKey || !from || clientEmails.length === 0) {
    return {
      status: "skipped",
      reason: "Missing RESEND_API_KEY, FROM_EMAIL, or CLIENT_EMAILS",
    };
  }

  validateRecipientEmails(clientEmails);

  const resend = new Resend(apiKey);

  const messages = clientEmails.map((recipient) => ({
    from,
    to: recipient,
    ...(lead.email ? { replyTo: lead.email } : {}),
    subject: `New Apple Woods lead${lead.fullName ? `: ${lead.fullName}` : ""}`,
    text: leadSummary(lead),
  }));

  // Auto-replies are intentionally opt-in. Keep this false until the client
  // approves bilingual copy and the spam controls have been observed live.
  const autoReplyEnabled = process.env.SEND_LEAD_AUTOREPLY === "true";
  if (autoReplyEnabled && lead.email) {
    messages.push({
      from,
      to: lead.email,
      subject: "Thanks for reaching out to Apple Woods",
      text: autoReply(lead),
    });
  }

  const result = await resend.batch.send(messages);
  assertResendResult(result, messages.length);
  return {
    status: "sent",
    recipients: clientEmails.length,
    autoReply: autoReplyEnabled && Boolean(lead.email) ? "sent" : "disabled",
  };
}

// Real-time lead alert to Slack via an incoming webhook. No-op until
// SLACK_WEBHOOK_URL is set. SLACK_LEAD_MENTION (e.g. "<@U123>") is prepended so
// the right person gets pinged. Bridges notifications until Resend email is live.
async function notifySlack(lead) {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) return { status: "skipped", reason: "No SLACK_WEBHOOK_URL" };

  const mention = process.env.SLACK_LEAD_MENTION;
  const detail = (label, value) => `*${label}:* ${value || "—"}`;
  const lines = [
    `${mention ? mention + " " : ""}:house_with_garden: *New Apple Woods lead*`,
    detail("Name", lead.fullName),
    detail("Phone", lead.phone),
    detail("Email", lead.email),
    detail("Lot interest", lead.lotInterest),
    detail("Budget", lead.budget),
    detail("Timeline", lead.timeline),
    detail("Interest", lead.interestType),
    detail("Language", lead.lang === "es" ? "Español" : "English"),
    detail("Source", describeSource(lead)),
    detail("Landing page", lead.landingPage),
    lead.notes ? detail("Notes", lead.notes) : null,
  ].filter(Boolean);

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: lines.join("\n") }),
  });
  if (!res.ok) throw new Error(`Slack webhook responded ${res.status}`);
  return { status: "sent" };
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.setHeader("Allow", "POST, OPTIONS");
    return response.status(204).end();
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST, OPTIONS");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const contentType = String(request.headers?.["content-type"] || "");
  if (!contentType.startsWith("application/json")) {
    return response.status(415).json({ ok: false, error: "Content-Type must be application/json." });
  }

  const contentLength = Number(request.headers?.["content-length"] || 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return response.status(413).json({ ok: false, error: "Request is too large." });
  }

  const body = request.body;
  const typeValidation = validateFieldTypes(body);
  if (typeValidation.error) {
    return response.status(400).json({ ok: false, error: typeValidation.error });
  }
  if (serializedBodyBytes(body) > MAX_BODY_BYTES) {
    return response.status(413).json({ ok: false, error: "Request is too large." });
  }

  // Honeypots should look successful to bots while producing no logs, Slack
  // messages, emails, or auto-replies.
  if (clean(body.companyWebsite)) {
    return response.status(200).json({ ok: true });
  }

  const validation = validateLead(body);
  if (validation.error) {
    return response.status(400).json({ ok: false, error: validation.error });
  }

  const turnstile = await verifyTurnstile(clean(body.turnstileToken), request);
  if (turnstile.configurationError) {
    console.error("Applewoods lead form is missing TURNSTILE_SECRET_KEY in production");
    return response.status(503).json({ ok: false, error: "Form verification is unavailable." });
  }
  if (!turnstile.ok) {
    console.warn("Applewoods lead rejected by Turnstile", { errors: turnstile.errors || [] });
    return response.status(turnstile.serviceError ? 503 : 400).json({
      ok: false,
      error: turnstile.serviceError ? "Form verification is unavailable." : "Please verify and try again.",
    });
  }

  const { lead } = validation;
  console.info("Applewoods lead accepted", {
    hasPhone: Boolean(lead.phone),
    hasEmail: Boolean(lead.email),
    interestType: lead.interestType,
    lang: lead.lang,
    turnstile: turnstile.skipped ? "skipped-local" : "verified",
  });

  // Fire all notification channels; never fail the visitor because one
  // downstream notification provider did.
  const [emailResult, slackResult] = await Promise.allSettled([
    sendResendEmails(lead),
    notifySlack(lead),
  ]);
  if (emailResult.status === "rejected") console.error("Applewoods lead email failed", emailResult.reason);
  if (slackResult.status === "rejected") console.error("Applewoods lead Slack notify failed", slackResult.reason);

  const delivered = [emailResult, slackResult].some(
    (result) => result.status === "fulfilled" && result.value?.status === "sent"
  );
  if (process.env.VERCEL_ENV === "production" && !delivered) {
    return response.status(502).json({ ok: false, error: "Lead delivery is unavailable." });
  }

  return response.status(200).json({ ok: true });
}

export const __testables = {
  assertResendResult,
  describeSource,
  parseRecipientEmails,
  serializedBodyBytes,
  validateFieldTypes,
  validateLead,
  validateRecipientEmails,
  verifyTurnstile,
};
