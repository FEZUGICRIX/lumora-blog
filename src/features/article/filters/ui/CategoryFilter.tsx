'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import type { CategoryMinimal } from '@/entities/category'
import { useGetCategories } from '@/entities/category/api'
import { CategoryFilterSkeleton, CategoryItem } from '@/entities/category/ui'

import { getMulti, setMulti, toggleValue } from '@/shared/lib/url/params'

interface CategoryFilterProps {
	onCategoriesChange: (categories: CategoryMinimal[]) => void
}

export function CategoryFilter({ onCategoriesChange }: CategoryFilterProps) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const { categories, isLoadingCategories } = useGetCategories()

	if (isLoadingCategories) return <CategoryFilterSkeleton />

	if (!categories) return null

	// текущее состояние фильтра — прямо из URL
	const currentSlugs = getMulti(
		new URLSearchParams(searchParams.toString()),
		'category',
	)

	const toggleCategory = (category: CategoryMinimal) => {
		const params = new URLSearchParams(searchParams.toString())

		// построить новый набор slug'ов
		const nextSlugs = toggleValue(currentSlugs, category.slug)

		// записать мульти-параметр обратно
		setMulti(params, 'category', nextSlugs)

		// при смене фильтра сбрасываем пагинацию (если она есть)
		params.delete('page')

		// не теряем текущий путь/locale, не скроллим страницу: UX++
		router.push(`${pathname}?${params.toString()}`, { scroll: false })

		// пробрасываем вверх конкретные объекты категорий
		const nextCategories = categories.filter(c => nextSlugs.includes(c.slug))
		onCategoriesChange(nextCategories)
	}

	return (
		<div className='flex flex-wrap justify-center gap-2'>
			{categories.map(category => {
				const isActive = currentSlugs.includes(category.slug)

				return (
					<CategoryItem
						key={category.id}
						category={category}
						isActive={isActive}
						toggleCategory={toggleCategory}
					/>
				)
			})}
		</div>
	)
}
