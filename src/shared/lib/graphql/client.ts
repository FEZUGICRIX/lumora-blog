import { env } from '@/shared/config/env'
import { GraphQLClient } from 'graphql-request'

export const createGraphQLClient = (headers?: HeadersInit) =>
	new GraphQLClient(env.apiUrl, {
		headers,
	})

export const graphqlClient = createGraphQLClient()
