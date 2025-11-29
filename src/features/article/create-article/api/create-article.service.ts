import { graphqlClient } from '@/shared/api/graphql-client'
import {
	CreateArticleDocument,
	type CreateArticleMutation,
	type CreateArticleMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const createArticleService = async (
	variables: CreateArticleMutationVariables,
): Promise<CreateArticleMutation['createArticle']> => {
	const { createArticle: result } = await graphqlClient.request<
		CreateArticleMutation,
		CreateArticleMutationVariables
	>(CreateArticleDocument, variables)

	return result
}
