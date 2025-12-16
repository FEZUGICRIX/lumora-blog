import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { toastErrorHandler } from '@/shared/lib'

import { removeCommentService } from '../api/remove-comment.service'

export const useRemoveComment = () => {
	const { mutate: removeComment, isPending: isLoadingRemoveComment } =
		useMutation({
			mutationKey: ['remove comment'],
			mutationFn: (id: string) => removeCommentService({ id }),

			onSuccess() {
				toast.success('Комментарий успешно удален!')
			},

			onError: error => {
				toastErrorHandler(error)
			},
		})

	return { removeComment, isLoadingRemoveComment }
}
