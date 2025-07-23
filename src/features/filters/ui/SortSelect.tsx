'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { sortOptions } from '../model/constants'
import { CustomSelect } from '@/shared/ui/CustomSelect'

export function SortSelect() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const current = searchParams.get('sort') ?? 'date'

	const onChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set('sort', value)
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
