import type { Metadata } from 'next';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../../../lib/whatsapp';

const title = '马来传统文化中的枕头 — Syrius杂志';
const description = '长枕、婚礼床褥枕具组合，以及与枕头相关的禁忌，各自在传统马来习俗与文化中承载着独特的历史与意义。';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-02',
    modifiedTime: '2026-09-02',
    locale: 'zh_MY',
    siteName: 'Syrius',
    images: [{ url: '/syrius-corporate-pillow-og.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Syrius 品牌定制抱枕' }],
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
  headline: '马来传统文化中的枕头',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

export default function ArtikelZh() {
  return <main>
    <SetHtmlLang lang="zh" />
    <a className="skip-link" href="#artikel-zh">跳至主要内容</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/majalah/bantal-dalam-adat-dan-budaya-melayu-tradisional" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en/majalah/bantal-dalam-adat-dan-budaya-melayu-tradisional" lang="en" hrefLang="en">EN</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="/zh" aria-label="Syrius，返回首页"><Wordmark /></a>
      <nav aria-label="主导航">
        <a href="/zh#cara-zh">订购流程</a>
        <a href="/zh#kelebihan-zh">为何选择我们</a>
        <a href="/zh/portfolio">设计案例</a>
        <a href="/zh/majalah" aria-current="page">杂志</a>
        <a href="/zh#faq-zh">常见问题</a>
      </nav>
      <div className="nav-right">
        <Button href={whatsappUrlZh} variant="white" size="sm" newTabLabel="（在新标签页中打开）">索取报价 <span aria-hidden="true">↗</span></Button>
        <MobileMenu
          links={[
            ['/zh#cara-zh', '订购流程'],
            ['/zh#kelebihan-zh', '为何选择我们'],
            ['/zh/portfolio', '设计案例'],
            ['/zh/majalah', '杂志'],
            ['/zh#faq-zh', '常见问题'],
            ['/majalah/bantal-dalam-adat-dan-budaya-melayu-tradisional', 'Bahasa Melayu'],
            ['/en/majalah/bantal-dalam-adat-dan-budaya-melayu-tradisional', 'English'],
          ]}
          navLabel="移动版导航"
          openLabel="打开菜单"
          closeLabel="关闭菜单"
        />
      </div>
    </div></header>

    <article className="section" id="artikel-zh" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <a className="eyebrow" href="/zh/majalah" data-reveal>← 杂志</a>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '16px 0 8px' }} data-reveal>
马来传统文化<em style={{ fontStyle: 'normal' }}>中的枕头</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>4分钟阅读</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        对大多数人而言，枕头不过是每晚使用、鲜少细想的睡眠用品。但在传统马来文化中，枕头所扮演的角色远不止支撑头部。它出现在婚礼仪式中，留存于谚语与词汇之中，甚至成为至今仍在长辈之间流传的禁忌之一。本文根据可查证的书面资料，追溯枕头的几种角色，也包括马来世界（Alam Melayu）各地仍存在争议或不一致的部分。
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>&ldquo;bantal peluk&rdquo;（马来语长抱枕）与&ldquo;Dutch wife&rdquo;这个绰号：名称的由来</h2>
        <p>睡觉时搂抱的长条圆柱形枕头，在马来西亚称为bantal peluk（字面意思是&ldquo;拥抱枕&rdquo;），在印尼则较常称为guling。东南亚各地也有类似物品，各自有其名称，例如越南语的<em lang="vi" style={{ fontStyle: 'normal' }}>gối ôm</em>与泰语的<em lang="th" style={{ fontStyle: 'normal' }}>monkhang</em>，含义大致相同：睡觉时搂抱的枕头。</p>
        <p>在英语使用者当中，这类枕头也被称为&ldquo;Dutch wife&rdquo;（荷兰太太），尽管这个名称的确切起源仍有争议，无法定论。一个常见的说法将这个名称与19世纪荷兰殖民统治东印度（今印尼）的时期联系起来，当时在这个热带地区服役的荷兰官员与士兵，据说也使用了当地居民的长枕。然而，这种枕头由荷兰人&ldquo;发明&rdquo;的说法，只是代代相传的流行故事，并非经证实的历史事实。另一种解释认为，&ldquo;Dutch wife&rdquo;这个绰号可能与英语中带有调侃意味的&ldquo;Dutch&rdquo;相关表达有关，例如长期以来带贬义使用&ldquo;Dutch&rdquo;一词的&ldquo;Dutch courage&rdquo;（荷兰式勇气）这个说法。</p>
        <p>这一称呼在1923年前后已出现在马来亚与新加坡英语语境中的痕迹，可见于1923年9月3日《<em lang="en" style={{ fontStyle: 'italic' }}>Singapore Free Press</em>》刊登的一封读者来信，信中一名英国男子在新加坡与海峡殖民地生活七年后，感叹伦敦的酒店没有提供&ldquo;Dutch wife&rdquo;。据报道，这种枕头最初的设计与今天的枕头也不同，是一种以亚麻布包裹的中空藤编框架，用意是在闷热潮湿的夜晚促进空气流通、保持凉爽，那时空调尚未普及。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>婚礼仪式中的枕头：新人床褥（pelamin）与&ldquo;bersanding&rdquo;仪式</h2>
        <p>在传统马来婚礼仪式中，尤其是bersanding（合卺礼）仪式上，枕头是pelamin（婚礼礼台）布置的一部分。在廖内群岛马来传统中，包括在巴淡岛（Batam，曾属柔佛—廖内—林加—彭亨苏丹国的一部分），巴淡市文化与旅游局的文化遗产记录显示，当地传统pelamin按层次摆放多种枕头：四个bantal gadok、八个绣花bantal seraga、鳄鱼蛋形的bantal telur buaya、靠枕bantal sandar，加上一个长枕与床褥。同一份资料也记录了peterakne，一个在仪式过程中使用的独立多层平台，用于tepung tawar祝福仪式与喂食礼等环节，显示新人床褥及其枕具布置只是整套婚礼陈设中的一部分。</p>
        <p>部分术语也获得《<em lang="ms" style={{ fontStyle: 'italic' }}>Kamus Dewan</em>》（马来西亚语文出版局出版）的印证，该词典将bantal seraga定义为圆形绣花枕，bantal sandar定义为供倚靠的枕头。这显示这些枕头并非纯粹装饰用途，也在整个仪式过程中支撑盘腿而坐的新人。</p>
        <p>需要指出的是，pelamin上枕头的种类与数量可能因州属、地方王室世系与当地习俗而异，上述布置未必在整个马来世界一致，因为并非每个地区都有充分的学术资料详细记录。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>枕头在马来语言与谚语中的地位</h2>
        <p>根据马来西亚语文出版局出版的《Kamus Dewan》，&ldquo;bantal&rdquo;（枕头）被定义为一种以缝制布料（如袋状）制成、内填木棉、椰壳纤维、泡棉等材料的枕头或垫子。除了长条圆枕bantal golek或bantal peluk之外，词典还记录了berbantal与berbantalkan等词汇，意为以某物作为头部支撑。</p>
        <p>&ldquo;bantal&rdquo;一词也留存于至少两句仍在使用的马来谚语中。&ldquo;orang mengantuk disorongkan bantal&rdquo;（字面意思是&ldquo;瞌睡的人被递上枕头&rdquo;）表示恰好在需要的时刻获得所渴望或所需之物，仿佛未曾开口请求；而&ldquo;lepas bantal berganti tikar&rdquo;（字面意思是&ldquo;枕头之后，换了席子&rdquo;）传统上用于指男子在妻子去世后迎娶其姐妹。这类谚语的存在显示，枕头作为与睡眠、休息关系最密切的日常物品，早已成为马来社会思考与言谈方式中的一种隐喻，远远超出其字面功能。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>禁忌：枕头作为尊重头部的象征</h2>
        <p>部分马来传统禁忌认为，不应坐在枕头上，这一说法至今仍被提及。在相关民间信仰中，坐在枕头上的人可能会长疖子。相同的资料来源也记录了这项禁忌背后更实际的原因：避免枕头被撕裂或压坏，以及认为将臀部置于本应用来支撑头部的布料上并不恰当。</p>
        <p>这类禁忌其实反映了马来文化中一项更深层的价值观：对头部的尊重，因为头部被视为高贵的身体部位，不应轻率对待。以长疖子等身体后果作为警示，是一种教育手段，尤其用于教导孩童尊重与头部密切相关的物品。目前没有医学证据支持坐在枕头上与长疖子之间存在实际关联，这项禁忌更适合理解为一种通过口耳相传传递价值观的传统方式，而非字面上的医学事实。</p>
        <p>从其名称的独特由来，到它在婚礼仪式中的地位，再到它在谚语与禁忌中留下的痕迹，枕头显然承载着远比单纯睡眠用品更丰富的历史与文化意义层次。</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>参考资料</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>马来语维基百科。<a href="https://ms.wikipedia.org/wiki/Pantang_larang_Melayu" target="_blank" rel="noreferrer">Pantang larang Melayu<span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>Mothership.SG。<a href="https://mothership.sg/2017/10/the-dutch-wife-is-a-pillow-with-regional-origins-but-it-has-evolved-into-a-sex-doll/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>The Dutch wife is a pillow with regional origins, but it has evolved into a sex doll</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>巴淡市文化与旅游局（Dinas Kebudayaan dan Pariwisata Kota Batam）。<a href="https://disbudpar.batam.go.id/2020/07/14/mengungkap-peninggalan-budaya-tak-benda-berupa-pelamin-dan-peterakne-melayu/" target="_blank" rel="noreferrer">Mengungkap Peninggalan Budaya Tak Benda Berupa Pelamin dan Peterakne Melayu<span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>马来语文汇编中心（PRPM），马来西亚语文出版局。<a href="https://prpm.dbp.gov.my/cari1?keyword=bantal" target="_blank" rel="noreferrer">Bantal<span className="sr-only">（在新标签页中打开）</span></a>。</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>正在为企业寻找Logo定制抱枕？<a className="text-link text-link--right" href="/zh/panduan">查看订购指南 <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
