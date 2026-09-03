import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

const title = 'Panduan Jenis Pengisian Bantal — Majalah Syrius';
const description = 'Perbezaan gentian poliester, bulu, kapok dan buih memori sebagai pengisian bantal — dari segi keselesaan, ketahanan dan penjagaan.';

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
    images: [{ url: '/syrius-corporate-pillow-og.jpg', width: 1200, height: 630, alt: 'Bantal sublimasi korporat Syrius' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-og.jpg'],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Panduan memahami jenis pengisian bantal',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

const fillings: [string, ReactNode, ReactNode, ReactNode, string, string][] = [
  ['poliester', 'Gentian poliester', 'Jenis paling biasa dan berpatutan. Ringan dan lembut pada mulanya, tetapi cenderung menjadi kempis dan kurang sokongan selepas kira-kira satu hingga dua tahun penggunaan. Kebanyakannya boleh dibasuh dan dikeringkan menggunakan mesin.', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 14c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 20c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>, '1–2 tahun', 'Ringan, murah, mudah dibasuh'],
  ['bulu', <>Bulu angsa/itik <em lang="en" style={{ fontStyle: 'normal' }}>(down/feather)</em></>, <>Sangat lembut dan mengekalkan kembungan (<em lang="en" style={{ fontStyle: 'normal' }}>loft</em>) lebih lama berbanding gentian sintetik — dianggarkan sehingga tiga kali ganda lebih lama. Tahan sekitar dua hingga tiga tahun sebelum kehilangan sokongan, tetapi boleh mencetuskan alahan pada sesetengah individu.</>, <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21V9M12 9c0-3 2-5 6-6-1 4-3 6-6 6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 14c-3 0-5-1-6-3 3-1 5 0 6 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>, '2–3 tahun', 'Sangat lembut, risiko alahan'],
  ['kapok', 'Kapok', 'Gentian berasaskan tumbuhan yang ringan dan lembut, sering dijadikan alternatif vegan kepada bulu. Tahan lama dan tidak mudah mampat, tetapi memerlukan pengemasan berkala supaya tidak berkelompok.', <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3c4 3 6 7 4 12-3-1-6-4-6-9 0-1 1-2 2-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 21v-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>, 'Tahan lama', 'Vegan, perlu kerap digemburkan'],
  ['foam', <>Buih memori <em lang="en" style={{ fontStyle: 'normal' }}>(memory foam)</em></>, 'Bahan sintetik yang berubah bentuk mengikut tekanan kepala dan leher, memberikan sokongan yang lebih spesifik. Kelemahannya, ia boleh menyerap dan menyimpan haba berbanding jenis pengisian lain.', <svg key="i4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15c2-3 4 3 6 0s4-3 6 0 4 3 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="3" y="15" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" /></svg>, 'Bergantung kualiti bahan', 'Sokongan mengikut bentuk, simpan haba'],
];

export default function Artikel() {
  return <main>
    <a className="skip-link" href="#artikel">Langkau ke kandungan utama</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />
    <SiteHeader base="/" active="majalah" />

    <article className="section" id="artikel" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <a className="eyebrow" href="/majalah" data-reveal>← MAJALAH</a>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '16px 0 8px' }} data-reveal>
        Panduan memahami jenis <em style={{ fontStyle: 'normal' }}>pengisian bantal.</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>2 minit bacaan</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Jenis pengisian menentukan tahap keselesaan, sokongan dan jangka hayat sesebuah bantal — bukan sekadar reka bentuk luarannya. Berikut perbezaan asas antara beberapa jenis pengisian yang paling biasa digunakan.
      </p>

      <div data-reveal>
        {fillings.map(([key, name, text, icon]) => <div key={key} style={{ marginBottom: 28, display: 'flex', gap: 16 }}>
          <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
          <div>
            <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>{name}</h2>
            <p style={{ maxWidth: 700 }}>{text}</p>
          </div>
        </div>)}
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 14px' }}>Ringkasan perbandingan</h2>
        <div className="table-scroll">
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 480, fontSize: 13.5 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--line)' }}>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 12px 8px 0', color: 'var(--ink)' }}>Jenis pengisian</th>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--ink)' }}>Jangka hayat anggaran</th>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 0 8px 12px', color: 'var(--ink)' }}>Ciri utama</th>
            </tr>
          </thead>
          <tbody>
            {fillings.map(([key, name, , , lifespan, trait]) => <tr key={key} style={{ borderBottom: '1px solid var(--line)' }}>
              <th scope="row" style={{ textAlign: 'left', padding: '10px 12px 10px 0', color: 'var(--ink)', fontWeight: 700 }}>{name}</th>
              <td style={{ padding: '10px 12px', color: 'var(--text)' }}>{lifespan}</td>
              <td style={{ padding: '10px 0 10px 12px', color: 'var(--text)' }}>{trait}</td>
            </tr>)}
          </tbody>
        </table>
        </div>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Tiada jenis yang &ldquo;terbaik&rdquo; secara mutlak</h2>
        <p>Pemilihan pengisian bergantung pada keutamaan peribadi — tahap kekukuhan sokongan yang diperlukan, sensitiviti alahan, bajet dan cara penjagaan yang sanggup dilakukan. Bantal yang sesuai untuk seseorang belum tentu sesuai untuk yang lain, jadi memahami ciri setiap jenis adalah langkah pertama sebelum membuat pilihan.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>Rujukan</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Nolah Sleep. <a href="https://www.nolahsleep.com/blogs/blog/best-pillow-material" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>The Perfect Pillow: How To Choose Between Down, Feather, Foam, and More</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Bearaby. <a href="https://bearaby.com/blogs/the-lay-low/pillow-filling-types" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>8 Pillow Filling Types: Latex, Down, Feather & More</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Sedang mencari bantal korporat bercetak logo untuk syarikat anda? <a className="text-link text-link--right" href="/panduan">Lihat panduan menempah <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter />
  </main>;
}
