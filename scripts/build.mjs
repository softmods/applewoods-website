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

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { SEO } = await import(pathToFileURL(path.join(root, "src/seo.js")).href);
const { LANGS, DEFAULT_LANG, urlForLang, pathForLang } = await import(
  pathToFileURL(path.join(root, "src/lang.js")).href
);

const template = await readFile(path.join(dist, "index.html"), "utf8");
const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const replaceMeta = (html, attr, name, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`, "g");
  if (!re.test(html)) throw new Error(`index.html has no <meta ${attr}="${name}">`);
  return html.replace(re, `$1${escapeAttr(value)}$2`);
};

// 3. One HTML file per language: / for English, /es for Spanish.
const rendered = {};
for (const lang of LANGS) {
  const seo = SEO[lang];
  if (!seo) throw new Error(`src/seo.js has no entry for "${lang}"`);
  const appHtml = render(lang);
  if (!appHtml.includes("v2-hero")) throw new Error(`Prerender for "${lang}" produced no hero markup`);
  rendered[lang] = appHtml;

  let html = template;
  html = html.replace('<html lang="en">', `<html lang="${lang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`);
  html = replaceMeta(html, "name", "description", seo.description);
  html = replaceMeta(html, "property", "og:title", seo.title);
  html = replaceMeta(html, "property", "og:description", seo.description);
  html = replaceMeta(html, "property", "og:url", urlForLang(lang));
  html = replaceMeta(html, "name", "twitter:title", seo.title);
  html = replaceMeta(html, "name", "twitter:description", seo.description);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${urlForLang(lang)}" />`);
  if (!html.includes("<!--app-html-->")) throw new Error("index.html lost the <!--app-html--> marker");
  html = html.replace("<!--app-html-->", appHtml);

  const outDir = lang === DEFAULT_LANG ? dist : path.join(dist, pathForLang(lang));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
  console.log(`prerendered ${pathForLang(lang)} (${(html.length / 1024).toFixed(0)} KB)`);
}

if (rendered.en === rendered.es) throw new Error("English and Spanish prerenders are identical; localization did not apply");

await rm(ssrDir, { recursive: true, force: true });
