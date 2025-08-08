// src/entities/article/api/server/fetchArticle.ts
import { graphqlClient } from '@/shared/lib/graphql/client'
import { getAllArticlesQuery } from '../queries/get-all-articles'
import type {
	GetAllArticlesQuery,
	GetAllArticlesQueryVariables,
} from '@/shared/api/graphql/__generated__/graphql'

export const fetchAllArticles = async () => {
	try {
		const data = await graphqlClient.request<
			GetAllArticlesQuery,
			GetAllArticlesQueryVariables
		>(getAllArticlesQuery)

		return data.getAllArticles
	} catch (error) {
		return []
	}
}
