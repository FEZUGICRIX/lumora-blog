import { graphqlClient } from '@/shared/api/graphql-client'
import {
	UpdateUserDocument,
	type UpdateUserMutation,
	type UpdateUserMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const updateUserService = async (
	variables: UpdateUserMutationVariables,
): Promise<UpdateUserMutation['updateProfile']> => {
	const { updateProfile: result } = await graphqlClient.request<
		UpdateUserMutation,
		UpdateUserMutationVariables
	>(UpdateUserDocument, variables)

	return result
}
