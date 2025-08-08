'use client'

import { ArticleCard, type ArticlePreview } from '@/entities/article'
import { ArticleFilters } from './ArticleFilters'
// import { getSortedArticles } from '@/features/filters'
import { GridLayout } from '@/shared/ui/GridLayout'
// import { useSearchParams } from 'next/navigation'
// import type { Category, SortOption } from '@/features/filters'

interface ArticleListProps {
	withFilters?: boolean
	articles: ArticlePreview[]
}

export const ArticleList = ({
	articles,
	withFilters = false,
}: ArticleListProps) => {
	// const searchParams = useSearchParams()

	// const category = searchParams.get('category') as Category | null
	// const sort = (searchParams.get('sort') as SortOption) ?? 'date'

	return (
		<div className='container m-auto px-4'>
			{withFilters && <ArticleFilters />}

			<GridLayout>
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</GridLayout>
		</div>
	)
}
