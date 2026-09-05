import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../../components/Button';
import { MobileMenu } from '../../components/MobileMenu';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SetHtmlLang } from '../../components/SetHtmlLang';
import { SiteFooter } from '../../components/SiteFooter';
import { Wordmark } from '../../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../../lib/whatsapp';

const title = '指南与知识 — Syrius';
const description = '探索Syrius关于企业礼品、抱枕、纺织与热升华印花的指南与知识文章。';

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

// Articles are added here as each one gets a Mandarin edition; the rest still only exist in BM.
const articles: [string, string, string, ReactNode, number][] = [
  ['apa-itu-percetakan-sublimasi', '什么是热升华印花？', '简明介绍热升华印花工艺：数码设计如何通过加热与加压转印至布料纤维中。', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M12 10v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="4" y="17" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>, 2],
  ['asal-usul-perkataan-bantal-dan-pillow', '“bantal”与“pillow”的词源', '追溯马来语“bantal”与英语“pillow”的词源，从南岛语系与拉丁-日耳曼语系的语言记录中寻找线索。', <svg key="i5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 6c-1.5-1.5-4-2-7-2v14c3 0 5.5.5 7 2 1.5-1.5 4-2 7-2V4c-3 0-5.5.5-7 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 6v14" stroke="currentColor" strokeWidth="1.5" /></svg>, 5],
  ['bantal-dalam-adat-dan-budaya-melayu-tradisional', '马来传统文化中的枕头', '长枕、婚礼床褥枕具组合，以及与枕头相关的禁忌，各自在传统马来习俗与文化中承载着独特的历史与意义。', <svg key="i6" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l4 4-4 4-4-4 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 13l4 4-4 4-4-4 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M3 12l4-4 4 4-4 4-4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M13 12l4-4 4 4-4 4-4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>, 4],
  ['bantal-unik-dari-pelbagai-budaya-dunia', '世界各地文化中的独特枕头与头枕', '探索世界各地独特枕头与头枕的历史：日本的木制takamakura、荞麦壳枕、中国历代瓷枕，以及非洲的木制头枕。', <svg key="i7" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>, 6],
];

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: articles.map(([slug, articleTitle], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: articleTitle,
      url: `/zh/majalah/${slug}`,
    })),
  },
};

export default function MajalahZh() {
  return <main>
    <SetHtmlLang lang="zh" />
    <a className="skip-link" href="#majalah-zh">跳至主要内容</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/majalah" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en/majalah" lang="en" hrefLang="en">EN</a></div></div>
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
            ['/majalah', 'Bahasa Melayu'],
            ['/en/majalah', 'English'],
          ]}
          navLabel="移动版导航"
          openLabel="打开菜单"
          closeLabel="关闭菜单"
        />
      </div>
    </div></header>

    <section className="section" id="majalah-zh" tabIndex={-1}><div className="container">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">杂志</p><h1>指南与<em>知识分享。</em></h1></div>
        <p>分享企业礼品、抱枕、纺织技术与热升华印花相关知识。</p>
      </div>

      <div className="faq-list">
        {articles.map(([slug, articleTitle, excerpt, icon, readingMinutes]) => <div className="faq-item" key={slug} data-reveal style={{ padding: '26px 0' }}>
          <a href={`/zh/majalah/${slug}`} style={{ display: 'flex', gap: 16 }}>
            <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
            <span>
              <h2 style={{ color: 'var(--ink)', fontSize: 19, letterSpacing: '-.01em', margin: '0 0 8px' }}>{articleTitle}</h2>
              <p style={{ color: 'var(--text)', fontSize: 14, margin: '0 0 8px', maxWidth: 620 }}>{excerpt}</p>
              <p style={{ color: 'var(--text)', fontSize: 12.5, margin: 0 }}>{readingMinutes}分钟阅读</p>
            </span>
          </a>
        </div>)}
      </div>
    </div></section>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
