import { CornerUpLeft } from 'lucide-react'
import { useState } from 'react'

import {
	CommentEditButton,
	CommentEditForm,
} from '@/features/comment/edit-comment'
import { RemoveComment } from '@/features/comment/remove-comment'

import type {
	AuthorPublic,
	CommentPublic,
} from '@/entities/comment/model/comment.types'
import { CommentItem } from '@/entities/comment/ui'
import { ReactionList } from '@/entities/reaction/ui'
import { UserAvatar, UserRoleBadge } from '@/entities/user/ui'

import {
	ReactionTargetType,
	type ToggleReactionInput,
	UserRole,
} from '@/shared/api/graphql/__generated__/documents'
import { useFormattedDate } from '@/shared/config/dayjs'
import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'

interface CommentCardProps {
	author: AuthorPublic
	comment: CommentPublic
	isAuthenticated: boolean
	isAuthor: boolean

	onReactionToggle: (data: ToggleReactionInput) => void
	onEdit: (newContent: string) => void
	onDelete: () => void
}

export const CommentCard = ({
	author,
	isAuthor,
	isAuthenticated,
	comment,
	onReactionToggle,

	onEdit,
	onDelete,
}: CommentCardProps) => {
	const {
		content,
		createdAt,
		updatedAt,
		id: commentId,
		reactions,
		myReactions,
	} = comment
	const [isEditing, setIsEditing] = useState(false)
	const formattedDate = useFormattedDate(createdAt)

	return (
		<CommentItem
			// Avatar
			avatar={
				<Link href={routes.profile(author.username)}>
					<UserAvatar
						displayName={author.displayName}
						avatarUrl={author.avatarUrl}
						className='h-9 w-9 sm:h-11 sm:w-11'
					/>
				</Link>
			}
			// Header
			header={
				<div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500'>
					<Link
						href={routes.profile(author.username)}
						className='flex items-center gap-2 font-medium'
					>
						<span className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
							{author.displayName}
						</span>
						{author.role !== UserRole.User && (
							<>
								<UserRoleBadge size='small' role={author.role} />
							</>
						)}
						<span>@{author.username}</span>
					</Link>

					<span className='hidden sm:inline'>·</span>

					<span>{formattedDate}</span>
					{updatedAt && updatedAt !== createdAt && (
						<span className='ml-1 text-[11px] text-zinc-400'>(edited)</span>
					)}
				</div>
			}
			// Comment content
			content={
				isEditing ? (
					<CommentEditForm
						initialValue={content}
						onCancel={() => setIsEditing(false)}
						onSubmit={value => {
							onEdit(value)
							setIsEditing(false)
						}}
					/>
				) : (
					<>
						<p className='text-sm leading-relaxed text-zinc-800 dark:text-zinc-300'>
							{content}
						</p>
					</>
				)
			}
			// Actions & Reactions
			footer={
				<div className='space-y-3'>
					{/* Actions */}
					{!isEditing && (
						<div className='flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-zinc-500'>
							<button className='flex items-center gap-1 transition hover:text-zinc-900 dark:hover:text-zinc-100'>
								<CornerUpLeft className='h-4 w-4' />
								Reply
							</button>

							{isAuthor && (
								<>
									<CommentEditButton setIsEditing={() => setIsEditing(true)} />
									<RemoveComment onDelete={onDelete} />
								</>
							)}
						</div>
					)}

					{/* Reactions */}
					<ReactionList
						targetId={commentId}
						targetType={ReactionTargetType.Comment}
						reactions={reactions}
						myReactions={myReactions}
						isAuthenticated={isAuthenticated}
						onReactionToggle={onReactionToggle}
						className='mt-4'
					/>
				</div>
			}
		/>
	)
}
