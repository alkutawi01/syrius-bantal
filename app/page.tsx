import { Button } from './components/Button';
import { Wordmark } from './components/Wordmark';

const whatsappUrl = 'https://wa.me/601154498790?text=Hi%20Syrius%2C%20saya%20nak%20tempah%20bantal%20korporat%20berlogo';

const values = [
  ['01', 'Logo yang dibawa pulang', 'Jadikan identiti organisasi anda sesuatu yang boleh dihargai selepas acara selesai.'],
  ['02', 'Hadiah yang ada identiti', 'Sesuai untuk penghargaan staf, pelanggan, pelancaran jenama dan sambutan organisasi.'],
  ['03', 'Direka untuk jenama anda', 'Kami bantu sesuaikan logo, warna dan susun atur mengikut kegunaan anda.'],
];

const steps = [
  ['01', 'Kongsi keperluan', 'Beritahu kami acara, jumlah unit dan tujuan bantal korporat anda.'],
  ['02', 'Hantar logo', 'Kirim logo, warna jenama atau panduan visual melalui WhatsApp.'],
  ['03', 'Sahkan tempahan', 'Kami semak artwork dan sediakan sebut harga sebelum cetakan bermula.'],
];

export default function Home() {
  return <main>
    <div className="announcement"><div className="container">CORPORATE GIFTING &amp; BRANDED PILLOWS <span>·</span> KELANTAN &amp; PAHANG</div></div>
    <header className="site-header"><div className="container nav">
      <a href="#utama" aria-label="Syrius, kembali ke atas"><Wordmark /></a>
      <nav aria-label="Navigasi utama"><a href="#cara">Cara tempahan</a><a href="#koleksi">Kegunaan</a><a href="#tentang">Tentang kami</a></nav>
      <Button href={whatsappUrl} variant="white" size="sm">Minta sebut harga <span aria-hidden="true">↗</span></Button>
    </div></header>

    <section className="hero" id="utama"><div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">BRANDED COMFORT, MADE TO GIFT</p>
        <h1>Logo anda.<br /><em>Dalam ingatan mereka.</em></h1>
        <p className="lede">Custom bantal sublimation untuk syarikat, organisasi dan jenama yang mahu memberi sesuatu lebih bermakna daripada cenderamata biasa.</p>
        <div className="hero-actions"><Button href={whatsappUrl} variant="navy">Tempah bantal korporat <span aria-hidden="true">↗</span></Button><a className="text-link" href="#cara">Lihat caranya <span aria-hidden="true">↓</span></a></div>
        <div className="proof"><span>Logo &amp; warna jenama anda</span><span>Sesuai untuk hadiah korporat</span></div>
      </div>
      <figure className="hero-photo"><img src="/syrius-corporate-pillows.png" alt="Bantal sublimation korporat dengan contoh logo abstrak di ruang pejabat" /><figcaption><span>CORPORATE GIFTING</span><b>Made for your brand</b></figcaption></figure>
    </div></section>

    <section className="marquee"><div>HADIAH KORPORAT · MERCHANDISE BERLOGO · PENGHARGAAN STAF · ACARA ORGANISASI · HADIAH KORPORAT · MERCHANDISE BERLOGO · PENGHARGAAN STAF · ACARA ORGANISASI</div></section>

    <section className="section values" id="koleksi"><div className="container">
      <div className="section-intro"><p className="eyebrow">LEBIH DARIPADA CENDERAMATA</p><h2>Beri sesuatu yang<br /><em>ada nama jenama anda.</em></h2><p>Bantal berlogo menjadikan setiap pemberian satu pengalaman jenama yang lembut, berguna dan mudah diingati.</p></div>
      <div className="value-grid">{values.map(([number, title, text]) => <article className="value-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="statement" id="tentang"><div className="container statement-grid"><p className="eyebrow">SYRIUS MALAYSIA</p><h2>Jadikan jenama anda<br />lebih dekat dengan manusia.</h2><p>Syrius membantu organisasi menterjemah identiti visual mereka kepada hadiah korporat yang berguna. Untuk staf, pelanggan, rakan strategik dan tetamu acara.</p></div></section>

    <section className="section process" id="cara"><div className="container"><div className="process-head"><p className="eyebrow">CARA TEMPAHAN</p><h2>Dari logo ke<br /><em>hadiah berjenama.</em></h2><p>Tiga langkah ringkas. Kami bantu anda dari awal hingga artwork siap.</p></div><ol className="steps">{steps.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><i aria-hidden="true">↗</i></li>)}</ol></div></section>

    <section className="final-cta"><div className="container"><p className="eyebrow">SEDIA UNTUK BERI IMPAK?</p><h2>Jenama anda.<br /><em>Hadiah mereka.</em></h2><p>Hubungi Syrius untuk berbincang tentang artwork, kuantiti, harga dan penghantaran.</p><Button href={whatsappUrl} variant="white">Dapatkan sebut harga <span aria-hidden="true">↗</span></Button></div></section>

    <a className="fab-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Syrius">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Z" stroke="#fff" strokeWidth="1.6"/><path d="M8.5 8.4c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.2.1.4.1.5-.1.2-.2.6-.7.8-1 .2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.4.1.5-.1 1.1-.4 1.5-.3.4-1 .8-1.8.8-1.5 0-3.2-.9-4.5-2.1-1.3-1.3-2.3-3-2.5-4.6-.1-.7.1-1.3.5-1.7Z" fill="#fff"/></svg>
    </a>

    <footer><div className="container footer-grid"><div><Wordmark /><p>Custom bantal sublimation untuk hadiah korporat yang lebih bermakna.</p></div><div><p className="footer-label">HUBUNGI</p><a href="https://wa.me/601154498790">+60 11-5449 8790</a><a href="mailto:syriusmalaysia@gmail.com">syriusmalaysia@gmail.com</a></div><div><p className="footer-label">STUDIO</p><p>PT 428, Pusat Perniagaan<br />Bandar Baru Tunjong, Kota Bharu.</p></div></div><div className="container copyright">© 2026 Syrius Malaysia <span>Wear Your Vision</span></div></footer>
  </main>;
}
