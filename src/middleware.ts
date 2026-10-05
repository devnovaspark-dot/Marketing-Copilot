import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Stealth gate for /studio in production
  if (pathname.startsWith('/studio')) {
    if (process.env.NODE_ENV === 'production') {
      const adminSecret = process.env.SANITY_STUDIO_SECRET || 'mc_secure_admin';
      const key = searchParams.get('key');
      const authCookie = request.cookies.get('mc_studio_auth')?.value;

      // 1. If authorized secret key is provided, set secure session cookie and grant access
      if (key && key === adminSecret) {
        const cleanUrl = new URL(pathname, request.url);
        const response = NextResponse.redirect(cleanUrl);
        response.cookies.set('mc_studio_auth', 'authenticated', {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7, // 7 days access
          path: '/studio',
        });
        return response;
      }

      // 2. If cookie is present and authenticated, grant access
      if (authCookie === 'authenticated') {
        return NextResponse.next();
      }

      // 3. Otherwise, return strict 404 Not Found (completely invisible to public & crawlers)
      const notFoundUrl = new URL('/_not-found', request.url);
      return NextResponse.rewrite(notFoundUrl, { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/studio/:path*'],
};
