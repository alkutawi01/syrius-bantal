import { env } from 'cloudflare:workers';
import { cookies } from 'next/headers';
import { isValidSession, SESSION_COOKIE } from '../../lib/adminAuth';
import { isPortfolioSlot } from '../../lib/portfolioSlots';

const MAX_FILE_BYTES = 8 * 1024 * 1024;

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  if (!(await isValidSession(session, env.ADMIN_PASSWORD))) {
    return Response.redirect(new URL('/admin', request.url), 303);
  }

  const formData = await request.formData();
  const slot = String(formData.get('slot') || '');
  const file = formData.get('file');

  if (!isPortfolioSlot(slot) || !(file instanceof File) || file.size === 0) {
    return Response.redirect(new URL('/admin?error=upload', request.url), 303);
  }
  if (!file.type.startsWith('image/')) {
    return Response.redirect(new URL('/admin?error=filetype', request.url), 303);
  }
  if (file.size > MAX_FILE_BYTES) {
    return Response.redirect(new URL('/admin?error=filesize', request.url), 303);
  }

  await env.PORTFOLIO_BUCKET.put(slot, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type },
  });

  return Response.redirect(new URL('/admin?success=1', request.url), 303);
}
