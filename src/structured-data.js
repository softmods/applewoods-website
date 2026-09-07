import { SITE_URL, urlForLang } from "./lang";

// JSON-LD for the prerendered pages, built from the same content the page
// renders so it can never drift from what visitors read. Every value here is
// either on the page or a public fact (phone, email, Facebook, Brownsville).
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100063724533236";
const LOGO_URL = `${SITE_URL}/assets/applewoods-logo.png`;
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

const plain = (text) =>
  String(text ?? "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\s*\n\s*\n\s*/g, "\n\n")
    .trim();

// "Expected from $85,000" -> 85000; anything without a dollar figure -> null.
const minPriceFrom = (label) => {
  const m = String(label ?? "").match(/\$\s?([\d,]+)/);
  return m ? Number(m[1].replace(/,/g, "")) : null;
};

export function structuredData(content, lang, { priceLabelsEn } = {}) {
  const pageUrl = urlForLang(lang);
  const orgId = `${SITE_URL}/#organization`;
  const placeId = `${SITE_URL}/#place`;
  const siteId = `${SITE_URL}/#website`;
  const inLanguage = lang === "es" ? "es" : "en";
  const address = {
    "@type": "PostalAddress",
    addressLocality: "Brownsville",
    addressRegion: "TX",
    addressCountry: "US",
  };
  const phoneLink = content.contact.direct.links.find((l) => l.icon === "phone");
  const mailLink = content.contact.direct.links.find((l) => l.icon === "mail");
  const telephone = phoneLink ? phoneLink.href.replace(/^tel:/, "") : undefined;
  const email = mailLink ? mailLink.detail : undefined;
  const headline = plain(content.hero.headlineLines.map((l) => l).join(" "));

  const faqItems = content.contact.faq.groups.flatMap((g) => g.items).map((item) => ({
    "@type": "Question",
    name: plain(item.question),
    acceptedAnswer: { "@type": "Answer", text: plain(item.answer) },
  }));

  // Public list prices only. Negotiated prices never appear here or on the page.
  // Product with a nested AggregateOffer (lowPrice = "from" price) is the shape
  // Google's Product snippets accept; a Product nested inside an Offer fails.
  const products = content.phaseOne.lots
    .map((lot, i) => {
      const lowPrice = minPriceFrom(priceLabelsEn?.[i] ?? lot.price);
      if (lowPrice === null) return null;
      return {
        "@type": "Product",
        name: `Apple Woods ${plain(lot.name)}`,
        description: plain(lot.body),
        category: lang === "es" ? "Lote residencial" : "Residential homesite",
        image: OG_IMAGE_URL,
        brand: { "@id": orgId },
        offers: {
          "@type": "AggregateOffer",
          url: `${pageUrl}#phase-one`,
          priceCurrency: "USD",
          lowPrice,
          availability: "https://schema.org/InStock",
          seller: { "@id": orgId },
        },
      };
    })
    .filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Apple Woods",
        url: `${SITE_URL}/`,
        logo: LOGO_URL,
        image: OG_IMAGE_URL,
        telephone,
        email,
        address,
        areaServed: { "@type": "City", name: "Brownsville", address },
        sameAs: [FACEBOOK_URL],
        parentOrganization: { "@type": "Organization", name: "Park Street" },
      },
      {
        "@type": "Place",
        "@id": placeId,
        additionalType: "https://schema.org/Residence",
        name: "Apple Woods",
        description: plain(content.hero.subhead),
        url: `${SITE_URL}/`,
        image: OG_IMAGE_URL,
        address,
        telephone,
        sameAs: [FACEBOOK_URL],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        name: "Apple Woods",
        url: `${SITE_URL}/`,
        inLanguage: ["en", "es"],
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: headline,
        inLanguage,
        isPartOf: { "@id": siteId },
        about: { "@id": placeId },
        primaryImageOfPage: OG_IMAGE_URL,
      },
      ...products,
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: `${pageUrl}#faq`,
        inLanguage,
        isPartOf: { "@id": pageUrl },
        mainEntity: faqItems,
      },
    ],
  };
}
