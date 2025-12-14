import { CornerUpLeft, Edit2, Heart, Trash2 } from 'lucide-react'

import { UserAvatar } from '@/entities/user/ui'

import { useFormattedDate } from '@/shared/config/dayjs'

import type { AuthorPublic } from '../model/comment.types'

interface CommentItemProps {
	user: AuthorPublic
	isAuthor: boolean
	comment: string
	createdAt: Date
	updatedAt?: Date
	likesCount?: number
	isLiked?: boolean
}

export const CommentItem = ({
	user,
	isAuthor,
	comment,
	createdAt,
	updatedAt,
	likesCount = 0,
	isLiked = false,
}: CommentItemProps) => {
	const formattedDate = useFormattedDate(createdAt)
	if (!user) return null

	return (
		<div className='group relative flex gap-3 rounded-2xl border border-zinc-200/60 bg-white/70 p-4 backdrop-blur-md transition hover:bg-white/90 sm:gap-4 dark:border-zinc-800/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-900/80'>
			<UserAvatar
				displayName={user.displayName}
				avatarUrl={user.avatarUrl}
				className='h-9 w-9 sm:h-11 sm:w-11'
			/>

			<div className='flex-1 space-y-2'>
				{/* Header */}
				<div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500'>
					<span className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
						{user.displayName}
					</span>
					<span className='font-medium'>@{user.username}</span>
					<span className='hidden sm:inline'>·</span>
					<span>{formattedDate}</span>
					{updatedAt && updatedAt !== createdAt && (
						<span className='ml-1 text-[11px] text-zinc-400'>(edited)</span>
					)}
				</div>

				{/* Content */}
				<p className='text-sm leading-relaxed text-zinc-800 sm:text-[15px] dark:text-zinc-300'>
					{comment}
				</p>

				{/* Actions + Likes */}
				<div className='flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-zinc-500'>
					{/* Reply */}
					<button className='flex items-center gap-1 transition hover:text-zinc-900 dark:hover:text-zinc-100'>
						<CornerUpLeft className='h-4 w-4' />
						Reply
					</button>

					{/* Edit/Delete (only author) */}
					{isAuthor && (
						<>
							<button className='flex items-center gap-1 transition hover:text-zinc-900 dark:hover:text-zinc-100'>
								<Edit2 className='h-4 w-4' />
								Edit
							</button>
							<button className='flex items-center gap-1 transition hover:text-red-500'>
								<Trash2 className='h-4 w-4' />
								Delete
							</button>
						</>
					)}

					{/* Likes */}
					<button
						className={`flex items-center gap-1 transition ${
							isLiked
								? 'text-red-500'
								: 'hover:text-red-500 dark:hover:text-red-400'
						}`}
					>
						<Heart className='h-4 w-4' />
						<span>{likesCount}</span>
					</button>
				</div>
			</div>
		</div>
	)
}
