import HomePage from '@/views/home/HomePage'
import { getTranslations } from 'next-intl/server'
import { fetchAllArticles } from '@/entities/article/api/server'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('Meta.HomePage')

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default async function Home() {
	const articles = await fetchAllArticles()

	return <HomePage articles={articles} />
}
