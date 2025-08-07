import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: graphqlRequestBaseQuery({
		url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, // TODO: заменить на константу
	}),
	endpoints: () => ({}),
})
