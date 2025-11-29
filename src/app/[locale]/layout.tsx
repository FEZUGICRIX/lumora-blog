import type { Metadata } from 'next'
import { type AbstractIntlMessages, hasLocale } from 'next-intl'
import { Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import { routing } from '@/shared/config/i18n'
import getRequestConfig from '@/shared/config/i18n/request'
import { Providers } from '@/shared/providers'
import '@/shared/styles/index.scss'

import '../globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		template: '%s | Lumora',
		default: 'Lumora',
	},
	description:
		'Lumora — a sleek technical blog about web development, programming, and architecture. Built with Next.js, TypeScript, Tailwind CSS, and FSD.',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	const config = await getRequestConfig({
		requestLocale: Promise.resolve(locale),
	})
	const messages = config.messages as AbstractIntlMessages

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
			>
				<Providers
					locale={locale}
					messages={messages}
					timeZone={config.timeZone as string}
				>
					<Header />
					<main className='flex-1'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
