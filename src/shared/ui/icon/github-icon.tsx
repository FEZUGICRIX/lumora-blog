import type { SVGProps } from 'react'
import { cn } from '@/shared/lib/shadcn/utils'

interface GithubIconProps extends SVGProps<SVGSVGElement> {
	className?: string
}

export const GithubIcon = ({ className, ...props }: GithubIconProps) => (
	<svg
		{...props}
		className={cn(
			'h-[20px] w-[20px] text-black transition dark:text-zinc-300',
			className,
		)}
		fill='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M12 2C6.477 2 2 6.485 2 12.012c0 4.424 2.865 8.175 6.839 9.504.5.09.682-.216.682-.48
      0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46
      -.907-.62.069-.608.069-.608 1.002.07 1.53 1.03 1.53 1.03.89 1.524 2.34 1.084
      2.91.829.09-.645.35-1.084.636-1.333-2.22-.253-4.555-1.112-4.555-4.946
      0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.27.098-2.647
      0 0 .84-.27 2.75 1.025a9.58 9.58 0 012.5-.336
      c.85.004 1.705.115 2.5.336 1.91-1.295 2.748-1.025
      2.748-1.025.546 1.377.203 2.393.1 2.647.64.7
      1.028 1.595 1.028 2.688 0 3.842-2.339 4.69-4.566 4.94
      .359.31.678.919.678 1.853 0 1.337-.012 2.417-.012 2.745
      0 .266.18.574.688.477A10.013 10.013 0 0022 12.012C22 6.485 17.523 2 12 2z'
		/>
	</svg>
)
