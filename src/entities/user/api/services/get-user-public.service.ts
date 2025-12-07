import { graphqlClient } from '@/shared/api/graphql-client'
import {
	GetUserPublicDocument,
	type GetUserPublicQuery,
	type GetUserPublicQueryVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const getUserPublicService = async (
	variables: GetUserPublicQueryVariables,
): Promise<GetUserPublicQuery['user']> => {
	const { user: result } = await graphqlClient.request<
		GetUserPublicQuery,
		GetUserPublicQueryVariables
	>(GetUserPublicDocument, variables)

	return result
}
