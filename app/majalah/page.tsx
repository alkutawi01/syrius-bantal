import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const title = 'Majalah — Syrius';
const description = 'Panduan, tip dan pengetahuan seputar bantal korporat, sublimasi dan tekstil daripada Syrius.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ms_MY',
    siteName: 'Syrius',
    images: [{ url: '/syrius-corporate-pillow-blank.jpg', width: 1600, height: 1600, alt: 'Bantal sublimasi korporat Syrius' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-blank.jpg'],
  },
};

const articles: [string, string, string, ReactNode][] = [
  ['apa-itu-percetakan-sublimasi', 'Apa itu percetakan sublimasi?', 'Penjelasan ringkas proses percetakan sublimasi: bagaimana reka bentuk digital dipindahkan secara kekal ke atas fabrik menggunakan haba dan tekanan.', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M12 10v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="4" y="17" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>],
  ['jenis-pengisian-bantal', 'Panduan memahami jenis pengisian bantal', 'Perbezaan gentian poliester, bulu, kapok dan buih memori sebagai pengisian bantal — dari segi keselesaan, ketahanan dan penjagaan.', <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15c2-3 4 3 6 0s4-3 6 0 4 3 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="3" y="15" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" /></svg>],
  ['idea-hadiah-korporat-bermakna', 'Mengapa hadiah korporat yang berguna lebih berkesan dalam membina ingatan jenama?', 'Kajian industri produk promosi menunjukkan hadiah yang benar-benar berguna lebih diingati berbanding cenderamata sekali guna. Rujukan, prinsip dan cara memilih.', <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8M12 8v13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 8c-1.5-3-3-4-4.5-4S5 5 5 6.5 6.5 8 8 8h4Zm0 0c1.5-3 3-4 4.5-4S19 5 19 6.5 17.5 8 16 8h-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>],
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
      url: `/majalah/${slug}`,
    })),
  },
};

export default function Majalah() {
  return <main>
    <a className="skip-link" href="#majalah">Langkau ke kandungan utama</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
    <ScrollReveal />
    <SiteHeader base="/" active="majalah" />

    <section className="section" id="majalah" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">MAJALAH</p><h1>Panduan dan <em>pengetahuan.</em></h1></div>
        <p>Artikel seputar hadiah korporat, bantal, tekstil dan percetakan sublimasi.</p>
      </div>

      <div className="faq-list">
        {articles.map(([slug, articleTitle, excerpt, icon]) => <div className="faq-item" key={slug} data-reveal style={{ padding: '26px 0' }}>
          <a href={`/majalah/${slug}`} style={{ display: 'flex', gap: 16 }}>
            <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
            <span>
              <h2 style={{ color: 'var(--ink)', fontSize: 19, letterSpacing: '-.01em', margin: '0 0 8px' }}>{articleTitle}</h2>
              <p style={{ color: 'var(--text)', fontSize: 14, margin: 0, maxWidth: 620 }}>{excerpt}</p>
            </span>
          </a>
        </div>)}
      </div>
    </div></section>

    <SiteFooter />
  </main>;
}
