import { useTranslations } from 'next-intl'

import { AuthButtons } from '@/entities/auth/ui'
import { UserButton } from '@/entities/user/ui'

import { ActionPanel } from '@/widgets/action-panel'

import type { UserProfile } from '@/shared/api/graphql/__generated__/documents'
import {
	CustomSheet,
	Divider,
	Logo,
	NavLinks,
	SocialLinks,
} from '@/shared/ui/custom'
import { BurgerMenuIcon } from '@/shared/ui/icon'
import { Button, SheetClose } from '@/shared/ui/ui-kit'

interface SidebarMenuProps {
	user?: UserProfile
	isAuthenticated: boolean
}

export const SidebarMenu = ({ user, isAuthenticated }: SidebarMenuProps) => {
	const t = useTranslations('common')

	return (
		<div className='lg:hidden'>
			<CustomSheet
				trigger={
					<Button className='bg-transparent p-0 hover:bg-transparent'>
						<BurgerMenuIcon />
					</Button>
				}
				title={
					<SheetClose asChild>
						<Logo />
					</SheetClose>
				}
			>
				<div className='flex h-full flex-col gap-4'>
					<div className='mb-2 flex items-center justify-center gap-4 text-zinc-700 dark:text-zinc-300'>
						{isAuthenticated && user ? (
							<UserButton user={user} />
						) : (
							<AuthButtons showIcons={true} />
						)}
					</div>

					<div className='mx-auto mb-4'>
						<ActionPanel />
					</div>

					<div className='mt-5'>
						<NavLinks direction='col' withSheetClose />
					</div>

					<div className='mt-auto p-4'>
						<Divider label={t('socialLinks')} />
						<div className='flex justify-center'>
							<SocialLinks />
						</div>
					</div>
				</div>
			</CustomSheet>
		</div>
	)
}
