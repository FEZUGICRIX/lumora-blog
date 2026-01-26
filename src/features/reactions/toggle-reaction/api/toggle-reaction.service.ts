import { graphqlClient } from '@/shared/api/graphql-client'
import {
	ToggleReactionDocument,
	type ToggleReactionMutation,
	type ToggleReactionMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const toggleReactionService = async (
	variables: ToggleReactionMutationVariables,
): Promise<ToggleReactionMutation['toggleReaction']> => {
	const { toggleReaction: result } = await graphqlClient.request<
		ToggleReactionMutation,
		ToggleReactionMutationVariables
	>(ToggleReactionDocument, variables)

	return result
}
