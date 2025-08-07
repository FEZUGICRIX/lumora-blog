import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

export const graphqlBaseQuery = graphqlRequestBaseQuery({
	url: 'http://localhost:5000/graphql', // TODO: заменить на константу
})
