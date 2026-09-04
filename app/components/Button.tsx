import type { ReactNode } from 'react';
type Props = { href: string; children: ReactNode; variant?: 'navy' | 'white'; size?: 'sm' | 'md'; newTabLabel?: string };
export function Button({ href, children, variant = 'navy', size = 'md', newTabLabel = '(buka di tab baharu)' }: Props) { return <a className={`button button--${variant} button--${size}`} href={href} target="_blank" rel="noreferrer">{children}<span className="sr-only"> {newTabLabel}</span></a>; }
