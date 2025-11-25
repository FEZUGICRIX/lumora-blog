'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import type { Dispatch, SetStateAction } from 'react'

import { toastErrorHandler, toastMessage } from '@/shared/lib'

import { type TypeLoginSchema } from '../schema'
import { loginService } from './login.service'

export const useLogin = (
	setIsShowTwoFactor: Dispatch<SetStateAction<boolean>>,
) => {
	const router = useRouter()

	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login user'],
		mutationFn: ({
			data,
			recaptcha,
		}: {
			data: TypeLoginSchema
			recaptcha: string
		}) => loginService(data, recaptcha),

		onSuccess(response) {
			if ('message' in response && response.message) {
				toastMessage(response)
				setIsShowTwoFactor(true)
			} else {
				toastMessage({
					message: 'Вы успешно вошли в аккаунт!',
					type: 'success',
				})
				router.push('/dashboard/settings') // TODO: поменять на router из config
			}
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { login, isLoadingLogin }
}
