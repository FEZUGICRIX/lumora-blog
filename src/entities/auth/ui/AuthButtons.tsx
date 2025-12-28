'use client'

import { LogIn, UserPlus } from 'lucide-react'

import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'
import { Button } from '@/shared/ui/ui-kit'

interface AuthButtonsProps {
	className?: string
	showIcons?: boolean
	size?: 'default' | 'sm' | 'lg'
}

export const AuthButtons = ({
	className,
	showIcons = true,
	size = 'sm',
}: AuthButtonsProps) => {
	return (
		<div className={className && className}>
			<div className='flex items-center gap-2'>
				<Button variant='ghost' size={size} asChild>
					<Link href={routes.auth.login} className='gap-1.5'>
						{showIcons && <LogIn className='size-4' />}
						Войти
					</Link>
				</Button>
				<Button size={size} asChild>
					<Link href={routes.auth.register} className='gap-1.5'>
						{showIcons && <UserPlus className='size-4' />}
						Регистрация
					</Link>
				</Button>
			</div>
		</div>
	)
}
