import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlBaseQuery } from '@/shared/api/graphql/base-query'
import { getCategories } from './queries/get-categories'
import type {
	GetCategoriesQuery,
	GetCategoriesQueryVariables,
} from '@/shared/api/graphql/__generated__/graphql'

export const categoryApi = createApi({
	reducerPath: 'categoryApi',
	baseQuery: graphqlBaseQuery,
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
