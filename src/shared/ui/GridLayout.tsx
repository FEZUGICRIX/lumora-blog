import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/shadcn/utils'

interface GridLayoutProps {
	children: ReactNode
	className?: string
}

export const GridLayout = ({ children, className }: GridLayoutProps) => {
	return (
		<div
			className={cn(
				'container mx-auto grid grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 xl:grid-cols-3',
				className,
			)}
		>
			{children}
		</div>
	)
}
