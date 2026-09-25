// Wide WebP variants for blog and lots-page hero images, which render up to
// 1120 CSS px wide (2240 at 2x), larger than the home page variants in
// image-manifest.json. Writes public/assets/blog/ and
// src/content/blog-image-manifest.json (consumed by heroImgProps() in src/img.js).
// Re-run after adding a hero image:  node scripts/blog-images.mjs
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "..");
const OUT_DIR = path.join(ROOT, "public/assets/blog");
const MANIFEST = path.join(ROOT, "src/content/blog-image-manifest.json");
const WIDTHS = [640, 960, 1440, 2240];

// The hero options listed in src/content/posts/SCHEMA.md.
const IMAGES = [
  "/assets/hero-desktop.jpg",
  "/assets/life-maintained-surroundings.jpg",
  "/assets/lot-classic.jpg",
  "/assets/lot-corner.jpg",
  "/assets/aw-water-walk.jpg",
  "/assets/beautyaw.png",
  "/assets/life-clubhouse.jpg",
  "/assets/security-built-in-camera.jpg",
  "/assets/life-outdoor-spaces.jpg",
];

fs.mkdirSync(OUT_DIR, { recursive: true });
const manifest = {};
for (const src of IMAGES) {
  const file = path.join(ROOT, "public", src);
  const meta = await sharp(file).metadata();
  const base = path.basename(src).replace(/\.[^.]+$/, "");
  const widths = WIDTHS.filter((w) => w < meta.width).concat(meta.width).filter((w, i, a) => a.indexOf(w) === i);
  const entries = [];
  for (const w of widths) {
    const out = `/assets/blog/${base}-${w}.webp`;
    await sharp(file).resize({ width: w }).webp({ quality: 78 }).toFile(path.join(ROOT, "public", out));
    entries.push(`${out} ${w}w`);
  }
  manifest[src] = {
    src: `/assets/blog/${base}-${widths[Math.min(1, widths.length - 1)]}.webp`,
    srcSet: entries.join(", "),
    width: meta.width,
    height: meta.height,
  };
  console.log(src, widths.join(","));
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
