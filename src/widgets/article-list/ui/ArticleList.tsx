'use client'

import { useCallback, useState } from 'react'
import { useGetArticlesQuery } from '@/entities/article/api'
import { GridLayout } from '@/shared/ui/GridLayout'
import { ArticleSortBy } from '@/shared/api/graphql/__generated__/graphql'
import { ArticleCard, type ArticlePreview } from '@/entities/article'
import { ArticleFilters } from './ArticleFilters'
import { ArticleListSkeleton } from './skeletons/ArticleListSkeleton'
import { ArticleError } from './ArticleError'

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
	const {
		data: filteredArticles,
		isFetching,
		isError,
	} = useGetArticlesQuery(
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

	if (isError || (!filteredArticles && initialArticles.length === 0)) {
		return (
			<div className='container m-auto px-4'>
				<ArticleError />
			</div>
		)
	}

	if (isFetching && !filteredArticles) {
		return (
			<div className='container m-auto px-4'>
				<ArticleListSkeleton />
			</div>
		)
	}

	// если запрос успешный, но массив пустой
	if (filteredArticles && filteredArticles.length === 0) {
		return (
			<div className='container m-auto px-4'>
				<p className='text-muted-foreground text-center'>Нет статей</p>
			</div>
		)
	}

	return (
		<div className='container m-auto px-4'>
			{withFilters && (
				<ArticleFilters
					sort={sort}
					onSortChange={setSort}
					onCategoriesChange={handleCategoriesChange}
				/>
			)}

			<GridLayout>
				{articlesToRender.map((article: ArticlePreview) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</GridLayout>
		</div>
	)
}
