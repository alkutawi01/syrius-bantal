import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = 'Syrius — Wear Your Vision';
const description = 'Bantal sublimasi korporat berlogo untuk syarikat dan organisasi di Malaysia. Sebahagian daripada Syrius, dipercayai sejak 2011.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ms_MY',
    siteName: 'Syrius',
    images: [{ url: '/syrius-corporate-pillow-blank.jpg', width: 1600, height: 1067, alt: 'Bantal sublimasi korporat Syrius' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-blank.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#020333',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Syrius',
  description,
  telephone: '+60 11-5449 8790',
  email: 'syriusmalaysia@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'PT 428, Pusat Perniagaan Bandar Baru Tunjong',
    addressLocality: 'Kota Bharu',
    addressRegion: 'Kelantan',
    addressCountry: 'MY',
  },
  areaServed: ['Kelantan', 'Pahang'],
  makesOffer: { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Bantal sublimasi korporat' } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ms">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" />
    </head>
    <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </body>
  </html>;
}
