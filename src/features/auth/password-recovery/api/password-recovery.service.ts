import { graphqlClient } from '@/shared/api/graphql-client'
import {
	PasswordRecoveryDocument,
	type PasswordRecoveryMutation,
	type PasswordRecoveryMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const passwordRecoveryService = async (
	variables: PasswordRecoveryMutationVariables,
	recaptcha: string,
): Promise<PasswordRecoveryMutation['resetPassword']> => {
	const headers: Record<string, string> = recaptcha ? { recaptcha } : {}

	const { resetPassword: result } = await graphqlClient.request<
		PasswordRecoveryMutation,
		PasswordRecoveryMutationVariables
	>(PasswordRecoveryDocument, variables, headers)

	return result
}
