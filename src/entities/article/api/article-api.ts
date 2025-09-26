import { api } from '@/shared/api/base-api'
import { getArticlesQuery } from './queries/get-articles'
import { getArticleBySlugQuery } from './queries/get-article-by-slug'
import { createArticleMutation } from './queries/create-article'
import { updateArticleMutation } from './queries/update-article'

import type {
	CreateArticleMutation,
	CreateArticleMutationVariables,
	GetArticleBySlugQuery,
	GetArticleBySlugQueryVariables,
	GetArticlesQuery,
	GetArticlesQueryVariables,
	UpdateArticleMutation,
	UpdateArticleMutationVariables,
} from '@/shared/api/graphql/__generated__/graphql'

export const articleApi = api.injectEndpoints({
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

		// Update article
		updateArticle: builder.mutation<
			UpdateArticleMutation['updateArticle'],
			UpdateArticleMutationVariables
		>({
			query: (variables) => ({
				document: updateArticleMutation,
				variables,
			}),
		}),
	}),
})

export const {
	useGetArticleBySlugQuery,
	useGetArticlesQuery,
	useCreateArticleMutation,
	useUpdateArticleMutation,
} = articleApi
