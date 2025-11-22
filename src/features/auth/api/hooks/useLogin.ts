import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { toastErrorHandler, toastMessage } from '@/shared/lib'

import { type TypeLoginSchema } from '../../schema'
import { authLogin } from '../services'

export const useLogin = () => {
	const router = useRouter()

	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login user'],
		mutationFn: ({
			data,
			recaptcha,
		}: {
			data: TypeLoginSchema
			recaptcha: string
		}) => authLogin(data, recaptcha),

		onSuccess(response) {
			if ('message' in response && response.message) {
				toastMessage(response)
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
