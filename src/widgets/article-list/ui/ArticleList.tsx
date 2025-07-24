'use client'

import { ArticleCard } from '@/entities/article'
import { ArticleFilters } from './ArticleFilters'
import { getSortedArticles } from '@/features/filters'
import { GridLayout } from '@/shared/ui/GridLayout'
import { mockArticles } from '@/shared/constants/mock/mock-articles'
import { useSearchParams } from 'next/navigation'
import type { Category, SortOption } from '@/features/filters'

interface ArticleListProps {
	withFilters?: boolean
}

export const ArticleList = ({ withFilters = false }: ArticleListProps) => {
	const searchParams = useSearchParams()
	const articles = mockArticles

	const category = searchParams.get('category') as Category | null
	const sort = (searchParams.get('sort') as SortOption) ?? 'date'

	const filtered = category
		? articles.filter((a) => a.category.toLocaleLowerCase() === category)
		: articles

	const sorted = getSortedArticles(filtered, sort)

	console.log(withFilters ? 'mockArticles' : 'sorted')

	return (
		<div className='container m-auto px-4'>
			{withFilters && <ArticleFilters />}

			<GridLayout>
				{(withFilters ? sorted : mockArticles).map((article) => (
					<ArticleCard key={article.id} {...article} />
				))}
			</GridLayout>
		</div>
	)
}
