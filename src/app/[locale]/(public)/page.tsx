import type { Metadata } from 'next'
import HomePage from '@/views/home/HomePage'

export const metadata: Metadata = {
	title: 'Blog',
}

export default function Home() {
	return <HomePage />
}
