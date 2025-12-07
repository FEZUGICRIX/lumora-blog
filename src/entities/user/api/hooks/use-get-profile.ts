import { useQuery } from '@tanstack/react-query'

import { getProfileService } from '../services'

export const useGetProfile = () => {
	const { data: user, isPending: isLoadingUser } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => getProfileService(),
	})

	return { user, isLoadingUser }
}
