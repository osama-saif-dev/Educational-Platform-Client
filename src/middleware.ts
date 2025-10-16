'use server';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;
    const cookieStore = await cookies();
    const email = cookieStore.get('email')?.value;
    const token = cookieStore.get('token')?.value;
    const refreshtoken = cookieStore.get('refresh_token')?.value;
    const emailSearchParams = searchParams.get('email');
    const tokenSearchParams = searchParams.get('token');
    const checkEmailCookie = cookieStore.get('check_email')?.value;

    if (refreshtoken && (pathname.startsWith('/verify') || pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/forget-password'))) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    else if ((!refreshtoken && (email && token)) && pathname.startsWith('/verify')){
        return NextResponse.next();
    }else if ((!refreshtoken || !email || !token) && pathname.startsWith('/verify')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }  
    if (!refreshtoken && (pathname.startsWith('/contact') || pathname.startsWith('/instrctour_profile') || pathname.startsWith('/whishlist') || pathname.startsWith('/cart') || pathname.startsWith('/profile') || pathname.startsWith('/my-courses'))) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (emailSearchParams && tokenSearchParams && checkEmailCookie && pathname.startsWith('/reset-password')){
        if (emailSearchParams == checkEmailCookie){
            return NextResponse.next();
        }
    }else if ((!emailSearchParams || !tokenSearchParams || !checkEmailCookie) && pathname.startsWith('/reset-password')){
        return NextResponse.redirect(new URL('/', request.url));
    }   
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/verify',
        '/contact',
        '/forget-password',
        '/register', 
        '/login',
        '/profile',
        '/whishlist',
        '/cart',
        '/my-courses',
        '/reset-password',
        '/instrctour_profile/:path*'
    ]
}