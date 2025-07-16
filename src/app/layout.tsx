import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/shared/providers/theme-provider'
import Header from '@/widgets/Header'
import Footer from '@/widgets/Footer'
import './globals.css'

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
			>
				<ThemeProvider>
					<Header />
					<main className='flex-1'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
