import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../../components/Button';
import { MobileMenu } from '../../components/MobileMenu';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SetHtmlLang } from '../../components/SetHtmlLang';
import { SiteFooter } from '../../components/SiteFooter';
import { Wordmark } from '../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../lib/whatsapp';

const title = 'Magazine — Syrius';
const description = 'Guides, tips and know-how on corporate cushions, sublimation and textiles from Syrius.';

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

// Articles are added here as each one gets an EN edition; the rest still only exist in BM.
const articles: [string, string, string, ReactNode, number][] = [
  ['apa-itu-percetakan-sublimasi', 'What is sublimation printing?', 'A short explanation of sublimation printing: how a digital design is permanently transferred onto fabric using heat and pressure.', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M12 10v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="4" y="17" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>, 2],
  ['asal-usul-perkataan-bantal-dan-pillow', 'The origins of "bantal" and "pillow"', 'The origins of the Malay word "bantal" and the English word "pillow" are traced through Austronesian and Latin-Germanic linguistic records.', <svg key="i5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 6c-1.5-1.5-4-2-7-2v14c3 0 5.5.5 7 2 1.5-1.5 4-2 7-2V4c-3 0-5.5.5-7 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 6v14" stroke="currentColor" strokeWidth="1.5" /></svg>, 5],
  ['bantal-dalam-adat-dan-budaya-melayu-tradisional', 'The pillow in traditional Malay custom and culture', 'The bolster pillow, the bridal dais pillow set, and pillow-related taboos all carry their own history and meaning within traditional Malay custom and culture.', <svg key="i6" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l4 4-4 4-4-4 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 13l4 4-4 4-4-4 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M3 12l4-4 4 4-4 4-4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M13 12l4-4 4 4-4 4-4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>, 4],
  ['bantal-unik-dari-pelbagai-budaya-dunia', 'Unique pillows from cultures around the world', "Explore the history of unique pillows worldwide: Japan's wooden takamakura, buckwheat hull pillows, Chinese dynastic ceramic pillows, and African wooden headrests.", <svg key="i7" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>, 6],
  ['idea-hadiah-korporat-bermakna', 'Why are useful corporate gifts more effective at building brand recall?', 'Promotional-products industry research shows genuinely useful gifts are remembered far more than one-off giveaways. References, principles and how to choose.', <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8M12 8v13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 8c-1.5-3-3-4-4.5-4S5 5 5 6.5 6.5 8 8 8h4Zm0 0c1.5-3 3-4 4.5-4S19 5 19 6.5 17.5 8 16 8h-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>, 3],
  ['jenis-pengisian-bantal', 'A guide to understanding pillow filling types', 'The differences between polyester fibre, down, kapok and memory foam as pillow filling — in terms of comfort, durability and care.', <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15c2-3 4 3 6 0s4-3 6 0 4 3 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="3" y="15" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" /></svg>, 2],
  ['sejarah-evolusi-bantal', 'The history and evolution of the pillow through the ages', "Trace the pillow's history from hard headrests in Ancient Egypt, Mesopotamia, China and Japan, to soft down-filled pillows becoming standard in Europe.", <svg key="i4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h12M6 21h12M7 3c0 4 3 6 5 8-2 2-5 4-5 8M17 3c0 4-3 6-5 8 2 2 5 4 5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, 8],
];

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: articles.map(([slug, articleTitle], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: articleTitle,
      url: `/en/majalah/${slug}`,
    })),
  },
};

export default function MajalahEn() {
  return <main>
    <SetHtmlLang lang="en" />
    <a className="skip-link" href="#majalah-en">Skip to main content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/majalah" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/zh/majalah" lang="zh" hrefLang="zh">中文</a></div></div>
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
            ['/majalah', 'Bahasa Melayu'],
            ['/zh/majalah', '中文'],
          ]}
          navLabel="Mobile navigation"
          openLabel="Open menu"
          closeLabel="Close menu"
        />
      </div>
    </div></header>

    <section className="section" id="majalah-en" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">MAGAZINE</p><h1>Guides and <em>know-how.</em></h1></div>
        <p>Articles on corporate gifting, cushions, textiles and sublimation printing.</p>
      </div>

      <div className="faq-list">
        {articles.map(([slug, articleTitle, excerpt, icon, readingMinutes]) => <div className="faq-item" key={slug} data-reveal style={{ padding: '26px 0' }}>
          <a href={`/en/majalah/${slug}`} style={{ display: 'flex', gap: 16 }}>
            <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
            <span>
              <h2 style={{ color: 'var(--ink)', fontSize: 19, letterSpacing: '-.01em', margin: '0 0 8px' }}>{articleTitle}</h2>
              <p style={{ color: 'var(--text)', fontSize: 14, margin: '0 0 8px', maxWidth: 620 }}>{excerpt}</p>
              <p style={{ color: 'var(--text)', fontSize: 12.5, margin: 0 }}>{readingMinutes} min read</p>
            </span>
          </a>
        </div>)}
      </div>
    </div></section>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
