import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import type { TypeSettingsSchema } from '@/features/user'

import { toastErrorHandler } from '@/shared/lib'

import { updateUser } from '../services'

export const useUpdateUser = () => {
	const { mutate: update, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update user'],
		mutationFn: (data: TypeSettingsSchema) => updateUser(data),

		onSuccess() {
			toast.success('Профиль успешно обновлен')
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { update, isLoadingUpdate }
}
