import { Button } from './Button';
import { Wordmark } from './Wordmark';
import { MobileMenu } from './MobileMenu';
import { whatsappUrl } from '../lib/whatsapp';

type Props = { base?: string; active?: 'panduan' | 'majalah' };

export function SiteHeader({ base = '', active }: Props) {
  return <>
    <div className="announcement"><div className="container"><span lang="en">Corporate Gifting &amp; Branded Pillows</span><a href="tel:+601154498790">+60 11-5449 8790</a></div></div>
    <header className="site-header"><div className="container nav">
      <a href={base || '#utama'} aria-label="Syrius, kembali ke atas"><Wordmark /></a>
      <nav aria-label="Navigasi utama">
        <a href={`${base}#cara`}>Cara tempahan</a>
        <a href={`${base}#koleksi`}>Kegunaan</a>
        <a href={`${base}#faq`}>Soalan lazim</a>
        <a href="/panduan" aria-current={active === 'panduan' ? 'page' : undefined}>Panduan</a>
        <a href="/majalah" aria-current={active === 'majalah' ? 'page' : undefined}>Majalah</a>
        <a href={`${base}#tentang`}>Tentang kami</a>
      </nav>
      <div className="nav-right">
        <Button href={whatsappUrl} variant="white" size="sm">Minta sebut harga <span aria-hidden="true">↗</span></Button>
        <MobileMenu base={base} active={active} />
      </div>
    </div></header>
  </>;
}
