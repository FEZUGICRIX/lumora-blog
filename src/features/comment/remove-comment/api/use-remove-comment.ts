import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { toastErrorHandler } from '@/shared/lib'

import { removeCommentService } from '../api/remove-comment.service'

export const useRemoveComment = () => {
	const t = useTranslations('common.toasts')

	const { mutate: removeComment, isPending: isLoadingRemoveComment } =
		useMutation({
			mutationKey: ['remove comment'],
			mutationFn: (id: string) => removeCommentService({ id }),

			onSuccess() {
				toast.success(t('commentDeleted'))
			},

			onError: error => {
				toastErrorHandler(error)
			},
		})

	return { removeComment, isLoadingRemoveComment }
}
