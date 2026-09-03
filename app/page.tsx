import type { ReactNode } from 'react';
import { Button } from './components/Button';
import { ScrollReveal } from './components/ScrollReveal';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { whatsappUrl } from './lib/whatsapp';

const values: [string, string, ReactNode][] = [
  ['Pengalaman sejak 2011', 'Dihasilkan oleh pasukan sublimasi Syrius yang telah dipercayai sejak 2011.', <svg key="v1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.9 6.4L22 9l-5 5.2L18.2 22 12 18.3 5.8 22 7 14.2 2 9l7.1-.6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>],
  ['Sesuai untuk tempahan kuantiti kecil', 'Tidak perlu menempah dalam jumlah besar untuk mendapatkan standard kualiti yang sama.', <svg key="v2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M3 8v8l9 4 9-4V8M12 12v8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['Reka bentuk mengikut jenama anda', 'Kami menyesuaikan logo, warna dan susun atur mengikut identiti visual organisasi anda.', <svg key="v3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" /><circle cx="10.5" cy="7" r="1.1" fill="currentColor" /><circle cx="15" cy="8" r="1.1" fill="currentColor" /></svg>],
];

const faqs: [string, string, ReactNode?][] = [
  ['Adakah kuantiti tempahan minimum tinggi?', 'Tidak. Tempahan tidak perlu bermula dalam jumlah besar untuk mendapatkan standard kualiti yang sama — sesuai untuk keperluan kecil seperti hadiah pasukan atau acara dalaman.'],
  ['Bagaimana cara menempah?', 'Hubungi kami melalui WhatsApp, kongsi keperluan (jenis acara, jumlah unit dan tujuan), hantar logo dan warna jenama anda. Kami akan menyemak reka bentuk dan menyediakan sebut harga sebelum cetakan bermula.'],
  ['Bolehkah reka bentuk disesuaikan sepenuhnya mengikut jenama kami?', 'Ya. Logo, warna dan susun atur disesuaikan mengikut identiti visual organisasi anda.', <> <a className="text-link" href="/portfolio">Lihat contoh reka bentuk</a></>],
  ['Kawasan mana yang diliputi untuk penghantaran?', 'Kelantan dan Pahang. Studio kami di Kota Bharu (Kelantan) dan Mentakab (Pahang).'],
  ['Berapa lama tempoh penyediaan tempahan?', 'Bergantung pada kuantiti dan kerumitan reka bentuk. Hubungi kami melalui WhatsApp untuk anggaran tempoh yang tepat mengikut keperluan anda.', <> <a className="text-link" href="/panduan">Baca panduan penuh</a></>],
];

const steps: [string, string, string, ReactNode][] = [
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
    <a className="skip-link" href="#utama">Langkau ke kandungan utama</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <ScrollReveal />
    <SiteHeader />

    <section className="bento" id="utama" tabIndex={-1}><div className="container bento-grid">
      <div className="bento-tile bento-hero">
        <p className="eyebrow" lang="en">BRANDED COMFORT, MADE TO GIFT</p>
        <h1>Logo anda.<br />Dalam ingatan <em>mereka.</em></h1>
        <p className="lede">Bantal sublimasi korporat, dicetak khas dengan logo dan warna jenama anda sendiri — bukan cenderamata generik. Sesuai untuk tempahan kecil mahupun besar, dihasilkan oleh pasukan yang telah berpengalaman sejak 2011.</p>
        <div className="hero-actions"><Button href={whatsappUrl} variant="navy">Tempah bantal korporat <span aria-hidden="true">↗</span></Button><a className="text-link" href="#cara">Lihat caranya <span aria-hidden="true">↓</span></a></div>
      </div>

      <figure className="bento-tile bento-photo">
        <picture>
          <source srcSet="/syrius-corporate-pillow-blank-900.webp 900w, /syrius-corporate-pillow-blank.webp 1600w" sizes="(max-width: 900px) 100vw, 700px" type="image/webp" />
          <img src="/syrius-corporate-pillow-blank.jpg" srcSet="/syrius-corporate-pillow-blank-900.jpg 900w, /syrius-corporate-pillow-blank.jpg 1600w" sizes="(max-width: 900px) 100vw, 700px" alt="Bantal sublimasi kosong, sedia untuk cetakan logo jenama anda" fetchPriority="high" />
        </picture>
        <figcaption lang="en"><span>Corporate gifting</span>Made for your brand</figcaption>
      </figure>

      <h2 className="sr-only">Sebab pilih Syrius</h2>
      {values.map(([title, text, icon], i) => <div className="bento-tile bento-value" id={i === 0 ? 'kelebihan' : undefined} style={{ gridArea: `val${i + 1}`, transitionDelay: `${i * 80}ms` }} data-reveal key={title}>
        <span className="bento-icon">{icon}</span><h3>{title}</h3><p>{text}</p>
      </div>)}

      <div className="bento-tile bento-fact" data-reveal style={{ transitionDelay: '240ms' }}>
        <div className="fact"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M8.5 14.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg><div><b>Sejak 2011</b><span>Sebahagian daripada Syrius</span></div></div>
        <div className="fact"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" /></svg><div><b>Kelantan &amp; Pahang</b><span>Liputan penghantaran</span></div></div>
      </div>

      <div className="bento-tile bento-steps" id="cara" data-reveal>
        <h2 className="eyebrow">CARA TEMPAHAN</h2>
        <ol className="bento-steps-row">{steps.map(([number, title, text, icon]) => <li key={number}><span className="dot">{icon}</span><b className="step-number">{number}</b><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </div>
    </div></section>

    <section className="statement" id="tentang" aria-labelledby="tentang-heading"><div className="container statement-grid" data-reveal><p className="eyebrow">SYRIUS MALAYSIA</p><h2 id="tentang-heading">Jadikan jenama anda<br />lebih dekat dengan penerima.</h2><p>Logo dan warna jenama anda dicetak terus ke atas fabrik bantal melalui sublimasi, hasil tahan lama untuk hadiah staf, pelanggan, rakan strategik dan tetamu acara — bukan cetakan tampal yang mudah luntur.</p></div></section>

    <section className="section faq" id="faq" aria-labelledby="faq-heading"><div className="container">
      <div className="section-head" data-reveal><div><p className="eyebrow">SOALAN LAZIM</p><h2 id="faq-heading">Sebelum anda <em>menghubungi kami.</em></h2></div><p>Jawapan ringkas untuk soalan yang selalu ditanya sebelum menempah.</p></div>
      <ul className="faq-list">{faqs.map(([q, a, link]) => <li key={q}><details className="faq-item" data-reveal><summary>{q}<span className="faq-icon" aria-hidden="true">+</span></summary><p>{a}{link}</p></details></li>)}</ul>
    </div></section>

    <section className="final-cta" aria-labelledby="final-cta-heading"><div className="container" data-reveal><p className="eyebrow">SEDIA UNTUK BERI IMPAK?</p><h2 id="final-cta-heading">Jenama anda.<br /><em>Hadiah mereka.</em></h2><p>Hubungi Syrius untuk berbincang tentang reka bentuk, kuantiti, harga dan penghantaran.</p><Button href={whatsappUrl} variant="white">Dapatkan sebut harga <span aria-hidden="true">↗</span></Button></div></section>

    <SiteFooter />
  </main>;
}
