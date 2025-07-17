import type { SVGProps } from 'react'
import { cn } from '@/shared/lib/shadcn/utils'

interface CommentIconProps extends SVGProps<SVGSVGElement> {
  className?: string
}

export const CommentIcon = ({ className, ...props }: CommentIconProps) => (
	<svg
		{...props}
		className={cn(
			'h-[20px] w-[20px] text-black transition dark:text-zinc-300',
			className,
		)}
		fill='none'
		stroke='currentColor'
		strokeWidth='1.5'
		viewBox='0 0 24 24'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M7 8h10M7 12h4m-4 4h10m4-10v11a2 2 0 01-2 2H6l-4 4V6a2 2 0 012-2h16a2 2 0 012 2z'
		/>
	</svg>
)
