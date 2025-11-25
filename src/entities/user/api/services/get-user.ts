import { graphqlClient } from '@/shared/api/graphql-client'
import {
	GetUserDocument,
	type GetUserQuery,
} from '@/shared/api/graphql/__generated__/documents'

export const getUser = async (): Promise<GetUserQuery['findProfile']> => {
	const { findProfile: result } =
		await graphqlClient.request<GetUserQuery>(GetUserDocument)

	return result
}
