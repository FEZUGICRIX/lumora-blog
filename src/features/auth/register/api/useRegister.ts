import { useMutation } from '@tanstack/react-query'

import { toastErrorHandler, toastMessage } from '@/shared/lib'

import { type TypeRegisterSchema } from '../schema'
import { registerService } from './register.service'

export const useRegister = () => {
	const { mutate: register, isPending: isLoadingRegister } = useMutation({
		mutationKey: ['register user'],
		mutationFn: ({
			data,
			recaptcha,
		}: {
			data: TypeRegisterSchema
			recaptcha: string
		}) => registerService(data, recaptcha),

		onSuccess(response) {
			toastMessage(response)
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { register, isLoadingRegister }
}
