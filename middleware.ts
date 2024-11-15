import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// Add the locales you want to support
export const locales = ['en', 'sv', 'es']
export const defaultLocale = 'sv'

// Get the preferred locale from headers
function getLocale(request: NextRequest) {
    // Get accept-language from request headers
    const acceptLanguage = request.headers.get('accept-language') || ''
    const negotiatorHeaders = { 'accept-language': acceptLanguage }

    // @ts-ignore locales are readonly
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    return match(languages, locales, defaultLocale) // Will default to 'sv' if no match
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        request.nextUrl.pathname = `/${locale}${pathname}`
        return NextResponse.redirect(request.nextUrl)
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
} 