import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Syrius — Wear Your Vision', description: 'Bantal sublimasi korporat berlogo untuk syarikat dan organisasi di Malaysia. Sebahagian daripada Syrius, dipercayai sejak 2011.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ms"><body>{children}</body></html>; }
