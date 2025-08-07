import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
	process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, // TODO: заменить на константу
	{
		headers: {
			Authorization: `Bearer ${/* auth logic */ ''}`,
		},
	},
)
