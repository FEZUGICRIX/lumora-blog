'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CustomSelect } from '@/shared/ui/CustomSelect'
import { sortOptions } from '../model/constants'
import { ArticleSortBy } from '@/shared/api/graphql/__generated__/graphql'
import type { SortOption } from '../model/types'

interface SortSelectProps {
	sort: SortOption
	onSortChange: (newSort: SortOption) => void
}

export function SortSelect({ sort, onSortChange }: SortSelectProps) {
	const router = useRouter()
	const searchParams = useSearchParams()

	// Получаем текущее значение из URL или используем значение по умолчанию
	const urlSort = searchParams.get('sort') as SortOption | null
	const current =
		urlSort &&
		Object.values(ArticleSortBy).includes(urlSort as ArticleSortBy)
			? urlSort
			: sort

	useEffect(() => {
		const params = new URLSearchParams(searchParams.toString())
		const urlSort = searchParams.get('sort')

		// Если sort нет в URL или некорректный → устанавливаем корректное значение
		if (
			!urlSort ||
			!Object.values(ArticleSortBy).includes(urlSort as ArticleSortBy)
		) {
			params.set('sort', sort)
			router.replace(`?${params.toString()}`)
			onSortChange(sort)
		}
	}, [searchParams, sort, onSortChange, router])

	const onChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set('sort', value)
		onSortChange(value as SortOption)
		router.push(`?${params.toString()}`)
	}

	return (
		<CustomSelect
			value={current}
			onChange={onChange}
			options={sortOptions}
			className='min-w-[180px]'
		/>
	)
}
