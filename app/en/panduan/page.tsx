import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../../components/Button';
import { MobileMenu } from '../../components/MobileMenu';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SetHtmlLang } from '../../components/SetHtmlLang';
import { SiteFooter } from '../../components/SiteFooter';
import { Wordmark } from '../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../lib/whatsapp';

const title = 'Guide to Ordering Corporate Cushions — Syrius';
const description = 'A short guide to ordering sublimation-printed corporate cushions: when they suit your needs, how to prepare your logo, and the steps to order with Syrius.';

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

const occasions: [string, string, ReactNode][] = [
  ['Staff & team gifts', 'A meaningful token of appreciation for company anniversaries, team milestones or festive celebrations.', <svg key="o1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.5" /><path d="M14.5 20c.3-2.7 2-4.8 4.3-4.8 1.6 0 3 1 3.7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>],
  ['Event & conference souvenirs', 'Given to guests or participants as a keepsake that lasts far longer than typical giveaways.', <svg key="o2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>],
  ['Client & partner gifts', 'Strengthen business relationships with something that carries your brand identity.', <svg key="o3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="7" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" /><path d="M10.2 12h3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>],
];

const artworkTips: [string, string, ReactNode][] = [
  ['File format', 'Send your logo as a vector file (AI, EPS, PDF) or a high-resolution PNG with a transparent background. This keeps your logo sharp when printed.', <svg key="t1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>],
  ['Brand colours', 'Include your official brand colour codes (HEX or Pantone) so the printed colours match your existing visual identity.', <svg key="t2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" /><circle cx="10.5" cy="7" r="1.1" fill="currentColor" /><circle cx="15" cy="8" r="1.1" fill="currentColor" /></svg>],
  ['Layout', "Let us know if the logo should appear in one spot or repeated across the cushion, and whether any additional text (e.g. event name) should be included.", <svg key="t3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg>],
];

const orderSteps: [string, ReactNode][] = [
  ['Contact us via WhatsApp and share your event type, quantity and intended use for your corporate cushions.', <svg key="s1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['Send your logo, brand colour codes and any visual identity guidelines in the format above.', <svg key="s2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ["We review the design, prepare a quote and estimated turnaround time before production begins.", <svg key="s3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to order corporate cushions from Syrius',
  step: orderSteps.map(([text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    text,
  })),
};

export default function PanduanEn() {
  return <main>
    <SetHtmlLang lang="en" />
    <a className="skip-link" href="#kandungan-en">Skip to main content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/panduan" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/zh/panduan" lang="zh" hrefLang="zh">中文</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="/en" aria-label="Syrius, back to home"><Wordmark /></a>
      <nav aria-label="Main navigation">
        <a href="/en#cara-en">How to order</a>
        <a href="/en#kelebihan-en">Why us</a>
        <a href="/en/portfolio">Portfolio</a>
        <a href="/en/majalah">Magazine</a>
        <a href="/en#faq-en">FAQ</a>
      </nav>
      <div className="nav-right">
        <Button href={whatsappUrlEn} variant="white" size="sm" newTabLabel="(opens in a new tab)">Request a Quote <span aria-hidden="true">↗</span></Button>
        <MobileMenu
          links={[
            ['/en#cara-en', 'How to order'],
            ['/en#kelebihan-en', 'Why us'],
            ['/en/portfolio', 'Portfolio'],
            ['/en/majalah', 'Magazine'],
            ['/en#faq-en', 'FAQ'],
            ['/panduan', 'Bahasa Melayu'],
            ['/zh/panduan', '中文'],
          ]}
          navLabel="Mobile navigation"
          openLabel="Open menu"
          closeLabel="Close menu"
        />
      </div>
    </div></header>

    <section className="section" id="kandungan-en" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">GUIDE</p><h1>Before you <em>order.</em></h1></div>
        <p>A short guide to help you choose and prepare your order of sublimation-printed corporate cushions with Syrius.</p>
      </div>

      <div style={{ maxWidth: 700, margin: '0 0 var(--s7)' }} data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>What is a corporate sublimation cushion?</h2>
        <p>A corporate sublimation cushion is printed using sublimation, a process that infuses the design directly into the fabric so colours and logos stay durable without fading or peeling. This method lets us fully tailor the logo, colours and layout to your brand identity.</p>
      </div>

      <div style={{ marginBottom: 'var(--s7)' }}>
        <h2 data-reveal style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: 0 }}>When should you use corporate cushions?</h2>
        <div className="occasion-grid">
          {occasions.map(([title, text, icon], i) => <div className="bento-tile bento-value" data-reveal style={{ transitionDelay: `${i * 80}ms` }} key={title}>
            <span className="bento-icon">{icon}</span><h3>{title}</h3><p>{text}</p>
          </div>)}
        </div>
      </div>

      <div style={{ maxWidth: 700, marginBottom: 'var(--s7)' }} data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>How many units should you order?</h2>
        <p>Since there's no high minimum order quantity, you can order exactly the number you need. As a general guide before contacting us:</p>
        <ul style={{ paddingLeft: 20, margin: '16px 0', display: 'grid', gap: 10 }}>
          <li><b>Count your actual recipients</b> — the real number of staff, event guests or clients receiving one, not a rough estimate.</li>
          <li><b>Consider a small buffer</b> — some organisations add a few extra units for new staff or replacements, but this is entirely optional, not a requirement.</li>
          <li><b>Confirm the quantity before the design is finalised</b> — so the quote and turnaround time we give you match the final number exactly.</li>
        </ul>
      </div>

      <div style={{ marginBottom: 'var(--s7)' }}>
        <h2 data-reveal style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>Preparing your logo and design</h2>
        <p data-reveal style={{ maxWidth: 700 }}>To make sure the print matches your brand identity as closely as possible, here are a few things that help the design review go smoothly:</p>
        <div className="faq-list" style={{ marginTop: 24 }}>
          {artworkTips.map(([title, text, icon]) => <div className="faq-item" key={title} data-reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontWeight: 700, color: 'var(--ink)', fontSize: 15 }}><span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>{title}</div>
            <p style={{ marginLeft: 52 }}>{text}</p>
          </div>)}
        </div>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>How to order</h2>
        <p style={{ maxWidth: 700, marginBottom: 24 }}>Ordering starts with a short conversation on WhatsApp — no lengthy forms, no high minimum order quantity.</p>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16, maxWidth: 700 }}>
          {orderSteps.map(([text, icon], i) => <li style={{ display: 'flex', gap: 14, alignItems: 'center' }} key={text}>
            <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
            <span><b style={{ color: 'var(--navy)', fontWeight: 800, marginRight: 8 }}>{String(i + 1).padStart(2, '0')}</b>{text}</span>
          </li>)}
        </ol>
      </div>
    </div></section>

    <section className="final-cta"><div className="container" data-reveal>
      <p className="eyebrow">READY TO GET STARTED?</p>
      <h2>Share your requirements.<br /><em>We'll handle the rest.</em></h2>
      <p>Contact Syrius via WhatsApp to discuss design, quantity, pricing and delivery.</p>
      <Button href={whatsappUrlEn} variant="white" newTabLabel="(opens in a new tab)">Start your order <span aria-hidden="true">↗</span></Button>
    </div></section>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
