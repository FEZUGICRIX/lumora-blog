import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

import { routing } from '@/shared/config/i18n/routing'

// next-intl middleware
const intlMiddleware = createIntlMiddleware(routing)

// auth middleware
const authMiddleware = (req: NextRequest) => {
	const { url, cookies } = req
	const session = cookies.get('session')?.value

	const isAuthPage = url.includes('/auth')

	// Если мы на /auth/* и юзер уже залогинен — отправляем в dashboard
	if (isAuthPage) {
		if (session) {
			return NextResponse.redirect(new URL('/dashboard/settings', url))
		}
		return NextResponse.next()
	}

	// Если мы НЕ на /auth/* и нет сессии → редирект на login
	if (!session) {
		return NextResponse.redirect(new URL('/auth/login', url))
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

// 4. Финальный export — один middleware
export default applyMiddlewares(
	intlMiddleware, // сначала определение локали и rewrite
	authMiddleware, // затем твоя логика доступа
)

export const config = {
	matcher: [
		'/:locale/auth/:path*',
		'/:locale/dashboard/settings/:path*',
		'/((?!api|trpc|_next|_vercel|.*\\..*).*)',
	],
}
