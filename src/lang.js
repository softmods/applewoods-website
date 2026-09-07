// Language lives in the URL. `/` is English, `/es` is Spanish. Each language is
// prerendered to its own HTML file at build time (scripts/build.mjs) so search
// engines and AI crawlers get real text in both languages, with hreflang links
// between them. The old localStorage-only toggle left Spanish invisible to them.
export const SITE_URL = "https://www.applewoods.us";
export const LANGS = ["en", "es"];
export const DEFAULT_LANG = "en";
export const LANG_STORAGE_KEY = "aw_lang";

export function langFromPath(pathname = "/") {
  const first = String(pathname).split("/").filter(Boolean)[0];
  return LANGS.includes(first) && first !== DEFAULT_LANG ? first : DEFAULT_LANG;
}

export function pathForLang(lang) {
  return lang === DEFAULT_LANG ? "/" : `/${lang}`;
}

export function urlForLang(lang) {
  return lang === DEFAULT_LANG ? `${SITE_URL}/` : `${SITE_URL}${pathForLang(lang)}`;
}
