import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/login', '/', '/about', '/contact'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicRoute = publicRoutes.includes(pathname);

  if (!isPublicRoute) {
    // Aqui você deveria verificar autenticação
    // Se não for usar agora, tudo passa
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
