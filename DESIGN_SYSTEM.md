# Syrius Design System v1.1

## Direction

**Original Syrius identity, applied to corporate gifting.** The site uses Syrius's navy, white and coral palette with a clean, confident B2B feel. Branded sublimation pillows are presented as a meaningful corporate gift, while the brand mark and colours remain recognisably Syrius.

## Tokens

| Category | Token | Value | Use |
|---|---|---:|---|
| Navy | `--navy` | `#020333` | Brand surfaces, navigation, footer |
| Ink | `--ink` | `#122428` | Headings and high-emphasis text |
| Text | `--text` | `#6D6D6D` | Supporting body copy |
| White | `--white` | `#FAFAFA` | Text and light surfaces |
| Coral | `--coral` | `#FF6048` | Primary action / emphasis |
| Mist | `--mist` | `#F4F6F8` | Supporting section backgrounds |
| Line | `--line` | `#DFE3E8` | Dividers / boundaries |
| Space | `--s1`…`--s8` | 8–112px | Use scale; avoid arbitrary gaps |

Typography: **Plus Jakarta Sans** for headings, UI and body; use weight, scale and spacing—not a second display typeface—for hierarchy.

## Components

### Button

| Variant | Use |
|---|---|
| `coral` | One primary action per viewport |
| `dark` | Header or dark-on-light secondary conversion action |
| `light` | Action on a dark/coral surface |

All buttons require visible text, at least 44px touch height on mobile, and a clear destination. External WhatsApp links open in a new tab.

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
- Use navy as the anchor surface, coral as an action accent, and mist for visual breathing room. Do not introduce unapproved brand colours.

## Interaction and accessibility

- Keep keyboard focus visible; never hide outline globally.
- Body text stays at least 13px; primary body copy is 14–16px.
- Preserve real headings in order (`h1` then `h2`).
- Respect `prefers-reduced-motion` if adding future animations.
- Test colour contrast before introducing new brand shades.

## Claude Code handoff

The first implementation is a single responsive landing page with reusable `Button` and `Wordmark` components. Future work should extract section primitives only after a second page needs them. Preserve the supplied Syrius logo and token values above; do not introduce a UI library unless it solves a demonstrated need.
