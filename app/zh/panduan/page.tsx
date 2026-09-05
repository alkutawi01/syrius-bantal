import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../../components/Button';
import { MobileMenu } from '../../components/MobileMenu';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SetHtmlLang } from '../../components/SetHtmlLang';
import { SiteFooter } from '../../components/SiteFooter';
import { Wordmark } from '../../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../../lib/whatsapp';

const title = '企业定制抱枕订购指南 — Syrius';
const description = '简明指南：了解企业定制热升华印花抱枕的适用场景、Logo准备方式，以及与Syrius的订购流程。';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
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

const occasions: [string, string, ReactNode][] = [
  ['员工与团队礼品', '用于公司周年庆、团队里程碑或节庆活动，作为表达感谢与认可的一份心意。', <svg key="o1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.5" /><path d="M14.5 20c.3-2.7 2-4.8 4.3-4.8 1.6 0 3 1 3.7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>],
  ['活动与会议纪念品', '赠予嘉宾或参与者作为纪念，相比一次性纪念品，更容易融入日常使用。', <svg key="o2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>],
  ['客户与合作伙伴礼品', '通过融入品牌形象的礼品，强化客户与合作伙伴之间的联系。', <svg key="o3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="7" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" /><path d="M10.2 12h3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>],
];

const artworkTips: [string, string, ReactNode][] = [
  ['文件格式', '请提供矢量格式的Logo文件（AI、EPS或可编辑矢量PDF）或透明背景的高解析度PNG文件，确保印刷后Logo清晰锐利。', <svg key="t1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>],
  ['品牌配色', '提供正式的品牌色码（HEX或Pantone色号），以确保印花颜色与现有品牌视觉一致。', <svg key="t2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" /><circle cx="10.5" cy="7" r="1.1" fill="currentColor" /><circle cx="15" cy="8" r="1.1" fill="currentColor" /></svg>],
  ['版面设计', '请告知Logo希望单独呈现，或进行满版重复排列，以及是否需要加入其他文字（例如活动名称）。', <svg key="t3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg>],
];

const orderSteps: [string, ReactNode][] = [
  ['通过WhatsApp联系我们，分享您的活动类型、数量与企业定制抱枕的用途。', <svg key="s1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['按照以上说明发送您的Logo、品牌色码与相关资料。', <svg key="s2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ['我们会提供设计稿与报价，待您确认后才开始制作。', <svg key="s3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何向Syrius订购企业定制抱枕',
  step: orderSteps.map(([text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    text,
  })),
};

export default function PanduanZh() {
  return <main>
    <SetHtmlLang lang="zh" />
    <a className="skip-link" href="#kandungan-zh">跳至主要内容</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/panduan" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en/panduan" lang="en" hrefLang="en">EN</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="/zh" aria-label="Syrius，返回首页"><Wordmark /></a>
      <nav aria-label="主导航">
        <a href="/zh#cara-zh">订购流程</a>
        <a href="/zh#kelebihan-zh">为何选择我们</a>
        <a href="/zh/portfolio">作品集</a>
        <a href="/zh/majalah">杂志</a>
        <a href="/zh#faq-zh">常见问题</a>
      </nav>
      <div className="nav-right">
        <Button href={whatsappUrlZh} variant="white" size="sm" newTabLabel="（在新标签页中打开）">索取报价 <span aria-hidden="true">↗</span></Button>
        <MobileMenu
          links={[
            ['/zh#cara-zh', '订购流程'],
            ['/zh#kelebihan-zh', '为何选择我们'],
            ['/zh/portfolio', '作品集'],
            ['/zh/majalah', '杂志'],
            ['/zh#faq-zh', '常见问题'],
            ['/panduan', 'Bahasa Melayu'],
            ['/en/panduan', 'English'],
          ]}
          navLabel="移动版导航"
          openLabel="打开菜单"
          closeLabel="关闭菜单"
        />
      </div>
    </div></header>

    <section className="section" id="kandungan-zh" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">指南</p><h1>下单前，<em>先了解订购流程。</em></h1></div>
        <p>简明指南，帮助您了解选择方式、准备资料，并顺利完成Syrius企业定制抱枕订购流程。</p>
      </div>

      <div style={{ maxWidth: 700, margin: '0 0 var(--s7)' }} data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>什么是企业热升华印花抱枕？</h2>
        <p>企业热升华印花抱枕采用热升华工艺制作——通过加热让染料进入布料纤维，使印花效果更耐用，不易龟裂或剥落。这项工艺让我们能依照贵机构的品牌视觉规范，定制Logo、配色与排版。</p>
      </div>

      <div style={{ marginBottom: 'var(--s7)' }}>
        <h2 data-reveal style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: 0 }}>什么时候适合使用企业定制抱枕？</h2>
        <div className="occasion-grid">
          {occasions.map(([title, text, icon], i) => <div className="bento-tile bento-value" data-reveal style={{ transitionDelay: `${i * 80}ms` }} key={title}>
            <span className="bento-icon">{icon}</span><h3>{title}</h3><p>{text}</p>
          </div>)}
        </div>
      </div>

      <div style={{ maxWidth: 700, marginBottom: 'var(--s7)' }} data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>应该订购多少数量？</h2>
        <p>由于我们没有最低订购数量要求，您可以按实际需求订购。联系我们之前，可参考以下几点：</p>
        <ul style={{ paddingLeft: 20, margin: '16px 0', display: 'grid', gap: 10 }}>
          <li><b>计算实际收礼人数</b> — 员工、活动嘉宾或客户的实际人数，而非概略估算。</li>
          <li><b>可考虑预留少量备用</b> — 是否预留备用数量，可根据实际需求决定，例如新进员工或替补的可能性。</li>
          <li><b>在设计定案前确认数量</b> — 让我们提供的报价与交期能准确对应最终数量。</li>
        </ul>
      </div>

      <div style={{ marginBottom: 'var(--s7)' }}>
        <h2 data-reveal style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>准备Logo与设计</h2>
        <p data-reveal style={{ maxWidth: 700 }}>为了让印花效果尽可能贴近您的品牌形象，以下几点有助设计审核顺利进行：</p>
        <div className="faq-list" style={{ marginTop: 24 }}>
          {artworkTips.map(([title, text, icon]) => <div className="faq-item" key={title} data-reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontWeight: 700, color: 'var(--ink)', fontSize: 15 }}><span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>{title}</div>
            <p style={{ marginLeft: 52 }}>{text}</p>
          </div>)}
        </div>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>如何下单</h2>
        <p style={{ maxWidth: 700, marginBottom: 24 }}>订购流程从WhatsApp简单沟通开始——无需填写复杂表格，并提供灵活的订购数量选择。</p>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16, maxWidth: 700 }}>
          {orderSteps.map(([text, icon], i) => <li style={{ display: 'flex', gap: 14, alignItems: 'center' }} key={text}>
            <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
            <span><b style={{ color: 'var(--navy)', fontWeight: 800, marginRight: 8 }}>{String(i + 1).padStart(2, '0')}</b>{text}</span>
          </li>)}
        </ol>
      </div>
    </div></section>

    <section className="final-cta"><div className="container" data-reveal>
      <p className="eyebrow">准备好开始了吗？</p>
      <h2>分享您的需求。<br /><em>其余交给我们。</em></h2>
      <p>通过WhatsApp联系Syrius，了解设计、数量、价格与配送详情。</p>
      <Button href={whatsappUrlZh} variant="white" newTabLabel="（在新标签页中打开）">开始下单 <span aria-hidden="true">↗</span></Button>
    </div></section>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
