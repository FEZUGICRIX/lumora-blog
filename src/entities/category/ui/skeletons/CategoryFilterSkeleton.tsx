'use client'

import { Skeleton } from '@/shared/ui/ui-kit/skeleton'

interface CategoryFilterSkeletonProps {
	count?: number
}

export const CategoryFilterSkeleton = ({
	count = 5,
}: CategoryFilterSkeletonProps) => {
	const widths = [80, 100, 120, 90, 110, 95, 105]

	return (
		<div className='flex flex-wrap gap-2'>
			{Array.from({ length: count }).map((_, i) => (
				<Skeleton
					key={i}
					className='h-9 rounded-full'
					style={{ width: widths[i % widths.length] }}
				/>
			))}
		</div>
	)
}
