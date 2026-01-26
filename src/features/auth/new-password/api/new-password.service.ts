import { graphqlClient } from '@/shared/api/graphql-client'
import {
	NewPasswordDocument,
	type NewPasswordMutation,
	type NewPasswordMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const newPasswordService = async (
	variables: NewPasswordMutationVariables,
	recaptcha: string,
): Promise<NewPasswordMutation['newPassword']> => {
	const headers: Record<string, string> = recaptcha ? { recaptcha } : {}

	const { newPassword: result } = await graphqlClient.request<
		NewPasswordMutation,
		NewPasswordMutationVariables
	>(NewPasswordDocument, variables, headers)

	return result
}
