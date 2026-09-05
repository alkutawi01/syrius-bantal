import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../../../lib/whatsapp';

const title = '什么是热升华印花？— Syrius杂志';
const description = '简明介绍热升华印花工艺：数码设计如何通过加热与加压转印至布料纤维中。';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-01',
    modifiedTime: '2026-09-01',
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

const steps: [string, string, ReactNode][] = [
  ['设计印刷', '数码设计通过含有升华染料的专用墨水，印制到转印纸上。', <svg key="s1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ['加热压印', '转印纸与布料放入热压机，温度约195–205°C。', <svg key="s2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M12 10v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="4" y="17" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>],
  ['染料转化为气体', '加热使染料由固态直接转化为气态，并进入聚酯纤维内部。', <svg key="s3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="7" cy="8" r="1.3" fill="currentColor" /><circle cx="12" cy="6" r="1.3" fill="currentColor" /><circle cx="17" cy="9" r="1.3" fill="currentColor" /><circle cx="9" cy="13" r="1.3" fill="currentColor" /><circle cx="15" cy="14" r="1.3" fill="currentColor" /><circle cx="12" cy="18" r="1.3" fill="currentColor" /></svg>],
  ['形成耐久印花', '布料冷却后，染料固定于纤维结构内部。', <svg key="s4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '什么是热升华印花？',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

export default function ArtikelZh() {
  return <main>
    <SetHtmlLang lang="zh" />
    <a className="skip-link" href="#artikel-zh">跳至主要内容</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/majalah/apa-itu-percetakan-sublimasi" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en/majalah/apa-itu-percetakan-sublimasi" lang="en" hrefLang="en">EN</a></div></div>
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
            ['/majalah/apa-itu-percetakan-sublimasi', 'Bahasa Melayu'],
            ['/en/majalah/apa-itu-percetakan-sublimasi', 'English'],
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
        什么是<em style={{ fontStyle: 'normal' }}>热升华印花？</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>2分钟阅读</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        热升华印花是一种利用加热将染料渗入聚酯纤维的印花方式，而非在表面形成一层独立的墨层。广泛用于在抱枕、球衣及运动服等纺织品上印制Logo、图案与全彩设计。
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>印花流程如何运作</h2>
        <div className="step-grid" style={{ marginBottom: 24 }}>
          {steps.map(([title, text, icon], i) => <div className="bento-tile bento-value" key={title}>
            <span className="bento-icon">{icon}</span>
            <p style={{ color: 'var(--text)', fontSize: 11, fontWeight: 700, letterSpacing: '.05em', margin: '0 0 4px' }}>{String(i + 1).padStart(2, '0')}</p>
            <h3>{title}</h3><p>{text}</p>
          </div>)}
        </div>
        <p>整个过程从数码设计印刷到专用转印纸开始，所用的升华染料在室温下呈固态。转印纸随后与布料贴合，放入热压机中，在约195–205°C的高温与稳定压力下处理数秒。</p>
        <p>在此温度下，固态染料不经过液态阶段，直接转化为气体——这个过程称为升华。加热提升了聚酯分子的活动性，使染料气体得以渗入纤维之中。当热源移除、布料冷却后，染料便固定于纤维结构内部，形成持久印花效果。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>为什么使用聚酯布料</h2>
        <p>这项工艺只适用于含有聚酯或聚合物涂层的布料，因为热升华依赖染料分子在高温下进入聚酯纤维结构中。未经处理的天然布料（如棉布）缺乏进行这种染料吸收所需的聚酯结构，因此棉布上的印花效果通常较为暗淡或不清晰，相较聚酯布料的效果逊色。</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>印花特性</h2>
        <p>由于染料成为布料纤维的一部分，而非附着在表面的一层涂层，热升华印花具有极佳的抗裂、抗剥落特性，与表层印刷方式（如传统丝网印刷）相比通常更为耐用。这使其特别适合覆盖整个产品表面的全彩设计与图案，例如全版印花的抱枕或球衣。</p>
        <p>每种印刷方式——热升华、DTF、DTG或丝网印刷——各有其优势与适用情境，视布料种类、设计复杂度与订购数量而定。没有单一方式适用于所有情况，也不存在绝对&ldquo;最佳&rdquo;的印刷方案。</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>参考资料</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Mimaki USA。<a href="https://www.mimakiusa.com/blog/understanding-the-dye-sublimation-process/" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Understanding the Dye Sublimation Process</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>VistaPrint。<a href="https://www.vistaprint.com/hub/dye-sublimation-printing" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Dye Sublimation Printing Guide</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Syrius企业定制抱枕采用热升华印花工艺制作。<a className="text-link text-link--right" href="/zh/panduan">查看订购指南 <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
