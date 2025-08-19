import { CategoryFilter, type SortOption } from '@/features/filters'
import { SortSelect } from '@/features/filters'
import { Button } from '@/shared/ui/ui-kit/button'
import { useResetFilters } from '../lib/use-reset-filters'
import type { CategoryMinimal } from '@/entities/category'

interface ArticleFiltersProps {
	sort: SortOption
	onSortChange: (sort: SortOption) => void
	onCategoriesChange: (categories: CategoryMinimal[]) => void
}

export const ArticleFilters = ({
	sort,
	onSortChange,
	onCategoriesChange,
}: ArticleFiltersProps) => {
	const { resetFilters, isDefault } = useResetFilters(
		onCategoriesChange,
		onSortChange,
	)

	return (
		<div className='flex flex-col justify-center'>
			<div className='mt-4 flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row'>
				<CategoryFilter onCategoriesChange={onCategoriesChange} />

				<SortSelect sort={sort} onSortChange={onSortChange} />
			</div>

			<div className='mt-4 flex w-full justify-center md:justify-end'>
				<Button onClick={resetFilters} disabled={isDefault}>
					Reset filters ↺
				</Button>
			</div>
		</div>
	)
}
