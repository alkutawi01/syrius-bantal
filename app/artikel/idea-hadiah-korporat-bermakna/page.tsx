import { Button } from '../../components/Button';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import { whatsappUrl } from '../../lib/whatsapp';

const title = 'Kenapa Hadiah Korporat Functional Lebih Berkesan? — Syrius';
const description = 'Hadiah korporat yang berguna dalam kehidupan seharian lebih diingati berbanding cenderamata sekali guna. Ini sebab dan cara memilihnya.';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-08-31',
    locale: 'ms_MY',
    siteName: 'Syrius',
    images: [{ url: '/syrius-corporate-pillow-blank.jpg', width: 1600, height: 1067, alt: 'Bantal sublimasi korporat Syrius' }],
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
  headline: 'Kenapa hadiah korporat functional lebih berkesan?',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-08-31',
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
      <p className="eyebrow" data-reveal>ARTIKEL</p>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(28px, 4vw, 40px)', margin: '0 0 20px' }} data-reveal>
        Kenapa hadiah korporat <em style={{ fontStyle: 'normal' }}>functional</em> lebih berkesan?
      </h1>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Ramai organisasi masih memilih cenderamata generik seperti pen, buku nota atau beg plastik semasa merancang hadiah untuk staf, pelanggan atau tetamu acara. Namun barang yang jarang digunakan selepas acara tamat, jarang jugalah ia mengingatkan penerima tentang jenama anda.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Hadiah yang digunakan, jenama yang diingati</h2>
        <p>Prinsip asas pemasaran hadiah korporat mudah: semakin kerap sesuatu barang digunakan dalam kehidupan seharian penerima, semakin kerap jugalah mereka terpandang logo atau nama jenama pada barang tersebut. Barang sekali guna atau hiasan semata-mata cepat dilupakan; barang yang benar-benar berguna kekal dalam ruang kerja, rumah atau perjalanan penerima untuk tempoh yang lebih lama.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Apa yang perlu diberi perhatian semasa memilih</h2>
        <p>Sebelum menempah hadiah korporat dalam kuantiti besar atau kecil, tiga perkara ini wajar disemak dahulu:</p>
        <ul style={{ paddingLeft: 20, margin: '16px 0', display: 'grid', gap: 10 }}>
          <li><b>Kebolehsesuaian jenama</b> — bolehkah reka bentuk, warna dan logo disesuaikan sepenuhnya mengikut identiti visual organisasi anda, bukan sekadar dicetak generik?</li>
          <li><b>Kegunaan sebenar</b> — adakah barang ini sesuatu yang penerima akan simpan dan guna, bukan terus dibuang selepas acara?</li>
          <li><b>Fleksibiliti kuantiti</b> — bolehkah tempahan dibuat dalam jumlah kecil untuk keperluan seperti hadiah pasukan, tanpa perlu kuantiti minimum yang tinggi?</li>
        </ul>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bantal sublimasi sebagai satu pilihan</h2>
        <p>Bantal sublimasi korporat memenuhi ketiga-tiga kriteria di atas — logo dan warna jenama boleh dicetak terus ke atas fabrik dengan hasil yang tahan lama, ia barang yang benar-benar digunakan (di rumah, pejabat atau semasa perjalanan), dan tempahan boleh dibuat mengikut keperluan tanpa kuantiti minimum yang tinggi. Ini menjadikannya pilihan yang wajar dipertimbangkan bersama hadiah korporat lain yang sedang anda kaji.</p>
      </div>
    </div></article>

    <section className="final-cta"><div className="container" data-reveal>
      <p className="eyebrow">TERTARIK NAK CUBA?</p>
      <h2>Jenama anda.<br /><em>Hadiah mereka.</em></h2>
      <p>Hubungi Syrius untuk berbincang tentang reka bentuk, kuantiti, harga dan penghantaran bantal sublimasi korporat.</p>
      <Button href={whatsappUrl} variant="white">Dapatkan sebut harga <span aria-hidden="true">↗</span></Button>
    </div></section>

    <SiteFooter />
  </main>;
}
