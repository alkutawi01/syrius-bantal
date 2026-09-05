import type { Metadata } from 'next';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../../lib/whatsapp';

const title = 'The Pillow in Traditional Malay Custom and Culture — Syrius Magazine';
const description = 'The bolster pillow, the bridal dais pillow set, and pillow-related taboos all carry their own history and meaning within traditional Malay custom and culture.';

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
  headline: 'The pillow in traditional Malay custom and culture',
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

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/majalah/bantal-dalam-adat-dan-budaya-melayu-tradisional" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/zh/majalah/bantal-dalam-adat-dan-budaya-melayu-tradisional" lang="zh" hrefLang="zh">中文</a></div></div>
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
            ['/majalah/bantal-dalam-adat-dan-budaya-melayu-tradisional', 'Bahasa Melayu'],
            ['/zh/majalah/bantal-dalam-adat-dan-budaya-melayu-tradisional', '中文'],
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
        The pillow in traditional Malay <em style={{ fontStyle: 'normal' }}>custom and culture.</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>4 min read</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        For most people, the pillow is simply a sleep aid used every night without much thought. But in traditional Malay culture, the pillow plays a role far broader than just resting one's head. It appears in wedding ceremonies, lives on in proverbs and vocabulary, and even underlies taboos still cited by older generations today. This article traces several of these roles based on verifiable written sources, including aspects still debated or inconsistent across the Malay World.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>The bolster pillow and the &ldquo;Dutch wife&rdquo; nickname: the origin of a name</h2>
        <p>The long, cylindrical pillow hugged while sleeping is known in Malaysia as bantal peluk (literally &ldquo;hug pillow&rdquo;), while in Indonesia it's more commonly known as guling. Similar objects exist across Southeast Asia under their own names, such as <em lang="vi" style={{ fontStyle: 'normal' }}>gối ôm</em> in Vietnam and <em lang="th" style={{ fontStyle: 'normal' }}>monkhang</em> in Thailand, all carrying much the same meaning: a pillow hugged while sleeping.</p>
        <p>Among English speakers, this type of pillow is also known as a &ldquo;Dutch wife,&rdquo; although the exact origin of the name remains debated and cannot be conclusively confirmed. One commonly told version links the name to the era of Dutch colonial rule in the East Indies (present-day Indonesia) in the 19th century, when Dutch officials and soldiers serving in this tropical region are said to have also used the long pillows of local residents. However, the claim that this pillow was &ldquo;invented&rdquo; by the Dutch is merely a popular story passed down over generations, not a confirmed historical fact. There's also another version suggesting the nickname &ldquo;Dutch wife&rdquo; actually originated from English mockery of their colonial rivals, the Dutch, in line with the long-standing derogatory use of the word &ldquo;Dutch&rdquo; in English, as in the expression &ldquo;Dutch courage.&rdquo;</p>
        <p>The spread of this term to Malaya and Singapore can also be seen in a reader's letter published in the <em lang="en" style={{ fontStyle: 'italic' }}>Singapore Free Press</em> on 3 September 1923, in which a British man expressed his sense of loss that hotels in London didn't provide a &ldquo;Dutch wife,&rdquo; after seven years living in Singapore and the Straits Settlements. The original design is also reported to have differed from today's pillow, being a hollow woven rattan frame wrapped in linen cloth to allow free air circulation and keep cool during hot, humid nights, long before air conditioning became widely available.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>The pillow in wedding ceremonies: the bridal dais and the bersanding ceremony</h2>
        <p>In traditional Malay wedding ceremonies, particularly the bersanding (enthronement) ceremony, pillows form part of the layout of the pelamin, or bridal dais. In the Riau Malay tradition, including in Batam, a region formerly part of the Johor-Riau-Lingga-Pahang Sultanate, cultural heritage records from the Batam City Culture and Tourism Office document that the traditional pelamin there was fitted with several types of pillows arranged in tiers: four bantal gadok, eight embroidered bantal seraga, a crocodile-egg-shaped bantal telur buaya, a backrest bantal sandar, plus a bolster and mattress. The same source also documents the peterakne, a separate multi-tier platform used throughout the ceremony for events such as the tepung tawar blessing ritual and the ceremonial hand-feeding, showing that the bridal dais and its pillow arrangement were just one part of a much larger set of wedding ceremony furnishings.</p>
        <p>Some of these terms are also confirmed in <em lang="ms" style={{ fontStyle: 'italic' }}>Kamus Dewan</em>, published by Dewan Bahasa dan Pustaka, which defines bantal seraga as a round, embroidered pillow, and bantal sandar as a pillow for leaning against. This shows these pillows weren't purely decorative, but also served to support the bride and groom as they sat cross-legged on the dais throughout the ceremony.</p>
        <p>It should be noted that the type and number of pillows on the pelamin can vary by state, local royal lineage and local custom, and the arrangement described above isn't necessarily uniform across the Malay World, given that not many academic sources document it in detail for every region.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>The pillow in Malay language and proverbs</h2>
        <p>According to Kamus Dewan, published by Dewan Bahasa dan Pustaka, bantal is defined as a head support or seating pad made of sewn cloth, like a sack, filled with kapok, coconut husk fibre, foam and similar materials. Besides bantal golek or bantal peluk, the long, round bolster pillow, the dictionary also records terms such as berbantal and berbantalkan, meaning to use something as a head support.</p>
        <p>The word bantal also lives on in at least two Malay proverbs still in use. The expression &ldquo;orang mengantuk disorongkan bantal&rdquo; (literally, &ldquo;a sleepy person is offered a pillow&rdquo;) means receiving exactly what one wanted or needed right at the right moment, as if without even asking, while the proverb &ldquo;lepas bantal berganti tikar&rdquo; (literally, &ldquo;after the pillow, a change of mat&rdquo;) refers to a man who marries the younger or older sister of his deceased wife. The existence of proverbs like these shows that the pillow, as the everyday object most closely tied to sleep and rest, has long served as a metaphor in how the Malay community thinks and speaks, far beyond its literal function.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Taboos: the pillow as a symbol of respect for the head</h2>
        <p>One traditional Malay taboo still cited today is the prohibition against sitting on a pillow. In popular Malay belief, anyone who sits on a pillow may be afflicted with boils. The same sources also record a more practical reason behind the prohibition: to keep the pillow from tearing or being crushed, and because it's considered improper to place one's backside on cloth meant to support the head.</p>
        <p>Taboos like this can be seen as reflecting a larger value in Malay culture: respect for the head as a body part considered noble and not to be treated carelessly. The warning of a physical consequence like boils functions as an educational device, particularly for children, to encourage respect for items closely associated with the head. There's no medical evidence supporting a literal link between sitting on a pillow and developing boils, and this taboo is more accurately understood as a value-teaching tool passed down orally from one generation to the next.</p>
        <p>From the unique origin of its name, to its place in wedding ceremonies, to its traces in proverbs and taboos, the pillow clearly holds a far richer layer of history and cultural meaning than its function as a mere sleep aid.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>References</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Wikipedia Bahasa Melayu. <a href="https://ms.wikipedia.org/wiki/Pantang_larang_Melayu" target="_blank" rel="noreferrer">Pantang larang Melayu<span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Mothership.SG. <a href="https://mothership.sg/2017/10/the-dutch-wife-is-a-pillow-with-regional-origins-but-it-has-evolved-into-a-sex-doll/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>The Dutch wife is a pillow with regional origins, but it has evolved into a sex doll</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Dinas Kebudayaan dan Pariwisata Kota Batam. <a href="https://disbudpar.batam.go.id/2020/07/14/mengungkap-peninggalan-budaya-tak-benda-berupa-pelamin-dan-peterakne-melayu/" target="_blank" rel="noreferrer">Mengungkap Peninggalan Budaya Tak Benda Berupa Pelamin dan Peterakne Melayu<span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Pusat Rujukan Persuratan Melayu (PRPM), Dewan Bahasa dan Pustaka. <a href="https://prpm.dbp.gov.my/cari1?keyword=bantal" target="_blank" rel="noreferrer">Bantal<span className="sr-only"> (opens in a new tab)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Looking for a logo-printed corporate cushion for your company? <a className="text-link text-link--right" href="/en/panduan">See the ordering guide <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
