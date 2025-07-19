interface DividerProps {
	label?: string
	orientation?: 'horizontal' | 'vertical'
	className?: string
}

export const Divider = ({
	label,
	orientation = 'horizontal',
	className = '',
}: DividerProps) => {
	if (orientation === 'vertical') {
		return (
			<div
				className={`flex h-full items-center justify-center ${className}`}
			>
				<div
					className={`h-4/5 w-px bg-white/20 dark:bg-white/20 ${className}`}
				/>
				{label && (
					<span className='text-muted-foreground dark:text-muted-foreground mx-2 rotate-90 text-sm'>
						{label}
					</span>
				)}
			</div>
		)
	}

	return (
		<div className={`my-4 w-full ${className}`}>
			{label ? (
				<div className='my-4 flex items-center'>
					<div className='border-border dark:border-border flex-grow border-t' />
					<span className='text-muted-foreground dark:text-muted-foreground mx-4 text-sm font-medium'>
						{label}
					</span>
					<div className='border-border dark:border-border flex-grow border-t' />
				</div>
			) : (
				<div className='border-border dark:border-border border-t' />
			)}
		</div>
	)
}
