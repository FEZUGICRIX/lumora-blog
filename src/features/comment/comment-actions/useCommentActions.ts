import { useEditComment } from '../edit-comment'
import { useRemoveComment } from '../remove-comment'

export const useCommentActions = (currentUserId?: string) => {
	const { removeComment } = useRemoveComment()
	const { editComment } = useEditComment()

	const canModify = (commentAuthorId: string) =>
		commentAuthorId === currentUserId

	const handleDelete = (commentId: string, authorId: string) => {
		if (!canModify(authorId)) return
		removeComment(commentId)
	}

	const handleEdit = (commentId: string, authorId: string, content: string) => {
		if (!canModify(authorId)) return
		editComment({ id: commentId, content })
	}

	return {
		handleDelete,
		handleEdit,
		canModify,
	}
}
