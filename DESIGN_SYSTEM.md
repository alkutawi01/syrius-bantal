# Syrius Design System v1.0

## Direction

**Warm editorial corporate gifting.** The visual language takes cues from modern premium B2B commerce: generous typography, a restrained palette, one vivid accent, and product presentation that makes branded merchandise feel considered rather than generic. It should not imitate a competitor's exact layout, copy, assets, or distinctive trade dress.

## Tokens

| Category | Token | Value | Use |
|---|---|---:|---|
| Ink | `--ink` | `#181616` | Type, dark surfaces |
| Paper | `--paper` | `#F8F6F1` | Default background |
| Warm | `--warm` | `#EEE9DF` | Supporting section |
| Coral | `--coral` | `#EC604B` | Main action / emphasis |
| Line | `--line` | `#D9D3C8` | Dividers / boundaries |
| Space | `--s1`…`--s8` | 8–112px | Use scale; avoid arbitrary gaps |

Typography: **Manrope** for UI/body, **Playfair Display** only for expressive display headings, and **DM Mono** for labels, IDs and utility text.

## Components

### Button

| Variant | Use |
|---|---|
| `coral` | One primary action per viewport |
| `dark` | Header or dark-on-light secondary conversion action |
| `light` | Action on a dark/coral surface |

All buttons require visible text, at least 44px touch height on mobile, and a clear destination. External WhatsApp links open in a new tab.

### Wordmark

Text-based Syrius mark for reliable rendering. Replace only when a final approved logo asset and clearspace rules are supplied. Customer logo artwork belongs on product mockups, never inside the Syrius wordmark.

### Eyebrow

Uppercase mono label that introduces a section. Do not use it as a paragraph style or stack multiple labels.

### Cards and steps

Use fine divider lines rather than heavy shadows. Cards are descriptive, not clickable unless the whole card has one clear destination.

## Layout rules

- Desktop container: 1180px maximum; mobile gutters: 16px.
- Section padding: 112px desktop / 72px mobile.
- Main landing rhythm: proof → story → process → conversion.
- The coral CTA surface may appear once near the end of a long page; do not use it for every section.

## Interaction and accessibility

- Keep keyboard focus visible; never hide outline globally.
- Body text stays at least 13px; primary body copy is 14–16px.
- Preserve real headings in order (`h1` then `h2`).
- Respect `prefers-reduced-motion` if adding future animations.
- Test colour contrast before introducing new brand shades.

## Claude Code handoff

The first implementation is a single responsive landing page with reusable `Button` and `Wordmark` components. Future work should extract section primitives only after a second page needs them. Keep all colours and spacing on the token scale above; do not introduce a UI library unless it solves a demonstrated need.
