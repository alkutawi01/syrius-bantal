import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = 'Bantal Sublimasi Korporat Berlogo — Syrius';
const description = 'Bantal sublimasi korporat berlogo untuk syarikat dan organisasi di Malaysia. Sebahagian daripada Syrius, dipercayai sejak 2011.';

export const metadata: Metadata = {
  title,
  description,
  category: 'shopping',
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ms_MY',
    siteName: 'Syrius',
    images: [{ url: '/syrius-corporate-pillow-blank.jpg', width: 1600, height: 1600, alt: 'Bantal sublimasi korporat Syrius' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-blank.jpg'],
  },
  appleWebApp: {
    capable: true,
    title: 'Syrius',
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  themeColor: '#020333',
};

const productOffer = { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Bantal sublimasi korporat', image: '/syrius-corporate-pillow-blank.jpg' } };

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Syrius Malaysia',
      description,
      image: '/syrius-corporate-pillow-blank.jpg',
      logo: '/syrius-logo.png',
      telephone: '+60 11-5449 8790',
      email: 'syriusmalaysia@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'PT 428, Pusat Perniagaan Bandar Baru Tunjong',
        addressLocality: 'Kota Bharu',
        addressRegion: 'Kelantan',
        postalCode: '16010',
        addressCountry: 'MY',
      },
      areaServed: ['Kelantan', 'Pahang'],
      makesOffer: productOffer,
    },
    {
      '@type': 'LocalBusiness',
      name: 'Syrius Pahang',
      description,
      image: '/syrius-corporate-pillow-blank.jpg',
      logo: '/syrius-logo.png',
      telephone: '+60 11-6987 2708',
      email: 'syriuspahang@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 9, Tingkat 1, Jalan Star City 1, Mentakab Star City',
        addressLocality: 'Mentakab',
        addressRegion: 'Pahang',
        postalCode: '28400',
        addressCountry: 'MY',
      },
      areaServed: 'Pahang',
      parentOrganization: { '@type': 'Organization', name: 'Syrius' },
      makesOffer: productOffer,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ms-MY">
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
