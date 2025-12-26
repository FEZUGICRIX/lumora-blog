import { useMutation } from '@tanstack/react-query'

import type { ToggleReactionMutationVariables } from '@/shared/api/graphql/__generated__/documents'

import { toggleReactionService } from './toggle-reaction.service'

export const useToggleReaction = () => {
	const { mutate: toggleReaction } = useMutation({
		mutationKey: ['toggle reaction'],
		mutationFn: (data: ToggleReactionMutationVariables) =>
			toggleReactionService(data),
	})

	return { toggleReaction }
}
