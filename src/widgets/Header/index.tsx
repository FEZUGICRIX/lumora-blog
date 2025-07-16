import { BurgerMenuIcon, SearchIcon } from '@/shared/ui/icon'
import { TooltipWithText } from '@/shared/ui/TooltipWithText'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { SocialLinks } from '@/shared/ui/SocialLinks'
import { NavLinks } from '@/shared/ui/NavLinks'
import { Button } from '@/shared/ui/ui-kit/button'
import { Logo } from '@/shared/ui/Logo'

const Header = () => {
	return (
		<header>
			<div className='fixed top-4 left-1/2 z-50 w-full -translate-x-1/2 px-4'>
				<div className='glass dark:glass-dark mx-auto max-w-7xl rounded-3xl px-6 py-3'>
					<div className='flex items-center justify-between'>
						<Logo />

						<NavLinks />

						{/* Icons */}
						<div className='ml-6 hidden items-center gap-4 text-zinc-700 md:flex dark:text-zinc-300'>
							<SocialLinks />

							<div className='mx-1 h-6 w-px bg-zinc-300/40 dark:bg-zinc-600/40' />

							<div className='flex items-center gap-2'>
								<div className='glass-icon'>
									<TooltipWithText text='Search Posts'>
										<SearchIcon />
									</TooltipWithText>
								</div>
								<ThemeToggle />
							</div>
						</div>

						{/* Mobile Menu Button */}
						<div className='md:hidden'>
							<Button className='bg-transparent p-0 hover:bg-transparent'>
								<BurgerMenuIcon />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
