'use client'

import { useCallback, useState } from 'react'
import { ArticleCard, type ArticlePreview } from '@/entities/article'
import { useGetArticlesQuery } from '@/entities/article/api'
import { ArticleFilters } from './ArticleFilters'
import { GridLayout } from '@/shared/ui/GridLayout'
import { ArticleSortBy } from '@/shared/api/graphql/__generated__/graphql'
import type { SortOption } from '@/features/filters'
import type { CategoryMinimal } from '@/entities/category'

interface ArticleListProps {
	withFilters?: boolean
	initialArticles: ArticlePreview[]
}

export const ArticleList = ({
	initialArticles,
	withFilters = false,
}: ArticleListProps) => {
	const [categories, setCategories] = useState<CategoryMinimal[]>([])
	const [sort, setSort] = useState<SortOption>(ArticleSortBy.CreatedAt)

	const categorySlugs = categories.map((cat) => cat.slug)

	// Загружаем новые статьи при изменении фильтров
	const { data: filteredArticles, isFetching } = useGetArticlesQuery(
		{ categorySlugs, sortBy: sort }, // TODO: добавить больше фильтров
		{
			skip:
				categories.length === 0 &&
				(!sort || sort === ArticleSortBy.CreatedAt),
		}, // не дергаем запрос, если дефолт
	)

	// Финальный список (SSR → CSR)
	const articlesToRender = isFetching
		? []
		: (filteredArticles ?? initialArticles)

	const handleCategoriesChange = useCallback(
		(newCategories: CategoryMinimal[]) => {
			setCategories(newCategories)
		},
		[],
	)

	// const handleSortChange = useCallback((newSort: SortOption) => {
	// 	setSort(newSort)
	// }, [])

	return (
		<div className='container m-auto px-4'>
			{withFilters && (
				<ArticleFilters
					sort={sort}
					onSortChange={setSort}
					onCategoriesChange={handleCategoriesChange}
				/>
			)}

			{/* TODO: сделать скелетон для статей и подготовить компонент "Не удалось загрузить статьи" */}
			<GridLayout>
				{articlesToRender.map((article: ArticlePreview) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</GridLayout>
		</div>
	)
}
