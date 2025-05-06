import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/login', '/', '/about', '/contact'];

export function middleware(request: NextRequest) {
  const isPublicRoute = publicRoutes.some(route => request.nextUrl.pathname.startsWith(route));
  
  // Se não for uma rota pública e não estiver autenticado, redireciona para o login
  if (!isPublicRoute) {
    // Aqui você pode adicionar a verificação de autenticação
    // Por exemplo:
    // const token = request.cookies.get('token');
    // if (!token) return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}; 