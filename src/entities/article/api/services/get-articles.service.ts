import { graphqlClient } from '@/shared/api/graphql-client'
import {
	GetArticlesDocument,
	type GetArticlesQuery,
	type GetArticlesQueryVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const getArticlesService = async (
	variables: GetArticlesQueryVariables,
): Promise<GetArticlesQuery['getArticles']> => {
	const { getArticles: result } = await graphqlClient.request<
		GetArticlesQuery,
		GetArticlesQueryVariables
	>(GetArticlesDocument, variables)

	return result
}
