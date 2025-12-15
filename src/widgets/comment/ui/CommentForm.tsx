import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { UserAvatar } from '@/entities/user/ui'

import type {
	CreateCommentInput,
	UserProfile,
} from '@/shared/api/graphql/__generated__/documents'
import { Button } from '@/shared/ui/ui-kit'

interface CommentFormProps {
	user?: UserProfile | null
	articleId: string
	isAuthenticated: boolean
	onSubmit: (data: CreateCommentInput) => Promise<void> | void
	commentsCount: number
}

export const CommentForm = ({
	user,
	articleId,
	isAuthenticated,
	onSubmit,
	commentsCount,
}: CommentFormProps) => {
	const [comment, setComment] = useState('')

	const isValid = comment.trim().length > 0

	const submitComment = async () => {
		if (!isValid || !isAuthenticated) return

		await onSubmit({
			content: comment.trim(),
			articleId,
		})

		setComment('')
	}

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await submitComment()
	}

	return (
		<form
			onSubmit={handleFormSubmit}
			className='mx-auto w-full space-y-4 dark:text-white'
		>
			<h3 className='text-xl font-semibold'>{commentsCount} Comments</h3>

			<div className='flex items-center gap-4'>
				{user && (
					<UserAvatar
						avatarUrl={user.avatarUrl}
						displayName={user.displayName}
						className='h-12 w-12'
					/>
				)}

				<div className='w-full rounded-2xl bg-white/70 py-3 shadow-sm backdrop-blur dark:bg-zinc-900/80'>
					<TextareaAutosize
						name='comment'
						minRows={1}
						maxRows={6}
						placeholder={
							isAuthenticated
								? 'Join the discussion…'
								: 'Sign in to join the discussion'
						}
						value={comment}
						onChange={e => setComment(e.target.value)}
						disabled={!isAuthenticated}
						onKeyDown={e => {
							if (e.key === 'Enter' && !e.shiftKey) {
								e.preventDefault()
								submitComment()
							}
						}}
						className='w-full resize-none bg-transparent p-4 text-sm outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed'
					/>
				</div>
			</div>

			<div className='flex justify-end'>
				<Button type='submit' disabled={!isAuthenticated || !isValid}>
					Send comment
				</Button>
			</div>
		</form>
	)
}
