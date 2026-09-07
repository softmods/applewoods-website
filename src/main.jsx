import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { langFromPath } from "./lang";

// The HTML for this URL was prerendered at build time (scripts/build.mjs), so
// the client hydrates the existing markup instead of rendering from empty.
const container = document.getElementById("root");
const lang = langFromPath(window.location.pathname);
const app = <App lang={lang} />;

if (import.meta.env.VITE_HALLOW === "1") {
  // Preview-only feedback overlay wraps the tree, so this path renders fresh.
  import("../vendor/hallow/overlay.js")
    .then(({ HallowProvider }) => {
      container.innerHTML = "";
      createRoot(container).render(
        <HallowProvider
          endpoint={import.meta.env.VITE_HALLOW_ENDPOINT}
          projectKey={import.meta.env.VITE_HALLOW_PROJECT_KEY}
        >
          {app}
        </HallowProvider>
      );
    })
    .catch((error) => {
      console.error("Hallow overlay failed to load; rendering without it.", error);
      container.innerHTML = "";
      createRoot(container).render(app);
    });
} else if (container.firstElementChild && document.documentElement.lang === lang) {
  hydrateRoot(container, app);
} else {
  // Dev server ships an empty #root. A language mismatch means the host served
  // the wrong prerendered file for this URL; render fresh rather than hydrate
  // Spanish over English markup.
  container.innerHTML = "";
  createRoot(container).render(app);
}
