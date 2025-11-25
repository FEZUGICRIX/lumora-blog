'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { ArticleFilters } from '@/features/article/filters'
import type { SortOption } from '@/features/article/filters'

import { ArticleCard, type ArticlePreview } from '@/entities/article'
import { useGetArticlesQuery } from '@/entities/article/api'
import type { CategoryMinimal } from '@/entities/category'

import { ArticleSortBy } from '@/shared/api/graphql/__generated__/rtk'
import { GridLayout } from '@/shared/ui/custom'

import { ArticleError } from './ArticleError'
import { ArticleListSkeleton } from './skeletons/ArticleListSkeleton'

interface ArticleListProps {
	withFilters?: boolean
	initialArticles: ArticlePreview[] | null
}

export const ArticleList = ({
	initialArticles,
	withFilters = false,
}: ArticleListProps) => {
	const [categories, setCategories] = useState<CategoryMinimal[]>([])
	const [sort, setSort] = useState<SortOption>(ArticleSortBy.CreatedAt)

	// Для отслеживания первого рендера (SSR) → нужен только на самом старте
	const isInitialRender = useRef(true)

	const categorySlugs = categories.map(cat => cat.slug)

	// --- RTK Query ---
	const {
		data: filteredArticles,
		isFetching,
		isError,
	} = useGetArticlesQuery(
		{ categorySlugs, sortBy: sort },
		{
			// Пропускаем первый фетч только если нет фильтров и дефолтная сортировка
			skip:
				isInitialRender.current &&
				categories.length === 0 &&
				sort === ArticleSortBy.CreatedAt,
		},
	)

	// Как только происходит любой фетч (или пользователь меняет фильтры) → первый рендер больше не нужен
	useEffect(() => {
		if (isInitialRender.current) {
			isInitialRender.current = false
		}
	}, [categories, sort])

	// --- Обработчики фильтров ---
	const handleCategoriesChange = useCallback(
		(newCategories: CategoryMinimal[]) => setCategories(newCategories),
		[],
	)

	const handleSortChange = useCallback(
		(newSort: SortOption) => setSort(newSort),
		[],
	)

	// --- Решение с рендером статей ---
	const articlesToRender = filteredArticles ?? initialArticles

	// --- Ошибки и пустой список ---
	if (isError || !initialArticles) {
		return (
			<div className='container m-auto px-4'>
				<ArticleError />
			</div>
		)
	}

	if (articlesToRender?.length === 0) {
		return (
			<div className='container m-auto px-4'>
				<p className='text-muted-foreground text-center'>Нет статей</p>
			</div>
		)
	}

	// --- Основной рендер ---
	return (
		<div className='container m-auto px-4'>
			{withFilters && (
				<ArticleFilters
					sort={sort}
					onSortChange={handleSortChange}
					onCategoriesChange={handleCategoriesChange}
				/>
			)}

			{isFetching ? (
				<div className='container m-auto px-4'>
					<ArticleListSkeleton />
				</div>
			) : (
				<GridLayout>
					{articlesToRender?.map((article: ArticlePreview) => (
						<ArticleCard key={article.id} article={article} />
					))}
				</GridLayout>
			)}
		</div>
	)
}
