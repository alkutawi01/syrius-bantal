import type { Metadata } from 'next';
import { env } from 'cloudflare:workers';
import { cookies } from 'next/headers';
import { isValidSession, SESSION_COOKIE } from '../lib/adminAuth';
import { PORTFOLIO_SLOTS } from '../lib/portfolioSlots';

export const metadata: Metadata = {
  title: 'Admin — Syrius',
  robots: { index: false, follow: false },
};

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ error?: string; success?: string }> }) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const authed = await isValidSession(session, env.ADMIN_PASSWORD);

  if (!authed) {
    return <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--navy)' }}>
      <form action="/admin/login" method="POST" style={{ background: '#fff', padding: 32, borderRadius: 16, width: 320, display: 'grid', gap: 12 }}>
        <h1 style={{ fontSize: 18, margin: 0, color: 'var(--ink)' }}>Log masuk Admin</h1>
        {params.error && <p style={{ color: '#c0392b', fontSize: 13, margin: 0 }}>Kata laluan salah.</p>}
        <input type="password" name="password" placeholder="Kata laluan" required style={{ padding: 10, borderRadius: 8, border: '1px solid var(--line)' }} />
        <button type="submit" className="button button--navy button--md" style={{ border: 'none', cursor: 'pointer' }}>Log masuk</button>
      </form>
    </main>;
  }

  return <main style={{ minHeight: '100vh', background: 'var(--mist)', padding: '40px 20px' }}>
    <div style={{ maxWidth: 640, margin: '0 auto', display: 'grid', gap: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: 22, margin: 0, color: 'var(--ink)' }}>Urus gambar Portfolio</h1>
        <form action="/admin/logout" method="POST">
          <button type="submit" className="text-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Log keluar</button>
        </form>
      </div>
      {params.success && <p style={{ color: '#1e8449', fontSize: 14 }}>Gambar berjaya dikemas kini.</p>}
      {params.error === 'filetype' && <p style={{ color: '#c0392b', fontSize: 14 }}>Fail mesti gambar (JPG/PNG/WebP).</p>}
      {params.error === 'filesize' && <p style={{ color: '#c0392b', fontSize: 14 }}>Fail terlalu besar (maksimum 8MB).</p>}
      {params.error === 'upload' && <p style={{ color: '#c0392b', fontSize: 14 }}>Sila pilih slot dan fail gambar.</p>}
      {PORTFOLIO_SLOTS.map((slot, i) => <div key={slot} style={{ background: '#fff', borderRadius: 12, padding: 20, display: 'grid', gap: 12 }}>
        <p style={{ margin: 0, fontWeight: 700, color: 'var(--ink)' }}>Portfolio {i + 1}</p>
        <img src={`/images/${slot}`} alt={`Portfolio ${i + 1} semasa`} style={{ width: '100%', maxWidth: 240, borderRadius: 8, aspectRatio: '1/1', objectFit: 'cover' }} />
        <form action="/admin/upload" method="POST" encType="multipart/form-data" style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <input type="hidden" name="slot" value={slot} />
          <input type="file" name="file" accept="image/*" required />
          <button type="submit" className="button button--navy button--sm" style={{ border: 'none', cursor: 'pointer' }}>Muat naik</button>
        </form>
      </div>)}
    </div>
  </main>;
}
