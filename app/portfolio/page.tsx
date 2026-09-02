import type { Metadata } from 'next';
import { env } from 'cloudflare:workers';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { whatsappUrl } from '../lib/whatsapp';
import { PORTFOLIO_SLOTS, PORTFOLIO_DISCLAIMER_KEY, DEFAULT_PORTFOLIO_DISCLAIMER } from '../lib/portfolioSlots';

const title = 'Portfolio — Syrius';
const description = 'Contoh reka bentuk bantal sublimasi korporat Syrius.';

export const metadata: Metadata = {
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

export default async function Portfolio() {
  const disclaimerObject = await env.PORTFOLIO_BUCKET.get(PORTFOLIO_DISCLAIMER_KEY);
  const disclaimer = disclaimerObject ? await disclaimerObject.text() : DEFAULT_PORTFOLIO_DISCLAIMER;

  return <main>
    <a className="skip-link" href="#portfolio">Langkau ke kandungan utama</a>
    <ScrollReveal />
    <SiteHeader base="/" active="portfolio" />

    <section className="section" id="portfolio" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">PORTFOLIO</p><h1>Contoh <em>reka bentuk.</em></h1></div>
        <p>{disclaimer}</p>
      </div>

      <div className="occasion-grid">
        {PORTFOLIO_SLOTS.map((slot, i) => <figure className="bento-tile" data-reveal style={{ transitionDelay: `${i * 80}ms`, padding: 0, overflow: 'hidden' }} key={slot}>
          <img src={`/images/${slot}`} alt={`Contoh ilustrasi reka bentuk bantal ${i + 1}`} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
        </figure>)}
      </div>
    </div></section>

    <section className="final-cta"><div className="container" data-reveal>
      <p className="eyebrow">NAK REKA BENTUK ANDA SENDIRI?</p>
      <h2>Jenama anda.<br /><em>Hadiah mereka.</em></h2>
      <p>Hubungi Syrius untuk berbincang tentang reka bentuk, kuantiti, harga dan penghantaran.</p>
      <Button href={whatsappUrl} variant="white">Dapatkan sebut harga <span aria-hidden="true">↗</span></Button>
    </div></section>

    <SiteFooter />
  </main>;
}
