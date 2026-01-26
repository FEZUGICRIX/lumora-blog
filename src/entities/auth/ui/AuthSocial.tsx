'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import { Divider } from '@/shared/ui/custom'
import { GithubIcon, GoogleIcon } from '@/shared/ui/icon'
import { Button } from '@/shared/ui/ui-kit'

import { useGetOAuthConnectUrl } from '../../../features/auth/oauth-connect'
import type { OAuthProvider } from '../types'

export const AuthSocial = () => {
	const t = useTranslations('entities.auth.social')
	const router = useRouter()

	const { mutateAsync } = useGetOAuthConnectUrl()

	const onClick = async (provider: OAuthProvider) => {
		const response = await mutateAsync(provider)

		if (response) {
			router.push(response.url)
		}
	}

	return (
		<div className='flex flex-col'>
			<div className='grid w-full grid-cols-2 gap-3'>
				<Button onClick={() => onClick('google')} className='w-full'>
					<GoogleIcon />
					{t('google')}
				</Button>

				<Button onClick={() => onClick('github')} disabled className='w-full'>
					<GithubIcon className='rounded-4xl text-white dark:text-black' />
					{t('github')}
				</Button>
			</div>

			<Divider label={t('divider')} />
		</div>
	)
}
