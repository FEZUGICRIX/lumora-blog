import { useQuery } from '@tanstack/react-query'

import { getUser } from '../services'

export const useGetUser = () => {
	const { data: user, isLoading } = useQuery({
		queryKey: ['get user'],
		queryFn: () => getUser(),
	})

	return { user, isLoading }
}
