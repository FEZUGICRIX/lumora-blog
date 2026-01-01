import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { UserAvatar } from '@/entities/user/ui'

import type {
	CreateCommentInput,
	UserProfile,
} from '@/shared/api/graphql/__generated__/documents'
import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'
import { Button, Textarea } from '@/shared/ui/ui-kit'

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
	const t = useTranslations('widgets.comment')

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
			<h3 className='text-xl font-semibold'>{commentsCount} {t('comments')}</h3>

			<div className='flex items-center gap-4'>
				{user && (
					<Link href={routes.profile(user.username)}>
						<UserAvatar
							avatarUrl={user.avatarUrl}
							displayName={user.displayName}
							className='h-12 w-12'
						/>
					</Link>
				)}

				<div className='w-full rounded-2xl bg-white/70 shadow-sm backdrop-blur dark:bg-zinc-900/80'>
					<Textarea
						name='comment'
						placeholder={
							isAuthenticated
								? t('joinDiscussion')
								: t('signInToJoin')
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
					{t('sendComment')}
				</Button>
			</div>
		</form>
	)
}
