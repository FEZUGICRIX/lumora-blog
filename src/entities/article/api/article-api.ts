import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlBaseQuery } from '@/shared/api/graphql/base-query'

import { getArticleBySlugQuery } from './queries/get-article-by-slug'
import { createArticleMutation } from './queries/create-article'
import { getArticlesQuery } from './queries/get-articles'

import type {
	CreateArticleMutation,
	CreateArticleMutationVariables,
	GetArticleBySlugQuery,
	GetArticleBySlugQueryVariables,
	GetArticlesQuery,
	GetArticlesQueryVariables,
} from '@/shared/api/graphql/__generated__/graphql'

export const articleApi = createApi({
	reducerPath: 'articleApi',
	baseQuery: graphqlBaseQuery,
	endpoints: (builder) => ({
		// Get article by slug
		getArticleBySlug: builder.query<
			GetArticleBySlugQuery['getArticleBySlug'],
			GetArticleBySlugQueryVariables
		>({
			query: (variables) => ({
				document: getArticleBySlugQuery,
				variables,
			}),
		}),

		// Get all articles or with filters/sort
		getArticles: builder.query<
			GetArticlesQuery['getArticles'],
			Partial<GetArticlesQueryVariables> | void
		>({
			query: (variables) => ({
				document: getArticlesQuery,
				variables: variables ?? {},
			}),
			transformResponse: (response: GetArticlesQuery) =>
				response.getArticles,
		}),

		// Create article
		createArticle: builder.mutation<
			CreateArticleMutation['createArticle'],
			CreateArticleMutationVariables
		>({
			query: (variables) => ({
				document: createArticleMutation,
				variables,
			}),
		}),
	}),
})

export const {
	useGetArticleBySlugQuery,
	useGetArticlesQuery,
	useCreateArticleMutation,
} = articleApi
