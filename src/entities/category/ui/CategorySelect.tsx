import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

import { CustomSelect } from '@/shared/ui/custom'
import { Skeleton } from '@/shared/ui/ui-kit'

import { useGetCategories } from '../api/hooks'
import type { SelectOption } from '../model/category.types'

interface CategorySelectProps {
	value?: string | null
	onValueChange: (value: string) => void
}

export const CategorySelect = ({
	onValueChange,
	value,
}: CategorySelectProps) => {
	const t = useTranslations('entities.category.errors')
	const { categories, isLoadingCategories } = useGetCategories()

	const categoryOptions: SelectOption[] = categories.map(category => ({
		label: category.name,
		value: category.id,
		id: category.id,
	}))

	useEffect(() => {
		if (!isLoadingCategories && !value && categoryOptions.length > 0) {
			onValueChange(categoryOptions[0].id)
		}
	}, [isLoadingCategories, value, categoryOptions, onValueChange])

	if (isLoadingCategories) {
		return <Skeleton className='h-9 max-w-30' />
	}

	if (!categories) {
		return (
			<div className='text-muted-foreground text-sm'>
				{t('loadFailed')}
			</div>
		)
	}

	if (categoryOptions.length === 0) {
		return (
			<div className='text-muted-foreground text-sm'>
				{t('noCategories')}
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
