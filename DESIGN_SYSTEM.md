# Syrius Design System v1.3

## Direction

**Original Syrius identity, applied to corporate gifting.** The site is built strictly on Syrius's real palette from syrius.com.my — navy and white, no invented accent colour. Sections alternate between white/light surfaces and solid navy blocks (header, footer, statement, final CTA), matching the parent jersey site's rhythm. Branded sublimation pillows are presented as a meaningful corporate gift, while the brand mark, palette and tone remain recognisably Syrius, not a separate sub-brand.

## Tokens

| Category | Token | Value | Use |
|---|---|---:|---|
| Navy | `--navy` | `#020333` | Brand surfaces: header, footer, statement, final CTA, primary buttons |
| Navy soft | `--navy-soft` | `#12144D` | Hover state for navy surfaces |
| Ink | `--ink` | `#122428` | Headings and high-emphasis text on light surfaces |
| Text | `--text` | `#6D6D6D` | Supporting body copy (matches syrius.com.my body colour) |
| White | `--white` | `#FFFFFF` | Default page background |
| Mist | `--mist` | `#F4F6F8` | Supporting section backgrounds (process section, icon badges) |
| Line | `--line` | `#DFE3E8` | Dividers / card borders |
| Space | `--s1`…`--s8` | 8–112px | Use scale; avoid arbitrary gaps |

No accent colour beyond navy/white. Emphasis in headings is a navy underline stroke behind the emphasised words, not a colour change. The only non-brand colour on the page is the WhatsApp green (`#25D366`) on the floating contact button, matching the real WhatsApp widget convention.

Typography: **Plus Jakarta Sans** for headings, UI and body; use weight, scale and spacing — not a second display typeface — for hierarchy.

## Components

### Button

| Variant | Use |
|---|---|
| `navy` | Solid navy pill — primary action on a white/light surface |
| `white` | Solid white pill, navy text — primary action on a navy surface (header, final CTA) |

All buttons are full pill shape (`border-radius: 999px`), require visible text, at least 44px touch height on mobile, and a clear destination. External WhatsApp links open in a new tab. A fixed floating WhatsApp button (`.fab-whatsapp`) stays available bottom-right on every screen, matching the parent site's persistent contact pattern.

### Wordmark

Use the supplied Syrius logo asset (`public/syrius-logo.png`) without redrawing, recolouring or adding symbols. It is a white mark and must sit on navy brand surfaces with comfortable clear space. Customer logo artwork belongs on product mockups, never inside the Syrius wordmark.

### Eyebrow

Uppercase mono label that introduces a section. Do not use it as a paragraph style or stack multiple labels.

### Cards and steps

Use fine divider lines rather than heavy shadows. Cards are descriptive, not clickable unless the whole card has one clear destination.

## Layout rules

- Desktop container: 1180px maximum; mobile gutters: 16px.
- Section padding: 112px desktop / 72px mobile.
- Main landing rhythm: proof → story → process → conversion.
- Use navy as the anchor surface and mist for visual breathing room. Do not introduce an accent colour beyond navy/white.

## Interaction and accessibility

- Keep keyboard focus visible; never hide outline globally.
- Body text stays at least 13px; primary body copy is 14–16px.
- Preserve real headings in order (`h1` then `h2`).
- Respect `prefers-reduced-motion` if adding future animations.
- Test colour contrast before introducing new brand shades.

## Claude Code handoff

The site has grown from a single landing page into a small multi-page site: `/` (homepage), `/panduan` (buying guide), and `/majalah` (a content hub with individual article pages, mixing corporate/marketing pieces and general pillow/textile/sublimation knowledge). `SiteHeader`, `SiteFooter` and `MobileMenu` were extracted into shared components once the second page needed them, exactly as originally planned — each accepts a `base` prop so anchor links resolve correctly whether rendered on `/` or a sub-page. Preserve the supplied Syrius logo and token values above; do not introduce a UI library unless it solves a demonstrated need.

Newer patterns established since v1.2, for consistency when adding more pages:
- **Articles** (`/majalah/*`) each get `Article` JSON-LD, a `← MAJALAH` back-link (the `.eyebrow` class used as an `<a>`), and a `Rujukan` (references) section with real, verified, clickable citations — never invented sources or unfalsifiable claims about Syrius specifically.
- **Stat cards** (`.stat-grid`/`.stat-card`) present cited statistics honestly: one fact per card, its own source line, no oversized icon or product photo beside it that would imply the number is Syrius-specific.
- General (non-corporate) articles end with one neutral sentence + `.text-link.text-link--right` pointing to `/panduan` — not a hard CTA — to keep them reading as genuine reference content rather than sales pages.
- Every content page has structured data matching its type (`FAQPage`, `HowTo`, `Article`, `CollectionPage`/`ItemList`), generated from the same array that renders the visible content so they can't drift apart.
