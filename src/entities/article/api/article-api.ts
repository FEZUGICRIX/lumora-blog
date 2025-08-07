import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlBaseQuery } from '@/shared/api/graphql/base-query'
import { getArticleBySlugQuery } from './queries/get-article-by-slug'
import { getAllArticlesQuery } from './queries/get-all-articles'
import type {
	CreateArticleMutation,
	CreateArticleMutationVariables,
	GetAllArticlesQuery,
	GetAllArticlesQueryVariables,
	GetArticleBySlugQuery,
	GetArticleBySlugQueryVariables,
} from '@/shared/api/graphql/__generated__/graphql'
import { createArticleMutation } from './queries/create-article'

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

		// Get all articles
		getAllArticles: builder.query<
			GetAllArticlesQuery['getAllArticles'],
			GetAllArticlesQueryVariables
		>({
			query: () => ({
				document: getAllArticlesQuery,
			}),
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
	useGetAllArticlesQuery,
	useCreateArticleMutation,
} = articleApi
