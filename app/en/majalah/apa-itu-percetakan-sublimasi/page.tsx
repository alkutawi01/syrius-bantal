import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../../lib/whatsapp';

const title = 'What Is Sublimation Printing? — Syrius Magazine';
const description = 'A short explanation of sublimation printing: how a digital design is permanently transferred onto fabric using heat and pressure.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-01',
    modifiedTime: '2026-09-01',
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

const steps: [string, string, ReactNode][] = [
  ['Design is printed', 'The digital design is printed onto special transfer paper using solid sublimation ink.', <svg key="s1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ['Pressed with heat', 'The paper and fabric are fed into a heat press machine at around 195–205 °C.', <svg key="s2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M12 10v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="4" y="17" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>],
  ['Dye turns to gas', 'Heat turns the solid dye directly into gas, which then diffuses into the polyester fibres.', <svg key="s3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="7" cy="8" r="1.3" fill="currentColor" /><circle cx="12" cy="6" r="1.3" fill="currentColor" /><circle cx="17" cy="9" r="1.3" fill="currentColor" /><circle cx="9" cy="13" r="1.3" fill="currentColor" /><circle cx="15" cy="14" r="1.3" fill="currentColor" /><circle cx="12" cy="18" r="1.3" fill="currentColor" /></svg>],
  ['Locked in permanently', 'The fabric cools, and the dye stays trapped within the fibres for good.', <svg key="s4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is sublimation printing?',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

export default function ArtikelEn() {
  return <main>
    <SetHtmlLang lang="en" />
    <a className="skip-link" href="#artikel-en">Skip to main content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/majalah/apa-itu-percetakan-sublimasi" lang="ms" hrefLang="ms">Bahasa Melayu</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="/en" aria-label="Syrius, back to home"><Wordmark /></a>
      <nav aria-label="Main navigation">
        <a href="/en#cara-en">How to order</a>
        <a href="/en#kelebihan-en">Why us</a>
        <a href="/en/portfolio">Portfolio</a>
        <a href="/en/majalah" aria-current="page">Magazine</a>
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
            ['/majalah/apa-itu-percetakan-sublimasi', 'Bahasa Melayu'],
          ]}
          navLabel="Mobile navigation"
          openLabel="Open menu"
          closeLabel="Close menu"
        />
      </div>
    </div></header>

    <article className="section" id="artikel-en" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <a className="eyebrow" href="/en/majalah" data-reveal>← MAGAZINE</a>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '16px 0 8px' }} data-reveal>
        What is sublimation <em style={{ fontStyle: 'normal' }}>printing?</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>2 min read</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Sublimation printing is a method that uses heat to transfer dye into polyester fibres, rather than leaving a separate layer of ink on the surface. It's widely used to print logos, patterns and full-colour designs onto textiles such as cushions, jerseys and sportswear.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>How the process works</h2>
        <div className="step-grid" style={{ marginBottom: 24 }}>
          {steps.map(([title, text, icon], i) => <div className="bento-tile bento-value" key={title}>
            <span className="bento-icon">{icon}</span>
            <p style={{ color: 'var(--text)', fontSize: 11, fontWeight: 700, letterSpacing: '.05em', margin: '0 0 4px' }}>{String(i + 1).padStart(2, '0')}</p>
            <h3>{title}</h3><p>{text}</p>
          </div>)}
        </div>
        <p>The process begins when a digital design is printed onto special transfer paper using sublimation ink — an ink that is solid at room temperature. This paper is then placed in contact with the fabric and fed into a heat press machine at high temperature, typically around 195–205 °C, under steady pressure for a few seconds.</p>
        <p>At this temperature, the solid dye in the ink turns directly into gas without passing through a liquid phase — a process called sublimation. The heat increases the mobility of the polyester molecules, allowing the dye gas to diffuse into the fibres. Once the heat is removed and the fabric cools, the dye becomes trapped within the fibre structure, permanently locked in.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Why polyester fabric is used</h2>
        <p>This method only works on fabric that contains polyester or a polymer coating, because sublimation relies on the dye molecules diffusing into and bonding with the polyester fibres at high temperature. Untreated natural fabrics such as cotton lack the polyester structure needed for this kind of dye absorption, so prints on cotton usually turn out faded or unclear compared with results on polyester.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Characteristics of the print</h2>
        <p>Because the dye becomes part of the fabric's fibres rather than a layer on top of the surface, sublimation prints are highly resistant to cracking and peeling, and generally offer excellent durability compared with surface-layer printing methods (such as standard screen printing). This makes it well suited to full-colour designs and patterns that cover an entire product surface, such as an all-over printed cushion or jersey.</p>
        <p>Each printing method — sublimation, DTF, DTG or screen printing — has its own strengths and best-fit uses depending on the fabric type, design complexity and order quantity. No single method is the absolute &ldquo;best&rdquo; choice for every situation.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>References</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Mimaki USA. <a href="https://www.mimakiusa.com/blog/understanding-the-dye-sublimation-process/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Understanding the Dye Sublimation Process</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>VistaPrint. <a href="https://www.vistaprint.com/hub/dye-sublimation-printing" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Dye Sublimation Printing Guide</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Syrius corporate cushions are printed using this sublimation technique. <a className="text-link text-link--right" href="/en/panduan">See the ordering guide <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
