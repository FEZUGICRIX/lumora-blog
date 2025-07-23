'use client'

import { categories } from '../model/constants'
import { useSearchParams, useRouter } from 'next/navigation'
import { cn } from '@/shared/lib/shadcn/utils'
import { Button } from '@/shared/ui/ui-kit/button'

export function CategoryFilter() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const currentCategories = searchParams.get('category')?.split(',') ?? []

	const onChange = (category: string) => {
		const params = new URLSearchParams(searchParams.toString())

		let nextCategories = [...currentCategories]

		if (currentCategories.includes(category)) {
			nextCategories = currentCategories.filter((c) => c !== category)
		} else {
			nextCategories.push(category)
		}

		if (nextCategories.length === 0) {
			params.delete('category')
		} else {
			params.set('category', nextCategories.join(','))
		}

		router.push(`?${params.toString()}`)
	}

	return (
		<div className='flex flex-wrap justify-center gap-2'>
			{categories.map((category) => {
				const isActive = currentCategories.includes(category)

				return (
					<Button
						key={category}
						onClick={() => onChange(category)}
						className={cn(
							'glass-icon rounded-full border px-3 py-1 text-sm transition-all',
							'border-border',
							isActive
								? 'bg-primary text-primary-foreground hover:bg-primary'
								: 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground',
						)}
					>
						{category}
					</Button>
				)
			})}
		</div>
	)
}
