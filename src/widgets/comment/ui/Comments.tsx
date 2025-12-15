import { useRouter } from 'next/navigation'

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
						isAuthor={comment.author.id == user?.id}
						comment={comment.content}
						createdAt={comment.createdAt}
						updatedAt={comment.updatedAt}
						key={comment.id}
					/>
				))}

				{/* Reply */}
				{/* <div className='relative ml-12 pl-6'>
					<div className='absolute top-0 left-0 h-full w-px bg-gradient-to-b from-zinc-300/60 to-transparent dark:from-zinc-700/60' />

					<div className='flex gap-4'>
						<div className='h-8 w-8 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-700' />

						<div className='space-y-1'>
							<div className='flex items-center gap-2 text-xs text-zinc-400'>
								<span className='font-medium text-zinc-900 dark:text-zinc-100'>
									another_user
								</span>
								<span>·</span>
								<span>30m ago</span>
							</div>

							<p className='text-sm text-zinc-800 dark:text-zinc-300'>
								+1. Especially liked how FSD was explained without dogma.
							</p>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	)
}
