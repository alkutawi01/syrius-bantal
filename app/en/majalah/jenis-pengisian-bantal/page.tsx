import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../../lib/whatsapp';

const title = 'A Guide to Pillow Filling Types — Syrius Magazine';
const description = 'The differences between polyester fibre, down, kapok and memory foam as pillow filling — in terms of comfort, durability and care.';

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

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'A guide to understanding pillow filling types',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

const fillings: [string, ReactNode, ReactNode, ReactNode, string, string][] = [
  ['polyester', 'Polyester fibre', "One of the most common and affordable pillow fillings. Light and soft at first, but lower-cost polyester pillows often flatten and lose support after prolonged use, sometimes within one to two years. Many can be machine washed and dried, depending on the manufacturer's instructions.", <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 14c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 20c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>, 'Around 1–2 years for many budget options', 'Light, affordable, easy to wash'],
  ['down', 'Down and feather', 'Very soft. High-quality down can retain its loft well and generally lasts longer than many lower-cost synthetic fillings, though the exact difference depends on quality and care. Some people may experience sensitivity to down or to allergens such as dust mites that can accumulate in bedding.', <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21V9M12 9c0-3 2-5 6-6-1 4-3 6-6 6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 14c-3 0-5-1-6-3 3-1 5 0 6 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>, 'Several years, depending on quality and care', 'Very soft, allergy-sensitivity considerations'],
  ['kapok', 'Kapok', 'A lightweight, naturally resilient plant-based fibre, often used as a vegan alternative to down. It benefits from regular fluffing to help maintain an even fill distribution over time.', <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3c4 3 6 7 4 12-3-1-6-4-6-9 0-1 1-2 2-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 21v-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>, 'Varies; requires maintenance', 'Vegan, needs regular fluffing'],
  ['foam', 'Memory foam', 'A synthetic material that conforms to the pressure of the head and neck, providing more targeted support. Traditional memory foam can retain more heat than some other pillow materials, although newer designs may include cooling features.', <svg key="i4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15c2-3 4 3 6 0s4-3 6 0 4 3 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="3" y="15" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" /></svg>, 'Depends on foam density and quality', 'Shape-conforming support, retains heat'],
];

export default function ArtikelEn() {
  return <main>
    <SetHtmlLang lang="en" />
    <a className="skip-link" href="#artikel-en">Skip to main content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/majalah/jenis-pengisian-bantal" lang="ms" hrefLang="ms">Bahasa Melayu</a></div></div>
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
            ['/majalah/jenis-pengisian-bantal', 'Bahasa Melayu'],
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
        A guide to understanding <em style={{ fontStyle: 'normal' }}>pillow filling types.</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>2 min read</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        The filling type plays a major role in a pillow's comfort, support and durability, alongside factors such as design, cover material and construction. Here are the basic differences between some of the most commonly used filling types.
      </p>

      <div data-reveal>
        {fillings.map(([key, name, text, icon]) => <div key={key} style={{ marginBottom: 28, display: 'flex', gap: 16 }}>
          <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
          <div>
            <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>{name}</h2>
            <p style={{ maxWidth: 700 }}>{text}</p>
          </div>
        </div>)}
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 14px' }}>Comparison summary</h2>
        <div className="table-scroll">
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 480, fontSize: 13.5 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--line)' }}>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 12px 8px 0', color: 'var(--ink)' }}>Filling type</th>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--ink)' }}>Typical durability</th>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 0 8px 12px', color: 'var(--ink)' }}>Key trait</th>
            </tr>
          </thead>
          <tbody>
            {fillings.map(([key, name, , , lifespan, trait]) => <tr key={key} style={{ borderBottom: '1px solid var(--line)' }}>
              <th scope="row" style={{ textAlign: 'left', padding: '10px 12px 10px 0', color: 'var(--ink)', fontWeight: 700 }}>{name}</th>
              <td style={{ padding: '10px 12px', color: 'var(--text)' }}>{lifespan}</td>
              <td style={{ padding: '10px 0 10px 12px', color: 'var(--text)' }}>{trait}</td>
            </tr>)}
          </tbody>
        </table>
        </div>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>No single type is absolutely &ldquo;best&rdquo;</h2>
        <p>Choosing a filling depends on personal preference: how firm a level of support you need, allergy sensitivity, budget and how much maintenance you're willing to do. A pillow that suits one person may not suit another, so understanding the traits of each type is the first step before choosing.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>References</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Nolah Sleep. <a href="https://www.nolahsleep.com/blogs/blog/best-pillow-material" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>The Perfect Pillow: How To Choose Between Down, Feather, Foam, and More</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Bearaby. <a href="https://bearaby.com/blogs/the-lay-low/pillow-filling-types" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>8 Pillow Filling Types: Latex, Down, Feather &amp; More</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Looking for a logo-printed corporate cushion for your company? <a className="text-link text-link--right" href="/en/panduan">See the ordering guide <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
