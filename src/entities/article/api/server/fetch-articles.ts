import { graphqlClient } from '@/shared/lib/graphql/client'
import { getArticlesQuery } from '../queries/get-articles'
import type {
	GetArticlesQuery,
	GetArticlesQueryVariables,
} from '@/shared/api/graphql/__generated__/graphql'

export const fetchArticles = async (
	variables: Partial<GetArticlesQueryVariables> = {},
): Promise<GetArticlesQuery['getArticles'] | null> => {
	try {
		const data = await graphqlClient.request<
			GetArticlesQuery,
			GetArticlesQueryVariables
		>(getArticlesQuery, variables)

		return data.getArticles
	} catch {
		return null
	}
}
