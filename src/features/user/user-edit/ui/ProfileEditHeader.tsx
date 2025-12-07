'use client'

import { ArrowLeft, Check } from 'lucide-react'

import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'
import { Button } from '@/shared/ui/ui-kit'

interface ProfileEditHeaderProps {
	username: string
	isButtonCancelDisabled: boolean
	isButtonSaveDisabled: boolean
}

export const ProfileEditHeader = ({
	username,
	isButtonCancelDisabled,
	isButtonSaveDisabled,
}: ProfileEditHeaderProps) => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-3'>
				<Link
					href={routes.profile(username)}
					className='hover:bg-accent flex size-9 items-center justify-center rounded-full transition-colors'
				>
					<ArrowLeft className='size-5' />
				</Link>
				<h1 className='text-xl font-semibold'>Редактирование профиля</h1>
			</div>

			<div className='flex items-center gap-2'>
				<Button variant='ghost' disabled={isButtonCancelDisabled}>
					<Link
						href={routes.profile(username)}
						className='hover:bg-accent flex size-9 items-center justify-center rounded-full transition-colors'
					>
						Отмена
					</Link>
				</Button>
				<Button
					type='submit'
					disabled={isButtonSaveDisabled}
					className='gap-1.5'
				>
					<Check className='size-4' />
					Сохранить
				</Button>
			</div>
		</div>
	)
}
