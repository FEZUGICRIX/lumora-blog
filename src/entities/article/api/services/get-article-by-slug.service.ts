import { graphqlClient } from '@/shared/api/graphql-client'
import {
	GetArticleBySlugDocument,
	type GetArticleBySlugQuery,
	type GetArticleBySlugQueryVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const getArticleBySlugService = async (
	variables: GetArticleBySlugQueryVariables,
): Promise<GetArticleBySlugQuery['getArticleBySlug']> => {
	const { getArticleBySlug: result } = await graphqlClient.request<
		GetArticleBySlugQuery,
		GetArticleBySlugQueryVariables
	>(GetArticleBySlugDocument, variables)

	return result
}
