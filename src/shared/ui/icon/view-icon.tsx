import type { SVGProps } from 'react'
import { cn } from '@/shared/lib/shadcn/utils'

interface ViewIconProps extends SVGProps<SVGSVGElement> {
  className?: string
}

export const ViewIcon = ({ className, ...props }: ViewIconProps) => (
	<svg
		{...props}
		className={cn(
			'h-[20px] w-[20px] text-black transition dark:text-zinc-300',
			className,
		)}
		fill='currentColor'
		viewBox='0 0 20 20'
	>
		<path d='M10 3c-4.418 0-8 4-8 7s3.582 7 8 7 8-4 8-7-3.582-7-8-7zm0 12c-3.314 0-6-2.686-6-5s2.686-5 6-5 6 2.686 6 5-2.686 5-6 5z' />
		<path d='M10 7a3 3 0 100 6 3 3 0 000-6z' />
	</svg>
)
