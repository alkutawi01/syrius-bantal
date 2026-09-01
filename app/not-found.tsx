import type { Metadata } from 'next';
import { Wordmark } from './components/Wordmark';
import { whatsappUrl } from './lib/whatsapp';

export const metadata: Metadata = {
  title: 'Muka Surat Tidak Dijumpai — Syrius',
  description: 'Pautan yang anda ikuti mungkin salah atau sudah tidak wujud. Kembali ke laman utama Syrius atau hubungi kami terus.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <main className="not-found">
    <div className="container not-found-inner">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- next/link's client-side routing does not work under this project's vinext runtime; verified by testing */}
      <a href="/" aria-label="Syrius, kembali ke laman utama"><Wordmark /></a>
      <p className="eyebrow">RALAT 404</p>
      <h1>Muka surat ini<br />tidak dijumpai.</h1>
      <p className="lede">Pautan yang anda ikuti mungkin salah atau sudah tidak wujud. Jom kembali ke laman utama, atau hubungi kami terus.</p>
      <div className="hero-actions">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- same reason as above */}
        <a className="button button--white button--md" href="/">Kembali ke laman utama</a>
        <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Hubungi WhatsApp <span aria-hidden="true">↗</span><span className="sr-only"> (buka di tab baharu)</span></a>
      </div>
    </div>
  </main>;
}
