import { GraphQLClient } from 'graphql-request'

import { env } from '@/shared/config/env'

export const graphqlClient = new GraphQLClient(env.apiUrl, {
	credentials: 'include',
})
