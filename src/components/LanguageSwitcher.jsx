import React, { useEffect, useRef, useState } from "react";
import { GlobeIcon } from "@phosphor-icons/react";
import { useLang } from "../content";
import { LANGS } from "../lang";

const LANG_LABELS = { en: "English", es: "Español" };

// Each language is its own URL, so the menu items are real links. Crawlers
// follow them to the other language; the click also stores the choice so the
// bare domain opens in that language next time (see the head script in index.html).
export default function LanguageSwitcher() {
  const { lang, hrefFor, rememberLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="v2-lang" ref={ref}>
      <button
        type="button"
        className="v2-lang-button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon size={20} weight="regular" aria-hidden="true" />
      </button>
      {open ? (
        <div className="v2-lang-menu" role="menu">
          {LANGS.map((code) => (
            <a
              key={code}
              href={hrefFor(code)}
              hrefLang={code}
              lang={code}
              role="menuitemradio"
              aria-checked={lang === code}
              className={lang === code ? "is-active" : ""}
              onClick={(e) => {
                rememberLang(code);
                setOpen(false);
                if (code === lang) e.preventDefault();
              }}
            >
              {LANG_LABELS[code]}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
