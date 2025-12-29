import { graphqlClient } from '@/shared/api/graphql-client'
import {
	DeleteArticleDocument,
	type DeleteArticleMutation,
	type DeleteArticleMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const deleteArticleService = async (
	variables: DeleteArticleMutationVariables,
): Promise<DeleteArticleMutation['removeArticle']> => {
	const { removeArticle: result } = await graphqlClient.request<
		DeleteArticleMutation,
		DeleteArticleMutationVariables
	>(DeleteArticleDocument, variables)

	return result
}
