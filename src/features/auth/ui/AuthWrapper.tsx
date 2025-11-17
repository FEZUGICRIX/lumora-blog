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
				<CardTitle>{title}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
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
