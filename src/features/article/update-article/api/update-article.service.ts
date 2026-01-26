import { graphqlClient } from '@/shared/api/graphql-client'
import {
	UpdateArticleDocument,
	type UpdateArticleMutation,
	type UpdateArticleMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const updateArticleService = async (
	variables: UpdateArticleMutationVariables,
): Promise<UpdateArticleMutation['updateArticle']> => {
	const { updateArticle: result } = await graphqlClient.request<
		UpdateArticleMutation,
		UpdateArticleMutationVariables
	>(UpdateArticleDocument, variables)

	return result
}
