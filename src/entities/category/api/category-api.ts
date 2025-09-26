import { api } from '@/shared/api/base-api'
import { getCategories } from './queries/get-categories'
import type {
	GetCategoriesQuery,
	GetCategoriesQueryVariables,
} from '@/shared/api/graphql/__generated__/graphql'

export const categoryApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// Get categories
		getCategories: builder.query<
			GetCategoriesQuery['getCategories'],
			GetCategoriesQueryVariables | void
		>({
			query: () => ({
				document: getCategories,
			}),
			transformResponse: (response: GetCategoriesQuery) =>
				response.getCategories,
		}),
	}),
})

export const { useGetCategoriesQuery } = categoryApi
