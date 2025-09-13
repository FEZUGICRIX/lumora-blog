import { useEffect } from 'react'
import { useGetCategoriesQuery } from '../api'
import { CustomSelect } from '@/shared/ui/CustomSelect'
import { Skeleton } from '@/shared/ui/ui-kit/skeleton'

interface CategorySelectProps {
	value?: string | null
	onValueChange: (value: string) => void
}

interface SelectOption {
	label: string
	value: string
	id: string
}

export const CategorySelect = ({
	onValueChange,
	value,
}: CategorySelectProps) => {
	const { data: categories = [], isLoading } = useGetCategoriesQuery()

	const categoryOptions: SelectOption[] = categories.map((category) => ({
		label: category.name,
		value: category.id,
		id: category.id,
	}))

	useEffect(() => {
		if (!isLoading && !value && categoryOptions.length > 0) {
			onValueChange(categoryOptions[0].id)
		}
	}, [isLoading, value, categoryOptions, onValueChange])

	if (isLoading) {
		return <Skeleton className='h-9 max-w-30' />
	}

	if (categoryOptions.length === 0) {
		return (
			<div className='text-muted-foreground text-sm'>
				Нет доступных категорий
			</div>
		)
	}

	return (
		<CustomSelect
			value={value || ''}
			onChange={onValueChange}
			options={categoryOptions}
		/>
	)
}
