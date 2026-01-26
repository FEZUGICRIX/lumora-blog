import { useMutation } from '@tanstack/react-query'

import { trackArticleViewService } from './track-article-view.service'

export const useTrackArticleView = () => {
	const { mutate: trackArticleView } = useMutation({
		mutationKey: ['track article view'],
		mutationFn: (articleId: string) => trackArticleViewService({ articleId }),
	})

	return { trackArticleView }
}
