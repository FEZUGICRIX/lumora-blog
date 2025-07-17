import type { SVGProps } from 'react'
import { cn } from '@/shared/lib/shadcn/utils'

interface BurgerMenuIconProps extends SVGProps<SVGSVGElement> {
	className?: string
}

export const BurgerMenuIcon = ({
	className,
	...props
}: BurgerMenuIconProps) => (
	<svg
		{...props}
		className={cn(
			'min-h-[25px] min-w-[25px] text-zinc-900 dark:text-white',
			className,
		)}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M4 6h16M4 12h16M4 18h16'
		/>
	</svg>
)
