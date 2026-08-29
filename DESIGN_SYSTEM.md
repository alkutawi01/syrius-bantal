# Syrius Design System v1.2

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

The first implementation is a single responsive landing page with reusable `Button` and `Wordmark` components. Future work should extract section primitives only after a second page needs them. Preserve the supplied Syrius logo and token values above; do not introduce a UI library unless it solves a demonstrated need.
