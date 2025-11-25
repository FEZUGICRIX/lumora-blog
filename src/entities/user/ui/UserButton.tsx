import { LucideLogOut } from 'lucide-react'

import { useLogout } from '@/features/auth/logout'

import type { User } from '@/shared/api/graphql/__generated__/documents'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	Skeleton,
} from '@/shared/ui/ui-kit'

interface UserButtonProps {
	user: User
}

export const UserButton = ({ user }: UserButtonProps) => {
	const { logout, isLoadingLogout } = useLogout()

	if (!user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{/* TODO: Вынести это в базовый компонент */}
				<Avatar>
					<AvatarImage src={user.avatar ?? undefined} />
					<AvatarFallback>
						{user.displayName?.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>

			<DropdownMenuContent className='w-40' align='end'>
				<DropdownMenuItem onClick={() => logout()} disabled={isLoadingLogout}>
					<LucideLogOut className='mr-2 size-4' />
					Выйти
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export const UserButtonSkeleton = () => {
	return <Skeleton className='h-10 w-10 rounded-full' />
}
