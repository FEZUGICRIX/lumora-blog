import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { type UpdateArticleInput } from '@/shared/api/graphql/__generated__/documents'
import { routes } from '@/shared/config/routes'
import { toastErrorHandler } from '@/shared/lib'

import { updateArticleService } from './update-article.service'

export const useUpdateArticle = () => {
	const router = useRouter()

	const { mutate: updateArticle, isPending: isLoadingUpdateArticle } =
		useMutation({
			mutationKey: ['create article'],
			mutationFn: (articleData: UpdateArticleInput) =>
				updateArticleService({ input: articleData }),

			onSuccess: ({ slug }) => {
				toast.success('Вы успешно обновили статью!')
				router.push(routes.blog.post(slug))
			},

			onError: error => {
				toastErrorHandler(error)
			},
		})

	return { updateArticle, isLoadingUpdateArticle }
}
