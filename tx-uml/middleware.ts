import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Logic Part
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/signup';
    const token = request.cookies.get('token')?.value || '';

    // If logged in and trying to access login or signup, redirect to home
    if ((path === '/login' || path === '/signup') && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    // If not logged in and trying to access protected page
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    // Allow request to proceed
    return NextResponse.next();
}

// Matching Path (what part you want to match and run the middleware)
export const config = {
    matcher: [
        '/settings',    //protected
        '/login',       //public
        '/signup',      //public
    ],
}