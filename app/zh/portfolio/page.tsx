import type { Metadata } from 'next';
import { Button } from '../../components/Button';
import { MobileMenu } from '../../components/MobileMenu';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SetHtmlLang } from '../../components/SetHtmlLang';
import { SiteFooter } from '../../components/SiteFooter';
import { Wordmark } from '../../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../../lib/whatsapp';
import { PORTFOLIO_SLOTS } from '../../lib/portfolioSlots';

const title = '设计案例 — Syrius';
const description = '查看Syrius企业定制热升华印花抱枕设计案例，了解不同品牌风格与定制方式。';

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

// Note: the disclaimer text on /portfolio is admin-editable (stored in R2, BM only).
// This zh page uses a fixed Mandarin equivalent rather than showing mixed-language
// admin content, since there is no per-language storage for it yet (same approach as /en/portfolio).
const disclaimer = '以下图片仅为示范说明用途，并非Syrius客户的实际制作成品。欢迎联系我们查看实际制作案例，或讨论您的专属设计需求。';

export default function PortfolioZh() {
  return <main>
    <SetHtmlLang lang="zh" />
    <a className="skip-link" href="#portfolio-zh">跳至主要内容</a>
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/portfolio" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en/portfolio" lang="en" hrefLang="en">EN</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href="/zh" aria-label="Syrius，返回首页"><Wordmark /></a>
      <nav aria-label="主导航">
        <a href="/zh#cara-zh">订购流程</a>
        <a href="/zh#kelebihan-zh">为何选择我们</a>
        <a href="/zh/portfolio" aria-current="page">设计案例</a>
        <a href="/zh/majalah">杂志</a>
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
            ['/portfolio', 'Bahasa Melayu'],
            ['/en/portfolio', 'English'],
          ]}
          navLabel="移动版导航"
          openLabel="打开菜单"
          closeLabel="关闭菜单"
        />
      </div>
    </div></header>

    <section className="section" id="portfolio-zh" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">设计案例</p><h1><em>定制设计案例。</em></h1></div>
        <p>{disclaimer}</p>
      </div>

      <div className="occasion-grid">
        {PORTFOLIO_SLOTS.map((slot, i) => <figure className="bento-tile" data-reveal style={{ transitionDelay: `${i * 80}ms`, padding: 0, overflow: 'hidden' }} key={slot}>
          <img src={`/images/${slot}`} alt={`企业定制抱枕设计示意图${i + 1}`} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
        </figure>)}
      </div>
    </div></section>

    <section className="final-cta"><div className="container" data-reveal>
      <p className="eyebrow">需要专属定制设计？</p>
      <h2>让每一份礼物，<br /><em>都传递您的品牌价值。</em></h2>
      <p>联系Syrius，了解设计方案、数量、预算与配送详情。</p>
      <Button href={whatsappUrlZh} variant="white" newTabLabel="（在新标签页中打开）">索取报价 <span aria-hidden="true">↗</span></Button>
    </div></section>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
