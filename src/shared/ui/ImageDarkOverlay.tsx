import { cn } from '../lib/shadcn/utils'

export const ImageDarkOverlay = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				'absolute inset-0 z-[1] bg-black/5 dark:bg-black/30',
				className,
			)}
		/>
	)
}
