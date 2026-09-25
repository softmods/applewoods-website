// Links to the pages Softmods owns (lots page, blog). Labels are ours, not
// client copy, so they live here instead of the content files.
import { pathFor } from "./lang";

const LABELS = {
  lots: { en: "Lots", es: "Terrenos" },
  blog: { en: "Blog", es: "Blog" },
};

export const pageLinks = (lang) =>
  ["lots", "blog"].map((page) => ({ page, href: pathFor(page, lang), label: LABELS[page][lang] }));

// "#contact" on the home page stays an in-page anchor; elsewhere it goes
// through the home page of the same language ("/es#contact").
export const sectionHref = (href, { page, homePath }) =>
  page === "home" || !href.startsWith("#") ? href : `${homePath === "/" ? "/" : homePath}${href}`;
