// Generates responsive WebP variants for the heavy content images and writes
// src/content/image-manifest.json (consumed by src/img.js → imgProps()).
// Widths come from measured rendered sizes (mobile 390 / desktop 1440, 2x DPR),
// capped at the source width. Re-run after adding or replacing a listed image:
//   node scripts/optimize-images.mjs
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "..");
const OUT_DIR = path.join(ROOT, "public/assets/opt");
const MANIFEST = path.join(ROOT, "src/content/image-manifest.json");

// [source path, mobile CSS px, desktop CSS px]
const IMAGES = [
  ["/assets/applewoods-logo.png", 260, 426],
  ["/assets/security-built-in-camera.jpg", 410, 1512],
  ["/assets/beauty-built-in-house-closeup.jpg", 313, 396],
  ["/assets/technology-built-in-sign.jpg", 390, 1440],
  ["/assets/luxury-built-in-clubhouse-aerial.jpg", 396, 396],
  ["/assets/awclubpool.png", 396, 396],
  ["/assets/attainability-aw.jpg", 396, 396],
  ["/assets/ecology.jpg", 396, 396],
  ["/assets/beautyaw.png", 410, 1512],
  ["/assets/aw-pool-slide.jpg", 410, 1512],
  ["/assets/life-clubhouse.jpg", 358, 578],
  ["/assets/life-gym.jpg", 358, 578],
  ["/assets/life-outdoor-spaces.jpg", 358, 578],
  ["/assets/life-event-center.jpg", 358, 578],
  ["/assets/life-maintained-surroundings.jpg", 358, 578],
  ["/assets/lot-classic.jpg", 298, 324],
  ["/assets/aw-water-walk.jpg", 298, 324],
  ["/assets/lot-corner.jpg", 298, 324],
  ["/assets/location-map-brownsville.png", 356, 638],
  ["/assets/location-map-brownsville-flat.png", 356, 638],
  ["/assets/life-outdoor-youth-teams.png", 360, 640],
  ["/assets/value-stack-actual-plan.png", 358, 600],
  ["/assets/entrance-fountain-night.jpg", 390, 1440],
];

fs.mkdirSync(OUT_DIR, { recursive: true });
const manifest = {};
for (const [src, mobile, desktop] of IMAGES) {
  const file = path.join(ROOT, "public", src);
  if (!fs.existsSync(file)) { console.warn("missing", src); continue; }
  const meta = await sharp(file).metadata();
  const base = path.basename(src).replace(/\.[a-z]+$/i, "");
  const want = [...new Set([mobile * 2, desktop * 2].map((w) => Math.min(Math.ceil(w), meta.width)))].sort((a, b) => a - b);
  // Drop a variant that is within 15% of the next one up.
  const widths = want.filter((w, i) => i === want.length - 1 || want[i + 1] / w > 1.15);
  const variants = [];
  for (const w of widths) {
    const out = `${base}-${w}.webp`;
    const info = await sharp(file).resize({ width: w, withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toFile(path.join(OUT_DIR, out));
    variants.push({ url: `/assets/opt/${out}`, width: info.width, height: info.height });
  }
  const largest = variants[variants.length - 1];
  manifest[src] = {
    src: largest.url,
    srcSet: variants.length > 1 ? variants.map((v) => `${v.url} ${v.width}w`).join(", ") : undefined,
    sizes: variants.length > 1 ? `(max-width: 760px) ${mobile}px, ${desktop}px` : undefined,
    width: largest.width,
    height: largest.height,
  };
  const before = fs.statSync(file).size;
  const after = variants.reduce((s, v) => s + fs.statSync(path.join(ROOT, "public", v.url)).size, 0);
  console.log(`${src.padEnd(48)} ${(before / 1024).toFixed(0).padStart(5)}K → ${variants.map((v) => v.width).join("/")}w ${(after / 1024).toFixed(0)}K total`);
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log("manifest:", Object.keys(manifest).length, "images");
