import { env } from '@/shared/config/env'
import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(env.nodeEnv!, {
	headers: {
		Authorization: `Bearer ${/* auth logic */ ''}`,
	},
})
