import type { SVGProps } from 'react'
import { cn } from '@/shared/lib/shadcn/utils'

interface SearchIconProps extends SVGProps<SVGSVGElement> {
	className?: string
}

export const SearchIcon = ({ className, ...props }: SearchIconProps) => (
	<svg
		{...props}
		className={cn(
			'h-[20px] w-[20px] text-zinc-900 dark:text-white',
			className,
		)}
		viewBox='0 0 24 24'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M10 2a8 8 0 105.293 14.293l5.707 5.707a1 1 0 001.414-1.414l-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z' />
	</svg>
)
