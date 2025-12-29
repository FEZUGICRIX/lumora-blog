'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { AuthWrapper } from '@/entities/auth/ui'

import { Spinner } from '@/shared/ui/ui-kit'

import { useVerifyEmail } from '../api'

export const VerifyEmail = () => {
	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const { verifyEmail } = useVerifyEmail()

	useEffect(() => {
		if (token) verifyEmail(token)
	}, [token, verifyEmail])

	return (
		<AuthWrapper title='Подтверждение почты'>
			<div className='flex justify-center'>
				<Spinner />
			</div>
		</AuthWrapper>
	)
}
