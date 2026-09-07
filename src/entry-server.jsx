import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { buildContent, localize } from "./content";
import { structuredData } from "./structured-data";

export function render(lang) {
  return renderToString(<App lang={lang} />);
}

// JSON-LD for the page in this language. Prices are parsed from the English
// labels so both pages carry the same numbers.
export function jsonLd(lang) {
  const localized = localize(buildContent, lang);
  const priceLabelsEn = buildContent.phaseOne.lots.map((lot) =>
    typeof lot.price === "string" ? lot.price : lot.price.en
  );
  return structuredData(localized, lang, { priceLabelsEn });
}
