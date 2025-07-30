import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Logic Part
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/signup' || path === '/'

    const token = request.cookies.get('token')?.value || ''

    // Access to public pages
    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    // Login to access non public pages
    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))

    }
}

// Matching Part (what part you want to match and run the middleware)
export const config = {
    matcher: [
        '/',
        '/settings',
        '/login',
        '/signup',
    ],
}