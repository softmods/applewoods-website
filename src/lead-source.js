// Where a visitor came from, captured once per browser session on first load
// and sent with the lead so sales sees the source on each lead, not just GA4
// totals. Only utm_* values, the referrer host, and the landing path. Never
// contact details.
const KEY = "aw_source";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const CAMEL = { utm_source: "utmSource", utm_medium: "utmMedium", utm_campaign: "utmCampaign", utm_content: "utmContent", utm_term: "utmTerm" };
const MAX = 200;
const trim = (v) => String(v ?? "").trim().slice(0, MAX);

export function captureLeadSource() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const stored = window.sessionStorage.getItem(KEY);
    if (stored) {
      // Keep the first-touch record unless this is a different tagged link.
      // The language switch carries the query along, so same tags = same visit.
      let prev = {};
      try { prev = JSON.parse(stored) || {}; } catch (e) {}
      const changed = UTM_KEYS.some((k) => params.get(k) && trim(params.get(k)) !== prev[CAMEL[k]]);
      if (!changed) return;
    }
    let referrer = "";
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      referrer = ref && ref.host !== window.location.host ? ref.host : "";
    } catch (e) {}
    const source = {
      landingPage: trim(window.location.pathname),
      referrer: trim(referrer),
    };
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) source[CAMEL[k]] = trim(v);
    }
    window.sessionStorage.setItem(KEY, JSON.stringify(source));
  } catch (e) {}
}

export function readLeadSource() {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const out = {};
    for (const [k, v] of Object.entries(parsed)) if (typeof v === "string" && v) out[k] = trim(v);
    return out;
  } catch (e) {
    return {};
  }
}
