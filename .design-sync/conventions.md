# F&S株式会社 — design language

A dark, editorial, **rule-based** design language (deep-sea dark navy; inherits opa's 罫線・活字 DNA). This is a **CSS design system, not a component library**: there are no React/JS components to import — you build layouts yourself and style them with this system's **named classes + CSS-variable tokens**.

## Setup — one stylesheet, dark ground

Load `styles.css` (it `@import`s the fonts, then `tokens/tokens.css`, then all the classes below). It sets the page `body` to the deep-navy ground (`--ink-abyss`), foam text, and the sans face automatically. If your canvas root is not `<body>`, apply the ground yourself:

```html
<div style="background:var(--ink-abyss); color:var(--foam); font-family:var(--font-sans)"> … </div>
```

Fonts load from Google Fonts; if blocked, the token stacks fall back (Hiragino / ui-monospace) and layout holds.

## Styling idiom — named classes + `var(--token)`

No utility grammar (`p-4`, `text-lg`), no CSS-in-JS. Compose the real classes; reach for tokens via `var(--*)` for your own layout glue. Never invent token or class names — use these.

**Tokens** (full catalog in `tokens/tokens.json`):
| Group | Names |
|---|---|
| Grounds | `--ink-abyss` (page) · `--ink-deep` (alt sections) · `--ink-navy` (hover) |
| Text | `--foam` + opacity ladder `--foam-80/-65/-55/-45/-30` (hierarchy = opacity, never new hues) |
| Rules | `--rule-strong` (2px underlines) · `--rule` · `--rule-soft` (list rows) |
| Accents (only two) | `--cyan` = info/active/links · `--sand` = attention/recruiting |
| Fonts | `--font-display` (Shippori Mincho, headings) · `--font-sans` (Zen Kaku, body) · `--font-mono` (IBM Plex Mono — all numbers/dates, use `.mono`) |

**Class families** (defined in `styles.css`):
- Layout: `.container` · `.section` · `.section-heading` (+ `.section-heading-en`, `.section-heading-attn`)
- Type/marks: `.kicker` (+ `.kicker-jp`, `.kicker-attn`) · `.mono`
- Actions: `.btn-primary` · `.btn-secondary` · `.link-underline`
- Brand/chrome: `.brand-wordmark` (+ `.brand-amp`, `.brand-kk`, `.brand-latin`) · `.masthead` · `.global-nav` · `.footer*` · `.depth-gauge*`
- Hero: `.hero`, `.hero-title`, `.hero-copy`, `.hero-actions`, `.hero-stats`/`.hero-stat`, `.stat-num`/`.stat-unit`
- Lists: `.news-row`/`.news-date`/`.news-cat`(`-info`/`-attn`)/`.news-title` · `.business-row`/`.business-num`/`.business-body` · `.company-dl`/`.history-list` · `.strength-lead`/`.strength-x`
- Motion: `.reveal` → `.reveal.is-visible` (respects reduced-motion)

## The five DNA rules (see `guidelines/design-dna.md`)

1. **Rules are the layout unit** — dividers/borders, **no cards, shadows, rounded panels, or color pills**.
2. **Kicker + heavy display heading** open every section.
3. **All figures are mono + tabular** (`.mono`) — dates, stats, indices, coordinates.
4. **Symbols set in type** — `→ ↗ › × ><>`, not icons.
5. **Hierarchy via opacity ladder**, exactly two accents — never add a third.

## Where the truth lives

`styles.css` (+ its `@import` of `tokens/tokens.css`) is authoritative — read it before styling. `tokens/tokens.json` enumerates tokens; `guidelines/design-dna.md` explains intent and don'ts.

## Idiomatic snippet

```html
<section class="section">
  <div class="container">
    <div class="section-heading">
      <div><p class="kicker">NEWS<span class="kicker-jp">お知らせ</span></p><h2>お知らせ</h2></div>
      <span class="section-heading-en">— LATEST UPDATES</span>
    </div>
    <ul class="news-list">
      <li class="news-row">
        <time class="news-date" datetime="2026-07-07">2026.07.07</time>
        <span class="news-cat news-cat-info">PRESS</span>
        <span class="news-title">コーポレートサイトを公開しました</span>
      </li>
    </ul>
  </div>
</section>
```
