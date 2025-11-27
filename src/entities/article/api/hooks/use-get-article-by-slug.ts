import { useQuery } from '@tanstack/react-query'

import { getArticleBySlugService } from '../services/get-article-by-slug.service'

export const useGetArticleBySlug = (slug: string) => {
	const { data: article, isPending: isLoadingArticle } = useQuery({
		queryKey: ['get article by slug'],
		queryFn: () => getArticleBySlugService({ slug }),
	})

	return { article, isLoadingArticle }
}
