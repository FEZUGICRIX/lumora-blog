import { useQuery } from '@tanstack/react-query'

import type { GetArticlesQueryVariables } from '@/shared/api/graphql/__generated__/documents'

import { getArticlesService } from '../services'

export const useGetArticles = (
	params: GetArticlesQueryVariables = {},
	options = {}, // Принимаем стандартные опции Tanstack Query
) => {
	const {
		data: articles,
		isPending: isLoadingArticles,
		isError: isArticlesError,
		error: articlesError,
	} = useQuery({
		queryKey: ['get articles', params],
		queryFn: () => getArticlesService(params),

		// 4. Распространяем все опции
		...options,
	})

	return { articles, isLoadingArticles, isArticlesError, articlesError }
}
