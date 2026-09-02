import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bantal Sublimasi Korporat Berlogo — Syrius',
    short_name: 'Syrius',
    description: 'Bantal sublimasi korporat berlogo untuk syarikat dan organisasi di Malaysia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#020333',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
