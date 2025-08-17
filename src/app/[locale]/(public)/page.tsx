import HomePage from '@/views/home/HomePage'
import { fetchArticles } from '@/entities/article/api/server'
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

interface HomePageProps {
	searchParams: {
		category?: string
	}
}

// TODO: реализовать логику загрузки статей с учетом фильтров
export default async function Home(props: {
	searchParams: Promise<HomePageProps['searchParams']>
}) {
	const searchParams = await props.searchParams

	const articles = await fetchArticles({
		categorySlugs: searchParams.category,
	})

	return <HomePage articles={articles} />
}
