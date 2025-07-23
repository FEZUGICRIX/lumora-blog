import HomePage from '@/views/home/HomePage'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('Meta.HomePage')

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default function Home() {
	return <HomePage />
}
