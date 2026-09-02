import { cookies } from 'next/headers';
import { SESSION_COOKIE } from '../../lib/adminAuth';

export async function POST(request: Request) {
  const cookieStore = await cookies();
  cookieStore.delete({ name: SESSION_COOKIE, path: '/admin' });
  return Response.redirect(new URL('/admin', request.url), 303);
}
