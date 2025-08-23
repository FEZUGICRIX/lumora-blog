import { CustomSelect } from '@/shared/ui/CustomSelect'
import { useGetCategoriesQuery } from '../api'
import type { CategoryMinimal } from '../model/category.types'
import { Skeleton } from '@/shared/ui/ui-kit/skeleton'

interface CategorySelectProps {
	categoryId?: string | null
	setCategoryId: (id: string) => void
}

export const CategorySelect = ({
	setCategoryId,
	categoryId,
}: CategorySelectProps) => {
	const { data: categories = [], isLoading } = useGetCategoriesQuery()

	const categoryOptions = categories.map((category) => ({
		label: category.name,
		value: category.id,
		id: category.id,
	}))

	if (isLoading) {
		return (
			<Skeleton className='max-w-30 h-9' />
		)
	}

	return (
		<CustomSelect
			value={categoryId ?? categoryOptions[0]?.id}
			onChange={(value) => setCategoryId(value)}
			options={categoryOptions}
		/>
	)
}
