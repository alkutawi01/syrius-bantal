import { env } from 'cloudflare:workers';
import { cookies } from 'next/headers';
import { isValidSession, SESSION_COOKIE } from '../../lib/adminAuth';
import { PORTFOLIO_DISCLAIMER_KEY, MAX_DISCLAIMER_LENGTH } from '../../lib/portfolioSlots';

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  if (!(await isValidSession(session, env.ADMIN_PASSWORD))) {
    return Response.redirect(new URL('/admin', request.url), 303);
  }

  const formData = await request.formData();
  const text = String(formData.get('disclaimer') || '').trim();

  if (text.length > MAX_DISCLAIMER_LENGTH) {
    return Response.redirect(new URL('/admin?error=textlength', request.url), 303);
  }

  if (text) {
    await env.PORTFOLIO_BUCKET.put(PORTFOLIO_DISCLAIMER_KEY, text, {
      httpMetadata: { contentType: 'text/plain; charset=utf-8' },
    });
  } else {
    await env.PORTFOLIO_BUCKET.delete(PORTFOLIO_DISCLAIMER_KEY);
  }

  return Response.redirect(new URL('/admin?success=2', request.url), 303);
}
