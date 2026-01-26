import { cn } from '../../lib/shadcn/utils'

export const ImageDarkOverlay = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				'absolute inset-0  bg-black/30 dark:bg-black/50',
				className,
			)}
		/>
	)
}
