import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './libs/locales'


export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!admin|api|_next/static|_next/image|static|favicon.ico|sitemap.xml|robots.txt).*)'],
}
