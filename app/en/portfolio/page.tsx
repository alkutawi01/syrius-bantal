import type { Metadata } from 'next';
import { Button } from '../../components/Button';
import { MobileMenu } from '../../components/MobileMenu';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SetHtmlLang } from '../../components/SetHtmlLang';
import { SiteFooter } from '../../components/SiteFooter';
import { Wordmark } from '../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../lib/whatsapp';
import { PORTFOLIO_SLOTS } from '../../lib/portfolioSlots';

const title = 'Portfolio — Syrius';
const description = 'Examples of Syrius corporate sublimation cushion designs.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_MY',
    siteName: 'Syrius',
    images: [{ url: '/syrius-corporate-pillow-og.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Syrius branded corporate cushion' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-og.jpg'],
  },
};

// Note: the disclaimer text on /portfolio is admin-editable (stored in R2, BM only).
// This EN page uses a fixed English equivalent rather than showing mixed-language
// admin content, since there is no per-language storage for it yet.
const disclaimer = "The images below are placeholder illustrations to show the display style — not actual work produced for Syrius customers. Contact us to see real examples or discuss your own design.";

export default function PortfolioEn() {
  return <main>
    <SetHtmlLang lang="en" />
    <a className="skip-link" href="#portfolio-en">Skip to main content</a>
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/portfolio" lang="ms" hrefLang="ms">Bahasa Melayu</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="/en" aria-label="Syrius, back to home"><Wordmark /></a>
      <nav aria-label="Main navigation">
        <a href="/en#cara-en">How to order</a>
        <a href="/en#kelebihan-en">Why us</a>
        <a href="/en/portfolio" aria-current="page">Portfolio</a>
        <a href="/en/majalah">Magazine</a>
        <a href="/en#faq-en">FAQ</a>
      </nav>
      <div className="nav-right">
        <Button href={whatsappUrlEn} variant="white" size="sm" newTabLabel="(opens in a new tab)">Request a Quote <span aria-hidden="true">↗</span></Button>
        <MobileMenu
          links={[
            ['/en#cara-en', 'How to order'],
            ['/en#kelebihan-en', 'Why us'],
            ['/en/portfolio', 'Portfolio'],
            ['/en/majalah', 'Magazine'],
            ['/en#faq-en', 'FAQ'],
            ['/portfolio', 'Bahasa Melayu'],
          ]}
          navLabel="Mobile navigation"
          openLabel="Open menu"
          closeLabel="Close menu"
        />
      </div>
    </div></header>

    <section className="section" id="portfolio-en" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">PORTFOLIO</p><h1>Design <em>examples.</em></h1></div>
        <p>{disclaimer}</p>
      </div>

      <div className="occasion-grid">
        {PORTFOLIO_SLOTS.map((slot, i) => <figure className="bento-tile" data-reveal style={{ transitionDelay: `${i * 80}ms`, padding: 0, overflow: 'hidden' }} key={slot}>
          <img src={`/images/${slot}`} alt={`Cushion design illustration ${i + 1}`} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
        </figure>)}
      </div>
    </div></section>

    <section className="final-cta"><div className="container" data-reveal>
      <p className="eyebrow">WANT YOUR OWN DESIGN?</p>
      <h2>Your brand.<br /><em>Their gift.</em></h2>
      <p>Contact Syrius to discuss design, quantity, pricing and delivery.</p>
      <Button href={whatsappUrlEn} variant="white" newTabLabel="(opens in a new tab)">Request a Quote <span aria-hidden="true">↗</span></Button>
    </div></section>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
