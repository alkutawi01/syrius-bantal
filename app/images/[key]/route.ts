import { env } from 'cloudflare:workers';
import { isPortfolioSlot } from '../../lib/portfolioSlots';

const DUMMY_FALLBACK: Record<string, string> = {
  'portfolio-1': '/dummy-portfolio-1.jpg',
  'portfolio-2': '/dummy-portfolio-2.jpg',
  'portfolio-3': '/dummy-portfolio-3.jpg',
};

export async function GET(request: Request, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  if (!isPortfolioSlot(key)) {
    return new Response('Not found', { status: 404 });
  }

  const object = await env.PORTFOLIO_BUCKET.get(key);
  if (!object) {
    return Response.redirect(new URL(DUMMY_FALLBACK[key], request.url), 302);
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': object.httpMetadata?.contentType || 'image/jpeg',
      'Cache-Control': 'public, max-age=300',
      'ETag': object.httpEtag,
    },
  });
}
