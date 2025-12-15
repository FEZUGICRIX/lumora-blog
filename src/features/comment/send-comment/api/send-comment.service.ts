import { graphqlClient } from '@/shared/api/graphql-client'
import {
	SendCommentDocument,
	type SendCommentMutation,
	type SendCommentMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const sendCommentService = async (
	variables: SendCommentMutationVariables,
): Promise<SendCommentMutation['createComment']> => {
	const { createComment: result } = await graphqlClient.request<
		SendCommentMutation,
		SendCommentMutationVariables
	>(SendCommentDocument, variables)

	return result
}
