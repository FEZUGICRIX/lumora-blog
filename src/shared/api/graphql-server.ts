import { GraphQLClient } from 'graphql-request'
import { cookies } from 'next/headers'

import { env } from '@/shared/config/env'

export const createServerGraphqlClient = () => {
	const cookieStore = cookies()

	return new GraphQLClient(env.apiUrl, {
		headers: {
			cookie: cookieStore.toString(),
		},
	})
}
