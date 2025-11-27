'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { verifyEmailService } from './verify-email.service'

export const useVerifyEmail = () => {
	const router = useRouter()

	const { mutate: verifyEmail } = useMutation({
		mutationKey: ['verify email'],
		mutationFn: (token: string) => verifyEmailService({ token }),

		onSuccess() {
			toast.success('Почта успешно подтверждена!')
			router.push('/dashboard/settings')
		},

		onError() {
			router.push('/auth/login')
		},
	})

	return { verifyEmail }
}
