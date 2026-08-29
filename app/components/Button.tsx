import type { ReactNode } from 'react';
type Props = { href: string; children: ReactNode; variant?: 'coral' | 'dark' | 'light'; size?: 'sm' | 'md' };
export function Button({ href, children, variant = 'coral', size = 'md' }: Props) { return <a className={`button button--${variant} button--${size}`} href={href} target="_blank" rel="noreferrer">{children}</a>; }
