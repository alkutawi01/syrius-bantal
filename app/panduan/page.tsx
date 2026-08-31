import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { whatsappUrl } from '../lib/whatsapp';

const title = 'Panduan Menempah Bantal Korporat — Syrius';
const description = 'Panduan ringkas menempah bantal sublimasi korporat: bila sesuai digunakan, cara penyediaan logo, dan langkah tempahan bersama Syrius.';

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

const occasions = [
  ['Hadiah pasukan & staf', 'Sebagai tanda penghargaan untuk staf sempena hari jadi syarikat, pencapaian pasukan atau cuti perayaan.'],
  ['Cenderahati acara & persidangan', 'Diberikan kepada tetamu atau peserta sebagai kenangan yang lebih tahan lama berbanding cenderamata biasa.'],
  ['Hadiah pelanggan & rakan strategik', 'Untuk mengukuhkan hubungan perniagaan dengan sesuatu yang membawa identiti jenama anda.'],
];

const artworkTips = [
  ['Format fail', 'Hantar logo dalam format vektor (AI, EPS, PDF) atau PNG latar belakang lutsinar berresolusi tinggi. Ini memastikan logo kekal tajam apabila dicetak.'],
  ['Warna jenama', 'Sertakan kod warna rasmi jenama anda (HEX atau Pantone) supaya warna cetakan sepadan dengan identiti visual sedia ada.'],
  ['Susun atur', 'Beritahu kami jika logo perlu diletakkan di satu bahagian sahaja atau berulang merentasi bantal, dan sama ada teks tambahan (contoh: nama acara) perlu disertakan.'],
];

export default function Panduan() {
  return <main>
    <a className="skip-link" href="#kandungan">Langkau ke kandungan utama</a>
    <ScrollReveal />
    <SiteHeader base="/" />

    <section className="section" id="kandungan" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">PANDUAN</p><h1>Sebelum anda <em>menempah.</em></h1></div>
        <p>Panduan ringkas untuk membantu anda memilih dan menyediakan tempahan bantal sublimasi korporat bersama Syrius.</p>
      </div>

      <div style={{ maxWidth: 700, margin: '0 0 var(--s7)' }} data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>Apa itu bantal sublimasi korporat?</h2>
        <p>Bantal sublimasi korporat ialah bantal yang dicetak menggunakan teknik sublimasi, iaitu proses mencetak reka bentuk terus ke atas fabrik supaya warna dan logo kekal tahan lama tanpa mudah pudar atau terkopek. Kaedah ini membolehkan logo, warna dan susun atur disesuaikan sepenuhnya mengikut identiti visual jenama anda.</p>
      </div>

      <div style={{ marginBottom: 'var(--s7)' }}>
        <h2 data-reveal style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: 0 }}>Bila sesuai menggunakan bantal korporat?</h2>
        <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateAreas: 'none', marginTop: 24 }}>
          {occasions.map(([title, text], i) => <div className="bento-tile bento-value" data-reveal style={{ transitionDelay: `${i * 80}ms` }} key={title}>
            <h3>{title}</h3><p>{text}</p>
          </div>)}
        </div>
      </div>

      <div style={{ maxWidth: 700, marginBottom: 'var(--s7)' }} data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>Berapa banyak unit patut ditempah?</h2>
        <p>Oleh sebab tiada kuantiti minimum yang tinggi, tempahan boleh dibuat mengikut bilangan sebenar yang anda perlukan. Sebagai panduan umum sebelum menghubungi kami:</p>
        <ul style={{ paddingLeft: 20, margin: '16px 0', display: 'grid', gap: 10 }}>
          <li><b>Kira bilangan penerima sebenar</b> — jumlah staf, tetamu acara atau pelanggan yang akan menerima, bukan anggaran kasar.</li>
          <li><b>Pertimbangkan sedikit lebihan</b> — sesetengah organisasi menambah beberapa unit tambahan untuk staf baru atau gantian, tetapi ini pilihan anda sepenuhnya, bukan syarat.</li>
          <li><b>Sahkan kuantiti sebelum reka bentuk dimuktamadkan</b> — supaya sebut harga dan tempoh siap yang kami berikan tepat mengikut jumlah akhir.</li>
        </ul>
      </div>

      <div style={{ marginBottom: 'var(--s7)' }}>
        <h2 data-reveal style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>Menyediakan logo dan reka bentuk</h2>
        <p data-reveal style={{ maxWidth: 700 }}>Untuk memastikan hasil cetakan setepat mungkin dengan identiti jenama anda, berikut beberapa perkara yang membantu proses semakan reka bentuk berjalan lancar:</p>
        <div className="faq-list" style={{ marginTop: 24 }}>
          {artworkTips.map(([title, text]) => <details className="faq-item" open key={title} data-reveal>
            <summary style={{ cursor: 'default' }}>{title}</summary>
            <p>{text}</p>
          </details>)}
        </div>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>Langkah tempahan</h2>
        <p style={{ maxWidth: 700, marginBottom: 24 }}>Proses tempahan bermula dengan perbualan ringkas di WhatsApp — tiada borang panjang, tiada kuantiti minimum tinggi.</p>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16, maxWidth: 700 }}>
          <li style={{ display: 'flex', gap: 14 }}><b style={{ color: 'var(--navy)', fontWeight: 800 }}>01</b><span>Hubungi kami di WhatsApp dan kongsi jenis acara, jumlah unit dan tujuan bantal korporat anda.</span></li>
          <li style={{ display: 'flex', gap: 14 }}><b style={{ color: 'var(--navy)', fontWeight: 800 }}>02</b><span>Hantar logo, kod warna jenama dan sebarang panduan identiti visual mengikut format di atas.</span></li>
          <li style={{ display: 'flex', gap: 14 }}><b style={{ color: 'var(--navy)', fontWeight: 800 }}>03</b><span>Kami semak reka bentuk, sediakan sebut harga dan anggaran tempoh siap sebelum cetakan dimulakan.</span></li>
        </ol>
      </div>
    </div></section>

    <section className="final-cta"><div className="container" data-reveal>
      <p className="eyebrow">SEDIA UNTUK BERMULA?</p>
      <h2>Kongsi keperluan anda.<br /><em>Kami uruskan selebihnya.</em></h2>
      <p>Hubungi Syrius di WhatsApp untuk berbincang tentang reka bentuk, kuantiti, harga dan penghantaran.</p>
      <Button href={whatsappUrl} variant="white">Mula tempahan <span aria-hidden="true">↗</span></Button>
    </div></section>

    <SiteFooter />
  </main>;
}
