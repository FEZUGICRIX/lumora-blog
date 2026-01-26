import type { ReactNode } from 'react'

interface CommentItemProps {
	avatar: ReactNode
	header: ReactNode
	content: ReactNode
	footer?: ReactNode
}

export const CommentItem = ({
	avatar,
	header,
	content,
	footer,
}: CommentItemProps) => {
	return (
		<div className='group relative flex gap-3 rounded-2xl border border-zinc-200/60 bg-white/70 p-4 backdrop-blur-md transition hover:bg-white/90 sm:gap-4 dark:border-zinc-800/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-900/80'>
			{avatar}

			<div className='flex-1 space-y-2'>
				{header}
				{content}
				{footer}
			</div>
		</div>
	)
}
