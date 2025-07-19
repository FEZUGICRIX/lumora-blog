import { TooltipWithText } from '@/shared/ui/TooltipWithText'
import { LocaleSwitcher } from '@/features/locale-switcher'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { SearchIcon } from '@/shared/ui/icon'

export const ActionPanel = () => {
	return (
		<div className='flex items-center gap-2'>
			<LocaleSwitcher />

			<div className='glass-icon'>
				<TooltipWithText text='Search Posts'>
					<SearchIcon />
				</TooltipWithText>
			</div>
			<ThemeToggle />
		</div>
	)
}
