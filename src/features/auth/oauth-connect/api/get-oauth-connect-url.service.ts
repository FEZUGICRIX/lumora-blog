import type { OAuthProvider } from '@/entities/auth/types'

import { graphqlClient } from '@/shared/api/graphql-client'
import {
	GetOAuthConnectUrlDocument,
	type GetOAuthConnectUrlQuery,
	type GetOAuthConnectUrlQueryVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const getOAuthConnectUrlService = async (
	provider: OAuthProvider,
): Promise<GetOAuthConnectUrlQuery['connect']> => {
	const { connect } = await graphqlClient.request<
		GetOAuthConnectUrlQuery,
		GetOAuthConnectUrlQueryVariables
	>(GetOAuthConnectUrlDocument, {
		provider,
	})

	return { url: connect.url }
}
