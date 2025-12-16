import { CornerUpLeft, Edit2, Heart, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { UserAvatar, UserRoleBadge } from '@/entities/user/ui'

import { UserRole } from '@/shared/api/graphql/__generated__/documents'
import { useFormattedDate } from '@/shared/config/dayjs'
import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'

import type { AuthorPublic } from '../model/comment.types'
import { CommentEditForm } from './CommentEditForm'

interface CommentItemProps {
	user: AuthorPublic

	onDelete: () => void
	onEdit: (newContent: string) => void

	isAuthor: boolean
	comment: string
	createdAt: Date
	updatedAt?: Date
	likesCount?: number
	isLiked?: boolean
}

export const CommentItem = ({
	user,

	onDelete,
	onEdit,

	isAuthor,
	comment,
	createdAt,
	updatedAt,
	likesCount = 0,
	isLiked = false,
}: CommentItemProps) => {
	const [isEditing, setIsEditing] = useState(false)
	const formattedDate = useFormattedDate(createdAt)

	if (!user) return null

	return (
		<div className='group relative flex gap-3 rounded-2xl border border-zinc-200/60 bg-white/70 p-4 backdrop-blur-md transition hover:bg-white/90 sm:gap-4 dark:border-zinc-800/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-900/80'>
			<Link href={routes.profile(user.username)}>
				<UserAvatar
					displayName={user.displayName}
					avatarUrl={user.avatarUrl}
					className='h-9 w-9 sm:h-11 sm:w-11'
				/>
			</Link>

			<div className='flex-1 space-y-2'>
				{/* Header */}
				<div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500'>
					<Link
						href={routes.profile(user.username)}
						className='flex items-center gap-2 font-medium'
					>
						<span className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
							{user.displayName}
						</span>

						{/* TODO: реализовать отображение логики роли */}
						{user.role !== UserRole.User && (
							<>
								<UserRoleBadge size='small' role={user.role} />
							</>
						)}
						<span>@{user.username}</span>
					</Link>
					<span className='hidden sm:inline'>·</span>
					<span>{formattedDate}</span>
					{updatedAt && updatedAt !== createdAt && (
						<span className='ml-1 text-[11px] text-zinc-400'>(edited)</span>
					)}
				</div>

				{/* Content / Edit */}
				{isEditing ? (
					<CommentEditForm
						initialValue={comment}
						onCancel={() => setIsEditing(false)}
						onSubmit={value => {
							onEdit(value)
							setIsEditing(false)
						}}
					/>
				) : (
					<p className='text-sm leading-relaxed text-zinc-800 dark:text-zinc-300'>
						{comment}
					</p>
				)}

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
							<button
								onClick={() => setIsEditing(true)}
								className='flex items-center gap-1 transition hover:text-zinc-900 dark:hover:text-zinc-100'
							>
								<Edit2 className='h-4 w-4' />
								Edit
							</button>

							<button
								className='flex items-center gap-1 transition hover:text-red-500'
								onClick={onDelete}
							>
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
