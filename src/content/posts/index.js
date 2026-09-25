// Every post module in this folder, newest first. Post files follow SCHEMA.md.
const modules = import.meta.glob("./*.js", { eager: true });

export const POSTS = Object.entries(modules)
  .filter(([file]) => !file.endsWith("/index.js"))
  .map(([, mod]) => mod.default)
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished) || a.id.localeCompare(b.id));

export const postBySlug = (lang, slug) => POSTS.find((p) => p[lang].slug === slug) || null;

export const CATEGORIES = {
  buying: { en: "Buying", es: "Compra" },
  building: { en: "Building", es: "Construcción" },
  dues: { en: "Dues", es: "Cuotas" },
  community: { en: "Community", es: "Comunidad" },
  brownsville: { en: "Brownsville", es: "Brownsville" },
};
