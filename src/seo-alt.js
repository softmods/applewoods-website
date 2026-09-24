// Image alt text, keyed by the image path the content files use. Alt text is
// ours (not client copy), so it lives here and the content files stay verbatim.
// Every image is a rendering and every amenity is planned, not built (truth
// ledger), so each alt says "rendering" and "planned". Images not listed keep
// the alt the content file gives them.
import { useLang } from "./content";

const ALT = {
  "/assets/hero-desktop.jpg": {
    en: "Rendering of the planned gated entrance at Apple Woods, a smart community with lots for sale in Brownsville, TX",
    es: "Render de la entrada planeada del fraccionamiento privado Apple Woods, terrenos en venta en Brownsville, TX",
  },
  "/assets/security-built-in-camera.jpg": {
    en: "Rendering of a planned smart security camera pole at the Apple Woods gated community in Brownsville, TX",
    es: "Render de un poste con cámara de seguridad planeado en el fraccionamiento privado Apple Woods, Brownsville, TX",
  },
  "/assets/beautyaw.png": {
    en: "Rendering of a modern home on a landscaped Apple Woods street in Brownsville, TX",
    es: "Render de una casa moderna en una calle con paisajismo de Apple Woods, Brownsville, TX",
  },
  "/assets/technology-built-in-sign.jpg": {
    en: "Rendering of a planned smart crosswalk sign on an Apple Woods street in Brownsville, TX",
    es: "Render de un señalamiento inteligente de cruce peatonal planeado en Apple Woods, Brownsville, TX",
  },
  "/assets/awclubpool.png": {
    en: "Rendering of the planned clubhouse pool with water slide at Apple Woods in Brownsville, TX",
    es: "Render de la alberca planeada del club con tobogán en Apple Woods, Brownsville, TX",
  },
  "/assets/luxury-built-in-clubhouse-aerial.jpg": {
    en: "Aerial rendering of the planned Apple Woods clubhouse and pool in Brownsville, TX",
    es: "Render aéreo del club y la alberca planeados de Apple Woods en Brownsville, TX",
  },
  "/assets/value-stack-actual-plan.png": {
    en: "Aerial rendering of the planned Apple Woods clubhouse at night",
    es: "Render aéreo nocturno del club planeado de Apple Woods",
  },
  "/assets/aw-pool-slide.jpg": {
    en: "Rendering of the planned resort pool at the Apple Woods gated community in Brownsville, TX",
    es: "Render de la alberca planeada del fraccionamiento privado Apple Woods en Brownsville, TX",
  },
  "/assets/life-clubhouse.jpg": {
    en: "Rendering of the planned Apple Woods clubhouse in Brownsville, TX",
    es: "Render del club planeado de Apple Woods en Brownsville, TX",
  },
  "/assets/life-gym.jpg": {
    en: "Rendering of the planned Apple Woods fitness center with treadmills and a pool view",
    es: "Render del gimnasio planeado de Apple Woods con caminadoras y vista a la alberca",
  },
  "/assets/life-outdoor-spaces.jpg": {
    en: "Rendering of the planned basketball court and outdoor spaces at Apple Woods in Brownsville, TX",
    es: "Render de la cancha de básquetbol y las áreas al aire libre planeadas en Apple Woods, Brownsville, TX",
  },
  "/assets/life-event-center.jpg": {
    en: "Rendering of the planned Apple Woods event center at dusk",
    es: "Render del salón de eventos planeado de Apple Woods al atardecer",
  },
  "/assets/life-maintained-surroundings.jpg": {
    en: "Rendering of a tree-lined, maintained sidewalk inside the Apple Woods gated community",
    es: "Render de una banqueta arbolada y con mantenimiento dentro del fraccionamiento privado Apple Woods",
  },
  "/assets/lot-classic.jpg": {
    en: "Rendering of a home on a Classic homesite at Apple Woods, lots for sale in Brownsville, TX",
    es: "Render de una casa en un terreno clásico de Apple Woods, terrenos en venta en Brownsville, TX",
  },
  "/assets/aw-water-walk.jpg": {
    en: "Rendering of the planned Water Walk beside the Premier homesites at Apple Woods in Brownsville, TX",
    es: "Render del Water Walk planeado junto a los terrenos Premier de Apple Woods en Brownsville, TX",
  },
  "/assets/lot-corner.jpg": {
    en: "Rendering of a two-story home on a Corner homesite at Apple Woods in Brownsville, TX",
    es: "Render de una casa de dos pisos en un terreno en esquina de Apple Woods, Brownsville, TX",
  },
  "/assets/phase-1-aw-sold-map": {
    en: "Apple Woods Phase 1 lot map showing available and sold lots in Brownsville, TX",
    es: "Mapa de terrenos de la Fase 1 de Apple Woods con terrenos disponibles y vendidos en Brownsville, TX",
  },
  "/assets/phase-2-aw-sold-map": {
    en: "Apple Woods Phase 2 lot map showing available and sold lots in Brownsville, TX",
    es: "Mapa de terrenos de la Fase 2 de Apple Woods con terrenos disponibles y vendidos en Brownsville, TX",
  },
  "/assets/apple-woods-price-sheet-v3": {
    en: "Apple Woods Phase 1 price sheet for lots for sale in Brownsville, TX, from $85,000",
    es: "Lista de precios de la Fase 1 de Apple Woods, terrenos en venta en Brownsville, TX desde $85,000",
  },
  "/assets/apple-woods-price-sheet-phase-2": {
    en: "Apple Woods Phase 2 price sheet for lots for sale in Brownsville, TX",
    es: "Lista de precios de la Fase 2 de Apple Woods, terrenos en venta en Brownsville, TX",
  },
  "/assets/location-map-brownsville.png": {
    en: "Map of Apple Woods in Brownsville, TX, with nearby schools, restaurants, shopping and golf courses",
    es: "Mapa de Apple Woods en Brownsville, TX, con escuelas, restaurantes, tiendas y campos de golf cercanos",
  },
  "/assets/location-map-brownsville-flat.png": {
    en: "Map of Apple Woods in Brownsville, TX",
    es: "Mapa de Apple Woods en Brownsville, TX",
  },
};

// altFor(src, fallback): our alt for that image in the page language, else the fallback.
export function useAlt() {
  const { lang } = useLang();
  return (src, fallback) => ALT[src]?.[lang] ?? fallback;
}
