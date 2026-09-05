import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Button } from '../../../components/Button';
import { MobileMenu } from '../../../components/MobileMenu';
import { ScrollReveal } from '../../../components/ScrollReveal';
import { SetHtmlLang } from '../../../components/SetHtmlLang';
import { SiteFooter } from '../../../components/SiteFooter';
import { Wordmark } from '../../../components/Wordmark';
import { whatsappUrlZh, whatsappPahangUrlZh } from '../../../lib/whatsapp';

const title = '枕头填充材料类型指南 — Syrius杂志';
const description = '聚酯纤维、羽绒、木棉与记忆棉作为枕头填充材料的差异——从舒适度、耐用性与保养方式来看。';

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

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '认识枕头填充材料类型指南',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

const fillings: [string, ReactNode, ReactNode, ReactNode, string, string][] = [
  ['polyester', '聚酯纤维', '最常见、价格也较实惠的填充材料之一。刚开始柔软轻盈，但较低价的聚酯枕头在长期使用后往往会变得扁塌、失去支撑力，有时在一至两年内就会出现这种情况。多数款式可依制造商说明以洗衣机清洗与烘干。', <svg key="i1" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 14c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 20c2-2 4 2 6 0s4-2 6 0 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>, '许多平价款约1至2年', '轻盈、实惠、易于清洗'],
  ['down', '羽绒与羽毛', '质地非常柔软。优质羽绒的蓬松度保持得较好，通常比许多较低价的合成填充材料更耐用，但确切差异视品质与保养方式而定。部分人可能对羽绒本身，或对床品中可能积聚的尘螨等过敏原较为敏感。', <svg key="i2" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21V9M12 9c0-3 2-5 6-6-1 4-3 6-6 6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 14c-3 0-5-1-6-3 3-1 5 0 6 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>, '数年，视品质与保养而定', '质地柔软，需留意过敏敏感度'],
  ['kapok', '木棉纤维（kapok）', '一种轻盈、天然具弹性的植物纤维，常被用作羽绒的纯素替代品。定期拍松有助于维持填充物均匀分布。', <svg key="i3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3c4 3 6 7 4 12-3-1-6-4-6-9 0-1 1-2 2-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 21v-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>, '视情况而定，需定期保养', '纯素，需定期拍松'],
  ['foam', '记忆棉', '一种能依头颈压力变形贴合的合成材料，提供更具针对性的支撑。传统记忆棉可能比部分其他枕头材料更易蓄热，不过较新款式可能加入散热设计。', <svg key="i4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15c2-3 4 3 6 0s4-3 6 0 4 3 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="3" y="15" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" /></svg>, '视泡棉密度与品质而定', '贴合支撑，可能较易蓄热'],
];

export default function ArtikelZh() {
  return <main>
    <SetHtmlLang lang="zh" />
    <a className="skip-link" href="#artikel-zh">跳至主要内容</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />

    <div className="announcement"><div className="container"><span>企业礼品与品牌抱枕</span><a href="/majalah/jenis-pengisian-bantal" lang="ms" hrefLang="ms">Bahasa Melayu</a><a href="/en/majalah/jenis-pengisian-bantal" lang="en" hrefLang="en">EN</a></div></div>
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
            ['/majalah/jenis-pengisian-bantal', 'Bahasa Melayu'],
            ['/en/majalah/jenis-pengisian-bantal', 'English'],
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
枕头填充材料<em style={{ fontStyle: 'normal' }}>类型指南</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>2分钟阅读</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        填充材料是影响枕头舒适度、支撑力与耐用性的关键因素之一，同时设计、外罩材质与整体结构也会影响使用体验。以下是几种常见填充材料的基本差异。
      </p>

      <div data-reveal>
        {fillings.map(([key, name, text, icon]) => <div key={key} style={{ marginBottom: 28, display: 'flex', gap: 16 }}>
          <span className="bento-icon" style={{ margin: 0, flexShrink: 0 }}>{icon}</span>
          <div>
            <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 8px' }}>{name}</h2>
            <p style={{ maxWidth: 700 }}>{text}</p>
          </div>
        </div>)}
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 20, letterSpacing: '-.01em', margin: '0 0 14px' }}>比较概览</h2>
        <div className="table-scroll">
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 480, fontSize: 13.5 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--line)' }}>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 12px 8px 0', color: 'var(--ink)' }}>填充材料</th>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--ink)' }}>一般耐用度</th>
              <th scope="col" style={{ textAlign: 'left', padding: '8px 0 8px 12px', color: 'var(--ink)' }}>主要特性</th>
            </tr>
          </thead>
          <tbody>
            {fillings.map(([key, name, , , lifespan, trait]) => <tr key={key} style={{ borderBottom: '1px solid var(--line)' }}>
              <th scope="row" style={{ textAlign: 'left', padding: '10px 12px 10px 0', color: 'var(--ink)', fontWeight: 700 }}>{name}</th>
              <td style={{ padding: '10px 12px', color: 'var(--text)' }}>{lifespan}</td>
              <td style={{ padding: '10px 0 10px 12px', color: 'var(--text)' }}>{trait}</td>
            </tr>)}
          </tbody>
        </table>
        </div>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>没有单一类型是绝对&ldquo;最好&rdquo;的选择</h2>
        <p>选择填充材料取决于个人偏好：所需的支撑程度、过敏风险、预算，以及您愿意投入的保养程度。适合某人的枕头未必适合另一人，因此在选择前，先了解各类填充材料的特性是重要的第一步。</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>参考资料</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Nolah Sleep。<a href="https://www.nolahsleep.com/blogs/blog/best-pillow-material" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>The Perfect Pillow: How To Choose Between Down, Feather, Foam, and More</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
          <li>Bearaby。<a href="https://bearaby.com/blogs/the-lay-low/pillow-filling-types" target="_blank" rel="noreferrer"><em style={{ fontStyle: 'italic' }}>8 Pillow Filling Types: Latex, Down, Feather &amp; More</em><span className="sr-only">（在新标签页中打开）</span></a>。</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>正在为企业寻找Logo定制抱枕？<a className="text-link text-link--right" href="/zh/panduan">查看订购指南 <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter tagline="企业定制抱枕，让每一份心意更有意义。" newTabLabel="（在新标签页中打开）" whatsappUrl={whatsappUrlZh} whatsappPahangUrl={whatsappPahangUrlZh} />
  </main>;
}
