import { useMutation } from '@tanstack/react-query'

import type { OAuthProvider } from '../../types'
import { getOAuthConnectUrl } from '../services'

export const useGetOAuthConnectUrl = () => {
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['oauth by provider'],
		mutationFn: (provider: OAuthProvider) => getOAuthConnectUrl(provider),
	})

	return { mutateAsync, isPending }
}
