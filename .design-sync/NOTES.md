# design-sync notes — F&S corporate-site

## Shape: off-script "design-language" (tokens + styles + guidelines)

This repo is a **hand-written static site**, not a compiled component library:
- No `package.json`, no build, no `dist/`, no Storybook, no React/web-component library.
- One `index.html`, one `css/style.css`, one vanilla `js/main.js`.

So the converter (`package-build.mjs` / `resync.mjs`) does not apply — there is nothing
to esbuild-bundle and no `window.<globalName>.*` components to export. The user chose
(2026-07-07) to sync the **design language only**: real CSS tokens, fonts, and the
ruled-line / editorial DNA, with **no fabricated components** (skill core principle:
never reimplement).

## Bundle layout (`ds-bundle/`, built by hand, not committed — see .gitignore)

- `styles.css` — entry; `@import`s Google Fonts, then `tokens/tokens.css`, then the
  editorial base/utility classes copied **verbatim** from `css/style.css`.
- `tokens/tokens.css` — the real `:root` block. `tokens/tokens.json` — reference catalog.
- `guidelines/design-dna.md` — the five DNA rules + class vocabulary + don'ts.
- `README.md` — conventions header (`.design-sync/conventions.md`) + contents.
- `_ds_needs_recompile` — app recompile sentinel.

## Font strategy: CDN `@import` (`fontStrategy: cdn-import`)

The site loads Shippori Mincho B1 / Zen Kaku Gothic New / IBM Plex Mono from Google Fonts.
Kept as an `@import url(...)` at the top of `styles.css` (mirrors the real site). Japanese
web fonts are large and subset across many files, so self-hosting was deliberately skipped
for this lightweight sync. Token stacks fall back to Hiragino / ui-monospace if the design
environment blocks external font hosts. **If fonts render wrong in Claude Design**, switch
to self-hosting: download the woff2 subsets into `ds-bundle/fonts/`, add `@font-face` rules,
and drop the Google `@import`.

## Markup-only class

`.footer-coords` appears in the site markup but has no dedicated CSS rule (it inherits
`.footer-bottom` + `.mono`). Kept out of the documented class vocabulary for that reason.

## No `_ds_sync.json` anchor

Off-script build emits no sidecar, so the next sync re-verifies from scratch (correct — no
false "unchanged" claims). If a component library is later built from these patterns, switch
to the real converter shape.

## Re-sync

Rebuild `ds-bundle/` from `css/style.css` (keep tokens/styles 1:1 with the site), then
re-run the upload. The pinned `projectId` in `config.json` routes future syncs to the
same Claude Design project (atomic path).
