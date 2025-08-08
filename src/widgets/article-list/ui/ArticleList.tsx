'use client'

import { ArticleCard, type Article } from '@/entities/article'
import { ArticleFilters } from './ArticleFilters'
import { getSortedArticles } from '@/features/filters'
import { GridLayout } from '@/shared/ui/GridLayout'
import { mockArticles } from '@/shared/constants/mock/mock-articles'
import { useSearchParams } from 'next/navigation'
import type { Category, SortOption } from '@/features/filters'

interface ArticleListProps {
	withFilters?: boolean
	articles: Article[] // TODO: поставить нормальную типизацию
}

export const ArticleList = ({
	articles,
	withFilters = false,
}: ArticleListProps) => {
	const searchParams = useSearchParams()

	const category = searchParams.get('category') as Category | null
	const sort = (searchParams.get('sort') as SortOption) ?? 'date'

	const filtered = category
		? articles.filter(
				(a: any) => a.category?.toLocaleLowerCase() === category,
			) // TODO: поставить нормальную типизацию
		: articles

	const sorted = getSortedArticles(filtered, sort)

	console.log(withFilters ? 'mockArticles' : 'sorted')

	return (
		<div className='container m-auto px-4'>
			{withFilters && <ArticleFilters />}

			<GridLayout>
				{(withFilters ? sorted : articles).map((article) => (
					<ArticleCard key={article.id} {...article} />
				))}
			</GridLayout>
		</div>
	)
}
