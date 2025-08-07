// // хук с useForm, autosave, сабмитом
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useEffect } from 'react'
// import { articleSchema, ArticleFormValues } from './schema'
// import { getInitialFormValues } from '../lib/getInitialFormValues'
// import { useMutation } from '@tanstack/react-query'
// import { Toaster } from '@/shared/ui/ui-kit/sonner'

// export function useArticleEditForm(article: Article | null) {
// 	const form = useForm<ArticleFormValues>({
// 		resolver: zodResolver(articleSchema),
// 		defaultValues: getInitialFormValues(article),
// 	})

// 	const mutation = useMutation({
// 		mutationFn: async (data: ArticleFormValues) => {
// 			const method = article ? 'PATCH' : 'POST'
// 			const url = article
// 				? `/api/articles/${article.slug}`
// 				: '/api/articles'
// 			const res = await fetch(url, {
// 				method,
// 				body: JSON.stringify(data),
// 				headers: { 'Content-Type': 'application/json' },
// 			})
// 			if (!res.ok) throw new Error('Ошибка при сохранении')
// 		},
// 		onSuccess: () => {
// 			toast.success('Статья сохранена')
// 		},
// 		onError: () => {
// 			toast.error('Ошибка при сохранении')
// 		},
// 	})

// 	const handleSubmit = form.handleSubmit((data) => {
// 		mutation.mutate(data)
// 	})

// 	// autosave on blur example
// 	useEffect(() => {
// 		const sub = form.watch((_, { name, type }) => {
// 			if (type === 'blur') {
// 				const values = form.getValues()
// 				mutation.mutate(values)
// 			}
// 		})
// 		return () => sub.unsubscribe()
// 	}, [form])

// 	return {
// 		...form,
// 		handleSubmit,
// 		isSubmitting: mutation.isPending,
// 	}
// }
