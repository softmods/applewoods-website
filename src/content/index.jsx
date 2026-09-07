import React, { createContext, useContext, useMemo, useEffect } from "react";
import { clientContent } from "./client";
import { smcopyContent } from "./smcopy";
import { DEFAULT_LANG, LANGS, LANG_STORAGE_KEY, pathForLang } from "../lang";

const VERSIONS = { client: clientContent, smcopy: smcopyContent };
const BUILD_DEFAULT = import.meta.env.VITE_DEFAULT_VERSION === "smcopy" ? "smcopy" : "client";

export function resolveVersion() {
  if (typeof window === "undefined") return BUILD_DEFAULT;
  const param = new URLSearchParams(window.location.search).get("v");
  if (param === "client" || param === "smcopy") {
    try { window.localStorage.setItem("aw_copy", param); } catch (e) {}
    return param;
  }
  try {
    const stored = window.localStorage.getItem("aw_copy");
    if (stored === "client" || stored === "smcopy") return stored;
  } catch (e) {}
  return BUILD_DEFAULT;
}

// Resolve { en, es } leaves to the active language; pass everything else through.
// A plain string (not yet translated) returns as-is = English in both languages.
export function localize(node, lang) {
  if (node === null || typeof node !== "object") return node;
  if (Array.isArray(node)) return node.map((n) => localize(n, lang));
  if (typeof node.en === "string") return node[lang] ?? node.en;
  const out = {};
  for (const key of Object.keys(node)) out[key] = localize(node[key], lang);
  return out;
}

export const buildContent = VERSIONS[BUILD_DEFAULT];

const ContentContext = createContext(clientContent);
const LangContext = createContext({ lang: DEFAULT_LANG, hrefFor: pathForLang, rememberLang: () => {} });
export const useContent = () => useContext(ContentContext);
export const useLang = () => useContext(LangContext);

// Language comes from the URL (see src/lang.js), never from state. Switching
// language is a navigation to the other prerendered page. The stored value only
// decides where a returning visitor lands when they open the bare domain.
export function ContentProvider({ lang: langProp, children }) {
  const lang = LANGS.includes(langProp) ? langProp : DEFAULT_LANG;
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const base = VERSIONS[resolveVersion()] ?? clientContent;
  const content = useMemo(() => localize(base, lang), [base, lang]);
  const value = useMemo(
    () => ({
      lang,
      hrefFor: (next) => {
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        const search = typeof window !== "undefined" ? window.location.search : "";
        return pathForLang(next) + search + hash;
      },
      rememberLang: (next) => {
        if (!LANGS.includes(next)) return;
        try { window.localStorage.setItem(LANG_STORAGE_KEY, next); } catch (e) {}
      },
    }),
    [lang]
  );
  return (
    <LangContext.Provider value={value}>
      <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
    </LangContext.Provider>
  );
}
