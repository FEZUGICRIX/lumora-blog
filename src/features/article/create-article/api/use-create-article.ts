import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { type CreateArticleInput } from '@/shared/api/graphql/__generated__/documents'
import { toastErrorHandler } from '@/shared/lib'

import { createArticleService } from './create-article.service'

export const useCreateArticle = () => {
	const { mutate: createArticle, isPending: isLoadingCreateArticle } =
		useMutation({
			mutationKey: ['create article'],
			mutationFn: (articleData: CreateArticleInput) =>
				createArticleService({ input: articleData }),

			onSuccess: () => {
				toast.success('Статья успешно создана!')
			},

			onError: error => {
				toastErrorHandler(error)
			},
		})

	return { createArticle, isLoadingCreateArticle }
}
