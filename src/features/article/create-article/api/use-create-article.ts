import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { type CreateArticleInput } from '@/shared/api/graphql/__generated__/documents'
import { routes } from '@/shared/config/routes'
import { toastErrorHandler } from '@/shared/lib'

import { createArticleService } from './create-article.service'

export const useCreateArticle = () => {
	const router = useRouter()
	const t = useTranslations('common.toasts')

	const { mutate: createArticle, isPending: isLoadingCreateArticle } =
		useMutation({
			mutationKey: ['create article'],
			mutationFn: (articleData: CreateArticleInput) =>
				createArticleService({ input: articleData }),

			onSuccess: ({ slug }) => {
				toast.success(t('articleCreated'))
				router.push(routes.blog.post(slug))
			},

			onError: error => {
				toastErrorHandler(error)
			},
		})

	return { createArticle, isLoadingCreateArticle }
}
