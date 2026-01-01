'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { routes } from '@/shared/config/routes'
import { toastErrorHandler } from '@/shared/lib'

import type { TypeNewPasswordSchema } from '../schema'
import { newPasswordService } from './new-password.service'

export const useNewPassword = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const t = useTranslations('common.toasts')

	const token = searchParams.get('token')

	const { mutate: newPassword, isPending: isLoadingNew } = useMutation({
		mutationKey: ['new password'],
		mutationFn: ({
			data,
			recaptcha,
		}: {
			data: TypeNewPasswordSchema
			recaptcha: string
		}) => {
			if (!token) throw new Error('Token missing')
			return newPasswordService({ token, ...data }, recaptcha)
		},

		onSuccess() {
			toast.success(t('passwordChanged'), {
				description: t('passwordChangedDescription'),
			})

			router.push(routes.auth.login)
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { newPassword, isLoadingNew }
}
