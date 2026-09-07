import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useContent } from "../content";
import { useMounted } from "../useMounted";

export default function MobileMenu() {
  const c = useContent();
  const mounted = useMounted();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      triggerRef.current?.focus();
    };
  }, [open]);

  const go = (href) => {
    setOpen(false);
    window.setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 380);
  };

  return (
    <>
      <button
        type="button"
        className="v2-hamburger"
        aria-label="Open menu"
        aria-expanded={open}
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        <ListIcon size={20} weight="regular" aria-hidden="true" />
      </button>
      {mounted ? createPortal(
        <div
          className={open ? "v2-mobile-panel is-open" : "v2-mobile-panel"}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          aria-hidden={!open}
          inert={!open ? "" : undefined}
        >
          <div className="v2-mobile-top">
            <button
              type="button"
              className="v2-mobile-close"
              aria-label="Close menu"
              ref={closeRef}
              onClick={() => setOpen(false)}
            >
              <XIcon size={24} weight="bold" aria-hidden="true" />
            </button>
          </div>
          <nav className="v2-mobile-links" aria-label="Sections">
            {c.nav.links.map((link) => (
              <button type="button" key={link.href} onClick={() => go(link.href)}>
                {link.label}
              </button>
            ))}
            <button type="button" className="v2-mobile-contact" onClick={() => go("#contact")}>
              {c.nav.cta}
            </button>
            <a
              className="v2-mobile-portal"
              href={c.nav.portal.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              {c.nav.portal.label}
            </a>
          </nav>
        </div>,
        document.body
      ) : null}
    </>
  );
}
