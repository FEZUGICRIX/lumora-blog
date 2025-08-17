import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { env } from '../config/env'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: graphqlRequestBaseQuery({
		url: env.apiUrl,
	}),
	endpoints: () => ({}),
})
