'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { routes } from '@/shared/config/routes'
import { toastErrorHandler } from '@/shared/lib'

import { logoutService } from './logout.service'

export const useLogout = () => {
	const router = useRouter()

	const { mutate: logout, isPending: isLoadingLogout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => logoutService(),

		onSuccess() {
			toast.success('Вы успешно вышли из системы')
			router.push(routes.auth.login)
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { logout, isLoadingLogout }
}
