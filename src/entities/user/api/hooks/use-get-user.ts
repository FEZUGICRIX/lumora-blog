import { useQuery } from '@tanstack/react-query'

import { getUserService } from '../services'

export const useGetUser = () => {
	const { data: user, isPending: isLoadingUser } = useQuery({
		queryKey: ['get user'],
		queryFn: () => getUserService(),
	})

	return { user, isLoadingUser }
}
