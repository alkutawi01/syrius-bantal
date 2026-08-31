'use client';
import { useEffect, useRef, useState } from 'react';

type Props = { base?: string };

export function MobileMenu({ base = '' }: Props) {
  const links = [
    [`${base}#cara`, 'Cara tempahan'],
    [`${base}#koleksi`, 'Kegunaan'],
    [`${base}#faq`, 'Soalan lazim'],
    ['/panduan', 'Panduan'],
    [`${base}#tentang`, 'Tentang kami'],
  ];
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

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
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return <div className="mobile-menu" ref={containerRef}>
    <button ref={toggleRef} className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu-panel" aria-label={open ? 'Tutup menu' : 'Buka menu'}>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {open
          ? <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          : <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
      </svg>
    </button>
    {open && <nav id="mobile-menu-panel" className="mobile-menu-panel" aria-label="Navigasi mudah alih">
      {links.map(([href, label], i) => <a key={href} ref={i === 0 ? firstLinkRef : undefined} href={href} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>}
  </div>;
}
