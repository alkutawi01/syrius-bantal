import type { Metadata } from 'next';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlEn, whatsappPahangUrlEn } from '../../../lib/whatsapp';

const title = 'The History and Evolution of the Pillow Through the Ages — Syrius Magazine';
const description = "Trace the pillow's history from hard headrests in Ancient Egypt, Mesopotamia, China and Japan, to soft down-filled pillows becoming standard in Europe.";

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
  headline: 'The history and evolution of the pillow through the ages',
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

    <div className="announcement"><div className="container"><span>Corporate Gifting &amp; Branded Cushions</span><a href="/majalah/sejarah-evolusi-bantal" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/zh/majalah/sejarah-evolusi-bantal" lang="zh" hrefLang="zh">中文</a></div></div>
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
            ['/majalah/sejarah-evolusi-bantal', 'Bahasa Melayu'],
            ['/zh/majalah/sejarah-evolusi-bantal', '中文'],
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
        The history and evolution of the pillow <em style={{ fontStyle: 'normal' }}>through the ages.</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>8 min read</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        The pillow is one of those everyday objects rarely thought about in terms of its origins, even though it has existed in various forms since ancient civilisations. Long before the soft, down- or cotton-filled pillow familiar today, many ancient societies in Egypt, West Asia and East Asia used firm headrests, made from materials such as stone, wood, ivory or ceramic. Their shape, material and purpose varied by civilisation, before soft-filled pillows gradually became especially widespread in many regions, particularly in Europe from the medieval period onward.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Headrests in Ancient Egypt and Mesopotamia</h2>
        <p>Before the soft pillow familiar today existed, many ancient civilisations in Egypt and West Asia used hard headrests during sleep. In Ancient Egypt, these objects were made from various materials such as wood, stone (including calcite, also referred to as Egyptian alabaster), ivory and ceramic. Their shape typically consisted of a wider flat base, a narrow supporting pillar in the middle, and a curved top section to cradle the nape of the neck. Examples are known from early dynastic Egypt (around 3000 to 2625 BC) and continued into later periods, including the Ptolemaic era. One of the most famous examples is a set of eight headrests found in the tomb of Pharaoh Tutankhamun, who reigned around 1332 to 1323 BC during the Eighteenth Dynasty (roughly 1539 to 1292 BC overall), according to records from the Glencairn Museum.</p>
        <p>The use of these headrests wasn't only about comfort. Scholars have suggested they may have helped with ventilation and cooling around the head during sleep in Egypt's hot climate, kept cleaner than cloth bedding that could harbour insects, and helped protect elaborate hairstyles, wigs and headdresses from being damaged or dishevelled overnight, since such hairstyles took time and skill to arrange. In the context of Ancient Egyptian belief, some headrests incorporated protective imagery, including figures associated with deities such as Bes and Taweret. Since materials such as ivory and certain types of stone were expensive and required high craftsmanship, more elaborately carved examples likely also reflected the owner's social status.</p>
        <p>Several headrest-shaped objects have also been linked to ancient Mesopotamian civilisation in the region now known as Iraq, such as crescent-shaped objects carved from limestone. However, the archaeological record for these is neither as extensive nor as well-documented as the evidence found in Egypt, and the exact dating of their use remains an open question in Middle Eastern archaeology.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>China: the ceramic pillow as a symbol of health and status</h2>
        <p>In China, the firm headrest also has a long history, with ceramic or porcelain pillows becoming prominent during the Sui dynasty (581 to 618 AD) and the Tang dynasty that followed. One of the earliest known examples is a box-shaped porcelain pillow associated with a tomb belonging to an official named Zhang Sheng in Anyang, Henan province, estimated to date from the 6th century AD. The golden age of porcelain pillow production occurred during the Song dynasty (960 to 1279), when output expanded on a larger scale alongside more varied techniques and decorative patterns. One surviving example is a white porcelain pillow shaped like a child from the Northern Song era, now held at the Palace Museum, Beijing.</p>
        <p>Ceramic and other firm pillows in China are also associated with a broader range of functions beyond just sleeping. Materials such as stone, jade, bamboo, wood and porcelain are believed to have helped cool the head in hot weather and kept a neatly combed hairstyle in place, and some historical accounts associate them with practices such as supporting a physician's wrist during pulse examinations in traditional Chinese medicine, or a writer's or painter's arm while creating calligraphy. Smaller, portable versions were also carried by travellers on long journeys.</p>
        <p>Decorative patterns on these pillows often carried symbolic meaning in Chinese culture, with designs such as lions, dragons, lotus flowers and children sometimes associated with themes of protection, power or fertility. During the Yuan dynasty (1279 to 1368), pillow designs also began to imitate architectural forms and stage props, while blue-and-white pillows from the Jingdezhen region were known for their fine carving. The use of ceramic pillows gradually became less common for everyday sleeping during the Ming (1368 to 1644) and Qing (1644 to 1911) dynasties as other, softer materials became more widely favoured, although some regional production is said to have continued into the mid-20th century before eventually falling out of everyday use.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Japan: the takamakura and preserving traditional hairstyles</h2>
        <p>In Japan, the traditional headrest is known as the <em lang="ja" style={{ fontStyle: 'normal' }}>takamakura</em>, which literally means &ldquo;tall pillow.&rdquo; Unlike the Egyptian or Chinese headrests that cradled the whole head, the takamakura was designed with a wooden base, often finished with glossy lacquer, with some examples featuring a curved shape that allows a little rocking motion during use. A smaller, softer cushion was placed on top, often filled with wheat husks or other plant materials, so the weight of the head wouldn't press directly onto the hair during sleep.</p>
        <p>The main reason the takamakura was used was to preserve traditional Japanese hairstyles known as <em lang="ja" style={{ fontStyle: 'normal' }}>nihongami</em>, particularly among geisha and their apprentices, known as maiko. Such hairstyles required considerable time and skill to arrange and had to be kept unchanged for several days in a row. By sleeping with a takamakura, the hairstyle on top stayed undisturbed throughout the night. Most surviving lacquer-and-cloth takamakura today date from the 19th century, while porcelain versions mostly date from the early to mid-20th century, showing this practice continued fairly late into history before the soft pillow became the dominant choice.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>The shift to the soft pillow in Europe</h2>
        <p>Unlike the hard-headrest traditions of Egypt, Mesopotamia, China and Japan, European society eventually favoured the soft pillow, filled with down, cotton or similar material, as the standard. However, this shift happened gradually and was shaped by social class and official regulation, not simply the result of a single invention. Toward the end of the Middle Ages, trade in bedding goods such as mattresses and pillows filled with down, wool, straw and various plant-based fibres, including the soft fluff from plants known as <em lang="en" style={{ fontStyle: 'normal' }}>reed mace</em> and <em lang="en" style={{ fontStyle: 'normal' }}>thistle</em>, grew increasingly in England, to the point that authorities began regulating it. According to historians at the University of Manchester, an Act passed in England in 1499 prohibited the sale of inferior mattress and pillow filling material described in the legislation as <em lang="en" style={{ fontStyle: 'normal' }}>corrupte stuffes</em>, considered a health hazard, while a revised regulation in 1552 specifically prohibited the commercial sale of reed mace and thistle down, although personal use wasn't restricted.</p>
        <p>Regulation of pillow filling materials continued afterward. Records from 1594 show a group of furniture makers and bed suppliers in London petitioning a royal official named William Cecil, arguing that plant-based down needed a full year of drying before it was safe to use, while their competitors argued the opposite, that the material either bred vermin early on or caused various unsanitary illnesses regardless of how long it was dried. This trade in bedding and upholstery goods was also overseen by a royal chartered body called the Worshipful Company of Upholders, which received its charter in 1626 and carried out inspections and fined sellers of low-quality filling material until as late as the 18th century. Records like these suggest soft bedding products had become commercially significant enough in society, beyond purely elite use, to require a formal regulatory system.</p>
        <p>The shift from a luxury item of the upper classes to an ordinary household necessity accelerated further from the 18th century onward, as expanding trade routes and the industrialisation of textile production made cotton fabric and pillow filling material cheaper and more widely available. This process eventually turned the soft pillow, originally associated with the nobility, into a mass-produced item that could be owned by almost every household, as seen today.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Ancient function, modern form</h2>
        <p>Taken as a whole, the objects that could be considered early forms of the pillow weren't originally created purely for comfort as understood today. Different societies developed headrests and pillows suited to their own environments, technologies and cultural preferences: in Ancient Egypt, and according to popular historical accounts also in Mesopotamia, purposes such as managing heat, avoiding insects and protecting hair ornaments are often cited; in China, coolness, health-related beliefs and craftsmanship are frequently associated with the tradition; and in Japan, preserving elaborate hairstyles was a central concern. In Europe, soft-filled pillows became especially widespread through a long process spanning the Middle Ages, the Renaissance and the Industrial Revolution.</p>
        <p>Even so, elements of these older traditions haven't entirely disappeared. Firmer-shaped pillows or neck supports can still be found in some parts of Asia today, and are even marketed for health reasons such as neck and spinal posture support. This shows the line dividing the functional headrest from the pillow for comfort, first drawn thousands of years ago, was never really fully closed.</p>
        <p>The pillow's evolution through the ages shows how a basic sleep need can be shaped differently by the climate, beliefs and social structure of a civilisation.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>References</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Glencairn Museum. <a href="https://www.glencairnmuseum.org/newsletter/2018/7/25/headrests-in-glencairns-egyptian-collection-practicality-and-protection" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Headrests in Glencairn&rsquo;s Egyptian Collection: Practicality and Protection</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>China Daily. <a href="https://www.chinadaily.com.cn/a/202303/23/WS641c0009a31057c47ebb62a1.html" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>A journey through the history of Chinese porcelain pillows</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>University of Manchester, Sleeping Well project blog. <a href="https://sites.manchester.ac.uk/sleeping-well/2022/11/02/bedding-down-in-early-modern-england/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Bedding &lsquo;Down&rsquo; in Early Modern England</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
          <li>Tokyo Jinja in Doha. <a href="https://www.tokyojinjaindoha.com/2013/04/02/takamakura-a-geishas-hard-night-sleep/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Takamakura&hellip; A Geisha&rsquo;s Hard Night Sleep</em><span className="sr-only"> (opens in a new tab)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Looking for a logo-printed corporate cushion for your company? <a className="text-link text-link--right" href="/en/panduan">See the ordering guide <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="Custom corporate cushions for more meaningful gifts." newTabLabel="(opens in a new tab)" whatsappUrl={whatsappUrlEn} whatsappPahangUrl={whatsappPahangUrlEn} />
  </main>;
}
