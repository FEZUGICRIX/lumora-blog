import { ActionPanel } from '@/widgets/action-panel'
import { CustomSheet } from '@/shared/ui/CustomSheet'
import { Button } from '@/shared/ui/ui-kit/button'
import { BurgerMenuIcon } from '@/shared/ui/icon'
import { NavLinks } from '@/shared/ui/NavLinks'
import { SocialLinks } from '@/shared/ui/SocialLinks'
import { Divider } from '@/shared/ui/Divider'
import { Logo } from '@/shared/ui/Logo'

export const SidebarMenu = () => {
	return (
		<div className='lg:hidden'>
			<CustomSheet
				trigger={
					<Button className='bg-transparent p-0 hover:bg-transparent'>
						<BurgerMenuIcon />
					</Button>
				}
				title={<Logo />}
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
