# Post and page content format

Blog posts live in `src/content/posts/<id>-<en-slug>.js` as plain ES modules (no JSX, so
`scripts/build.mjs` can import them in Node). `src/content/posts/index.js` lists them.
The lots page content lives in `src/content/lots.js` in the same shape.

```js
export default {
  id: "b2",                         // plan slot id
  category: "buying",               // buying | building | dues | community | brownsville
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  heroImage: "/assets/hero-desktop.jpg", // an existing asset, see list below
  en: {
    slug: "best-place-to-buy-a-lot-brownsville",
    title: "Where Is the Best Place to Buy a Lot in Brownsville?", // <title>, 60 chars max, no brand (build appends " | Apple Woods" only if it fits)
    h1: "Where is the best place to buy a lot in Brownsville?",
    description: "...",            // meta description, 150 chars max, carries the answer's number when there is one
    summary: "...",                // two lines under the H1, the direct answer
    heroAlt: "Rendering of ...",   // topic words in it; every image is a rendering, amenities are planned
    sections: [
      {
        h2: "A question or claim a buyer would search",
        blocks: [
          { p: "Paragraph. Inline links as [text](/lots) and bold as **text**." },
          { ul: ["item", "item"] },
          { table: { head: ["Lot type", "List price"], rows: [["Standard", "$85,000"]] } },
          { figure: "lot-6000" },  // named figures the app draws (only "lot-6000" exists)
          { source: "FEMA Flood Map Service Center", href: "https://msc.fema.gov/portal/home" },
        ],
      },
    ],
    faq: [{ q: "Question?", a: "Answer. Plain text, links allowed." }], // 3 to 5
  },
  es: { /* same keys, Spanish slug, written for an RGV or Mexican buyer */ },
};
```

Internal link targets that exist:

- `/lots`, `/es/terrenos` (lots page)
- `/blog`, `/es/blog`, `/blog/<en-slug>`, `/es/blog/<es-slug>`
- Home FAQ groups: `/#faq-general`, `/#faq-cost`, `/#faq-size`, `/#faq-shared-standards`, `/#faq-life` (Spanish: `/es#faq-...`, same ids)
- Home sections: `/#phase-one`, `/#location`, `/#contact` (and `/es#...`)

Hero image options (all renderings): `/assets/hero-desktop.jpg` (gated entrance),
`/assets/life-maintained-surroundings.jpg` (tree-lined sidewalk), `/assets/lot-classic.jpg`
(one-story home), `/assets/lot-corner.jpg` (two-story home), `/assets/aw-water-walk.jpg`
(Water Walk), `/assets/beautyaw.png` (modern home on a street), `/assets/life-clubhouse.jpg`,
`/assets/security-built-in-camera.jpg`, `/assets/life-outdoor-spaces.jpg` (basketball court).
