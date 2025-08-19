import HomePage from '@/views/home/HomePage'
import { fetchArticles } from '@/entities/article/api/server'
import { getTranslations } from 'next-intl/server'
import { ArticleSortBy } from '@/shared/api/graphql/__generated__/graphql'
import type { Metadata } from 'next'
import type { SortOption } from '@/features/filters'

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
		sort?: string
	}
}

export default async function Home(props: {
	searchParams: Promise<HomePageProps['searchParams']>
}) {
	const searchParams = await props.searchParams

	// Приводим строку к enum, если значение валидное
	let sortBy: SortOption | undefined = undefined
	if (
		searchParams.sort &&
		Object.values(ArticleSortBy).includes(
			searchParams.sort as ArticleSortBy,
		)
	) {
		sortBy = searchParams.sort as ArticleSortBy
	}

	const articles = await fetchArticles({
		categorySlugs: searchParams.category,
		sortBy, // Попадет либо валидный enum, либо undefined
	})

	return <HomePage articles={articles} />
}
