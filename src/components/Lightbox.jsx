import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { XIcon } from "@phosphor-icons/react";
import "./Lightbox.css";

export default function Lightbox({ open, onClose, label, children, plain, toolbar }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {toolbar ? <div className="lightbox-toolbar">{toolbar}</div> : null}
      <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        <XIcon size={22} weight="bold" aria-hidden="true" />
      </button>
      {plain ? (
        <div className="lightbox-stage lightbox-stage--plain">{children}</div>
      ) : (
        <TransformWrapper
          doubleClick={{ mode: "toggle", step: 1.4 }}
          wheel={{ step: 0.12 }}
          pinch={{ step: 6 }}
          minScale={1}
          maxScale={6}
          centerOnInit
        >
          <TransformComponent wrapperClass="lightbox-stage" contentClass="lightbox-content">
            {children}
          </TransformComponent>
        </TransformWrapper>
      )}
    </div>,
    document.body
  );
}
