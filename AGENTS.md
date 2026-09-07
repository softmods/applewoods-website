# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Preview-only Hallow feedback setup and commands are documented in `docs/hallow.md`.
- Language is the URL: `/` English, `/es` Spanish (`src/lang.js`). `npm run build` (`scripts/build.mjs`) prerenders both to `dist/index.html` and `dist/es/index.html` with per-language head tags from `src/seo.js`; the client hydrates (`src/main.jsx`). Anything that touches `document` or `window` during render must be gated with `useMounted` (portals) or moved into an effect, or the build fails / hydration mismatches. `vercel.json` rewrites `/es` to the prerendered file; `vite preview` only serves it at `/es/`.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
