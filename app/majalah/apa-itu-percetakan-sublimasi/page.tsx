import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

const title = 'Apa Itu Percetakan Sublimasi? — Majalah Syrius';
const description = 'Penjelasan ringkas proses percetakan sublimasi: bagaimana reka bentuk digital dipindahkan secara kekal ke atas fabrik menggunakan haba dan tekanan.';

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
  headline: 'Apa itu percetakan sublimasi?',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-01',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius' },
};

export default function Artikel() {
  return <main>
    <a className="skip-link" href="#artikel">Langkau ke kandungan utama</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />
    <SiteHeader base="/" />

    <article className="section" id="artikel" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <p className="eyebrow" data-reveal>MAJALAH</p>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '0 0 20px' }} data-reveal>
        Apa itu percetakan <em style={{ fontStyle: 'normal' }}>sublimasi?</em>
      </h1>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Percetakan sublimasi ialah kaedah mencetak reka bentuk yang menggunakan haba untuk memindahkan dakwat terus ke dalam struktur fabrik, bukan sekadar melekat di permukaannya. Kaedah ini digunakan secara meluas untuk mencetak logo, corak dan reka bentuk berwarna penuh ke atas tekstil seperti bantal, jersi dan pakaian sukan.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bagaimana proses ini berfungsi</h2>
        <p>Proses bermula dengan reka bentuk digital dicetak ke atas kertas pemindahan khas menggunakan dakwat sublimasi — dakwat yang berbentuk pepejal pada suhu bilik. Kertas ini kemudian diletakkan bersentuhan dengan fabrik dan dimasukkan ke dalam mesin penekan haba (<em lang="en" style={{ fontStyle: 'normal' }}>heat press</em>) pada suhu tinggi, biasanya sekitar 195–205°C, dengan tekanan yang tetap selama beberapa saat.</p>
        <p>Pada suhu ini, dakwat pepejal bertukar terus menjadi gas tanpa melalui fasa cecair — proses yang dipanggil sublimasi. Haba turut membuka liang-liang halus pada fabrik, membolehkan gas dakwat meresap masuk. Sebaik sahaja haba ditarik keluar dan fabrik menyejuk, liang-liang tersebut menutup semula dan dakwat terperangkap secara kekal di dalam struktur fabrik.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Kenapa fabrik poliester digunakan</h2>
        <p>Kaedah ini hanya berkesan pada fabrik yang mengandungi poliester atau bahan bersalut polimer, kerana proses sublimasi bergantung pada tindak balas kimia antara dakwat gas dan struktur molekul poliester. Fabrik semula jadi seperti kapas tidak mempunyai struktur yang sesuai untuk menerima dakwat dengan cara ini, jadi hasil cetakan pada kapas biasanya pudar atau tidak jelas berbanding pada poliester.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Ciri hasil cetakan</h2>
        <p>Oleh sebab dakwat menjadi sebahagian daripada gentian fabrik dan bukan lapisan di atas permukaannya, hasil cetakan sublimasi tidak retak, mengelupas atau luntur dengan cara yang sama seperti cetakan berasaskan lapisan permukaan (contohnya sablon skrin biasa). Ini menjadikannya sesuai untuk reka bentuk berwarna penuh dan corak yang merentasi keseluruhan permukaan produk, seperti pada bantal atau jersi bercetak penuh.</p>
        <p>Setiap kaedah percetakan — sublimasi, DTF, DTG atau sablon — mempunyai kelebihan dan kesesuaian tersendiri bergantung pada jenis fabrik, kerumitan reka bentuk dan kuantiti tempahan. Tiada satu kaedah yang secara mutlak "terbaik" untuk semua situasi.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>Rujukan</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Mimaki USA. <em lang="en" style={{ fontStyle: 'italic' }}>Understanding the Dye Sublimation Process</em>.</li>
          <li>VistaPrint. <em lang="en" style={{ fontStyle: 'italic' }}>Dye Sublimation Printing Guide</em>.</li>
        </ul>
      </div>
    </div></article>

    <SiteFooter />
  </main>;
}
