import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { NotFoundPage } from '@/screens/not-found'

import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '404 - Not Found | Lumora',
	description: 'The page you are looking for does not exist.',
	robots: { index: false, follow: false },
}

export default function GlobalNotFound() {
	return (
		<html lang='en' className={`${inter.className} `}>
			<body className='bg-background text-foreground min-h-screen'>
				<main className='flex flex-col items-center justify-center'>
					<NotFoundPage />
				</main>
			</body>
		</html>
	)
}
