import { build } from "vite";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const hallowEnabled = process.env.VITE_HALLOW === "1";

if (hallowEnabled) {
  for (const name of ["VITE_HALLOW_ENDPOINT", "VITE_HALLOW_PROJECT_KEY"]) {
    if (!process.env[name]?.trim()) {
      throw new Error(`${name} is required when VITE_HALLOW=1`);
    }
  }
}

const mode = hallowEnabled ? "preview" : "production";

// 1. Client bundle. index.html comes out with hashed asset tags and an empty
//    #root that still carries the <!--app-html--> marker.
await build({ mode });

// 2. Server bundle of the same app, used once here to render each language.
await build({
  mode,
  logLevel: "warn",
  build: { ssr: "src/entry-server.jsx", outDir: ssrDir, emptyOutDir: true },
});

const { render, jsonLd, head, routes } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { SITE_URL } = await import(pathToFileURL(path.join(root, "src/lang.js")).href);

const template = await readFile(path.join(dist, "index.html"), "utf8");
const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const replaceMeta = (html, attr, name, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`, "g");
  if (!re.test(html)) throw new Error(`index.html has no <meta ${attr}="${name}">`);
  return html.replace(re, `$1${escapeAttr(value)}$2`);
};
const abs = (p) => (p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`);

// Preview deploys (staging) stay out of search results so they never compete
// with www. Local and production builds are unaffected.
const isPreview = Boolean(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");

// 3. One HTML file per page and language (routes() in src/entry-server.jsx).
const rendered = {};
const titles = new Map();
const sitemap = [];
for (const route of routes()) {
  const meta = head(route);
  if (!meta?.title || !meta?.description) throw new Error(`${route.path} has no title or description`);
  if (titles.has(meta.title)) throw new Error(`Duplicate title on ${route.path} and ${titles.get(meta.title)}: ${meta.title}`);
  titles.set(meta.title, route.path);

  const appHtml = render(route);
  if (route.page === "home" && !appHtml.includes("v2-hero")) throw new Error(`Prerender for "${route.lang}" produced no hero markup`);
  rendered[route.path] = appHtml;

  let html = template;
  html = html.replace('<html lang="en">', `<html lang="${route.lang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeText(meta.title)}</title>`);
  html = replaceMeta(html, "name", "description", meta.description);
  html = replaceMeta(html, "property", "og:title", meta.title);
  html = replaceMeta(html, "property", "og:description", meta.description);
  html = replaceMeta(html, "property", "og:url", abs(route.path));
  html = replaceMeta(html, "property", "og:type", meta.type);
  html = replaceMeta(html, "name", "twitter:title", meta.title);
  html = replaceMeta(html, "name", "twitter:description", meta.description);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, route.noindex ? "" : `<link rel="canonical" href="${abs(route.path)}" />`);
  const hreflang = route.alternates
    ? [
        `<link rel="alternate" hreflang="en" href="${abs(route.alternates.en)}" />`,
        `<link rel="alternate" hreflang="es" href="${abs(route.alternates.es)}" />`,
        `<link rel="alternate" hreflang="x-default" href="${abs(route.alternates.en)}" />`,
      ].join("\n    ")
    : "";
  html = html.replace(/<link rel="alternate" hreflang="en"[^>]*\/>\s*<link rel="alternate" hreflang="es"[^>]*\/>\s*<link rel="alternate" hreflang="x-default"[^>]*\/>/, hreflang);
  if (route.page !== "home") {
    // The hero preloads only help the home page.
    html = html.replace(/\s*<link rel="preload" as="image"[^>]*\/>/g, "");
  }
  if (isPreview || route.noindex) {
    html = html.replace("</head>", `    <meta name="robots" content="noindex, nofollow" />\n  </head>`);
  }
  const ld = jsonLd(route);
  if (route.page === "home") {
    const faq = ld["@graph"].find((n) => n["@type"] === "FAQPage");
    if (!faq || faq.mainEntity.length < 10) throw new Error(`JSON-LD for "${route.lang}" has too few FAQ entries`);
  }
  if (ld) {
    const ldScript = `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`;
    html = html.replace("</head>", `    ${ldScript}\n  </head>`);
  }
  if (!html.includes("<!--app-html-->")) throw new Error("index.html lost the <!--app-html--> marker");
  html = html.replace("<!--app-html-->", appHtml);

  const file = route.page === "notfound" ? path.join(dist, "404.html") : path.join(dist, route.path, "index.html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
  if (!route.noindex) sitemap.push(route);
  console.log(`prerendered ${route.path} (${(html.length / 1024).toFixed(0)} KB)`);
}

if (rendered["/"] === rendered["/es"]) throw new Error("English and Spanish prerenders are identical; localization did not apply");

// 4. sitemap.xml from the same route table, with the hreflang pair per URL.
const lastmod = (route) => route.post?.dateModified || route.post?.datePublished || new Date().toISOString().slice(0, 10);
const urls = sitemap.map((route) => {
  const alts = route.alternates
    ? ["en", "es"].map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(route.alternates[l])}" />`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(route.alternates.en)}" />`)
    : [];
  return ["  <url>", `    <loc>${abs(route.path)}</loc>`, `    <lastmod>${lastmod(route)}</lastmod>`, ...alts, "  </url>"].join("\n");
});
await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`
);
console.log(`sitemap.xml (${sitemap.length} URLs)`);

await rm(ssrDir, { recursive: true, force: true });
