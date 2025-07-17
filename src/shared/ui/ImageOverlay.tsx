interface ImageOverlayProps {
	children: React.ReactNode
	overlayOpacity?: string // example: 'bg-black/30'
	className?: string
}

export const ImageOverlay = ({
	children,
	overlayOpacity = 'dark:bg-black/30',
	className = '',
}: ImageOverlayProps) => {
	return (
		<div className={`relative ${className}`}>
			{children}
			<div
				className={`pointer-events-none absolute inset-0 z-20 rounded-t-xl ${overlayOpacity}`}
			/>
		</div>
	)
}
