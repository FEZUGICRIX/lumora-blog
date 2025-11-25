import { graphqlClient } from '@/shared/api/graphql-client'
import {
	VerifyEmailDocument,
	type VerifyEmailMutation,
	type VerifyEmailMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const verifyEmailService = async (
	variables: VerifyEmailMutationVariables,
): Promise<VerifyEmailMutation['newVerification']> => {
	const { newVerification: result } = await graphqlClient.request<
		VerifyEmailMutation,
		VerifyEmailMutationVariables
	>(VerifyEmailDocument, variables)

	return result
}
