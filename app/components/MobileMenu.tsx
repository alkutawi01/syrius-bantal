'use client';
import { useEffect, useRef, useState } from 'react';

type LinkTuple = [string, string, ('panduan' | 'majalah' | 'portfolio')?];
type Props = {
  base?: string;
  active?: 'panduan' | 'majalah' | 'portfolio';
  enHref?: string;
  /** Override the default BM links entirely - used by the standalone /en page. */
  links?: LinkTuple[];
  navLabel?: string;
  openLabel?: string;
  closeLabel?: string;
};

export function MobileMenu({ base = '', active, enHref, links: linksOverride, navLabel = 'Navigasi mudah alih', openLabel = 'Buka menu', closeLabel = 'Tutup menu' }: Props) {
  const links: LinkTuple[] = linksOverride ?? [
    [`${base}#cara`, 'Cara tempahan'],
    [`${base}#kelebihan`, 'Kelebihan'],
    ['/portfolio', 'Portfolio', 'portfolio'],
    [`${base}#faq`, 'Soalan lazim'],
    ['/panduan', 'Panduan', 'panduan'],
    ['/majalah', 'Majalah', 'majalah'],
    [`${base}#tentang`, 'Tentang kami'],
    ...(enHref ? [[enHref, 'English'] as LinkTuple] : []),
  ];
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    document.body.classList.add('mobile-menu-open');

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return <div className="mobile-menu" ref={containerRef}>
    <button ref={toggleRef} className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu-panel" aria-label={open ? closeLabel : openLabel}>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {open
          ? <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          : <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
      </svg>
    </button>
    {open && <nav id="mobile-menu-panel" className="mobile-menu-panel" aria-label={navLabel}>
      {links.map(([href, label, key], i) => <a key={href} ref={i === 0 ? firstLinkRef : undefined} href={href} lang={href === enHref ? 'en' : undefined} hrefLang={href === enHref ? 'en' : undefined} aria-current={key && key === active ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>}
  </div>;
}
