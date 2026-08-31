import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

const title = 'Panduan Jenis Pengisian Bantal — Majalah Syrius';
const description = 'Perbezaan gentian poliester, bulu, kapok dan buih memori sebagai pengisian bantal — dari segi keselesaan, ketahanan dan penjagaan.';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-01',
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

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Panduan memahami jenis pengisian bantal',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-01',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius' },
};

const fillings = [
  ['poliester', 'Gentian poliester', 'Jenis paling biasa dan berpatutan. Ringan dan lembut pada mulanya, tetapi cenderung menjadi kempis dan kurang sokongan selepas kira-kira satu hingga dua tahun penggunaan. Kebanyakannya boleh dibasuh dan dikeringkan menggunakan mesin.'],
  ['bulu', <>Bulu angsa/itik <em lang="en" style={{ fontStyle: 'normal' }}>(down/feather)</em></>, <>Sangat lembut dan mengekalkan kembungan (<em lang="en" style={{ fontStyle: 'normal' }}>loft</em>) lebih lama berbanding gentian sintetik — dianggarkan sehingga tiga kali ganda tempohnya. Tahan sekitar dua hingga tiga tahun sebelum kehilangan sokongan, tetapi boleh mencetuskan alahan pada sesetengah individu.</>],
  ['kapok', 'Kapok', 'Gentian berasaskan tumbuhan yang ringan dan lembut, sering dijadikan alternatif vegan kepada bulu. Tahan lama dan tidak mudah mampat, tetapi memerlukan pengemasan berkala supaya tidak berkelompok.'],
  ['foam', <>Buih memori <em lang="en" style={{ fontStyle: 'normal' }}>(memory foam)</em></>, 'Bahan sintetik yang membentuk semula mengikut tekanan kepala dan leher, memberikan sokongan yang lebih spesifik. Kelemahannya, ia boleh menyerap dan menyimpan haba berbanding jenis pengisian lain.'],
];

export default function Artikel() {
  return <main>
    <a className="skip-link" href="#artikel">Langkau ke kandungan utama</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />
    <SiteHeader base="/" />

    <article className="section" id="artikel" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <p className="eyebrow" data-reveal>MAJALAH</p>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '0 0 20px' }} data-reveal>
        Panduan memahami jenis <em style={{ fontStyle: 'normal' }}>pengisian bantal.</em>
      </h1>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Jenis pengisian menentukan tahap keselesaan, sokongan dan jangka hayat sesebuah bantal — bukan sekadar reka bentuk luarannya. Berikut perbezaan asas antara beberapa jenis pengisian yang paling biasa digunakan.
      </p>

      <div data-reveal>
        {fillings.map(([key, name, text]) => <div key={key} style={{ marginBottom: 28 }}>
          <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>{name}</h2>
          <p style={{ maxWidth: 700 }}>{text}</p>
        </div>)}
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Tiada jenis yang "terbaik" secara mutlak</h2>
        <p>Pemilihan pengisian bergantung pada keutamaan peribadi — tahap kekukuhan sokongan yang diperlukan, sensitiviti alahan, bajet dan cara penjagaan yang sanggup dilakukan. Bantal yang sesuai untuk seseorang belum tentu sesuai untuk yang lain, jadi memahami ciri setiap jenis adalah langkah pertama sebelum membuat pilihan.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>Rujukan</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Nolah Sleep. <em lang="en" style={{ fontStyle: 'italic' }}>The Perfect Pillow: How To Choose Between Down, Feather, Foam, and More</em>.</li>
          <li>Bearaby. <em lang="en" style={{ fontStyle: 'italic' }}>8 Pillow Filling Types: Latex, Down, Feather & More</em>.</li>
        </ul>
      </div>
    </div></article>

    <SiteFooter />
  </main>;
}
