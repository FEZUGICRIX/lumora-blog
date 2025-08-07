import { GraphQLClient } from 'graphql-request'

export const createGraphQLClient = (headers?: HeadersInit) =>
	new GraphQLClient(
		process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
			'http://localhost:5000/graphql',
		{ headers },
	)

export const graphqlClient = createGraphQLClient()
