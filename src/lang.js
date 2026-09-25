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

// Pages beyond the home page. Each page is its own prerendered document; there
// is no client-side router. `slug` only applies to blog posts.
export const PAGES = {
  home: { en: "/", es: "/es" },
  lots: { en: "/lots", es: "/es/terrenos" },
  blog: { en: "/blog", es: "/es/blog" },
};

export function pathFor(page, lang, slug) {
  if (page === "post") return `${PAGES.blog[lang]}/${slug}`;
  return PAGES[page][lang];
}

export function urlFor(page, lang, slug) {
  const p = pathFor(page, lang, slug);
  return p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`;
}

// "/es/blog/foo" -> { lang: "es", page: "post", slug: "foo" }. Unknown paths
// come back as page "notfound" so the client never hydrates the wrong page.
export function parsePath(pathname = "/") {
  const clean = String(pathname).replace(/\/+$/, "") || "/";
  for (const [page, paths] of Object.entries(PAGES)) {
    for (const lang of LANGS) if (paths[lang] === clean) return { lang, page };
  }
  for (const lang of LANGS) {
    const prefix = `${PAGES.blog[lang]}/`;
    if (clean.startsWith(prefix) && !clean.slice(prefix.length).includes("/")) {
      return { lang, page: "post", slug: clean.slice(prefix.length) };
    }
  }
  return { lang: langFromPath(clean), page: "notfound" };
}
