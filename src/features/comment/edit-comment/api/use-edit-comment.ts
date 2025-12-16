import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import type { UpdateCommentInput } from '@/shared/api/graphql/__generated__/documents'
import { toastErrorHandler } from '@/shared/lib'

import { editCommentService } from './edit-comment.service'

export const useEditComment = () => {
	const { mutate: editComment, isPending: isLoadingEditComment } = useMutation({
		mutationKey: ['edit comment'],
		mutationFn: (data: UpdateCommentInput) => editCommentService(data),

		onSuccess() {
			toast.success('Комментарий успешно изменен!')
		},

		onError: error => {
			toastErrorHandler(error)
		},
	})

	return { editComment, isLoadingEditComment }
}
