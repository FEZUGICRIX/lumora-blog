import { CategoryFilter } from '@/features/filters'
import { SortSelect } from '@/features/filters'
import { Button } from '@/shared/ui/ui-kit/button'

export const ArticleFilters = () => {
	return (
		<div className='justify-center'>
			<div className='mt-4 flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row'>
				<CategoryFilter />
				<SortSelect />
			</div>

			<div className='flex justify-center md:justify-start mt-2'>
				<Button variant='link' className='underline p-0'>Reset filters</Button>
			</div>
		</div>
	)
}
