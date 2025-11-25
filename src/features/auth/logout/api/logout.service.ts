import { graphqlClient } from '@/shared/api/graphql-client'
import {
	LogoutDocument,
	type LogoutMutation,
} from '@/shared/api/graphql/__generated__/documents'

export const logoutService = async (): Promise<LogoutMutation['logout']> => {
	const { logout: result } =
		await graphqlClient.request<LogoutMutation>(LogoutDocument)

	return result
}
