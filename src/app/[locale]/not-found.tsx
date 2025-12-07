import type { Metadata } from 'next'

import { NotFoundPage } from '@/screens/not-found'

export const metadata: Metadata = {
	title: '404 - Not Found | Lumora',
	description: 'The page you are looking for does not exist.',
	robots: { index: false, follow: false },
}

export default async function NotFound() {
	return <NotFoundPage />
}
