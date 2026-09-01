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
  ['Hadiah pasukan & staf', 'Sebagai tanda penghargaan untuk staf sempena hari jadi syarikat, pencapaian pasukan atau cuti perayaan.', <svg key="o1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.5" /><path d="M14.5 20c.3-2.7 2-4.8 4.3-4.8 1.6 0 3 1 3.7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>],
  ['Cenderahati acara & persidangan', 'Diberikan kepada tetamu atau peserta sebagai kenangan yang lebih tahan lama berbanding cenderamata biasa.', <svg key="o2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>],
  ['Hadiah pelanggan & rakan strategik', 'Untuk mengukuhkan hubungan perniagaan dengan sesuatu yang membawa identiti jenama anda.', <svg key="o3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="7" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" /><path d="M10.2 12h3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>],
];

const artworkTips = [
  ['Format fail', 'Hantar logo dalam format vektor (AI, EPS, PDF) atau PNG latar belakang lutsinar beresolusi tinggi. Ini memastikan logo kekal tajam apabila dicetak.', <svg key="t1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>],
  ['Warna jenama', 'Sertakan kod warna rasmi jenama anda (HEX atau Pantone) supaya warna cetakan sepadan dengan identiti visual sedia ada.', <svg key="t2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" /><circle cx="10.5" cy="7" r="1.1" fill="currentColor" /><circle cx="15" cy="8" r="1.1" fill="currentColor" /></svg>],
  ['Susun atur', 'Beritahu kami jika logo perlu diletakkan di satu bahagian sahaja atau berulang merentasi bantal, dan sama ada teks tambahan (contoh: nama acara) perlu disertakan.', <svg key="t3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg>],
];

const orderSteps = [
  ['Hubungi kami di WhatsApp dan kongsi jenis acara, jumlah unit dan tujuan bantal korporat anda.', <svg key="s1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['Hantar logo, kod warna jenama dan sebarang panduan identiti visual mengikut format di atas.', <svg key="s2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ['Kami semak reka bentuk, sediakan sebut harga dan anggaran tempoh siap sebelum cetakan dimulakan.', <svg key="s3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cara menempah bantal korporat Syrius',
  step: orderSteps.map(([text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    text,
  })),
};

export default function Panduan() {
  return <main>
    <a className="skip-link" href="#kandungan">Langkau ke kandungan utama</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
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
          {occasions.map(([title, text, icon], i) => <div className="bento-tile bento-value" data-reveal style={{ transitionDelay: `${i * 80}ms` }} key={title}>
            <span className="bento-icon">{icon}</span><h3>{title}</h3><p>{text}</p>
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
          {artworkTips.map(([title, text, icon]) => <details className="faq-item" open key={title} data-reveal>
            <summary style={{ cursor: 'default', justifyContent: 'flex-start', gap: 14 }}><span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>{title}</summary>
            <p style={{ marginLeft: 52 }}>{text}</p>
          </details>)}
        </div>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>Langkah tempahan</h2>
        <p style={{ maxWidth: 700, marginBottom: 24 }}>Proses tempahan bermula dengan perbualan ringkas di WhatsApp — tiada borang panjang, tiada kuantiti minimum tinggi.</p>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16, maxWidth: 700 }}>
          {orderSteps.map(([text, icon], i) => <li style={{ display: 'flex', gap: 14, alignItems: 'center' }} key={text}>
            <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
            <span><b style={{ color: 'var(--navy)', fontWeight: 800, marginRight: 8 }}>{String(i + 1).padStart(2, '0')}</b>{text}</span>
          </li>)}
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
