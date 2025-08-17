import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { env } from '@/shared/config/env'

export const graphqlBaseQuery = graphqlRequestBaseQuery({
	url: env.apiUrl,
})
