import { env } from 'cloudflare:workers';
import { cookies } from 'next/headers';
import { sha256Hex, SESSION_COOKIE } from '../../lib/adminAuth';

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get('password') || '');

  if (password && password === env.ADMIN_PASSWORD) {
    const sessionValue = await sha256Hex(env.ADMIN_PASSWORD);
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, sessionValue, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/admin',
      maxAge: 60 * 60 * 12,
    });
    return Response.redirect(new URL('/admin', request.url), 303);
  }

  return Response.redirect(new URL('/admin?error=1', request.url), 303);
}
