import { useRouter } from 'next/navigation'

import { useCommentActions } from '@/features/comment/comment-actions'
import { useSendComment } from '@/features/comment/send-comment'

import type { CommentPublic } from '@/entities/comment/model/comment.types'
import { CommentItem } from '@/entities/comment/ui/CommentItem'

import { CommentForm } from '@/widgets/comment/ui'

import type {
	CreateCommentInput,
	UserProfile,
} from '@/shared/api/graphql/__generated__/documents'

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

	const router = useRouter()

	const handleCreateComment = (data: CreateCommentInput) => {
		sendComment(data)
		router.refresh()
	}

	return (
		<section className='container mx-auto px-4'>
			<CommentForm
				user={user}
				articleId={articleId}
				isAuthenticated={isAuthenticated}
				onSubmit={handleCreateComment}
				commentsCount={commentsCount}
			/>

			{/* Comment */}
			<div className='group mt-5 space-y-4'>
				{commentList.map(comment => (
					<CommentItem
						user={comment.author!}
						isAuthor={canModify(comment.author.id)}
						comment={comment.content}
						createdAt={comment.createdAt}
						updatedAt={comment.updatedAt}
						key={comment.id}
						onDelete={() => {
							handleDelete(comment.id, comment.author.id)
							router.refresh()
						}}
						onEdit={(newContent: string) => {
							handleEdit(comment.id, comment.author.id, newContent)
							router.refresh()
						}}
					/>
				))}

			</div>
		</section>
	)
}
