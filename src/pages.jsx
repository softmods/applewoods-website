import React, { useState } from "react";
import { V2Nav, Footer, Contact } from "./App";
import Lightbox from "./components/Lightbox";
import { useContent, useLang } from "./content";
import { POSTS, postBySlug, CATEGORIES } from "./content/posts/index.js";
import LOTS from "./content/lots.js";
import { imgProps } from "./img.js";
import { pathFor } from "./lang";

// Pages Softmods writes (lots page, blog). Content comes from src/content/lots.js
// and src/content/posts/*.js (format in posts/SCHEMA.md); the header, footer and
// contact form are the home page's own components.

const UI = {
  en: {
    blogTitle: "Apple Woods blog",
    blogIntro: "Straight answers for people buying a lot and building a home in Brownsville, Texas.",
    all: "All",
    filterLabel: "Filter posts by category",
    readPost: "Read the post",
    faq: "Frequently asked questions",
    related: "Keep reading",
    breadcrumb: "Breadcrumb",
    home: "Home",
    blog: "Blog",
    lots: "Lots",
    published: "Published",
    updated: "Updated",
    notFoundTitle: "Page not found",
    notFoundBody: "That page does not exist. The home page and the lot list are the best places to start.",
    openMap: "Open the lot map",
    openSheet: "Open the price sheet",
  },
  es: {
    blogTitle: "Blog de Apple Woods",
    blogIntro: "Respuestas claras para quien compra un terreno y quiere construir su casa en Brownsville, Texas.",
    all: "Todos",
    filterLabel: "Filtrar por categoría",
    readPost: "Leer el artículo",
    faq: "Preguntas frecuentes",
    related: "Sigue leyendo",
    breadcrumb: "Ruta de navegación",
    home: "Inicio",
    blog: "Blog",
    lots: "Terrenos",
    published: "Publicado",
    updated: "Actualizado",
    notFoundTitle: "Página no encontrada",
    notFoundBody: "Esa página no existe. La página principal y la lista de terrenos son el mejor lugar para empezar.",
    openMap: "Abrir el mapa de terrenos",
    openSheet: "Abrir la lista de precios",
  },
};

const formatDate = (iso, lang) =>
  new Intl.DateTimeFormat(lang === "es" ? "es-MX" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T12:00:00Z`));

export const slugify = (text) =>
  String(text)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

// Inline markup used in the content files: [text](href) and **bold**.
function Rich({ text }) {
  const out = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*/g;
  let last = 0;
  let m;
  let i = 0;
  const str = String(text ?? "");
  while ((m = re.exec(str))) {
    if (m.index > last) out.push(str.slice(last, m.index));
    if (m[1]) {
      const external = /^https?:/.test(m[2]);
      out.push(
        <a key={i++} href={m[2]} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
          {m[1]}
        </a>
      );
    } else {
      out.push(<strong key={i++}>{m[3]}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < str.length) out.push(str.slice(last));
  return <>{out}</>;
}

function Shell({ children }) {
  return (
    <div className="v2-shell page-shell">
      <V2Nav />
      <main className="v2-page subpage" id="top">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Breadcrumbs({ items }) {
  const { lang } = useLang();
  return (
    <nav className="subpage-crumbs" aria-label={UI[lang].breadcrumb}>
      <ol>
        {items.map((item, i) => (
          <li key={item.label}>
            {i < items.length - 1 ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// A 6,000 sq ft lot drawn to scale: 60 by 100 ft, a 40 by 50 ft (2,000 sq ft)
// home footprint, driveway, front and back yard. 1 ft = 4 units.
function LotFigure() {
  const { lang } = useLang();
  const t =
    lang === "es"
      ? {
          caption: "Un terreno de 6,000 pies cuadrados (557 m²), por ejemplo de 60 por 100 pies, con una casa de 2,000 pies cuadrados de planta. Dibujo a escala; la forma de cada terreno varía.",
          house: "Casa, 2,000 pies²",
          drive: "Entrada",
          front: "Jardín frontal",
          back: "Patio trasero",
          street: "Calle",
          w: "60 pies (18.3 m)",
          d: "100 pies (30.5 m)",
        }
      : {
          caption: "A 6,000 sq ft lot, for example 60 by 100 feet, with a 2,000 sq ft home footprint. Drawn to scale; each lot's shape varies.",
          house: "Home, 2,000 sq ft",
          drive: "Driveway",
          front: "Front yard",
          back: "Backyard",
          street: "Street",
          w: "60 ft",
          d: "100 ft",
        };
  // Lot 240 x 400 units at (60, 30), street at the bottom. House 40 x 50 ft
  // (160 x 200) inside the setbacks: 25 ft front, 5 ft sides, 25 ft rear here.
  return (
    <figure className="post-figure lot-figure">
      <svg viewBox="0 0 400 500" role="img" aria-label={t.caption}>
        <rect x="60" y="30" width="240" height="400" className="lot-land" />
        <rect x="60" y="30" width="240" height="100" className="lot-yard-back" />
        <rect x="120" y="130" width="160" height="200" className="lot-house" />
        <rect x="216" y="330" width="64" height="100" className="lot-drive" />
        <rect x="60" y="430" width="240" height="40" className="lot-street" />
        <text x="200" y="235" className="lot-label lot-label-strong" textAnchor="middle">{t.house}</text>
        <text x="180" y="85" className="lot-label" textAnchor="middle">{t.back}</text>
        <text x="72" y="390" className="lot-label">{t.front}</text>
        <text x="248" y="385" className="lot-label lot-label-small" textAnchor="middle" transform="rotate(-90 248 385)">{t.drive}</text>
        <text x="180" y="456" className="lot-label lot-label-light" textAnchor="middle">{t.street}</text>
        <line x1="60" y1="18" x2="300" y2="18" className="lot-dim" />
        <text x="180" y="12" className="lot-label lot-label-small" textAnchor="middle">{t.w}</text>
        <line x1="322" y1="30" x2="322" y2="430" className="lot-dim" />
        <text x="336" y="230" className="lot-label lot-label-small" textAnchor="middle" transform="rotate(90 336 230)">{t.d}</text>
      </svg>
      <figcaption>{t.caption}</figcaption>
    </figure>
  );
}

// Phase map and price sheet from the home page content, with the same lightboxes.
function PhaseDocs({ phaseKey }) {
  const { lang } = useLang();
  const c = useContent();
  const phase = c.phaseOne.phases.find((p) => p.key === phaseKey || `phase-${p.key}` === phaseKey) ||
    c.phaseOne.phases[phaseKey === "phase-2" ? 1 : 0];
  const [open, setOpen] = useState(null);
  return (
    <div className="lot-docs subpage-docs">
      <button type="button" className="lot-doc" onClick={() => setOpen("map")} aria-label={`${UI[lang].openMap}, ${phase.label}`}>
        <img src={`${phase.map}.png`} alt={phase.mapAlt} width={1530} height={1980} loading="lazy" decoding="async" />
        <span className="lot-doc-hint">{c.phaseOne.masterplanHint}</span>
      </button>
      <button type="button" className="lot-doc" onClick={() => setOpen("sheet")} aria-label={`${UI[lang].openSheet}, ${phase.label}`}>
        <img src={`${phase.priceSheet}-preview.png`} alt={phase.priceSheetAlt} width={1275} height={1650} loading="lazy" decoding="async" />
        <span className="lot-doc-hint">{c.phaseOne.priceSheetHint}</span>
      </button>
      <Lightbox open={open === "map"} onClose={() => setOpen(null)} label={phase.mapAlt}>
        <img src={`${phase.map}@2x.png`} alt={phase.mapAlt} loading="lazy" decoding="async" />
      </Lightbox>
      <Lightbox open={open === "sheet"} onClose={() => setOpen(null)} label={phase.priceSheetAlt}>
        <img src={`${phase.priceSheet}@2x.png`} alt={phase.priceSheetAlt} loading="lazy" decoding="async" />
      </Lightbox>
    </div>
  );
}

function Block({ block }) {
  if (block.p) return <p><Rich text={block.p} /></p>;
  if (block.ul) {
    return (
      <ul>
        {block.ul.map((item, i) => (
          <li key={i}><Rich text={item} /></li>
        ))}
      </ul>
    );
  }
  if (block.ol) {
    return (
      <ol>
        {block.ol.map((item, i) => (
          <li key={i}><Rich text={item} /></li>
        ))}
      </ol>
    );
  }
  if (block.table) {
    return (
      <div className="post-table">
        <table>
          <thead>
            <tr>{block.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j}><Rich text={cell} /></td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.quote) {
    return (
      <blockquote>
        <p><Rich text={block.quote} /></p>
        {block.cite ? <cite>{block.cite}</cite> : null}
      </blockquote>
    );
  }
  if (block.figure === "lot-6000") return <LotFigure />;
  if (block.source) {
    return (
      <p className="post-source">
        <a href={block.href} target="_blank" rel="noopener">{block.source}</a>
      </p>
    );
  }
  if (block.phaseDocs) return <PhaseDocs phaseKey={block.phaseDocs} />;
  if (block.contactForm) return null; // rendered once below the article
  return null;
}

function Sections({ sections }) {
  return sections.map((section) => (
    <section className="post-section" key={section.h2} id={slugify(section.h2)}>
      <h2>{section.h2}</h2>
      {section.blocks.map((block, i) => (
        <Block block={block} key={i} />
      ))}
    </section>
  ));
}

function Faq({ items }) {
  const { lang } = useLang();
  if (!items?.length) return null;
  return (
    <section className="post-section post-faq" id="faq">
      <h2>{UI[lang].faq}</h2>
      {items.map((item) => (
        <div className="post-faq-item" key={item.q}>
          <h3>{item.q}</h3>
          <p><Rich text={item.a} /></p>
        </div>
      ))}
    </section>
  );
}

function Hero({ image, alt }) {
  if (!image) return null;
  return (
    <figure className="subpage-hero">
      <img {...imgProps(image)} alt={alt} fetchpriority="high" decoding="async" />
    </figure>
  );
}

function PostCard({ post }) {
  const { lang } = useLang();
  const p = post[lang];
  const href = pathFor("post", lang, p.slug);
  return (
    <article className="post-card">
      <a href={href} className="post-card-image" tabIndex={-1} aria-hidden="true">
        <img {...imgProps(post.heroImage)} alt="" loading="lazy" decoding="async" />
      </a>
      <p className="post-meta">
        <span>{CATEGORIES[post.category]?.[lang]}</span>
        <time dateTime={post.datePublished}>{formatDate(post.datePublished, lang)}</time>
      </p>
      <h2><a href={href}>{p.h1}</a></h2>
      <p>{p.summary}</p>
    </article>
  );
}

export function BlogIndexPage() {
  const { lang, homePath } = useLang();
  const t = UI[lang];
  const [category, setCategory] = useState("all");
  const used = Object.keys(CATEGORIES).filter((k) => POSTS.some((p) => p.category === k));
  const shown = category === "all" ? POSTS : POSTS.filter((p) => p.category === category);
  return (
    <Shell>
      <div className="subpage-inner">
        <Breadcrumbs items={[{ label: t.home, href: homePath }, { label: t.blog }]} />
        <header className="subpage-header">
          <h1>{t.blogTitle}</h1>
          <p className="subpage-summary">{t.blogIntro}</p>
        </header>
        {used.length > 1 ? (
          <div className="phase-switch blog-filter" role="group" aria-label={t.filterLabel}>
            {["all", ...used].map((key) => (
              <button
                key={key}
                type="button"
                className={key === category ? "is-active" : ""}
                aria-pressed={key === category}
                onClick={() => setCategory(key)}
              >
                {key === "all" ? t.all : CATEGORIES[key][lang]}
              </button>
            ))}
          </div>
        ) : null}
        <div className="post-grid">
          {shown.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </Shell>
  );
}

export function PostPage({ slug }) {
  const { lang, homePath } = useLang();
  const t = UI[lang];
  const post = postBySlug(lang, slug);
  if (!post) return <NotFoundPage />;
  const p = post[lang];
  const others = POSTS.filter((o) => o.id !== post.id).slice(0, 3);
  return (
    <Shell>
      <article className="subpage-inner post">
        <Breadcrumbs
          items={[
            { label: t.home, href: homePath },
            { label: t.blog, href: pathFor("blog", lang) },
            { label: p.h1 },
          ]}
        />
        <header className="subpage-header">
          <p className="post-meta">
            <span>{CATEGORIES[post.category]?.[lang]}</span>
            <time dateTime={post.datePublished}>{formatDate(post.datePublished, lang)}</time>
          </p>
          <h1>{p.h1}</h1>
          <p className="subpage-summary">{p.summary}</p>
        </header>
        <Hero image={post.heroImage} alt={p.heroAlt} />
        <div className="post-body">
          <Sections sections={p.sections} />
          <Faq items={p.faq} />
        </div>
        {others.length ? (
          <nav className="post-related" aria-label={t.related}>
            <h2>{t.related}</h2>
            <div className="post-grid">
              {others.map((o) => (
                <PostCard post={o} key={o.id} />
              ))}
            </div>
          </nav>
        ) : null}
      </article>
    </Shell>
  );
}

export function LotsPage() {
  const { lang, homePath } = useLang();
  const t = UI[lang];
  const p = LOTS[lang];
  const hasForm = p.sections.some((s) => s.blocks.some((b) => b.contactForm));
  return (
    <Shell>
      <article className="subpage-inner lots-page">
        <Breadcrumbs items={[{ label: t.home, href: homePath }, { label: t.lots }]} />
        <header className="subpage-header">
          <h1>{p.h1}</h1>
          <p className="subpage-summary">{p.summary}</p>
        </header>
        <Hero image={LOTS.heroImage || "/assets/hero-desktop.jpg"} alt={p.heroAlt} />
        <div className="post-body">
          <Sections sections={p.sections} />
          <Faq items={p.faq} />
        </div>
      </article>
      {hasForm ? <Contact withFaq={false} /> : null}
    </Shell>
  );
}

export function NotFoundPage() {
  const { lang, homePath } = useLang();
  const t = UI[lang];
  return (
    <Shell>
      <div className="subpage-inner not-found">
        <header className="subpage-header">
          <h1>{t.notFoundTitle}</h1>
          <p className="subpage-summary">{t.notFoundBody}</p>
        </header>
        <p className="lots-page-link">
          <a href={homePath}>{t.home} &rarr;</a> <a href={pathFor("lots", lang)}>{t.lots} &rarr;</a>
        </p>
      </div>
    </Shell>
  );
}
