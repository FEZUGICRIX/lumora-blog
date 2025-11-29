import { useMutation } from '@tanstack/react-query'

import type { OAuthProvider } from '../../types'
import { getOAuthConnectUrlService } from './get-oauth-connect-url.service'

export const useGetOAuthConnectUrl = () => {
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['oauth by provider'],
		mutationFn: (provider: OAuthProvider) =>
			getOAuthConnectUrlService(provider),
	})

	return { mutateAsync, isPending }
}
