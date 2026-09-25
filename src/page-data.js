import { SITE_URL, urlFor } from "./lang";
import { SEO } from "./seo";

// JSON-LD and head tags for the pages beyond home (lots, blog, posts). They
// reuse the home graph's Organization, Place and WebSite nodes so every page
// points at the same entities, and the home Product nodes for the lots page.

const strip = (text) =>
  String(text ?? "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .trim();

const img = (src) => `${SITE_URL}${src}`;

const BRAND = " | Apple Woods";
// Post title tags carry the brand only when it fits in 60 characters.
export const postTitleTag = (title) => (title.length + BRAND.length <= 60 ? title + BRAND : title);

export const BLOG_SEO = {
  en: {
    title: "Smart Living Journal | Apple Woods Blog, Brownsville TX",
    description: "The Apple Woods blog: guides for buying a lot and building a home in Brownsville, Texas, and stories about living well once you are here.",
  },
  es: {
    title: "Smart Living Journal | Blog de Apple Woods, Brownsville",
    description: "El blog de Apple Woods: guías para comprar tu terreno y construir tu casa en Brownsville, Texas, e ideas para vivir mejor.",
  },
};

export const NOT_FOUND_SEO = {
  en: { title: "Page not found | Apple Woods", description: SEO.en.description },
  es: { title: "Página no encontrada | Apple Woods", description: SEO.es.description },
};

const faqNode = (items, pageUrl, lang) =>
  items?.length
    ? {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: `${pageUrl}#faq`,
        inLanguage: lang,
        isPartOf: { "@id": pageUrl },
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: strip(item.q),
          acceptedAnswer: { "@type": "Answer", text: strip(item.a) },
        })),
      }
    : null;

const breadcrumbs = (pageUrl, trail) => ({
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: trail.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

const shared = (homeGraph) => {
  const pick = (type) => homeGraph["@graph"].find((n) => n["@type"] === type);
  return {
    org: pick("Organization"),
    place: pick("Place"),
    site: pick("WebSite"),
    products: homeGraph["@graph"].filter((n) => n["@type"] === "Product"),
  };
};

const homeCrumb = (lang) => ({ name: lang === "es" ? "Inicio" : "Home", url: urlFor("home", lang) });
const blogCrumb = (lang) => ({ name: "Smart Living Journal", url: urlFor("blog", lang) });

export function lotsPageData(lots, lang, homeGraph) {
  const { org, place, site, products } = shared(homeGraph);
  const p = lots[lang];
  const pageUrl = urlFor("lots", lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      place,
      site,
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: p.h1,
        description: p.description,
        inLanguage: lang,
        isPartOf: { "@id": site["@id"] },
        about: { "@id": place["@id"] },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        primaryImageOfPage: img(lots.heroImage || "/og-image.jpg"),
      },
      breadcrumbs(pageUrl, [homeCrumb(lang), { name: p.h1, url: pageUrl }]),
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#lots`,
        name: p.h1,
        itemListElement: products.map((product, i) => ({ "@type": "ListItem", position: i + 1, item: product })),
      },
      faqNode(p.faq, pageUrl, lang),
    ].filter(Boolean),
  };
}

export function blogIndexData(posts, lang, homeGraph) {
  const { org, site } = shared(homeGraph);
  const pageUrl = urlFor("blog", lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      site,
      {
        "@type": "Blog",
        "@id": pageUrl,
        url: pageUrl,
        name: BLOG_SEO[lang].title,
        description: BLOG_SEO[lang].description,
        inLanguage: lang,
        isPartOf: { "@id": site["@id"] },
        publisher: { "@id": org["@id"] },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": urlFor("post", lang, post[lang].slug),
          url: urlFor("post", lang, post[lang].slug),
          headline: post[lang].h1,
          datePublished: post.datePublished,
        })),
      },
      breadcrumbs(pageUrl, [homeCrumb(lang), blogCrumb(lang)]),
    ],
  };
}

export function blogPostData(post, lang, homeGraph) {
  const { org, place, site } = shared(homeGraph);
  const p = post[lang];
  const pageUrl = urlFor("post", lang, p.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      place,
      site,
      {
        "@type": "BlogPosting",
        "@id": pageUrl,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        headline: p.h1,
        description: p.description,
        image: img(post.heroImage),
        datePublished: post.datePublished,
        dateModified: post.dateModified || post.datePublished,
        inLanguage: lang,
        author: { "@id": org["@id"] },
        publisher: { "@type": "Organization", name: "Park Street" },
        about: { "@id": place["@id"] },
        isPartOf: { "@id": site["@id"] },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      breadcrumbs(pageUrl, [homeCrumb(lang), blogCrumb(lang), { name: p.h1, url: pageUrl }]),
      faqNode(p.faq, pageUrl, lang),
    ].filter(Boolean),
  };
}
