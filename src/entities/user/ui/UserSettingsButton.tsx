import { LucideLogOut, MoreHorizontal } from 'lucide-react'

import { useLogout } from '@/features/auth/logout'

import type { UserPublicProfile } from '@/shared/api/graphql/__generated__/documents'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	Skeleton,
} from '@/shared/ui/ui-kit'

interface UserSettingsButtonProps {
	user: UserPublicProfile
}

export const UserSettingsButton = ({ user }: UserSettingsButtonProps) => {
	const { logout, isLoadingLogout } = useLogout()

	if (!user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex size-9 items-center justify-center rounded-full border'>
				<MoreHorizontal className='size-4' />
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

export const UserSettingsButtonSkeleton = () => {
	return <Skeleton className='h-10 w-10 rounded-full' />
}
