import { graphqlClient } from '@/shared/api/graphql-client'
import {
	LoginDocument,
	type LoginMutation,
	type LoginMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const loginService = async (
	variables: LoginMutationVariables,
	recaptcha: string,
): Promise<LoginMutation['login']> => {
	const headers: Record<string, string> = recaptcha ? { recaptcha } : {}

	const { login: result } = await graphqlClient.request<
		LoginMutation,
		LoginMutationVariables
	>(LoginDocument, variables, headers)
	return result
}
