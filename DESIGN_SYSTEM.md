# Syrius Design System v1.8

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
- **Articles** (`/majalah/*`) each get `Article` JSON-LD (with `dateModified` and `publisher.logo` — Google's recommended fields, not just the minimum), a `← MAJALAH` back-link (the `.eyebrow` class used as an `<a>`), a reading-time estimate under the `h1` (a plain `<p>`, `--text` colour, 13px — calculated once from the actual rendered word count at ~200 words/min, not invented; re-count and update it if an article's body text changes substantially), and a `Rujukan` (references) section with real, verified, clickable citations — never invented sources or unfalsifiable claims about Syrius specifically.
- **Stat cards** (`.stat-grid`/`.stat-card`) present cited statistics honestly: one fact per card, its own source line, no oversized icon or product photo beside it that would imply the number is Syrius-specific.
- General (non-corporate) articles end with one neutral sentence + `.text-link.text-link--right` pointing to `/panduan` — not a hard CTA — to keep them reading as genuine reference content rather than sales pages.
- Every content page has structured data matching its type (`FAQPage`, `HowTo`, `Article`, `CollectionPage`/`ItemList`), generated from the same array that renders the visible content so they can't drift apart. The root layout's `LocalBusiness` data now uses a top-level `@graph` array (one entry per physical location) rather than a single object — follow that shape if a third location is ever added.
- `SiteHeader`/`MobileMenu` accept an optional `active: 'panduan' | 'majalah' | 'portfolio'` prop so the current section's nav link gets `aria-current="page"` plus a bold/solid-white style; pass it from any new sub-page that has a matching nav item.

Known blocker, not yet resolvable: there is no `sitemap.ts` or `metadataBase`, because the real production domain for this Cloudflare-deployed site isn't known (vinext's only automatic fallback is Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, irrelevant here). Ask Izzat for the production URL before adding either — do not guess a domain.

**Security headers** are set in `next.config.ts`'s `headers()` (confirmed supported by vinext, unlike some Next.js server APIs) and apply to every route: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` (camera/microphone/geolocation/payment/usb all disabled — this site uses none of them), `Strict-Transport-Security`, and `Content-Security-Policy` — **the CSP is enforced only when `NODE_ENV === 'production'`**, gated in code, not just tested once. Two things forced that shape, both confirmed by testing against the real `vinext build` + `vinext start` output, not just `vinext dev`:
- `script-src` needs `'unsafe-inline'` — vinext's RSC hydration injects many inline `<script>` tags itself (not just this project's own JSON-LD), and a strict nonce/hash policy isn't feasible without deeper framework support.
- `vinext dev`'s Vite/HMR client uses `eval()`, which the policy correctly has no allowance for. That's a dev-only artifact — it never appears against the production build — so the CSP is skipped entirely in development rather than being weakened with `'unsafe-eval'`.

If you touch this policy, re-verify against `vinext build && npx vinext start` (not just `vinext dev`): check all routes for violations, that the mobile menu is still interactive, that Google Fonts still resolves (computed `font-family` should say "Plus Jakarta Sans", not fall back to Arial), and that both JSON-LD `<script>` tags still parse.

**`/portfolio` + `/admin` (v1.7)**: since there was no way for Izzat to update showcase images without a developer, and no real customer photos existed yet, `/portfolio` was added as a public page showing 3 placeholder images with an on-page disclaimer that they're illustrative, not real customer work — swap them for real photos the moment any exist. Images are served by a dynamic `/images/[key]` Route Handler backed by Cloudflare R2 (`env.PORTFOLIO_BUCKET`), not static files directly, so they can change without a redeploy. `app/lib/portfolioSlots.ts` defines the fixed whitelist (`PORTFOLIO_SLOTS = ['portfolio-1', 'portfolio-2', 'portfolio-3']`) — never accept an arbitrary key from a request; every route that touches R2 validates against this list first. If a slot has never been uploaded to, `/images/[key]` redirects to the matching static `public/dummy-portfolio-N.jpg` fallback, so the page never breaks even on a fresh deploy with an empty bucket.

A minimal password-gated `/admin` page (noindexed via both page metadata and `robots.ts`) lets Izzat replace each image himself: session is a single httpOnly/secure/sameSite=strict cookie holding a SHA-256 hash of one shared password (`env.ADMIN_PASSWORD`), 12-hour expiry — deliberately lightweight, appropriate for a low-stakes internal tool with one operator, not a multi-user auth system. Local dev reads `ADMIN_PASSWORD` and the R2 binding from `.dev.vars` / `.openai/hosting.json`'s `"r2"` key (gitignored, never commit real secrets there).

**Known blocker, not yet resolvable by Claude Code**: this only works in production once a real R2 bucket is provisioned and bound as `PORTFOLIO_BUCKET`, and a real `ADMIN_PASSWORD` secret is set on the actual live Cloudflare account — both are account-level actions outside this environment's access. Until Izzat (or whoever manages the Cloudflare account) does that, the deployed `/admin` page will not have working storage even though it works in local dev.

**Content arrays that mix plain strings with inline JSX** (icons, fragments) — the pattern used for `values`/`steps`/`occasions`/`articles`/etc. across every page — need an explicit tuple type annotation (e.g. `const values: [string, string, ReactNode][] = [...]`). Without it, TypeScript widens each destructured position to a `string | Element` union, which silently fails `key={firstElement}` under `strict: true` (the project's own `npm run build` doesn't catch this — only a standalone `npx tsc --noEmit` does). Type any new array of this shape the same way.

**Portfolio disclaimer text is editable too (v1.7)**: the "these are placeholder images" note on `/portfolio` is stored in the same R2 bucket as the images (key: `PORTFOLIO_DISCLAIMER_KEY` from `app/lib/portfolioSlots.ts`), editable via a textarea in `/admin` — submitting it empty resets it back to `DEFAULT_PORTFOLIO_DISCLAIMER`. If you ever add more admin-editable copy, follow this same pattern (R2-backed, hardcoded default as fallback) rather than hardcoding it in the page.

**Sticky header needs `scroll-margin-top` on every anchor target (v1.8)**: `.site-header` is `position: sticky; top: 0`. Any element a nav link jumps to (`#cara`, `#kelebihan`, `#faq`, `#tentang`, `#utama`) needs `scroll-margin-top` matching the header's own height (currently 96px desktop / 84px at the ≤1024px layout, where `.nav` shrinks to 66px) or the pinned header lands on top of the heading after the jump. Add any new anchor id to that same CSS rule in `globals.css` rather than inventing a new one-off margin.

**A nav link's label and destination must actually match (v1.8)**: found and fixed a real bug where "Kegunaan" (uses/applications) linked to `#koleksi`, an anchor that had drifted onto an unrelated stats tile (Sejak 2011 / Kelantan & Pahang) — there was no actual "kegunaan" section on the page at all. When adding or reordering homepage sections, grep for the anchor id being removed/renamed (`grep -rn "id=\"whatever\""` and the matching nav `href`) rather than assuming nav links still point where they used to.

**Every piece of published content needs an explicit accuracy check before it goes live (v1.8)** — this is a standing rule from Izzat after a fabrication incident on another project, no exceptions. The 4 general-knowledge Majalah articles added this cycle were initially published *without* this step; a follow-up ChatGPT editorial review caught several real problems a solo fact-checking pass had missed or under-weighted (overconfident causal claims, a folk-etymology-style claim stated as settled fact, a two-date contradiction, a region-specific tradition presented as general Malay custom). Route new factual/historical/cultural content through that check *before* publishing, not after — see the corrected articles' commit history for the exact kind of issues it catches that self-review tends to miss.

**The browser pane runs with `document.hidden === true`, so anything that needs a live rendering pipeline is unreliable there.** Two confirmed symptoms, both tooling artifacts rather than site bugs:
- `IntersectionObserver` callbacks never fire, even for elements already inside the viewport on load (confirmed by attaching a fresh observer directly and getting no callback after a 2s timeout). `ScrollReveal.tsx` relies entirely on it, so every `[data-reveal]` element looks permanently stuck at `opacity: 0`.
- `getComputedStyle` returns **stale values for state-dependent styles**. Opening a `<details>` does not show `.faq-item[open] .faq-icon`'s `rotate(45deg)`, and focusing `.skip-link` does not show its `top: 0` — both keep reporting the pre-state value even after forcing `transition-duration: 0s`, because style recalc is skipped in a hidden document.

Don't "fix" either symptom. Verify this class of behaviour by reading the component logic plus the compiled CSS (`curl http://localhost:PORT/app/globals.css` — the rule text is inlined in the Vite JS wrapper), by manually adding `.is-visible` in a test script, or by comparing against a control run with the change reverted. A control run is the decisive tool: if the "broken" reading is identical with and without your change, your change did not cause it.

**Icon files must be the size their convention actually expects — non-standard sizes silently work in some contexts and break in others (v1.8)**: `app/icon.png` had drifted to a raw 534×534 export and was reused as the source for everything, so the bug spread to `app/apple-icon.png` (should be 180×180 per Apple's own guidance), `app/favicon.ico` (was a 534×534 **PNG renamed to `.ico`** with no real ICO container — browsers tolerate this via lenient sniffing, but it isn't spec-compliant), and the `manifest.ts` `icons` array (should declare 192×192 and 512×512, the documented Android/Chrome installability minimums, not one arbitrary size). Fixed: `app/icon.png` → 32×32 (Next.js's documented recommendation for this file), `app/apple-icon.png` → 180×180, `app/favicon.ico` → a real hand-built multi-resolution ICO (16/32/48px, each an embedded PNG per the ICO spec — no library needed, see git history for the ~30-line construction script), `public/icon-192.png` + `public/icon-512.png` → declared in the manifest. If the logo mark ever changes, regenerate all five from the new source at these exact sizes — don't just drop in one arbitrary-sized export and let every consumer scale it at runtime.
