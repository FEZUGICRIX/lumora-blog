'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { ArticleSortBy } from '@/shared/api/graphql/__generated__/graphql'
import type { CategoryMinimal } from '@/entities/category'
import type { SortOption } from '../model/types'

export function useResetFilters(
	onCategoriesChange: (categories: CategoryMinimal[]) => void,
	onSortChange: (sort: SortOption) => void,
) {
	const router = useRouter()
	const searchParams = useSearchParams()

	const isDefault =
		!searchParams.get('category') &&
		searchParams.get('sort') === 'CREATED_AT'

	const resetFilters = () => {
		const params = new URLSearchParams(searchParams.toString())

		// Сбрасываем категории
		onCategoriesChange([])
		params.delete('category')

		// Сбрасываем сортировку
		onSortChange(ArticleSortBy.CreatedAt as SortOption)
		params.set('sort', ArticleSortBy.CreatedAt)

		// Обновляем URL
		router.replace(`?${params.toString()}`)

		toast('Фильтры сброшены')
	}

	return { resetFilters, isDefault }
}
