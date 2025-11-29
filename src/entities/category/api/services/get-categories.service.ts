import { graphqlClient } from '@/shared/api/graphql-client'
import {
	GetCategoriesDocument,
	type GetCategoriesQuery,
} from '@/shared/api/graphql/__generated__/documents'

export const getCategoriesService = async (): Promise<
	GetCategoriesQuery['getCategories']
> => {
	const { getCategories: result } =
		await graphqlClient.request<GetCategoriesQuery>(GetCategoriesDocument)

	return result
}
