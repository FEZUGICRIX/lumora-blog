import type { PropsWithChildren } from 'react'

import { Link } from '@/shared/config/i18n'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/ui-kit'

import { AuthSocial } from './AuthSocial'

interface AuthWrapperProps {
	title: string
	description?: string
	backButtonLabel?: string
	backButtonHref?: string
	isShowSocial?: boolean
}

export const AuthWrapper = ({
	children,
	title,
	description,
	backButtonLabel,
	backButtonHref,
	isShowSocial = false,
}: PropsWithChildren<AuthWrapperProps>) => {
	return (
		<Card className='w-[400px]'>
			<CardHeader>
				<CardTitle>
					<div className='text-center'>{title}</div>
				</CardTitle>
				{description && (
					<CardDescription>
						{' '}
						<div className='text-center'>{description}</div>
					</CardDescription>
				)}
			</CardHeader>

			<CardContent>
				{isShowSocial && <AuthSocial />}
				{children}
			</CardContent>

			<CardFooter>
				{backButtonLabel && backButtonHref && (
					<Link href={backButtonHref}>{backButtonLabel}</Link>
				)}
			</CardFooter>
		</Card>
	)
}
