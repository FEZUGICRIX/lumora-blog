import { ActionPanel } from '@/widgets/action-panel'

import {
	CustomSheet,
	Divider,
	Logo,
	NavLinks,
	SocialLinks,
} from '@/shared/ui/custom'
import { BurgerMenuIcon } from '@/shared/ui/icon'
import { Button, SheetClose } from '@/shared/ui/ui-kit'

export const SidebarMenu = () => {
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
				<div className='flex h-full flex-col'>
					<div className='mx-auto mb-4'>
						<ActionPanel />
					</div>

					<div className='mt-5'>
						<NavLinks direction='col' withSheetClose />
					</div>

					<div className='mt-auto p-4'>
						<Divider label='Social Links' />
						<div className='flex justify-center'>
							<SocialLinks />
						</div>
					</div>
				</div>
			</CustomSheet>
		</div>
	)
}
