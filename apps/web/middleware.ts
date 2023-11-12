export { default } from 'next-auth/middleware'

export const config = {
    matcher: [
        // '/((?!register|api|login.*',
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
}