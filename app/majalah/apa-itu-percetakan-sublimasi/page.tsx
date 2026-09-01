import type { Metadata } from 'next';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

const title = 'Apa Itu Percetakan Sublimasi? — Majalah Syrius';
const description = 'Penjelasan ringkas proses percetakan sublimasi: bagaimana reka bentuk digital dipindahkan secara kekal ke atas fabrik menggunakan haba dan tekanan.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-01',
    modifiedTime: '2026-09-01',
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

const steps = [
  ['Reka bentuk dicetak', 'Reka bentuk digital dicetak ke kertas pemindahan khas menggunakan dakwat sublimasi pepejal.', <svg key="s1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ['Ditekan dengan haba', 'Kertas dan fabrik dimasukkan ke mesin penekan haba pada suhu sekitar 195–205 °C.', <svg key="s2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M12 10v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="4" y="17" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>],
  ['Dakwat menjadi gas', 'Haba menukar dakwat pepejal terus menjadi gas dan membuka liang halus fabrik.', <svg key="s3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="7" cy="8" r="1.3" fill="currentColor" /><circle cx="12" cy="6" r="1.3" fill="currentColor" /><circle cx="17" cy="9" r="1.3" fill="currentColor" /><circle cx="9" cy="13" r="1.3" fill="currentColor" /><circle cx="15" cy="14" r="1.3" fill="currentColor" /><circle cx="12" cy="18" r="1.3" fill="currentColor" /></svg>],
  ['Terperangkap kekal', 'Fabrik menyejuk, liang tertutup semula dan dakwat kekal terperangkap di dalamnya.', <svg key="s4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Apa itu percetakan sublimasi?',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

export default function Artikel() {
  return <main>
    <a className="skip-link" href="#artikel">Langkau ke kandungan utama</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />
    <SiteHeader base="/" active="majalah" />

    <article className="section" id="artikel" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <a className="eyebrow" href="/majalah" data-reveal>← MAJALAH</a>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '0 0 20px' }} data-reveal>
        Apa itu percetakan <em style={{ fontStyle: 'normal' }}>sublimasi?</em>
      </h1>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Percetakan sublimasi ialah kaedah mencetak reka bentuk yang menggunakan haba untuk memindahkan dakwat terus ke dalam struktur fabrik, bukan sekadar melekat di permukaannya. Kaedah ini digunakan secara meluas untuk mencetak logo, corak dan reka bentuk berwarna penuh ke atas tekstil seperti bantal, jersi dan pakaian sukan.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bagaimana proses ini berfungsi</h2>
        <div className="step-grid" style={{ marginBottom: 24 }}>
          {steps.map(([title, text, icon], i) => <div className="bento-tile bento-value" key={title}>
            <span className="bento-icon">{icon}</span>
            <p style={{ color: 'var(--text)', fontSize: 11, fontWeight: 700, letterSpacing: '.05em', margin: '0 0 4px' }}>{String(i + 1).padStart(2, '0')}</p>
            <h3>{title}</h3><p>{text}</p>
          </div>)}
        </div>
        <p>Proses bermula apabila reka bentuk digital dicetak ke atas kertas pemindahan khas menggunakan dakwat sublimasi — dakwat yang berbentuk pepejal pada suhu bilik. Kertas ini kemudian diletakkan bersentuhan dengan fabrik dan dimasukkan ke dalam mesin penekan haba (<em lang="en" style={{ fontStyle: 'normal' }}>heat press</em>) pada suhu tinggi, biasanya sekitar 195–205 °C, dengan tekanan yang tetap selama beberapa saat.</p>
        <p>Pada suhu ini, dakwat pepejal bertukar terus menjadi gas tanpa melalui fasa cecair — proses yang dipanggil sublimasi. Haba turut membuka liang-liang halus pada fabrik, membolehkan gas dakwat meresap masuk. Sebaik sahaja haba ditarik keluar dan fabrik menyejuk, liang-liang tersebut tertutup semula dan dakwat terperangkap secara kekal di dalam struktur fabrik.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Kenapa fabrik poliester digunakan</h2>
        <p>Kaedah ini hanya berkesan pada fabrik yang mengandungi poliester atau bahan bersalut polimer, kerana proses sublimasi bergantung pada tindak balas kimia antara dakwat gas dan struktur molekul poliester. Fabrik semula jadi seperti kapas tidak mempunyai struktur yang sesuai untuk menerima dakwat dengan cara ini, jadi hasil cetakan pada kapas biasanya pudar atau tidak jelas berbanding dengan hasil cetakan pada poliester.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Ciri hasil cetakan</h2>
        <p>Oleh sebab dakwat menjadi sebahagian daripada gentian fabrik dan bukan lapisan di atas permukaannya, hasil cetakan sublimasi tidak retak, mengelupas atau luntur dengan cara yang sama seperti cetakan berasaskan lapisan permukaan (contohnya, sablon skrin biasa). Ini menjadikannya sesuai untuk reka bentuk berwarna penuh dan corak yang merentasi keseluruhan permukaan produk, seperti pada bantal atau jersi bercetak penuh.</p>
        <p>Setiap kaedah percetakan — sublimasi, DTF, DTG atau sablon — mempunyai kelebihan dan kesesuaian tersendiri bergantung pada jenis fabrik, kerumitan reka bentuk dan kuantiti tempahan. Tiada satu kaedah yang secara mutlak &ldquo;terbaik&rdquo; untuk semua situasi.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>Rujukan</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Mimaki USA. <a href="https://www.mimakiusa.com/blog/understanding-the-dye-sublimation-process/" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Understanding the Dye Sublimation Process</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>VistaPrint. <a href="https://www.vistaprint.com/hub/dye-sublimation-printing" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Dye Sublimation Printing Guide</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Bantal korporat Syrius dicetak menggunakan teknik sublimasi ini. <a className="text-link text-link--right" href="/panduan">Lihat panduan menempah <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter />
  </main>;
}
