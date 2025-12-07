import { graphqlClient } from '@/shared/api/graphql-client'
import {
	GetProfileDocument,
	type GetProfileQuery,
} from '@/shared/api/graphql/__generated__/documents'

export const getProfileService = async (): Promise<
	GetProfileQuery['findProfile']
> => {
	const { findProfile: result } =
		await graphqlClient.request<GetProfileQuery>(GetProfileDocument)

	return result
}
