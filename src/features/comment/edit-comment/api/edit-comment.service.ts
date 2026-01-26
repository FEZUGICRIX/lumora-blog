import { graphqlClient } from '@/shared/api/graphql-client'
import {
	EditCommentDocument,
	type EditCommentMutation,
	type EditCommentMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const editCommentService = async (
	variables: EditCommentMutationVariables,
): Promise<EditCommentMutation['updateComment']> => {
	const { updateComment: result } = await graphqlClient.request<
		EditCommentMutation,
		EditCommentMutationVariables
	>(EditCommentDocument, variables)

	return result
}
