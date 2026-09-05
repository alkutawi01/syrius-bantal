import type { Metadata } from 'next';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../../../lib/whatsapp';

const title = '“bantal”与“pillow”的词源 — Syrius杂志';
const description = '追溯马来语“bantal”与英语“pillow”的词源，从南岛语系与拉丁-日耳曼语系的语言记录中寻找线索。';

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
  headline: '“bantal”与“pillow”这两个词从何而来？',
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

    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/majalah/asal-usul-perkataan-bantal-dan-pillow" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en/majalah/asal-usul-perkataan-bantal-dan-pillow" lang="en" hrefLang="en">EN</a></div></div>
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
            ['/majalah/asal-usul-perkataan-bantal-dan-pillow', 'Bahasa Melayu'],
            ['/en/majalah/asal-usul-perkataan-bantal-dan-pillow', 'English'],
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
        &ldquo;bantal&rdquo;与<em style={{ fontStyle: 'normal' }}>&ldquo;pillow&rdquo;从何而来？</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>5分钟阅读</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        枕头是人类生活中最熟悉的日常物品之一，却很少有人追问它的名字从何而来。马来语&ldquo;bantal&rdquo;与英语&ldquo;pillow&rdquo;各自承载着悠久的语言历史，来自截然不同的语系，却都呈现出原始词义随时间逐渐演变的有趣现象。本文追溯这两个词可查证的语言记录，同时坦诚指出语言学者至今仍未能厘清的部分。
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>&ldquo;bantal&rdquo;的南岛语系渊源：重建古语</h2>
        <p>根据南岛语言比较词典（<em style={{ fontStyle: 'italic' }}>Austronesian Comparative Dictionary</em>，简称ACD）——由语言学家Robert Blust及其同事编纂的南岛语系比较数据库——&ldquo;bantal&rdquo;一词与南岛语系比较研究中一个假设性的构拟形式有关，写作<em style={{ fontStyle: 'italic' }}>*bantal</em>，属于原始西马来—波利尼西亚语（Proto-Western Malayo-Polynesian）阶段的构拟词——这并非曾在任何古代文献中实际记录的词，而是语言学者透过比较同源词推导而出的形式。ACD将这一构拟词义重建为&ldquo;一捆或一包布料或衣物&rdquo;。这个形式并非只存在于马来语中，它在其他多种南岛语言中也有同源词（相关语言中源自共同祖先、彼此对应的形式），包括爪哇语与巽他语中同样意为&ldquo;枕头&rdquo;的bantal、古爪哇语中意为&ldquo;布料；作为计量单位的一捆布&rdquo;的bantal、伊班语中同时带有&ldquo;垫子、枕头&rdquo;与&ldquo;布捆&rdquo;两种意思的bantal，以及宿雾语中意为&ldquo;包裹某物，例如脏衣物&rdquo;的bántal。</p>
        <p>然而，ACD的编纂者本身也指出，部分同源词比较很可能是相关南岛语言之间互相借用的结果，而不一定是直接继承自单一祖语。他们承认，这种借用是否发生在足够多的语言之间、以致影响构拟古词的有效性，目前仍不确定。因此，尽管&ldquo;bantal&rdquo;与&ldquo;一捆布料&rdquo;这一原始词义之间的关联获得了扎实的学术支持，这个词的确切起源——究竟是真正传承自古代，还是透过邻近南岛语社群之间的词汇交流而形成——仍是语言学者争论中的课题，而非定论。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>从一捆布料到头部支撑物</h2>
        <p>如果&ldquo;bantal&rdquo;最初确实指&ldquo;一捆或一包布料&rdquo;，那么这个词义后来经历了明显的扩展与收窄，最终专指今天所熟知的头部支撑物。由马来西亚语文出版局（Dewan Bahasa dan Pustaka）出版的《<em lang="ms" style={{ fontStyle: 'italic' }}>Kamus Dewan</em>》第四版，如今将&ldquo;bantal&rdquo;定义为一种以缝制布料（如袋状）制成、内填木棉等材料的枕头或垫子。同一部词典还记录了多种变体，例如bantal golek（长条形圆枕）、bantal seraga（圆形绣花垫）与bantal sandar（靠垫）。</p>
        <p>有趣的是，《Kamus Dewan》还记录了&ldquo;bantal&rdquo;在纺织业中另一个更专门的含义：一种纱线计量单位，一bantal等于十六tukal（绞）。这种&ldquo;一捆或一组&rdquo;的含义，恰好与上述原始西马来—波利尼西亚语构拟中&ldquo;一捆布料&rdquo;的古义相呼应，尽管目前没有研究具体证实这两种含义之间存在直接的历史关联。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>pillow：拉丁语经日耳曼语流传下来的词源</h2>
        <p>与&ldquo;bantal&rdquo;不同，英语&ldquo;pillow&rdquo;一词的起源要容易追溯得多，因为印欧语系拥有远为悠久的书面记录。根据由Douglas Harper依据公认英语词源学资料编纂的词源词典Etymonline，中古英语<em lang="en" style={{ fontStyle: 'italic' }}>pilwe</em>源自古英语<em lang="ang" style={{ fontStyle: 'italic' }}>pyle</em>，意为垫子或床上用枕。这个古英语词又源自构拟的原始西日耳曼语形式<em style={{ fontStyle: 'italic' }}>*pulwi(n)</em>，该形式也在其他多种日耳曼语言中产生了同源词，包括古撒克逊语的<em lang="en" style={{ fontStyle: 'italic' }}>puli</em>、中古荷兰语的<em lang="en" style={{ fontStyle: 'italic' }}>polu</em>、现代荷兰语的<em lang="nl" style={{ fontStyle: 'italic' }}>peluw</em>、古高地德语的<em lang="en" style={{ fontStyle: 'italic' }}>pfuliwi</em>，以及现代德语的<em lang="de" style={{ fontStyle: 'italic' }}>Pfühl</em>。</p>
        <p>根据Etymonline的说法，这个西日耳曼语形式据信在公元二、三世纪左右，早期借自拉丁语<em lang="la" style={{ fontStyle: 'italic' }}>pulvinus</em>一词，意为小垫子或小枕头。然而，Etymonline也承认，拉丁语pulvinus本身的起源无法明确确定。这意味着，尽管从拉丁语经日耳曼语系传入英语的借用链条可以相当有把握地确认，这个词在进入拉丁语之前的最终起源，仍是一个未解之谜。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>&ldquo;pillow&rdquo;词义的扩展与使用</h2>
        <p>从拼写上看，&ldquo;pillow&rdquo;的现代形式直到15世纪中叶左右才固定下来，此前在中古英语时期经历了多种拼写变体。从词义上看，这个词最初专指供躺卧者使用的头部支撑物，后来才扩展涵盖任何内填羽绒或木棉等材料的柔软垫子，也就是今天普遍使用的意义。</p>
        <p>Etymonline还记录了&ldquo;pillow&rdquo;在不同年代形成的多个复合词，例如pillow-case（1745年，指枕套）、pillow fight（1837年，指嬉闹式的枕头大战游戏）、pillow-sham（1867年，指纯粹用于装饰、而非日常睡眠使用的装饰性枕套），以及pillow talk（1939年，指床上的亲密交谈）。动词形式&ldquo;to pillow&rdquo;，意为将某物枕靠于枕头上，则约在1620年代开始使用。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>两个词，两条语言演变路径</h2>
        <p>比较这两个词会发现一个有趣的共同点，尽管它们来自完全不相关的语系——&ldquo;bantal&rdquo;属于南岛语系，&ldquo;pillow&rdquo;属于印欧语系。这两个词都被发现始于较为宽泛的词义——bantal的&ldquo;一捆或一包布料&rdquo;，以及拉丁语pulvinus的&ldquo;垫子或小枕头&rdquo;——而后词义逐渐收窄，专指今天所熟知的头部支撑物。这一发展与词源学研究中的常见规律一致：日常物品的名称往往源自最初描述其材质或功能的词，而非其最终形态。</p>
        <p>尽管如此，这两条历史脉络的确定程度并不相同。&ldquo;pillow&rdquo;经拉丁语与日耳曼语系传入的脉络，有悠久的书面记录与英语学界的广泛共识支持。相比之下，&ldquo;bantal&rdquo;与构拟的南岛语形式*bantal之间的关联，仍只是基于比较法的一种推论，学者们自己也承认，部分证据可能源自相关语言之间的借用，而非单一、未曾中断的传承脉络。</p>
        <p>这两个词的历史显示，即使是日常生活中最普通物品的名称，也可能蕴藏着语言学者至今仍在探究的古老语言层次。</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>参考资料</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Etymonline（Douglas Harper）。<a href="https://www.etymonline.com/word/pillow" target="_blank" rel="noreferrer">《pillow》词源条目<span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>南岛语言比较词典（ACD），由Robert Blust与Stephen Trussel编纂，现由Alexander D. Smith维护。<a href="https://acd.clld.org/cognatesets/25127" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>Cognate Set: *bantal &lsquo;bundle of cloth or clothes&rsquo;</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>马来语文汇编中心（PRPM），马来西亚语文出版局。<a href="https://prpm.dbp.gov.my/Cari1?keyword=bantal" target="_blank" rel="noreferrer">bantal — Kamus Dewan第四版<span className="sr-only">（在新标签页中打开）</span></a>。</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>正在为贵公司寻找Logo定制企业抱枕？<a className="text-link text-link--right" href="/zh/panduan">查看订购指南 <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
