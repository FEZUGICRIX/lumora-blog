'use client'

import { Edit2, LogOut, PenLine, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useLogout } from '@/features/auth/logout'

import { UserAvatar } from '@/entities/user/ui'

import type {
	UserProfile,
	UserPublicProfile,
} from '@/shared/api/graphql/__generated__/documents'
import { routes } from '@/shared/config/routes'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	Skeleton,
} from '@/shared/ui/ui-kit'

interface UserButtonProps {
	user: UserPublicProfile | UserProfile
}

export const UserButton = ({ user }: UserButtonProps) => {
	const { logout, isLoadingLogout } = useLogout()
	const router = useRouter()

	if (!user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex size-9 items-center justify-center rounded-full border'>
				<UserAvatar avatarUrl={user.avatarUrl} displayName={user.displayName} />
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					onClick={() => router.push(routes.profile(user.username))}
					disabled={isLoadingLogout}
				>
					<User className='mr-2 size-4' />
					Профиль
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => router.push(routes.profileEdit)}
					disabled={isLoadingLogout}
				>
					<Edit2 className='mr-2 size-4' />
					Редактировать профиль
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => router.push(routes.editor.new)}
					disabled={isLoadingLogout}
				>
					<PenLine className='mr-2 size-4' />
					Создать статью
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => logout()}
					disabled={isLoadingLogout}
					className='text-red-600 focus:text-red-600'
				>
					<LogOut className='mr-2 size-4' />
					Выйти
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export const UserButtonSkeleton = () => (
	<Skeleton className='h-10 w-10 rounded-full' />
)
