'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { ArticleFilters, type SortOption } from '@/features/article/filters'

import {
	ArticleCard,
	type ArticlePreview,
	isNewArticle,
} from '@/entities/article'
import { useGetArticles } from '@/entities/article/api'
import type { CategoryMinimal } from '@/entities/category/model'

import { ArticleSortBy } from '@/shared/api/graphql/__generated__/documents'
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
	const isInitialFetch = useRef(true)

	const categorySlugs = categories.map(cat => cat.slug)

	const isDefaultInitialState =
		categories.length === 0 && sort === ArticleSortBy.CreatedAt

	const isReadyToFetch = !isInitialFetch.current || !isDefaultInitialState

	const {
		articles: filteredArticles,
		isLoadingArticles,
		isArticlesError,
	} = useGetArticles(
		{ categorySlugs, sortBy: sort },
		{
			// Пропускаем первый фетч только если нет фильтров и дефолтная сортировка
			enabled: isReadyToFetch,
			staleTime: 5 * 60 * 1000, // 5 минут
			cacheTime: 10 * 60 * 1000, // 10 минут
		},
	)

	// Как только происходит любой фетч (или пользователь меняет фильтры) → первый рендер больше не нужен
	useEffect(() => {
		if (isInitialFetch.current) {
			isInitialFetch.current = false
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
	if (isArticlesError || !initialArticles) {
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

			{isLoadingArticles && !isInitialFetch ? (
				<div className='container m-auto px-4'>
					<ArticleListSkeleton />
				</div>
			) : (
				<GridLayout>
					{articlesToRender?.map((article: ArticlePreview) => (
						<ArticleCard
							key={article.id}
							article={article}
							isNew={isNewArticle(article.createdAt)}
						/>
					))}
				</GridLayout>
			)}
		</div>
	)
}
