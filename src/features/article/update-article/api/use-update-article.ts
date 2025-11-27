import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { type UpdateArticleInput } from '@/shared/api/graphql/__generated__/documents'
import { toastErrorHandler } from '@/shared/lib'

import { updateArticleService } from './update-article.service'

export const useUpdateArticle = () => {
	const { mutate: updateArticle, isPending: isLoadingUpdateArticle } =
		useMutation({
			mutationKey: ['create article'],
			mutationFn: (articleData: UpdateArticleInput) =>
				updateArticleService({ input: articleData }),

			onSuccess: () => {
				toast.success('Вы успешно обновили статью!')
			},

			onError: error => {
				toastErrorHandler(error)
			},
		})

	return { updateArticle, isLoadingUpdateArticle }
}
