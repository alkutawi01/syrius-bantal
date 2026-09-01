# Syrius Design System v1.5

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

Every `target="_blank"` link (Button, footer contact links, article Rujukan citations) must announce the new-tab behaviour to screen reader users: append a visually-hidden `<span className="sr-only"> (buka di tab baharu)</span>` inside the link, or fold it into the `aria-label` for icon-only links (e.g. the WhatsApp FAB).

### Wordmark

Use the supplied Syrius logo asset (`public/syrius-logo.png`) without redrawing, recolouring or adding symbols. It is a white mark and must sit on navy brand surfaces with comfortable clear space. Customer logo artwork belongs on product mockups, never inside the Syrius wordmark.

### Eyebrow

Uppercase mono label that introduces a section. Do not use it as a paragraph style or stack multiple labels.

### Cards and steps

Use fine divider lines rather than heavy shadows. Cards are descriptive, not clickable unless the whole card has one clear destination. Never build a static, always-visible info card out of `<details open>`/`<summary>` styled with `cursor: default` — the element stays natively keyboard-focusable and clickable regardless of styling, so a stray click or Enter/Space silently collapses it and hides the content with no visual cue. Use a plain `<div>` heading instead when the block is never meant to toggle (real accordions like the homepage FAQ, which do toggle, should keep `<details>`/`<summary>`).

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

**Business has two real physical locations**: Kelantan (Kota Bharu — HQ) and Pahang (Mentakab), confirmed by Izzat via the official syrius.com.my footer. Each has its own phone/email/address, reflected in the footer (`SiteFooter`'s "KELANTAN (HQ)"/"PAHANG" columns) and in `layout.tsx`'s structured data as two separate `LocalBusiness` entries. Do not collapse them back into one location or invent a third without a fact from Izzat.

Newer patterns established since v1.2, for consistency when adding more pages:
- **Articles** (`/majalah/*`) each get `Article` JSON-LD (with `dateModified` and `publisher.logo` — Google's recommended fields, not just the minimum), a `← MAJALAH` back-link (the `.eyebrow` class used as an `<a>`), and a `Rujukan` (references) section with real, verified, clickable citations — never invented sources or unfalsifiable claims about Syrius specifically.
- **Stat cards** (`.stat-grid`/`.stat-card`) present cited statistics honestly: one fact per card, its own source line, no oversized icon or product photo beside it that would imply the number is Syrius-specific.
- General (non-corporate) articles end with one neutral sentence + `.text-link.text-link--right` pointing to `/panduan` — not a hard CTA — to keep them reading as genuine reference content rather than sales pages.
- Every content page has structured data matching its type (`FAQPage`, `HowTo`, `Article`, `CollectionPage`/`ItemList`), generated from the same array that renders the visible content so they can't drift apart. The root layout's `LocalBusiness` data now uses a top-level `@graph` array (one entry per physical location) rather than a single object — follow that shape if a third location is ever added.
- `SiteHeader`/`MobileMenu` accept an optional `active: 'panduan' | 'majalah'` prop so the current section's nav link gets `aria-current="page"` plus a bold/solid-white style; pass it from any new sub-page that has a matching nav item.

Known blocker, not yet resolvable: there is no `sitemap.ts` or `metadataBase`, because the real production domain for this Cloudflare-deployed site isn't known (vinext's only automatic fallback is Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, irrelevant here). Ask Izzat for the production URL before adding either — do not guess a domain.

**Security headers** are set in `next.config.ts`'s `headers()` (confirmed supported by vinext, unlike some Next.js server APIs) and apply to every route: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` (camera/microphone/geolocation/payment/usb all disabled — this site uses none of them), and `Strict-Transport-Security`. **Content-Security-Policy is deliberately not set.** It needs careful `script-src`/`style-src` tuning first: every page inline-renders `<script type="application/ld+json">` for structured data, and every component uses React `style={{}}` (compiles to inline `style="..."` attributes) throughout — a naive CSP could silently break either without an obvious visual failure (structured data just stops being crawled, no error banner). Don't add a CSP without testing that both survive it.

**Content arrays that mix plain strings with inline JSX** (icons, fragments) — the pattern used for `values`/`steps`/`occasions`/`articles`/etc. across every page — need an explicit tuple type annotation (e.g. `const values: [string, string, ReactNode][] = [...]`). Without it, TypeScript widens each destructured position to a `string | Element` union, which silently fails `key={firstElement}` under `strict: true` (the project's own `npm run build` doesn't catch this — only a standalone `npx tsc --noEmit` does). Type any new array of this shape the same way.
