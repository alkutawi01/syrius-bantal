import type { Metadata } from 'next';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../../lib/whatsapp';

const title = 'Unique Pillows from Cultures Around the World — Syrius Magazine';
const description = "Explore the history of unique pillows worldwide: Japan's wooden takamakura, buckwheat hull pillows, Chinese dynastic ceramic pillows, and African wooden headrests.";

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
  headline: 'Unique pillows from cultures around the world',
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

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/majalah/bantal-unik-dari-pelbagai-budaya-dunia" lang="ms" hrefLang="ms">Bahasa Melayu</a></div></div>
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
            ['/majalah/bantal-unik-dari-pelbagai-budaya-dunia', 'Bahasa Melayu'],
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
        Unique pillows from <em style={{ fontStyle: 'normal' }}>cultures around the world.</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>6 min read</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        The pillow as commonly used today, soft, fabric-covered and filled with materials such as cotton, foam or feathers, is actually just one of many forms of head support developed by human societies. Many cultures developed rigid headrests rather than soft pillows in the modern sense. Behind the same basic function of supporting the head and neck during rest or sleep, cultures around the world have created very different solutions depending on their needs, lifestyle, and even beliefs, from tall wooden pillows in Japan, to hard ceramic pillows in China, to wooden headrests across various regions of Africa.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Japan's tall wooden pillows: takamakura and hakomakura</h2>
        <p>In Japan, those who wore elaborate hairstyles such as geisha and maiko (geisha apprentices) in traditional settings used wooden headrests to help preserve hairstyles such as <em lang="ja" style={{ fontStyle: 'normal' }}>shimada</em>, which could be disturbed by an ordinary soft pillow. This type of hairstyle could require many hours, sometimes even a full day, to create, and was often maintained for several days before needing to be redone. To get around this problem, they used a tall wooden headrest known as a <em lang="ja" style={{ fontStyle: 'normal' }}>takamakura</em>, generally a wooden support with a raised area for the neck, sometimes finished with lacquer and combined with a padded, silk-wrapped roll. With this design, the head and hairstyle stayed fully raised off the surface throughout the night.</p>
        <p>Another popular variation is the <em lang="ja" style={{ fontStyle: 'normal' }}>hakomakura</em>, or &ldquo;box pillow,&rdquo; which replaces the simple wooden base with a lacquered wooden box, and some versions also come with a small drawer inside, suitable for storing personal items while sleeping. Some hakomakura examples include a cloth-covered neck rest, sometimes filled with materials such as buckwheat hulls, as described in the next section. Most surviving examples of hakomakura and takamakura are estimated to date from around the 19th to early 20th century, including the Meiji era (1868-1912), and are now prized antique collectibles among collectors and dealers of Japanese heritage items. Some sources also note that similar designs were used by men, including samurai, for the same purpose of preserving a topknot hairstyle (known as <em lang="ja" style={{ fontStyle: 'normal' }}>chonmage</em> for men) overnight, although detailed records of this practice among men aren't as solid as the records for geisha and maiko.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Buckwheat hull pillows: simple engineering from Japan</h2>
        <p>Besides the tall wooden pillow, Japan has also passed down another type of pillow unique in its filling material: the buckwheat hull pillow, known as <em lang="ja" style={{ fontStyle: 'normal' }}>sobagara makura</em>. This pillow's filling isn't cotton or foam, but the outer hulls of buckwheat left over after milling it into flour for soba noodles. These hard, hollow hulls create a pillow surface that's fairly firm yet still conforms to the shape of the user's head and neck, helping keep the spine aligned throughout sleep. The natural properties of buckwheat hulls also allow air to circulate well within the pillow, keeping it cool and free of moisture even in hot weather.</p>
        <p>The use of buckwheat hulls as pillow filling has long been known in Japanese culture; some sources link it to a recycling culture during the Edo period (1603-1867), while other sources trace similar practices even earlier, but the exact date this practice actually began cannot be academically confirmed and remains unclear in the written historical record. What's more certain is that buckwheat hull pillows remain widely used in Japan to this day, and are often used by people seeking comfort or support for the shoulder and neck discomfort known in Japanese as <em lang="ja" style={{ fontStyle: 'normal' }}>katakori</em>.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Hard ceramic pillows from China: a legacy from the Sui to the Song dynasty</h2>
        <p>Entirely unlike the concept of the soft pillow known today, ancient Chinese society also used pillows made of hard ceramic or porcelain. One of the earliest known examples is a box-shaped ceramic pillow excavated from a tomb associated with an official named Zhang Sheng in Anyang, Henan province, dated to around the Sui dynasty (581-618). Ceramic pillows later became widespread during the Tang dynasty (618-907); historical sources and surviving examples suggest they served various practical purposes, including as a sleeping support and possibly as an aid for activities such as taking a patient's pulse, writing, or travelling.</p>
        <p>Ceramic pillows became particularly popular during the Song dynasty (960-1279), produced in a far greater variety of shapes and styles than before. One of the most famous examples is a white porcelain pillow shaped like a child, from the Ding kilns of the Northern Song dynasty era, now held at the Palace Museum in Beijing. A nearly identical example is also held at the National Palace Museum in Taipei, and relatively few complete examples are known to survive today. Their popularity gradually declined in later periods, through the Yuan (1279-1368) and into the Ming and Qing dynasties (1368-1911), as softer pillow materials became more common, although ceramic pillows continued to be produced.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Wooden headrests in Africa: between function, status and belief</h2>
        <p>Across the African continent, various ethnic groups have their own traditions related to wooden headrests, which serve a similar function to a pillow but in a far harder and more portable form. Documentation by academic museums such as the Lam Museum of Anthropology at Wake Forest University, United States, shows that the design of these headrests varies considerably by ethnic group. For example, headrests of the Luba people in the Democratic Republic of Congo are often carved with female figures, which have been interpreted as representing themes of femininity, support and social identity. Meanwhile, some headrests of the Shona people in Zimbabwe are designed with two neck grooves interpreted as symbolising the union of a married couple, while concentric circle motifs carved onto them have been connected by some interpretations to Shona beliefs about dreams as a form of spiritual communication with ancestral spirits.</p>
        <p>For the nomadic Turkana people of Kenya, their headrests are designed to be lighter and more portable, even fitted with a loop or leather strap on the base so they can be carried along when moving. Interestingly, the Boni people, also known as the Aweer, most of whom live along the Lamu coast and Tana River area of Kenya (with a small number also found in southern Somalia), carve headrests that some accounts describe as deliberately shaped to be somewhat unstable. According to the description from the Lam Museum of Anthropology's collection, this design may help the user stay alert to their surroundings through the night, as a precaution to protect their livestock. In Ethiopia, various groups such as the Oromo, Sidaama and Gurage also create wooden headrests with varied geometric patterns; some examples are primarily associated with preserving a hairstyle during sleep and signalling the owner's status, rather than the explicitly documented spiritual symbolism found in some other traditions on the same continent.</p>
        <p>Interestingly, this tradition isn't uniform across Africa. In Ghana, for instance, the Akan people and the Ashanti kingdom are better known for the tradition of the sacred wooden stool called a <em lang="ak" style={{ fontStyle: 'normal' }}>dwa</em>, rather than headrests. This stool isn't merely a seat, but is regarded as a sacred object symbolising its owner's power and standing, and Akan chiefs traditionally receive an official stool as part of the ceremony installing them in office. This difference shows that although wooden objects for rest or ceremony are widespread across Africa, their meaning and form vary by region and culture, and not all of them can be generalised as one similar form of pillow.</p>
        <p>These various forms of pillow and headrest show that the basic human need for rest has always been shaped by a society's climate, way of life and cultural values.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>References</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>CGTN. <a href="https://news.cgtn.com/news/2023-03-22/A-journey-through-the-history-of-Chinese-porcelain-pillows-1inI90PTAbe/index.html" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>A journey through the history of Chinese porcelain pillows</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Lam Museum of Anthropology, Wake Forest University. <a href="https://lammuseum.wfu.edu/exhibits/virtual/headrests-the-exhibit/headrests-from-africa/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Headrests from Africa</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Africa &amp; Beyond. <a href="https://www.africaandbeyond.com/utilitarian-artifacts-headrests.html" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Utilitarian Artifacts | Headrests</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Good Night&rsquo;s Rest. <a href="https://goodnights.rest/takamakura-japanese-geisha-pillow/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>What&rsquo;s a Takamakura? Japanese Geisha Pillow</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>J-Life International. <a href="https://jlifeinternational.com/pages/what-is-soba-gara-makura" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>What Is Soba Gara Makura Or Buckwheat Hull Pillows</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Shibui Japanese Antiques &amp; Furniture. <a href="https://shibui.com/products/antique-japanese-box-pillow-lacquered-high-pillows-set-of-3" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Antique Japanese Hakomakura Box Pillow, Lacquered High Pillows</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Wikipedia. <a href="https://en.wikipedia.org/wiki/Dwa_(stool)" target="_blank" rel="noreferrer">Dwa (stool)<span className="sr-only"> (opens in a new tab)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Looking for a logo-printed corporate cushion for your company? <a className="text-link text-link--right" href="/en/panduan">See the ordering guide <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
