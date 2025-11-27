import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { toastErrorHandler } from '@/shared/lib'

import type { TypeSettingsSchema } from '../schema'
import { updateUserService } from './update-user.service'

export const useUpdateUser = () => {
	const { mutate: update, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update user'],
		mutationFn: (data: TypeSettingsSchema) => updateUserService(data),

		onSuccess() {
			toast.success('Профиль успешно обновлен')
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { update, isLoadingUpdate }
}
