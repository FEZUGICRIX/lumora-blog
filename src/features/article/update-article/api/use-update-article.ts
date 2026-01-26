import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { type UpdateArticleInput } from '@/shared/api/graphql/__generated__/documents'
import { routes } from '@/shared/config/routes'
import { toastErrorHandler } from '@/shared/lib'

import { updateArticleService } from './update-article.service'

export const useUpdateArticle = () => {
	const router = useRouter()
	const t = useTranslations('common.toasts')

	const { mutate: updateArticle, isPending: isLoadingUpdateArticle } =
		useMutation({
			mutationKey: ['create article'],
			mutationFn: (articleData: UpdateArticleInput) =>
				updateArticleService({ input: articleData }),

			onSuccess: ({ slug }) => {
				toast.success(t('articleUpdated'))
				router.push(routes.blog.post(slug))
			},

			onError: error => {
				toastErrorHandler(error)
			},
		})

	return { updateArticle, isLoadingUpdateArticle }
}
