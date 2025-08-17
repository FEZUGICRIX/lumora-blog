import { CategoryFilter, type SortOption } from '@/features/filters'
import { SortSelect } from '@/features/filters'
import { Button } from '@/shared/ui/ui-kit/button'
import type { CategoryMinimal } from '@/entities/category'

interface ArticleFiltersProps {
	sort: SortOption
	onSortChange: (sort: SortOption) => void
	onCategoriesChange: (categories: CategoryMinimal[]) => void
}

export const ArticleFilters = ({
	// sort,
	// onSortChange,
	onCategoriesChange,
}: ArticleFiltersProps) => {
	return (
		<div className='justify-center'>
			<div className='mt-4 flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row'>
				<CategoryFilter
					onCategoriesChange={onCategoriesChange}
				/>

				<SortSelect />
			</div>

			<div className='mt-2 flex justify-center md:justify-start'>
				<Button
					onClick={() => {
						onCategoriesChange([])
						// onSortChange(ArticleSortBy.CreatedAt) // или твой дефолт
					}}
					variant='link'
					className='p-0 underline'
				>
					Reset filters
				</Button>
			</div>
		</div>
	)
}
