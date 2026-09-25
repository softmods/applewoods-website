import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { buildContent, localize } from "./content";
import { structuredData } from "./structured-data";
import { LANGS, pathFor } from "./lang";
import { SEO } from "./seo";
import { POSTS } from "./content/posts/index.js";
import LOTS from "./content/lots.js";
import { BLOG_SEO, NOT_FOUND_SEO, postTitleTag, lotsPageData, blogIndexData, blogPostData } from "./page-data";

const both = (fn) => Object.fromEntries(LANGS.map((l) => [l, fn(l)]));

// Every prerendered page: home, lots, blog index and each post, in both
// languages, plus the 404 page. `alternates` is the hreflang pair.
export function routes() {
  const list = [];
  for (const page of ["home", "lots", "blog"]) {
    const alternates = both((l) => pathFor(page, l));
    for (const lang of LANGS) list.push({ page, lang, path: alternates[lang], alternates });
  }
  for (const post of POSTS) {
    const alternates = both((l) => pathFor("post", l, post[l].slug));
    for (const lang of LANGS) {
      list.push({ page: "post", lang, slug: post[lang].slug, path: alternates[lang], alternates, post });
    }
  }
  list.push({ page: "notfound", lang: "en", path: "/404", alternates: null, noindex: true });
  return list;
}

export function render(route) {
  return renderToString(
    <App lang={route.lang} page={route.page} slug={route.slug} />
  );
}

// JSON-LD for the home page in this language. Prices are parsed from the
// English labels so both pages carry the same numbers.
function homeLd(lang) {
  const localized = localize(buildContent, lang);
  const priceLabelsEn = buildContent.phaseOne.lots.map((lot) =>
    typeof lot.price === "string" ? lot.price : lot.price.en
  );
  return structuredData(localized, lang, { priceLabelsEn });
}

export function jsonLd(route) {
  const home = homeLd(route.lang);
  if (route.page === "home") return home;
  if (route.page === "lots") return lotsPageData(LOTS, route.lang, home);
  if (route.page === "blog") return blogIndexData(POSTS, route.lang, home);
  if (route.page === "post") return blogPostData(route.post, route.lang, home);
  return null;
}

// Title and description for the <head>.
export function head(route) {
  const { lang } = route;
  if (route.page === "home") return { title: SEO[lang].title, description: SEO[lang].description, type: "website" };
  if (route.page === "lots") return { title: LOTS[lang].title, description: LOTS[lang].description, type: "website", image: LOTS.heroImage };
  if (route.page === "blog") return { ...BLOG_SEO[lang], type: "website" };
  if (route.page === "post") {
    const p = route.post[lang];
    return { title: postTitleTag(p.title), description: p.description, type: "article", image: route.post.heroImage };
  }
  return { ...NOT_FOUND_SEO[lang], type: "website" };
}
