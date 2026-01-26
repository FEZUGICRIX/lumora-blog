import { useRouter } from 'next/navigation'

import { useCommentActions } from '@/features/comment/comment-actions'
import { useSendComment } from '@/features/comment/send-comment'
import { useToggleReaction } from '@/features/reactions/toggle-reaction'

import type { CommentPublic } from '@/entities/comment/model/comment.types'

import { CommentForm } from '@/widgets/comment/ui'

import type {
	CreateCommentInput,
	ToggleReactionInput,
	UserProfile,
} from '@/shared/api/graphql/__generated__/documents'

import { CommentCard } from './CommentCard'

interface CommentsProps {
	commentList: CommentPublic[]
	articleId: string
	user?: UserProfile | null
	isAuthenticated: boolean
	commentsCount: number
}

export const Comments = ({
	commentList,
	articleId,
	user,
	isAuthenticated,
	commentsCount,
}: CommentsProps) => {
	const { canModify, handleEdit, handleDelete } = useCommentActions(user?.id)
	const { sendComment } = useSendComment()
	const { toggleReaction } = useToggleReaction()

	const router = useRouter()

	const handleCreateComment = (data: CreateCommentInput) => {
		sendComment(data)
		router.refresh()
	}

	// if (!user) return null

	return (
		<section className='container mx-auto px-4'>
			<CommentForm
				user={user}
				articleId={articleId}
				isAuthenticated={isAuthenticated}
				onSubmit={handleCreateComment}
				commentsCount={commentsCount}
			/>

			{/* Comments */}
			<div className='group mt-5 space-y-4'>
				{commentList.map(comment => (
					<CommentCard
						key={comment.id}
						author={comment.author}
						comment={comment}
						isAuthor={canModify(comment.author.id)}
						isAuthenticated={isAuthenticated}
						onReactionToggle={(data: ToggleReactionInput) => {
							toggleReaction(data)
							router.refresh()
						}}
						onEdit={(newContent: string) => {
							handleEdit(comment.id, comment.author.id, newContent)
							router.refresh()
						}}
						onDelete={() => {
							handleDelete(comment.id, comment.author.id)
							router.refresh()
						}}
					/>
				))}
			</div>
		</section>
	)
}
