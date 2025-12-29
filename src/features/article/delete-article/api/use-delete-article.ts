import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { toastErrorHandler } from '@/shared/lib'

import { deleteArticleService } from './delete-article.service'

export const useDeleteArticle = () => {
	const queryClient = useQueryClient()

	const { mutate: deleteArticle, isPending: isLoadingDeleteArticle } =
		useMutation({
			mutationKey: ['delete article'],
			mutationFn: (slug: string) => deleteArticleService({ slug }),

			onSuccess: async () => {
				toast.success('Статья успешно создана!')

				await queryClient.invalidateQueries({
					queryKey: ['get articles'],
				})
			},

			onError: error => {
				toastErrorHandler(error)
			},
		})

	return { deleteArticle, isLoadingDeleteArticle }
}
