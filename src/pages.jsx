import React, { useState } from "react";
import { V2Nav, Footer, Contact } from "./App";
import Lightbox from "./components/Lightbox";
import { useContent, useLang } from "./content";
import { POSTS, postBySlug, CATEGORIES } from "./content/posts/index.js";
import { FACTS, FACTS_NOTE } from "./content/facts.js";
import LOTS from "./content/lots.js";
import { imgProps, heroImgProps } from "./img.js";
import { pathFor } from "./lang";

// Pages Softmods writes (lots page, blog). Content comes from src/content/lots.js
// and src/content/posts/*.js (format in posts/SCHEMA.md); the header, footer and
// contact form are the home page's own components.

const UI = {
  en: {
    blogTitle: "Apple Woods blog",
    blogIntro: "Guides for buying a lot in Brownsville, and ideas for living well once you are here.",
    all: "All",
    filterLabel: "Filter posts by category",
    readPost: "Read the post",
    faq: "Frequently asked questions",
    related: "Keep reading",
    breadcrumb: "Breadcrumb",
    home: "Home",
    blog: "Journal",
    lots: "Lots",
    published: "Published",
    updated: "Updated",
    notFoundTitle: "Page not found",
    notFoundBody: "That page does not exist. The home page and the lot list are the best places to start.",
    openMap: "Open the lot map",
    openSheet: "Open the price sheet",
    journal: "Apple Woods",
    indexTitle: "Smart Living Journal",
    lanes: { story: "Smart Living", guide: "Guide" },
    allLanes: "Everything",
    factsTitle: "At Apple Woods",
    signupEyebrow: "Smart Living Journal",
    signupTitle: "One email a month, worth opening",
    signupBody: "A new story from the Journal, a dated construction update with photos, and which lots are still available.",
    signupLabel: "Email address",
    signupButton: "Subscribe",
    signupPreview: "Preview only: signups are not connected yet.",
    signupFine: "Monthly. Unsubscribe anytime.",
    minRead: (n) => `${n} min read`,
    more: "Keep reading",
    ctaTitle: "Ready to pick your lot?",
    ctaBody: "Phase 1 homesites start at $85,000. Ask for the current lot list and we will send what is still available.",
    ctaButton: "Ask for the lot list",
    viewLots: "See lots and prices",
  },
  es: {
    blogTitle: "Blog de Apple Woods",
    blogIntro: "Guías para comprar tu terreno en Brownsville e ideas para vivir mejor una vez que estés aquí.",
    all: "Todos",
    filterLabel: "Filtrar por categoría",
    readPost: "Leer el artículo",
    faq: "Preguntas frecuentes",
    related: "Sigue leyendo",
    breadcrumb: "Ruta de navegación",
    home: "Inicio",
    blog: "Journal",
    lots: "Terrenos",
    published: "Publicado",
    updated: "Actualizado",
    notFoundTitle: "Página no encontrada",
    notFoundBody: "Esa página no existe. La página principal y la lista de terrenos son el mejor lugar para empezar.",
    openMap: "Abrir el mapa de terrenos",
    openSheet: "Abrir la lista de precios",
    journal: "Apple Woods",
    indexTitle: "Smart Living Journal",
    lanes: { story: "Smart Living", guide: "Guía" },
    allLanes: "Todo",
    factsTitle: "En Apple Woods",
    signupEyebrow: "Smart Living Journal",
    signupTitle: "Un correo al mes que sí vale la pena abrir",
    signupBody: "Una historia nueva del Journal, un avance de obra con fecha y fotos, y los terrenos que siguen disponibles.",
    signupLabel: "Correo electrónico",
    signupButton: "Suscribirme",
    signupPreview: "Vista previa: las suscripciones todavía no están conectadas.",
    signupFine: "Una vez al mes. Cancela cuando quieras.",
    minRead: (n) => `${n} min de lectura`,
    more: "Sigue leyendo",
    ctaTitle: "¿Listo para elegir tu terreno?",
    ctaBody: "Los terrenos de la Fase 1 empiezan en $85,000. Pide la lista actual y te mandamos lo que sigue disponible.",
    ctaButton: "Pide la lista de terrenos",
    viewLots: "Ver terrenos y precios",
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
  if (block.contactForm) return null; // the page renders the form once, below the article
  return null;
}

function Sections({ sections }) {
  return sections.map((section) => (
    <section className="article-section" key={section.h2} id={slugify(section.h2)}>
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
    <section className="article-section article-faq" id="faq">
      <h2>{UI[lang].faq}</h2>
      <dl>
        {items.map((item) => (
          <div className="article-faq-item" key={item.q}>
            <dt>{item.q}</dt>
            <dd><Rich text={item.a} /></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// Word count of everything a reader reads, at about 220 words a minute.
const readMinutes = (p) => {
  const words = [p.summary, ...p.sections.flatMap((s) => [s.h2, ...s.blocks.flatMap((b) => [b.p, b.quote, ...(b.ul || []), ...(b.ol || [])])]), ...(p.faq || []).flatMap((f) => [f.q, f.a])]
    .filter(Boolean)
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};

function Pills({ post }) {
  const { lang } = useLang();
  return (
    <ul className="pills" aria-label={lang === "es" ? "Detalles" : "Details"}>
      <li className={"pill-lane is-" + (post.lane || "guide")}>{UI[lang].lanes[post.lane || "guide"]}</li>
      <li>{CATEGORIES[post.category]?.[lang]}</li>
      <li>{UI[lang].minRead(readMinutes(post[lang]))}</li>
    </ul>
  );
}

// "At Apple Woods": the post's facts from src/content/facts.js, so the body
// never has to describe amenities itself.
function FactBox({ keys }) {
  const { lang } = useLang();
  const lines = (keys || []).map((k) => FACTS[k]?.[lang]).filter(Boolean);
  if (!lines.length) return null;
  return (
    <aside className="fact-box" aria-labelledby="fact-box-title">
      <h2 id="fact-box-title">{UI[lang].factsTitle}</h2>
      <ul>
        {lines.map((line) => (
          <li key={line}><Rich text={line} /></li>
        ))}
      </ul>
      <p className="fact-box-note">{FACTS_NOTE[lang]}</p>
      <a className="fact-box-link" href={pathFor("lots", lang)}>{UI[lang].viewLots} &rarr;</a>
    </aside>
  );
}

// Newsletter signup. No sending tool exists yet (2026-09-25), so the form is
// presentational: it confirms nothing and tells the visitor it is a preview.
// Wire it to a list before this ships to www.
function JournalSignup() {
  const { lang } = useLang();
  const t = UI[lang];
  const [note, setNote] = useState("");
  return (
    <section className="journal-signup" aria-labelledby="journal-signup-title">
      <div>
        <p className="journal-eyebrow">{t.signupEyebrow}</p>
        <h2 id="journal-signup-title">{t.signupTitle}</h2>
        <p>{t.signupBody}</p>
      </div>
      <form
        className="journal-signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          setNote(t.signupPreview);
        }}
      >
        <label className="sr-only" htmlFor="journal-signup-email">{t.signupLabel}</label>
        <input id="journal-signup-email" type="email" name="email" autoComplete="email" placeholder={t.signupLabel} required />
        <button type="submit">{t.signupButton}</button>
        <p className="journal-signup-fine" aria-live="polite">{note || t.signupFine}</p>
      </form>
    </section>
  );
}

function CoverImage({ image, alt, sizes, className, priority }) {
  return (
    <figure className={className}>
      <img
        {...heroImgProps(image, sizes)}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : undefined}
        decoding="async"
      />
    </figure>
  );
}

// Card for the index grid and "Keep reading". The title link stretches over
// the whole card, so one tab stop and one link per post.
function PostCard({ post, featured }) {
  const { lang } = useLang();
  const p = post[lang];
  const href = pathFor("post", lang, p.slug);
  return (
    <article className={"post-card" + (featured ? " is-featured" : "")}>
      <CoverImage
        image={post.heroImage}
        alt=""
        className="post-card-image"
        sizes={featured ? "(max-width: 760px) calc(100vw - 56px), 600px" : "(max-width: 760px) calc(100vw - 56px), 360px"}
      />
      <div className="post-card-body">
        <time dateTime={post.datePublished}>{formatDate(post.datePublished, lang)}</time>
        <h2 className="post-card-title">
          <a href={href}>{p.h1}</a>
        </h2>
        <p>{featured ? p.summary : p.description}</p>
        <Pills post={post} />
      </div>
    </article>
  );
}

function CtaBand() {
  const { lang, homePath } = useLang();
  const t = UI[lang];
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="cta-band-media">
        <img {...heroImgProps("/assets/hero-desktop.jpg", "(max-width: 1280px) 100vw, 1280px")} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="cta-band-copy">
        <h2 id="cta-band-title">{t.ctaTitle}</h2>
        <p>{t.ctaBody}</p>
        <div className="cta-band-actions">
          <a className="button-solid" href={`${homePath === "/" ? "/" : homePath}#contact`}>{t.ctaButton}</a>
          <a className="button-ghost" href={pathFor("lots", lang)}>{t.viewLots}</a>
        </div>
      </div>
    </section>
  );
}

export function BlogIndexPage() {
  const { lang } = useLang();
  const t = UI[lang];
  const [lane, setLane] = useState("all");
  const lanes = ["story", "guide"].filter((k) => POSTS.some((p) => (p.lane || "guide") === k));
  const shown = lane === "all" ? POSTS : POSTS.filter((p) => (p.lane || "guide") === lane);
  const featured = shown.find((p) => p.featured) || shown[0];
  const first = featured;
  const rest = shown.filter((p) => p !== featured);
  return (
    <Shell>
      <div className="journal">
        <header className="journal-header">
          <p className="journal-eyebrow">{t.journal}</p>
          <h1>{t.indexTitle}</h1>
          <p>{t.blogIntro}</p>
        </header>
        {lanes.length > 1 ? (
          <div className="journal-filter" role="group" aria-label={t.filterLabel}>
            {["all", ...lanes].map((key) => (
              <button key={key} type="button" aria-pressed={key === lane} onClick={() => setLane(key)}>
                {key === "all" ? t.allLanes : t.lanes[key]}
              </button>
            ))}
          </div>
        ) : null}
        {first ? <PostCard post={first} featured /> : null}
        {rest.length ? (
          <div className="post-grid">
            {rest.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        ) : null}
      </div>
      <JournalSignup />
      <CtaBand />
    </Shell>
  );
}

function ArticleHeader({ kicker, kickerHref, date, title, summary, pills }) {
  return (
    <header className="article-header">
      <p className="article-kicker">
        <a href={kickerHref}>{kicker}</a>
        {date ? (
          <>
            <span aria-hidden="true">·</span>
            {date}
          </>
        ) : null}
      </p>
      <h1>{title}</h1>
      {pills}
      <p className="article-lead">{summary}</p>
    </header>
  );
}

export function PostPage({ slug }) {
  const { lang } = useLang();
  const t = UI[lang];
  const post = postBySlug(lang, slug);
  if (!post) return <NotFoundPage />;
  const p = post[lang];
  // Same lane first, so a story leads to stories and a guide to guides.
  const others = POSTS.filter((o) => o.id !== post.id)
    .sort((a, b) => Number(b.lane === post.lane) - Number(a.lane === post.lane))
    .slice(0, 3);
  return (
    <Shell>
      <article className="article">
        <CoverImage image={post.heroImage} alt={p.heroAlt} className="article-cover" sizes="(max-width: 1168px) calc(100vw - 32px), 1120px" priority />
        <div className="article-column">
          <ArticleHeader
            kicker={t.blog}
            kickerHref={pathFor("blog", lang)}
            date={<time dateTime={post.datePublished}>{formatDate(post.datePublished, lang)}</time>}
            title={p.h1}
            summary={p.summary}
            pills={<Pills post={post} />}
          />
          <div className="article-body">
            <Sections sections={p.sections} />
            <FactBox keys={post.facts} />
            <Faq items={p.faq} />
          </div>
        </div>
      </article>
      <JournalSignup />
      {others.length ? (
        <nav className="read-more" aria-labelledby="read-more-title">
          <h2 id="read-more-title">{t.more}</h2>
          <div className="post-grid">
            {others.map((o) => (
              <PostCard post={o} key={o.id} />
            ))}
          </div>
        </nav>
      ) : null}
      <CtaBand />
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
      <article className="article">
        <CoverImage image={LOTS.heroImage || "/assets/hero-desktop.jpg"} alt={p.heroAlt} className="article-cover" sizes="(max-width: 1168px) calc(100vw - 32px), 1120px" priority />
        <div className="article-column">
          <ArticleHeader kicker={t.home} kickerHref={homePath} title={p.h1} summary={p.summary} />
          <div className="article-body">
            <Sections sections={p.sections} />
            <Faq items={p.faq} />
          </div>
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
      <div className="journal not-found">
        <header className="journal-header">
          <p className="journal-eyebrow">404</p>
          <h1>{t.notFoundTitle}</h1>
          <p>{t.notFoundBody}</p>
          <div className="cta-band-actions">
            <a className="button-solid" href={homePath}>{t.home}</a>
            <a className="button-ghost" href={pathFor("lots", lang)}>{t.lots}</a>
          </div>
        </header>
      </div>
    </Shell>
  );
}
