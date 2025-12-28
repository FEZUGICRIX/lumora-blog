import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

import { routing } from '@/shared/config/i18n'
import { getPathnameWithoutLocale } from '@/shared/lib'

const PUBLIC_ROUTES = [
	'/auth', // Все страницы авторизации
	'/blog',
	'/user',
]

const intlMiddleware = createIntlMiddleware(routing)

const authMiddleware = (req: NextRequest) => {
	const { cookies, nextUrl, url } = req
	const session = cookies.get('session')?.value

	// 1. Получаем путь без локали (например, /en/login -> /login)
	const nonLocalePathname = getPathnameWithoutLocale(nextUrl.pathname)

	const isAuthRoute = nonLocalePathname.startsWith('/auth')
	const isPublicRoute =
		nonLocalePathname === '/' ||
		PUBLIC_ROUTES.some(route => nonLocalePathname.startsWith(route))

	if (session) {
		if (isAuthRoute) {
			return NextResponse.redirect(new URL(`/`, url))
		}
		return NextResponse.next()
	}

	if (!isPublicRoute) {
		const callbackUrl = nextUrl.pathname + nextUrl.search
		const loginUrl = new URL(`/auth/login`, url)
		loginUrl.searchParams.set('callbackUrl', callbackUrl)

		return NextResponse.redirect(loginUrl)
	}

	return NextResponse.next()
}

// 3. Комбинатор middleware
const applyMiddlewares =
	(
		...middlewares: Array<
			(req: NextRequest) => NextResponse | Promise<NextResponse>
		>
	) =>
	async (req: NextRequest) => {
		for (const middleware of middlewares) {
			const result = await middleware(req)

			// Если middleware сделал redirect/rewrite — прекращаем
			if (
				result.redirected ||
				result.headers.get('x-middleware-rewrite') ||
				result.headers.get('location')
			) {
				return result
			}
		}

		return NextResponse.next()
	}

export default applyMiddlewares(
	intlMiddleware, // сначала определение локали и rewrite
	authMiddleware,
)

export const config = {
	matcher: [
		'/:locale/auth/:path*',
		'/:locale/settings/:path*',
		'/:locale/editor/:path*',

		'/((?!api|trpc|_next|_vercel|.*\\..*).*)',
	],
}
