import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { toastErrorHandler } from '@/shared/lib'

import { type TypePasswordRecoverySchema } from '../schema'
import { passwordRecoveryService } from './password-recovery.service'

export const usePasswordRecovery = () => {
	const { mutate: reset, isPending: isLoadingReset } = useMutation({
		mutationKey: ['password recovery'],
		mutationFn: ({
			data,
			recaptcha,
		}: {
			data: TypePasswordRecoverySchema
			recaptcha: string
		}) => passwordRecoveryService(data, recaptcha),

		onSuccess() {
			toast.success('Проверьте почту', {
				description: 'На вашу почту была отправлена ссылка для подтверждения.',
			})
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { reset, isLoadingReset }
}
