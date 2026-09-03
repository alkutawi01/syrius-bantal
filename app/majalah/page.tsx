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
    images: [{ url: '/syrius-corporate-pillow-og.jpg', width: 1200, height: 630, alt: 'Bantal sublimasi korporat Syrius' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-og.jpg'],
  },
};

const articles: [string, string, string, ReactNode, number][] = [
  ['apa-itu-percetakan-sublimasi', 'Apa itu percetakan sublimasi?', 'Penjelasan ringkas proses percetakan sublimasi: bagaimana reka bentuk digital dipindahkan secara kekal ke atas fabrik menggunakan haba dan tekanan.', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M12 10v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="4" y="17" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>, 2],
  ['jenis-pengisian-bantal', 'Panduan memahami jenis pengisian bantal', 'Perbezaan gentian poliester, bulu, kapok dan buih memori sebagai pengisian bantal — dari segi keselesaan, ketahanan dan penjagaan.', <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15c2-3 4 3 6 0s4-3 6 0 4 3 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="3" y="15" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" /></svg>, 2],
  ['idea-hadiah-korporat-bermakna', 'Mengapa hadiah korporat yang berguna lebih berkesan dalam membina ingatan jenama?', 'Kajian industri produk promosi menunjukkan hadiah yang benar-benar berguna lebih diingati berbanding cenderamata sekali guna. Rujukan, prinsip dan cara memilih.', <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8M12 8v13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 8c-1.5-3-3-4-4.5-4S5 5 5 6.5 6.5 8 8 8h4Zm0 0c1.5-3 3-4 4.5-4S19 5 19 6.5 17.5 8 16 8h-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>, 3],
  ['sejarah-evolusi-bantal', 'Sejarah dan evolusi bantal sepanjang zaman', 'Jejaki sejarah bantal dari penyokong kepala keras di Mesir Purba, Mesopotamia, China dan Jepun sehingga bantal lembut berisi bulu menjadi lazim di Eropah.', <svg key="i4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h12M6 21h12M7 3c0 4 3 6 5 8-2 2-5 4-5 8M17 3c0 4-3 6-5 8 2 2 5 4 5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, 8],
  ['asal-usul-perkataan-bantal-dan-pillow', 'Dari mana datangnya perkataan bantal dan pillow?', 'Asal-usul perkataan "bantal" dalam Bahasa Melayu dan "pillow" dalam Bahasa Inggeris disorot menerusi rekod linguistik Austronesia dan Latin-Jermanik.', <svg key="i5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 6c-1.5-1.5-4-2-7-2v14c3 0 5.5.5 7 2 1.5-1.5 4-2 7-2V4c-3 0-5.5.5-7 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 6v14" stroke="currentColor" strokeWidth="1.5" /></svg>, 5],
  ['bantal-dalam-adat-dan-budaya-melayu-tradisional', 'Bantal dalam adat dan budaya Melayu tradisional', 'Bantal peluk, bantal pelamin dan pantang larang berkaitan bantal turut menyimpan sejarah dan makna tersendiri dalam adat budaya Melayu tradisional.', <svg key="i6" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l4 4-4 4-4-4 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 13l4 4-4 4-4-4 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M3 12l4-4 4 4-4 4-4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M13 12l4-4 4 4-4 4-4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>, 4],
  ['bantal-unik-dari-pelbagai-budaya-dunia', 'Bantal unik dari pelbagai budaya di dunia', 'Telusuri sejarah bantal unik dunia: bantal kayu takamakura Jepun, bantal kulit soba, bantal seramik dinasti China, dan penyokong kepala kayu Afrika.', <svg key="i7" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>, 6],
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
        {articles.map(([slug, articleTitle, excerpt, icon, readingMinutes]) => <div className="faq-item" key={slug} data-reveal style={{ padding: '26px 0' }}>
          <a href={`/majalah/${slug}`} style={{ display: 'flex', gap: 16 }}>
            <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
            <span>
              <h2 style={{ color: 'var(--ink)', fontSize: 19, letterSpacing: '-.01em', margin: '0 0 8px' }}>{articleTitle}</h2>
              <p style={{ color: 'var(--text)', fontSize: 14, margin: '0 0 8px', maxWidth: 620 }}>{excerpt}</p>
              <p style={{ color: 'var(--text)', fontSize: 12.5, margin: 0 }}>{readingMinutes} minit bacaan</p>
            </span>
          </a>
        </div>)}
      </div>
    </div></section>

    <SiteFooter />
  </main>;
}
