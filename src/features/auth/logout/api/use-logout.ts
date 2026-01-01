'use client'

import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { routes } from '@/shared/config/routes'
import { toastErrorHandler } from '@/shared/lib'

import { logoutService } from './logout.service'

export const useLogout = () => {
	const t = useTranslations('common.toasts')

	const { mutate: logout, isPending: isLoadingLogout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => logoutService(),

		onSuccess() {
			toast.success(t('loggedOut'))
			// Полная перезагрузка страницы и переход на страницу логина
			window.location.href = routes.auth.login
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { logout, isLoadingLogout }
}
