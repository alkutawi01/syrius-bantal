import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { MobileMenu } from '../components/MobileMenu';
import { SetHtmlLang } from '../components/SetHtmlLang';
import { SiteFooter } from '../components/SiteFooter';
import { Wordmark } from '../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../lib/whatsapp';

const title = 'Custom Corporate Cushions — Syrius';
const description = 'Branded sublimation-printed corporate cushions for companies and organisations in Malaysia. Part of Syrius, trusted since 2011.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_MY',
    siteName: 'Syrius',
    images: [{ url: '/syrius-corporate-pillow-og.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Syrius branded corporate cushion' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-og.jpg'],
  },
};

const values: [string, string, ReactNode][] = [
  ['Sublimation expertise since 2011', 'Produced by the Syrius sublimation team, with experience dating back to 2011.', <svg key="v1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.9 6.4L22 9l-5 5.2L18.2 22 12 18.3 5.8 22 7 14.2 2 9l7.1-.6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>],
  ['Flexible order quantities', 'Small orders receive the same attention to quality as larger orders.', <svg key="v2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M3 8v8l9 4 9-4V8M12 12v8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['Designed around your brand', "We tailor the logo, colours and layout to match your organisation's visual identity.", <svg key="v3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" /><circle cx="10.5" cy="7" r="1.1" fill="currentColor" /><circle cx="15" cy="8" r="1.1" fill="currentColor" /></svg>],
];

const faqs: [string, string, ReactNode?][] = [
  ['Do you have a minimum order quantity?', "No. Small orders receive the same attention to quality as larger ones, making them suitable for team gifts, internal events and other smaller requirements."],
  ['How do I place an order?', "Contact us via WhatsApp and share your requirements, including the event type, quantity and intended use. Send us your logo and brand colours, and we'll review the design and provide a quote before production begins."],
  ['Can the design be fully customised to match our brand?', 'Yes. The logo, colours and layout can be tailored to match your organisation’s visual identity.', <> <a className="text-link" href="/en/portfolio">See design examples</a></>],
  ['Which areas do you deliver to?', 'We deliver nationwide across Malaysia via courier. Our studios are based in Kota Bharu, Kelantan, and Mentakab, Pahang.'],
  ['What is the turnaround time?', 'Turnaround time depends on the order quantity and design complexity. Contact us via WhatsApp for an estimate based on your requirements.'],
];

const steps: [string, string, string, ReactNode][] = [
  ['01', 'Share your requirements', 'Tell us about your event, required quantity and intended use.', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['02', 'Send your logo', 'Send us your logo, brand colours or brand guidelines via WhatsApp.', <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ['03', 'Confirm your order', "We'll review the design and provide a quote before production begins.", <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function HomeEn() {
  return <main>
    <SetHtmlLang lang="en" />
    <a className="skip-link" href="#utama-en">Skip to main content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <ScrollReveal />

    {/* Minimal English header - reuses MobileMenu (with a custom links override) for mobile nav;
        the rest of the shared SiteHeader markup is BM-only, not worth parameterising for a single
        evaluation page. Revisit if the EN edition expands. */}
    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/" lang="ms" hrefLang="ms">Bahasa Melayu</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="#utama-en" aria-label="Syrius, back to top"><Wordmark /></a>
      <nav aria-label="Main navigation">
        <a href="#cara-en">How to order</a>
        <a href="#kelebihan-en">Why us</a>
        <a href="/en/portfolio">Portfolio</a>
        <a href="/en/majalah">Magazine</a>
        <a href="#faq-en">FAQ</a>
      </nav>
      <div className="nav-right">
        <Button href={whatsappUrlEn} variant="white" size="sm" newTabLabel="(opens in a new tab)">Request a Quote <span aria-hidden="true">↗</span></Button>
        <MobileMenu
          links={[
            ['#cara-en', 'How to order'],
            ['#kelebihan-en', 'Why us'],
            ['/en/portfolio', 'Portfolio', 'portfolio'],
            ['/en/majalah', 'Magazine'],
            ['#faq-en', 'FAQ'],
            ['/', 'Bahasa Melayu'],
          ]}
          navLabel="Mobile navigation"
          openLabel="Open menu"
          closeLabel="Close menu"
        />
      </div>
    </div></header>

    <section className="bento" id="utama-en" tabIndex={-1}><div className="container bento-grid">
      <div className="bento-tile bento-hero">
        <p className="eyebrow" lang="en">BRANDED COMFORT, MADE TO GIFT</p>
        <h1>Your logo.<br />Made to be <em>remembered.</em></h1>
        <p className="lede">Custom corporate cushions featuring your logo and brand colours, produced using sublimation printing — not generic giveaways. Suitable for orders of all sizes, backed by a team with sublimation experience dating back to 2011.</p>
        <div className="hero-actions"><Button href={whatsappUrlEn} variant="navy" newTabLabel="(opens in a new tab)">Request a Quote <span aria-hidden="true">↗</span></Button><a className="text-link" href="#cara-en">See how it works <span aria-hidden="true">↓</span></a></div>
      </div>

      <figure className="bento-tile bento-photo">
        <picture>
          <source srcSet="/syrius-corporate-pillow-blank-900.webp 900w, /syrius-corporate-pillow-blank.webp 1600w" sizes="(max-width: 900px) 100vw, 700px" type="image/webp" />
          <img src="/syrius-corporate-pillow-blank.jpg" srcSet="/syrius-corporate-pillow-blank-900.jpg 900w, /syrius-corporate-pillow-blank.jpg 1600w" sizes="(max-width: 900px) 100vw, 700px" alt="Blank sublimation cushion, ready for your brand's logo" fetchPriority="high" />
        </picture>
        <figcaption lang="en"><span>Corporate gifting</span>Made for your brand</figcaption>
      </figure>

      <h2 className="sr-only">Why choose Syrius</h2>
      {values.map(([title, text, icon], i) => <div className="bento-tile bento-value" id={i === 0 ? 'kelebihan-en' : undefined} style={{ gridArea: `val${i + 1}` }} data-reveal key={title}>
        <span className="bento-icon">{icon}</span><h3>{title}</h3><p>{text}</p>
      </div>)}

      <div className="bento-tile bento-fact" data-reveal>
        <div className="fact"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M8.5 14.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg><div><b>Since 2011</b><span>Part of Syrius</span></div></div>
        <div className="fact"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" /></svg><div><b>Nationwide</b><span>Delivery coverage</span></div></div>
      </div>

      <div className="bento-tile bento-steps" id="cara-en" data-reveal>
        <h2 className="eyebrow">HOW TO ORDER</h2>
        <ol className="bento-steps-row">{steps.map(([number, title, text, icon]) => <li key={number}><span className="dot">{icon}</span><b className="step-number">{number}</b><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </div>
    </div></section>

    <section className="statement" aria-labelledby="statement-heading-en"><div className="container statement-grid" data-reveal><p className="eyebrow">SYRIUS MALAYSIA</p><h2 id="statement-heading-en">Bring your brand closer<br />to the people who matter.</h2><p>Your logo and brand colours are permanently infused into the fabric using sublimation printing, creating a smooth, durable finish for gifts to staff, clients, business partners and event guests — rather than a surface-applied print that can crack or peel.</p></div></section>

    <section className="section faq" id="faq-en" aria-labelledby="faq-heading-en"><div className="container">
      <div className="section-head" data-reveal><div><p className="eyebrow">FAQ</p><h2 id="faq-heading-en">Before you <em>get in touch.</em></h2></div><p>Quick answers to the questions we're asked most before ordering.</p></div>
      <ul className="faq-list">{faqs.map(([q, a, link]) => <li key={q}><details className="faq-item" data-reveal><summary>{q}<span className="faq-icon" aria-hidden="true">+</span></summary><p>{a}{link}</p></details></li>)}</ul>
    </div></section>

    <section className="final-cta" aria-labelledby="final-cta-heading-en"><div className="container" data-reveal><p className="eyebrow">READY TO MAKE AN IMPACT?</p><h2 id="final-cta-heading-en">Your brand.<br /><em>Their gift.</em></h2><p>Contact Syrius to discuss design, quantity, pricing and delivery.</p><Button href={whatsappUrlEn} variant="white" newTabLabel="(opens in a new tab)">Request a Quote <span aria-hidden="true">↗</span></Button></div></section>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
