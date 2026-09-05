import type { Metadata } from 'next';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../../lib/whatsapp';

const title = 'The Origins of "Bantal" and "Pillow" — Syrius Magazine';
const description = 'The origins of the Malay word "bantal" and the English word "pillow" are traced through Austronesian and Latin-Germanic linguistic records.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-02',
    modifiedTime: '2026-09-02',
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

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Where do the words "bantal" and "pillow" come from?',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

export default function ArtikelEn() {
  return <main>
    <SetHtmlLang lang="en" />
    <a className="skip-link" href="#artikel-en">Skip to main content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/majalah/asal-usul-perkataan-bantal-dan-pillow" lang="ms" hrefLang="ms">Bahasa Melayu</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="/en" aria-label="Syrius, back to home"><Wordmark /></a>
      <nav aria-label="Main navigation">
        <a href="/en#cara-en">How to order</a>
        <a href="/en#kelebihan-en">Why us</a>
        <a href="/en/portfolio">Portfolio</a>
        <a href="/en/majalah" aria-current="page">Magazine</a>
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
            ['/majalah/asal-usul-perkataan-bantal-dan-pillow', 'Bahasa Melayu'],
          ]}
          navLabel="Mobile navigation"
          openLabel="Open menu"
          closeLabel="Close menu"
        />
      </div>
    </div></header>

    <article className="section" id="artikel-en" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <a className="eyebrow" href="/en/majalah" data-reveal>← MAGAZINE</a>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '16px 0 8px' }} data-reveal>
        Where do the words <em style={{ fontStyle: 'normal' }}>&ldquo;bantal&rdquo; and &ldquo;pillow&rdquo; come from?</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>5 min read</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        The pillow is one of the most familiar everyday objects in human life, yet few people ever ask where its name comes from. The Malay word &ldquo;bantal&rdquo; and the English word &ldquo;pillow&rdquo; each carry a long linguistic history and come from entirely different language families, yet both show a fascinating pattern of an original meaning gradually shifting over time. This article traces the checkable linguistic record for both words, while being upfront about the parts language researchers still haven't been able to settle.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>The Austronesian heritage of &ldquo;bantal&rdquo;: reconstructing an ancient language</h2>
        <p>According to the <em style={{ fontStyle: 'italic' }}>Austronesian Comparative Dictionary</em> (ACD), a comparative database of Austronesian languages compiled by linguist Robert Blust and colleagues, the word &ldquo;bantal&rdquo; is linked to a hypothetical reconstructed form in comparative Austronesian studies, written as <em style={{ fontStyle: 'italic' }}>*bantal</em> at the Proto-Western Malayo-Polynesian stage — not a word ever actually recorded in any ancient text, but a form linguists infer by comparing cognate words. The ACD proposes this reconstructed meaning as &ldquo;a bundle or wrapping of cloth or clothing.&rdquo; This form doesn't just exist in Malay; it has cognates (related forms sharing a common origin) in various other Austronesian languages, including bantal in Javanese and Sundanese, which likewise mean &ldquo;pillow,&rdquo; bantal in Old Javanese meaning &ldquo;cloth; a bundle of cloth as a unit of measure,&rdquo; bantal in Iban carrying both meanings &ldquo;cushion, pillow&rdquo; and &ldquo;bundle of cloth,&rdquo; and bántal in Cebuano meaning &ldquo;to wrap something, such as dirty clothing.&rdquo;</p>
        <p>However, the ACD's own compilers note that some of these cognate comparisons are quite possibly the result of borrowing between the Austronesian languages concerned, rather than necessarily direct inheritance from a single ancestral language. They acknowledge it remains uncertain whether this borrowing occurred across enough languages to affect the validity of the reconstructed ancient form. So while the link between &ldquo;bantal&rdquo; and the original meaning of &ldquo;a bundle of cloth&rdquo; has solid academic support, the exact origin of the word, whether it was truly inherited from ancient times or formed through word exchange among neighbouring Austronesian communities, remains a question debated among linguists, not a settled fact.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>From a bundle of cloth to a head support</h2>
        <p>If the word &ldquo;bantal&rdquo; did originally refer to &ldquo;a bundle or wrapping of cloth,&rdquo; that meaning has since undergone significant broadening and narrowing to refer specifically to the head support known today. The fourth edition of <em lang="ms" style={{ fontStyle: 'italic' }}>Kamus Dewan</em>, published by Dewan Bahasa dan Pustaka, now defines &ldquo;bantal&rdquo; as a head support or seating pad made of sewn cloth, like a sack, filled with material such as kapok. The same dictionary also records several variants, such as bantal golek (a long, round bolster), bantal seraga (a round, embroidered cushion) and bantal sandar (a backrest cushion).</p>
        <p>Interestingly, Kamus Dewan also records another, more specialised meaning of &ldquo;bantal&rdquo; in the textile trade: a unit of measurement for thread, with one bantal equal to sixteen tukal (skeins). This sense of &ldquo;bundle or grouping&rdquo; happens to align with the ancient meaning &ldquo;bundle of cloth&rdquo; proposed through the Proto-Western Malayo-Polynesian reconstruction above, although no study specifically confirms that the two meanings are directly linked historically.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Pillow: a Latin legacy carried through the Germanic languages</h2>
        <p>Unlike &ldquo;bantal,&rdquo; the origin of the English word &ldquo;pillow&rdquo; is far easier to trace, because the Indo-European language family has a much longer written record. According to Etymonline, an etymological dictionary compiled by Douglas Harper drawing on recognised English lexicographical sources, the Middle English word <em lang="en" style={{ fontStyle: 'italic' }}>pilwe</em> descends from the Old English <em lang="ang" style={{ fontStyle: 'italic' }}>pyle</em>, meaning a cushion or bed pillow. This Old English word in turn comes from a reconstructed Proto-West Germanic form <em style={{ fontStyle: 'italic' }}>*pulwi(n)</em>, which also produced cognates in several other Germanic languages, including <em lang="en" style={{ fontStyle: 'italic' }}>puli</em> in Old Saxon, <em lang="en" style={{ fontStyle: 'italic' }}>polu</em> in Middle Dutch, <em lang="nl" style={{ fontStyle: 'italic' }}>peluw</em> in modern Dutch, <em lang="en" style={{ fontStyle: 'italic' }}>pfuliwi</em> in Old High German, and <em lang="de" style={{ fontStyle: 'italic' }}>Pfühl</em> in modern German.</p>
        <p>This West Germanic form, according to Etymonline, is believed to have been borrowed early on, around the second or third century AD, from the Latin word <em lang="la" style={{ fontStyle: 'italic' }}>pulvinus</em>, meaning a small cushion or small pillow. However, Etymonline also acknowledges that the origin of the Latin word pulvinus itself cannot be clearly established. This means that while the chain of borrowing from Latin into the Germanic languages and on into English can be confirmed with reasonable confidence, the ultimate origin of the word, before it existed in Latin, remains an unanswered question.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>The broadening meaning and use of &ldquo;pillow&rdquo;</h2>
        <p>In terms of spelling, the modern form &ldquo;pillow&rdquo; was only settled around the mid-15th century, after passing through various spelling variations during the Middle English period. In terms of meaning, the word originally referred specifically to the head support for someone lying down, before broadening to cover any soft cushion filled with material such as down or kapok in general, much as it is used today.</p>
        <p>Etymonline also records several compound words formed from &ldquo;pillow&rdquo; across different eras, such as pillow-case (1745, referring to a pillow cover), pillow fight (1837, referring to a playful pillow-fighting game), pillow-sham (1867, referring to a decorative pillow cover meant purely for display rather than everyday sleeping use), and pillow talk (1939, referring to intimate conversation in bed). The verb form &ldquo;to pillow,&rdquo; meaning to rest something on a pillow, came into use around the 1620s.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Two words, two linguistic trajectories</h2>
        <p>Comparing these two words reveals an interesting parallel, even though they come from entirely unrelated language families — the Austronesian family for &ldquo;bantal&rdquo; and the Indo-European family for &ldquo;pillow.&rdquo; Both words are found to begin from a more general meaning, &ldquo;a bundle or wrapping of cloth&rdquo; for bantal, and &ldquo;a cushion or small pillow&rdquo; for the Latin pulvinus, before that meaning gradually narrowed and specialised into the head-support object known today. This development is consistent with a common pattern in etymological studies, where the name of an everyday object often originates from a word that initially described its material or function, rather than its final form.</p>
        <p>Even so, the degree of certainty behind these two historical chains isn't the same. The chain for &ldquo;pillow&rdquo; through Latin and Germanic is backed by a long written record and broad consensus among English-language researchers. By contrast, the link between &ldquo;bantal&rdquo; and the reconstructed Austronesian form *bantal remains a proposal based on the comparative method, with the researchers themselves acknowledging that some of the evidence may have arisen from borrowing among related languages rather than a single, unbroken line of inheritance.</p>
        <p>The history of both words shows how even the name of the most ordinary object in everyday life can hold layers of ancient language that linguists are still examining to this day.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>References</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Etymonline (Douglas Harper). <a href="https://www.etymonline.com/word/pillow" target="_blank" rel="noreferrer">pillow (etymology entry)<span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Austronesian Comparative Dictionary (ACD), compiled by Robert Blust and Stephen Trussel, now maintained by Alexander D. Smith. <a href="https://acd.clld.org/cognatesets/25127" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Cognate Set: *bantal &lsquo;bundle of cloth or clothes&rsquo;</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Pusat Rujukan Persuratan Melayu (PRPM), Dewan Bahasa dan Pustaka. <a href="https://prpm.dbp.gov.my/Cari1?keyword=bantal" target="_blank" rel="noreferrer">bantal — Kamus Dewan Edisi Keempat<span className="sr-only"> (opens in a new tab)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Looking for a logo-printed corporate cushion for your company? <a className="text-link text-link--right" href="/en/panduan">See the ordering guide <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
