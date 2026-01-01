'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import type { UpdateUserMutationVariables } from '@/shared/api/graphql/__generated__/documents'
import { routes } from '@/shared/config/routes'
import { toastErrorHandler } from '@/shared/lib'

import { updateUserService } from './update-user.service'

export const useUpdateUser = () => {
	const router = useRouter()
	const t = useTranslations('common.toasts')

	const { mutate: update, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update user'],
		mutationFn: (data: UpdateUserMutationVariables) => updateUserService(data),

		onSuccess(data) {
			const { username } = data

			router.push(routes.profile(username))
			toast.success(t('profileUpdated'))
		},

		onError(error) {
			toastErrorHandler(error)
		},
	})

	return { update, isLoadingUpdate }
}
