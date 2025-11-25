import { graphqlClient } from '@/shared/api/graphql-client'
import {
	RegisterDocument,
	type RegisterMutation,
	type RegisterMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const registerService = async (
	variables: RegisterMutationVariables,
	recaptcha: string,
): Promise<RegisterMutation['register']> => {
	const headers: Record<string, string> = recaptcha ? { recaptcha } : {}

	const { register: result } = await graphqlClient.request<
		RegisterMutation,
		RegisterMutationVariables
	>(RegisterDocument, variables, headers)

	return result
}
