import { useQuery } from '@tanstack/react-query'

import { getUserPublicService } from '../services'

export const useGetUserPublic = (username: string) => {
	const { data: user, isPending: isLoadingUser } = useQuery({
		queryKey: ['get user'],
		queryFn: () => getUserPublicService({ username }),
	})

	return { user, isLoadingUser }
}
