import { graphqlClient } from '@/shared/api/graphql-client'
import {
	RemoveCommentDocument,
	type RemoveCommentMutation,
	type RemoveCommentMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const removeCommentService = async (
	variables: RemoveCommentMutationVariables,
): Promise<RemoveCommentMutation['removeComment']> => {
	const { removeComment: result } = await graphqlClient.request<
		RemoveCommentMutation,
		RemoveCommentMutationVariables
	>(RemoveCommentDocument, variables)

	return result
}
