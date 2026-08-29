import type { ReactNode } from 'react';
type Props = { href: string; children: ReactNode; variant?: 'navy' | 'white'; size?: 'sm' | 'md' };
export function Button({ href, children, variant = 'navy', size = 'md' }: Props) { return <a className={`button button--${variant} button--${size}`} href={href} target="_blank" rel="noreferrer">{children}</a>; }
