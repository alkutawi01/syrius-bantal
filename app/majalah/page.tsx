import { ScrollReveal } from '../components/ScrollReveal';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const title = 'Majalah — Syrius';
const description = 'Panduan, tip dan pengetahuan seputar bantal korporat, sublimasi dan tekstil daripada Syrius.';

export const metadata = {
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

const articles = [
  ['apa-itu-percetakan-sublimasi', 'Apa itu percetakan sublimasi?', 'Penjelasan ringkas proses percetakan sublimasi: bagaimana reka bentuk digital dipindahkan secara kekal ke atas fabrik menggunakan haba dan tekanan.'],
  ['jenis-pengisian-bantal', 'Panduan memahami jenis pengisian bantal', 'Perbezaan gentian poliester, bulu, kapok dan buih memori sebagai pengisian bantal — dari segi keselesaan, ketahanan dan penjagaan.'],
  ['idea-hadiah-korporat-bermakna', 'Mengapa hadiah korporat yang berguna lebih berkesan dalam membina ingatan jenama?', 'Kajian industri produk promosi menunjukkan hadiah yang benar-benar berguna lebih diingati berbanding cenderamata sekali guna. Rujukan, prinsip dan cara memilih.'],
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
    <SiteHeader base="/" />

    <section className="section" id="majalah" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">MAJALAH</p><h1>Panduan dan <em>pengetahuan.</em></h1></div>
        <p>Artikel seputar hadiah korporat, bantal, tekstil dan percetakan sublimasi.</p>
      </div>

      <div className="faq-list">
        {articles.map(([slug, articleTitle, excerpt]) => <div className="faq-item" key={slug} data-reveal style={{ padding: '26px 0' }}>
          <a href={`/majalah/${slug}`} style={{ display: 'block' }}>
            <h2 style={{ color: 'var(--ink)', fontSize: 19, letterSpacing: '-.01em', margin: '0 0 8px' }}>{articleTitle}</h2>
            <p style={{ color: 'var(--text)', fontSize: 14, margin: 0, maxWidth: 620 }}>{excerpt}</p>
          </a>
        </div>)}
      </div>
    </div></section>

    <SiteFooter />
  </main>;
}
