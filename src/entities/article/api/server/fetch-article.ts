import { graphqlClient } from '@/shared/lib/graphql/client'
import { getArticleBySlugQuery } from '../queries/get-article-by-slug'
import type {
	GetArticleBySlugQuery,
	GetArticleBySlugQueryVariables,
} from '@/shared/api/graphql/__generated__/graphql'

export const fetchArticle = async (slug: string) => {
	try {
		const data = await graphqlClient.request<
			GetArticleBySlugQuery,
			GetArticleBySlugQueryVariables
		>(getArticleBySlugQuery, { slug })

		return data.getArticleBySlug
	} catch (error) {
		return null
	}
}
