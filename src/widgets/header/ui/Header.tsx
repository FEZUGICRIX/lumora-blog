'use client'

import { AuthButtons } from '@/entities/auth/ui'
import { useGetProfile } from '@/entities/user/api'
import { UserButton } from '@/entities/user/ui'

import { ActionPanel } from '@/widgets/action-panel'

import { Divider, Logo, NavLinks } from '@/shared/ui/custom'

import { SidebarMenu } from './SidebarMenu'

export const Header = () => {
	const { user, isAuthenticated } = useGetProfile()

	return (
		<header>
			<div className='fixed top-2 left-1/2 z-50 box-border w-full -translate-x-1/2 px-4 sm:top-4'>
				<div className='glass dark:glass-dark container mx-auto rounded-3xl px-4 py-3 shadow-md'>
					<div className='flex items-center justify-between'>
						<Logo />

						<div className='hidden w-full justify-between lg:flex'>
							<div className='m-auto'>
								<NavLinks
									isAuthenticated={isAuthenticated}
									username={user && user.username}
									direction='row'
								/>
							</div>

							<div className='hidden items-center gap-4 text-zinc-700 md:flex dark:text-zinc-300'>
								<ActionPanel />
								<Divider orientation='vertical' />
								{isAuthenticated && user ? (
									<UserButton user={user} />
								) : (
									<AuthButtons showIcons={true} />
								)}
							</div>
						</div>

						<SidebarMenu user={user} isAuthenticated={isAuthenticated} />
					</div>
				</div>
			</div>
		</header>
	)
}
