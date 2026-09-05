import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../components/Button';
import { MobileMenu } from '../components/MobileMenu';
import { ScrollReveal } from '../components/ScrollReveal';
import { SetHtmlLang } from '../components/SetHtmlLang';
import { SiteFooter } from '../components/SiteFooter';
import { Wordmark } from '../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../lib/whatsapp';

const title = '企业定制抱枕 — Syrius';
const description = 'Syrius为马来西亚企业与机构提供品牌定制抱枕及热升华印花服务，由拥有多年定制印花经验的团队制作。';

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

const values: [string, string, ReactNode][] = [
  ['始于2011年的印花经验', '由拥有多年定制印花经验的Syrius团队制作。', <svg key="v1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.9 6.4L22 9l-5 5.2L18.2 22 12 18.3 5.8 22 7 14.2 2 9l7.1-.6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>],
  ['灵活的订购数量', '无论订单大小，我们都采用一致的品质标准。', <svg key="v2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M3 8v8l9 4 9-4V8M12 12v8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['根据品牌量身定制', '我们依照贵机构的品牌视觉规范，定制Logo呈现、品牌配色与版面设计。', <svg key="v3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" /><circle cx="10.5" cy="7" r="1.1" fill="currentColor" /><circle cx="15" cy="8" r="1.1" fill="currentColor" /></svg>],
];

const faqs: [string, string, ReactNode?][] = [
  ['有最低订购数量要求吗？', '目前没有最低订购数量要求，小批量与大批量订购皆采用一致的品质标准，适合团队礼品、内部活动等较小规模的需求。'],
  ['如何下单？', '通过WhatsApp联系我们，分享您的需求（活动类型、数量与用途）。发送您的Logo与品牌配色，我们会确认设计需求并提供报价，待您确认后才开始制作。'],
  ['设计可以根据我们的品牌视觉定制吗？', '可以。Logo呈现、配色与版面都能按照贵机构的品牌视觉规范进行定制。', <> <a className="text-link" href="/zh/portfolio">查看设计范例</a></>],
  ['你们的配送范围包括哪些地区？', '我们通过快递服务配送全马。我们的工作室分别位于吉兰丹哥打峇鲁与彭亨文德甲。'],
  ['制作周期需要多久？', '视订购数量与设计复杂度而定。请通过WhatsApp联系我们，以获取较准确的制作周期与预计交期。'],
];

const steps: [string, string, string, ReactNode][] = [
  ['01', '分享您的需求', '告诉我们您的活动类型、所需数量与用途。', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>],
  ['02', '发送您的Logo', '通过WhatsApp发送您的Logo、品牌配色或品牌规范。', <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 15l-5.5-5.5L7 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
  ['03', '确认订单', '我们会提供设计稿与报价，待您确认后才开始制作。', <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 1.3 2.5-.3 1 2.3 2.3 1-.3 2.5L21 11l-1.3 2.2.3 2.5-2.3 1-1 2.3-2.5-.3L12 20l-2.2-1.3-2.5.3-1-2.3-2.3-1 .3-2.5L3 11l1.3-2.2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M8.5 12l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>],
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function HomeZh() {
  return <main>
    <SetHtmlLang lang="zh" />
    <a className="skip-link" href="#utama-zh">跳至主要内容</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <ScrollReveal />

    {/* Minimal Chinese header, mirrors the /en pattern: MobileMenu with a custom links override
        for mobile nav; the rest of the shared SiteHeader markup is BM-only. */}
    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en" lang="en" hrefLang="en">EN</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="#utama-zh" aria-label="Syrius，返回顶部"><Wordmark /></a>
      <nav aria-label="主导航">
        <a href="#cara-zh">订购流程</a>
        <a href="#kelebihan-zh">为何选择我们</a>
        <a href="/zh/portfolio">作品集</a>
        <a href="/zh/majalah">杂志</a>
        <a href="#faq-zh">常见问题</a>
      </nav>
      <div className="nav-right">
        <Button href={whatsappUrlZh} variant="white" size="sm" newTabLabel="（在新标签页中打开）">索取报价 <span aria-hidden="true">↗</span></Button>
        <MobileMenu
          links={[
            ['#cara-zh', '订购流程'],
            ['#kelebihan-zh', '为何选择我们'],
            ['/zh/portfolio', '作品集', 'portfolio'],
            ['/zh/majalah', '杂志'],
            ['#faq-zh', '常见问题'],
            ['/', 'Bahasa Melayu'],
            ['/en', 'English'],
          ]}
          navLabel="移动版导航"
          openLabel="打开菜单"
          closeLabel="关闭菜单"
        />
      </div>
    </div></header>

    <section className="bento" id="utama-zh" tabIndex={-1}><div className="container bento-grid">
      <div className="bento-tile bento-hero">
        <p className="eyebrow" lang="en">BRANDED COMFORT, MADE TO GIFT</p>
        <h1>让您的品牌，<br />留在<em>他们心中。</em></h1>
        <p className="lede">采用您的Logo与品牌配色定制、以热升华印花工艺制作的企业抱枕，不再只是千篇一律的企业礼品。无论小批量还是大批量，都可灵活订购，由拥有多年印花经验的Syrius团队制作。</p>
        <div className="hero-actions"><Button href={whatsappUrlZh} variant="navy" newTabLabel="（在新标签页中打开）">订购企业定制抱枕 <span aria-hidden="true">↗</span></Button><a className="text-link" href="#cara-zh">查看订购流程 <span aria-hidden="true">↓</span></a></div>
      </div>

      <figure className="bento-tile bento-photo">
        <picture>
          <source srcSet="/syrius-corporate-pillow-blank-900.webp 900w, /syrius-corporate-pillow-blank.webp 1600w" sizes="(max-width: 900px) 100vw, 700px" type="image/webp" />
          <img src="/syrius-corporate-pillow-blank.jpg" srcSet="/syrius-corporate-pillow-blank-900.jpg 900w, /syrius-corporate-pillow-blank.jpg 1600w" sizes="(max-width: 900px) 100vw, 700px" alt="空白热升华印花抱枕，准备印上您品牌的Logo" fetchPriority="high" />
        </picture>
        <figcaption><span>企业礼品</span>为您的品牌打造</figcaption>
      </figure>

      <h2 className="sr-only">选择Syrius的理由</h2>
      {values.map(([title, text, icon], i) => <div className="bento-tile bento-value" id={i === 0 ? 'kelebihan-zh' : undefined} style={{ gridArea: `val${i + 1}` }} data-reveal key={title}>
        <span className="bento-icon">{icon}</span><h3>{title}</h3><p>{text}</p>
      </div>)}

      <div className="bento-tile bento-fact" data-reveal>
        <div className="fact"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M8.5 14.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg><div><b>2011年起</b><span>定制印花经验</span></div></div>
        <div className="fact"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" /></svg><div><b>全马</b><span>配送覆盖范围</span></div></div>
      </div>

      <div className="bento-tile bento-steps" id="cara-zh" data-reveal>
        <h2 className="eyebrow">订购流程</h2>
        <ol className="bento-steps-row">{steps.map(([number, title, text, icon]) => <li key={number}><span className="dot">{icon}</span><b className="step-number">{number}</b><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </div>
    </div></section>

    <section className="statement" aria-labelledby="statement-heading-zh"><div className="container statement-grid" data-reveal><p className="eyebrow">SYRIUS MALAYSIA</p><h2 id="statement-heading-zh">让您的品牌<br />更贴近人心。</h2><p>Logo与品牌配色通过热升华工艺呈现在抱枕面料上，印花耐用、不易龟裂或剥落，适合作为员工、客户、合作伙伴与活动嘉宾的企业赠礼。</p></div></section>

    <section className="section faq" id="faq-zh" aria-labelledby="faq-heading-zh"><div className="container">
      <div className="section-head" data-reveal><div><p className="eyebrow">常见问题</p><h2 id="faq-heading-zh">在您<em>联系我们之前。</em></h2></div><p>下单前最常被问到的问题，简明解答。</p></div>
      <ul className="faq-list">{faqs.map(([q, a, link]) => <li key={q}><details className="faq-item" data-reveal><summary>{q}<span className="faq-icon" aria-hidden="true">+</span></summary><p>{a}{link}</p></details></li>)}</ul>
    </div></section>

    <section className="final-cta" aria-labelledby="final-cta-heading-zh"><div className="container" data-reveal><p className="eyebrow">准备好让您的品牌更令人难忘了吗？</p><h2 id="final-cta-heading-zh">把您的品牌，<br /><em>融入每一份礼物。</em></h2><p>联系Syrius，了解设计、数量、价格与配送详情。</p><Button href={whatsappUrlZh} variant="white" newTabLabel="（在新标签页中打开）">索取报价 <span aria-hidden="true">↗</span></Button></div></section>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
