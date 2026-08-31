import { Button } from './components/Button';
import { Wordmark } from './components/Wordmark';
import { ScrollReveal } from './components/ScrollReveal';

const whatsappUrl = 'https://wa.me/601154498790?text=Hi%20Syrius%2C%20saya%20nak%20tempah%20bantal%20korporat%20berlogo';

const values = [
  ['Pengalaman sejak 2011', 'Dihasilkan oleh pasukan sublimasi Syrius yang telah dipercayai sejak 2011.', <svg key="v1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.9 6.4L22 9l-5 5.2L18.2 22 12 18.3 5.8 22 7 14.2 2 9l7.1-.6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>],
  ['Sesuai untuk tempahan kuantiti kecil', 'Tidak perlu menempah dalam jumlah besar untuk mendapatkan standard kualiti yang sama.', <svg key="v2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M3 8v8l9 4 9-4V8M12 12v8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['Reka bentuk mengikut jenama anda', 'Kami menyesuaikan logo, warna dan susun atur mengikut identiti visual organisasi anda.', <svg key="v3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" /><circle cx="10.5" cy="7" r="1.1" fill="currentColor" /><circle cx="15" cy="8" r="1.1" fill="currentColor" /></svg>],
];

const faqs = [
  ['Adakah kuantiti tempahan minimum tinggi?', 'Tidak. Tempahan tidak perlu bermula dalam jumlah besar untuk mendapatkan standard kualiti yang sama — sesuai untuk keperluan kecil seperti hadiah pasukan atau acara dalaman.'],
  ['Bagaimana cara menempah?', 'Hubungi kami melalui WhatsApp, kongsi keperluan (jenis acara, jumlah unit dan tujuan), hantar logo dan warna jenama anda. Kami akan semak reka bentuk dan sediakan sebut harga sebelum cetakan bermula.'],
  ['Bolehkah reka bentuk disesuaikan sepenuhnya ikut jenama kami?', 'Ya. Logo, warna dan susun atur disesuaikan mengikut identiti visual organisasi anda.'],
  ['Kawasan mana yang diliputi untuk penghantaran?', 'Kelantan dan Pahang. Studio kami di Kota Bharu.'],
  ['Berapa lama tempoh penyediaan tempahan?', 'Bergantung pada kuantiti dan kerumitan reka bentuk. Hubungi kami di WhatsApp untuk anggaran tempoh yang tepat mengikut keperluan anda.'],
];

const steps = [
  ['01', 'Kongsi keperluan', 'Beritahu kami jenis acara, jumlah unit dan tujuan bantal korporat anda.', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['02', 'Hantar logo', 'Hantar logo, warna jenama atau panduan identiti visual melalui WhatsApp.', <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ['03', 'Sahkan tempahan', 'Kami akan menyemak reka bentuk dan menyediakan sebut harga sebelum proses cetakan dimulakan.', <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <ScrollReveal />
    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Pillows</span><a href="tel:+601154498790">+60 11-5449 8790</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="#utama" aria-label="Syrius, kembali ke atas"><Wordmark /></a>
      <nav aria-label="Navigasi utama"><a href="#cara">Cara tempahan</a><a href="#koleksi">Kegunaan</a><a href="#tentang">Tentang kami</a><a href="#faq">Soalan lazim</a></nav>
      <Button href={whatsappUrl} variant="white" size="sm">Minta sebut harga <span aria-hidden="true">↗</span></Button>
    </div></header>

    <section className="bento" id="utama"><div className="container bento-grid">
      <div className="bento-tile bento-hero">
        <p className="eyebrow">BRANDED COMFORT, MADE TO GIFT</p>
        <h1>Logo anda.<br />Dalam ingatan <em>mereka.</em></h1>
        <p className="lede">Bantal sublimasi korporat untuk syarikat, organisasi dan jenama yang mahu memberikan sesuatu yang lebih bermakna daripada cenderamata biasa.</p>
        <div className="hero-actions"><Button href={whatsappUrl} variant="navy">Tempah bantal korporat <span aria-hidden="true">↗</span></Button><a className="text-link" href="#cara">Lihat caranya <span aria-hidden="true">↓</span></a></div>
      </div>

      <figure className="bento-tile bento-photo">
        <img src="/syrius-corporate-pillow-blank.jpg" alt="Bantal sublimasi kosong, sedia untuk cetakan logo jenama anda" />
        <figcaption><span>Corporate gifting</span>Made for your brand</figcaption>
      </figure>

      {values.map(([title, text, icon], i) => <div className="bento-tile bento-value" style={{ gridArea: `val${i + 1}`, transitionDelay: `${i * 80}ms` }} data-reveal key={title}>
        <span className="bento-icon">{icon}</span><h3>{title}</h3><p>{text}</p>
      </div>)}

      <div className="bento-tile bento-fact" id="koleksi" data-reveal style={{ transitionDelay: '240ms' }}>
        <div className="fact"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M8.5 14.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg><div><b>Sejak 2011</b><span>Sebahagian daripada Syrius</span></div></div>
        <div className="fact"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" /></svg><div><b>Kelantan &amp; Pahang</b><span>Liputan penghantaran</span></div></div>
      </div>

      <div className="bento-tile bento-steps" id="cara" data-reveal>
        <p className="eyebrow">CARA TEMPAHAN</p>
        <div className="bento-steps-row">{steps.map(([number, title, text, icon]) => <div key={number}><span className="dot">{icon}</span><b className="step-number">{number}</b><h3>{title}</h3><p>{text}</p></div>)}</div>
      </div>
    </div></section>

    <section className="statement" id="tentang"><div className="container statement-grid" data-reveal><p className="eyebrow">SYRIUS MALAYSIA</p><h2>Jadikan jenama anda<br />lebih dekat dengan penerima.</h2><p>Syrius membantu organisasi menterjemahkan identiti visual kepada hadiah korporat yang berguna dan bermakna untuk staf, pelanggan, rakan strategik dan tetamu acara.</p></div></section>

    <section className="section faq" id="faq"><div className="container">
      <div className="section-head" data-reveal><div><p className="eyebrow">SOALAN LAZIM</p><h2>Sebelum anda <em>hubungi kami.</em></h2></div><p>Jawapan ringkas untuk soalan yang selalu ditanya sebelum menempah.</p></div>
      <div className="faq-list">{faqs.map(([q, a]) => <details className="faq-item" key={q} data-reveal><summary>{q}<span className="faq-icon" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
    </div></section>

    <section className="final-cta"><div className="container" data-reveal><p className="eyebrow">SEDIA UNTUK BERI IMPAK?</p><h2>Jenama anda.<br /><em>Hadiah mereka.</em></h2><p>Hubungi Syrius untuk berbincang tentang reka bentuk, kuantiti, harga dan penghantaran.</p><Button href={whatsappUrl} variant="white">Dapatkan sebut harga <span aria-hidden="true">↗</span></Button></div></section>

    <a className="fab-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Syrius">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Z" stroke="#fff" strokeWidth="1.6"/><path d="M8.5 8.4c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.2.1.4.1.5-.1.2-.2.6-.7.8-1 .2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.4.1.5-.1 1.1-.4 1.5-.3.4-1 .8-1.8.8-1.5 0-3.2-.9-4.5-2.1-1.3-1.3-2.3-3-2.5-4.6-.1-.7.1-1.3.5-1.7Z" fill="#fff"/></svg>
    </a>

    <footer><div className="container footer-grid"><div><Wordmark /><p>Bantal sublimasi korporat untuk hadiah yang lebih bermakna.</p></div><div><p className="footer-label">HUBUNGI</p><a href="https://wa.me/601154498790">+60 11-5449 8790</a><a href="mailto:syriusmalaysia@gmail.com">syriusmalaysia@gmail.com</a></div><div><p className="footer-label">STUDIO</p><a href="https://www.google.com/maps/search/?api=1&query=PT+428%2C+Pusat+Perniagaan+Bandar+Baru+Tunjong%2C+Kota+Bharu%2C+Kelantan" target="_blank" rel="noreferrer">PT 428, Pusat Perniagaan<br />Bandar Baru Tunjong, Kota Bharu.</a></div></div><div className="container copyright">© 2026 Syrius Malaysia <span>Wear Your Vision</span></div></footer>
  </main>;
}
