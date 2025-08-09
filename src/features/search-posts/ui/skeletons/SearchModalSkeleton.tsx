'use client'

import { Skeleton } from '@/shared/ui/ui-kit/skeleton'
import { SearchItemSkeleton } from './SearchItemSkeleton'

export const SearchModalSkeleton = () => {
	return (
		<div className='space-y-6'>
			{/* Поле поиска */}
			<div className='relative'>
				<Skeleton className='h-11 w-full rounded-xl' />
			</div>

			{/* Результаты */}
			<div className='space-y-4'>
				<Skeleton className='h-5 w-24' /> {/* текст "Найдено ..." */}
				<div className='max-h-[70vh] space-y-4 overflow-y-auto pr-1'>
					{Array.from({ length: 5 }).map((_, i) => (
						<SearchItemSkeleton key={i} />
					))}
				</div>
			</div>
		</div>
	)
}
