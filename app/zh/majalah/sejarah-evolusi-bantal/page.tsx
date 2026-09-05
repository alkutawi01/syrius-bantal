import type { Metadata } from 'next';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../../../lib/whatsapp';

const title = '枕头的历史与演变 — Syrius杂志';
const description = '追溯枕头的历史：从古埃及、美索不达米亚、中国与日本的硬质头枕，到欧洲逐渐普及的软质羽绒枕。';

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
  headline: '枕头的历史与演变',
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

    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/majalah/sejarah-evolusi-bantal" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en/majalah/sejarah-evolusi-bantal" lang="en" hrefLang="en">EN</a></div></div>
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
            ['/majalah/sejarah-evolusi-bantal', 'Bahasa Melayu'],
            ['/en/majalah/sejarah-evolusi-bantal', 'English'],
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
        枕头的历史<em style={{ fontStyle: 'normal' }}>与演变</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>8分钟阅读</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        枕头是人们鲜少细想其起源的日常物品之一，尽管它自古代文明以来便以各种形式存在。远在今天常见的柔软、内填羽绒或棉花的枕头出现之前，埃及、西亚与东亚的许多古代社会使用的是坚硬的头枕，材质包括石材、木材、象牙或陶瓷。其形状、材质与用途因文明而异，之后软质枕逐渐在许多地区普及，并在中世纪以后的欧洲经历了进一步发展。
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>古埃及与美索不达米亚的头枕</h2>
        <p>在今天熟悉的软枕出现之前，埃及与西亚的许多古代文明在睡眠时使用硬质头枕。在古埃及，这类物品以木材、石材（包括方解石，亦称埃及雪花石）、象牙与陶瓷等多种材质制成。其形状通常包含较宽的平底座、中间狭窄的支撑柱，以及弯曲的顶部以承托颈部。相关实例见于早王朝时期的埃及（约公元前3000至2625年），并延续至托勒密时期。据Glencairn博物馆的记录，其中最著名的实例之一，是在法老图坦卡蒙（约公元前1332至1323年在位，第十八王朝，整体约公元前1539至1292年）陵墓中发现的一组八件头枕。</p>
        <p>使用这类头枕并不仅仅是为了舒适。学者认为，这类头枕的形状可能有助于在埃及炎热气候中促进头部周围的空气流通与散热，比布制寝具较不容易受到昆虫影响，也有助于保护精心梳理的发型、假发与头饰，使其在夜间不被弄乱或损坏，因为这类发型往往需要时间与技巧才能完成。在古埃及信仰的脉络下，部分头枕纳入了具保护意涵的图像，包括与贝斯（Bes）与塔沃瑞特（Taweret）等神祇相关的形象。由于象牙与某些石材价格昂贵，且需要高超的工艺，雕刻较为精细的实例，据信也反映了拥有者的社会地位。</p>
        <p>在今日伊拉克所在的地区，若干头枕形物品也与古代美索不达米亚文明有关，例如以石灰岩雕成的新月形物品。不过，相关的考古记录既不如埃及那样丰富，也不如埃及记录得那样详尽，其确切使用年代在中东考古学界仍是一个悬而未决的问题。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>中国：作为健康与地位象征的瓷枕</h2>
        <p>在中国，硬质头枕同样有着悠久的历史，陶瓷或瓷制枕头据信在隋朝（公元581至618年）及其后的唐朝逐渐盛行。已知最早的实例之一，是与河南安阳一座与官员张盛有关的墓葬相关联的箱形瓷枕，估计年代约在公元6世纪。瓷枕生产的鼎盛时期出现在宋朝（960至1279年），产量在更大规模上扩展，工艺与装饰图案也更为多样。其中一件留存至今的实例，是来自北宋时期、形似孩童的白瓷枕，如今收藏于北京故宫博物院。</p>
        <p>中国的瓷枕与其他硬质枕，也与睡眠以外更广泛的功能有关。石材、玉石、竹、木与瓷器等材质被认为具有较凉爽的使用感，也被用于维持梳理整齐的发型；部分历史记载也将其与中医把脉时支撑医师手腕、书写或作画时支撑手臂等做法联系起来。较小巧、便于携带的款式，也曾被旅人带在身边。</p>
        <p>这些枕头上的装饰图案，在中国文化中往往带有象征意涵，狮子、龙、莲花与孩童等图案，有时与保护、权力或多子多福等主题相关联。元朝（1279至1368年）期间，枕头设计也开始模仿建筑造型与戏台道具，而来自景德镇地区的青花瓷器，则以精美的装饰工艺闻名。随着其他较柔软的材质日渐受到青睐，瓷枕在明朝（1368至1644年）与清朝（1644至1911年）逐渐较少用于日常睡眠，尽管据说部分地区的生产一直延续至20世纪中叶，才最终退出日常使用。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>日本：takamakura与传统发型的保存</h2>
        <p>在日本，传统头枕称为<em lang="ja" style={{ fontStyle: 'normal' }}>takamakura</em>，字面意思是&ldquo;高枕&rdquo;。与承托整个头部的埃及或中国头枕不同，takamakura以木质底座制成，常髹以光亮的漆器，部分实例呈曲线造型，使用时可略微摇动。顶部会放置一个较小、较柔软的枕垫，常填充麦壳等植物材料，让头部的重量在睡眠时不会直接压在头发上。</p>
        <p>使用takamakura的主要原因，是为了保存称为<em lang="ja" style={{ fontStyle: 'normal' }}>nihongami</em>的传统日本发型，尤其在艺伎与其学徒舞妓之间流行。这类发型需要相当的时间与技巧才能梳成，且必须连续数日维持不变。通过使用takamakura睡眠，头顶的发型整晚都能保持不受干扰。如今留存的漆器布面takamakura大多可追溯至19世纪，而瓷制款式则大多属于20世纪初至中期，显示这项做法在软枕成为主流之前，仍持续了相当长的一段历史。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>欧洲转向软枕的历程</h2>
        <p>与埃及、美索不达米亚、中国与日本的硬质头枕传统不同，欧洲社会最终以填充羽绒、棉花或类似材质的软枕作为标准。然而，这一转变是逐渐发生的，并受到社会阶层与官方规范的影响，而非单一发明的结果。中世纪末期，以羽绒、羊毛、稻草及各种植物纤维（包括称为<em lang="en" style={{ fontStyle: 'normal' }}>reed mace</em>与<em lang="en" style={{ fontStyle: 'normal' }}>thistle</em>的植物绒毛）填充的床褥与枕头贸易，在英格兰日渐兴盛，以致当局开始加以规管。据曼彻斯特大学历史学者所述，英格兰在1499年通过的一项法案，禁止销售在法规中被称为<em lang="en" style={{ fontStyle: 'normal' }}>corrupte stuffes</em>的劣质床褥与枕头填充材料，理由是被视为健康隐患；而1552年修订的规定，则特别禁止商业销售reed mace与thistle绒毛，惟个人使用不受限制。</p>
        <p>此后，枕头填充材料的规管仍持续进行。1594年的记录显示，一群伦敦的家具制造商与床具供应商向一名王室官员威廉·塞西尔（William Cecil）请愿，主张植物性绒毛需要整整一年的干燥期才能安全使用，而竞争对手则持相反意见，认为该材料无论干燥多久，都会较早滋生害虫，或导致各种不卫生的疾病。这项床褥与软垫用品贸易，也由一个名为Worshipful Company of Upholders的皇家特许机构监督，该机构于1626年获得特许状，并进行检查、对劣质填充材料的销售者处以罚款，直至18世纪仍在进行。这类记录显示，软质寝具的商业使用范围在当时已不局限于上层阶级，因而需要一套正式的规管制度。</p>
        <p>从上层阶级的奢侈品，转变为一般家庭的日常必需品，这一进程自18世纪起进一步加速，随着贸易路线的扩展与纺织业的工业化，棉布与枕头填充材料变得更为廉价、更易取得。这个过程，最终让原本与贵族阶层相关联的软枕，转变为如今几乎每个家庭都能拥有的量产商品。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>古老功能，现代形态</h2>
        <p>整体而言，可被视为枕头早期形态的物品，最初并非单纯为了今天所理解的舒适而制造。不同社会依据各自的环境、技术与文化偏好，发展出适合自身的头枕与枕头：在古埃及，以及根据流行的历史说法也包括美索不达米亚，管理热度、避免昆虫与保护发饰等目的经常被提及；在中国，凉爽感、健康观念与工艺传统则常与这项传统相关联；而在日本，保存精致发型是主要考量。在欧洲，软质枕头则透过横跨中世纪、文艺复兴与工业革命的一段漫长过程，逐渐变得格外普及。</p>
        <p>尽管如此，这些较早传统的元素并未完全消失。至今，亚洲部分地区仍可见到造型较硬的枕头或颈部支撑物，有些产品如今也以颈部支撑或健康用途作为营销方向。这显示，数千年前所划下的、区分功能性头枕与舒适用枕头的界线，其实从未真正完全封闭。</p>
        <p>枕头历经各时代的演变显示，一项基本的睡眠需求，如何能因一个文明的气候、信仰与社会结构而呈现出不同的样貌。</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>参考资料</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Glencairn博物馆。<a href="https://www.glencairnmuseum.org/newsletter/2018/7/25/headrests-in-glencairns-egyptian-collection-practicality-and-protection" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Headrests in Glencairn&rsquo;s Egyptian Collection: Practicality and Protection</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>China Daily。<a href="https://www.chinadaily.com.cn/a/202303/23/WS641c0009a31057c47ebb62a1.html" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>A journey through the history of Chinese porcelain pillows</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>曼彻斯特大学，Sleeping Well项目部落格。<a href="https://sites.manchester.ac.uk/sleeping-well/2022/11/02/bedding-down-in-early-modern-england/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Bedding &lsquo;Down&rsquo; in Early Modern England</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>Tokyo Jinja in Doha。<a href="https://www.tokyojinjaindoha.com/2013/04/02/takamakura-a-geishas-hard-night-sleep/" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Takamakura&hellip; A Geisha&rsquo;s Hard Night Sleep</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>正在寻找Logo定制企业抱枕？<a className="text-link text-link--right" href="/zh/panduan">查看订购指南 <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
