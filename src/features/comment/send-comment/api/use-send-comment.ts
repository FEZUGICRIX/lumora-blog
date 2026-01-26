import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import type { CreateCommentInput } from '@/shared/api/graphql/__generated__/documents'
import { toastErrorHandler } from '@/shared/lib'

import { sendCommentService } from './send-comment.service'

export const useSendComment = () => {
	const t = useTranslations('common.toasts')

	const { mutate: sendComment, isPending: isLoadingSendComment } = useMutation({
		mutationKey: ['send comment'],
		mutationFn: (commentData: CreateCommentInput) =>
			sendCommentService(commentData),

		onSuccess: () => {
			toast.success(t('commentSent'))
		},

		onError: error => {
			toastErrorHandler(error)
		},
	})

	return { sendComment, isLoadingSendComment }
}
