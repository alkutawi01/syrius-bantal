import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Syrius — Wear Your Vision',
    short_name: 'Syrius',
    description: 'Bantal sublimasi korporat berlogo untuk syarikat dan organisasi di Malaysia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#020333',
    icons: [
      { src: '/icon.png', sizes: '534x534', type: 'image/png' },
    ],
  };
}
