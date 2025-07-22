import { SidebarMenu } from './SidebarMenu'
import { SocialLinks } from '@/shared/ui/SocialLinks'
import { ActionPanel } from '@/widgets/action-panel'
import { NavLinks } from '@/shared/ui/NavLinks'
import { Divider } from '@/shared/ui/Divider'
import { Logo } from '@/shared/ui/Logo'

export const Header = () => {
	return (
		<header>
			<div className='fixed top-4 left-1/2 z-50 box-border w-full -translate-x-1/2 px-4'>
				<div className='glass dark:glass-dark container mx-auto rounded-3xl px-4 py-3 shadow-md'>
					<div className='flex items-center justify-between'>
						<Logo />

						<div className='hidden w-full justify-between lg:flex'>
							<div className='m-auto'>
								<NavLinks direction='row' />
							</div>

							<div className='hidden items-center gap-4 text-zinc-700 md:flex dark:text-zinc-300'>
								<SocialLinks />
								<Divider orientation='vertical' />
								<ActionPanel />
							</div>
						</div>

						<SidebarMenu />
					</div>
				</div>
			</div>
		</header>
	)
}
