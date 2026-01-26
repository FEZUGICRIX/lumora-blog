import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { toastErrorHandler } from '@/shared/lib'

import { type TypePasswordRecoverySchema } from '../schema'
import { passwordRecoveryService } from './password-recovery.service'

export const usePasswordRecovery = () => {
	const t = useTranslations('common.toasts')

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
			toast.success(t('checkEmail'), {
				description: t('checkEmailDescription'),
			})
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { reset, isLoadingReset }
}
