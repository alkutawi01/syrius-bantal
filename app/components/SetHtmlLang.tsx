'use client';
import { useEffect } from 'react';

/**
 * The root layout hardcodes <html lang="ms-MY"> since the site is BM-first.
 * Non-BM pages (currently just /en) set the correct lang here rather than
 * restructuring the whole app into an app/[locale] segment for one page.
 * Revisit this once more than one language has more than a single page.
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => { document.documentElement.lang = previous; };
  }, [lang]);
  return null;
}
