import { graphqlClient } from '@/shared/api/graphql-client'
import {
	TrackArticleViewDocument,
	type TrackArticleViewMutation,
	type TrackArticleViewMutationVariables,
} from '@/shared/api/graphql/__generated__/documents'

export const trackArticleViewService = async (
	variables: TrackArticleViewMutationVariables,
): Promise<TrackArticleViewMutation['trackArticleView']> => {
	const { trackArticleView: result } = await graphqlClient.request<
		TrackArticleViewMutation,
		TrackArticleViewMutationVariables
	>(TrackArticleViewDocument, variables)

	return result
}
