'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { verifyEmailService } from './verify-email.service'

export const useVerifyEmail = () => {
	const router = useRouter()
	const t = useTranslations('common.toasts')

	const { mutate: verifyEmail } = useMutation({
		mutationKey: ['verify email'],
		mutationFn: (token: string) => verifyEmailService({ token }),

		onSuccess() {
			toast.success(t('emailVerified'))
			router.push('/')
		},

		onError() {
			router.push('/auth/login')
		},
	})

	return { verifyEmail }
}
