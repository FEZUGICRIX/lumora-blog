'use client'

import { LocaleSwitcher } from '@/features/locale-switcher'
import { SearchModal } from '@/features/article/search-posts'
import { useBoolean } from '@/shared/hooks'
import { Modal, ThemeToggle, TooltipWithText } from '@/shared/ui/custom'
import { SearchIcon } from '@/shared/ui/icon'

export const ActionPanel = () => {
	const searchModal = useBoolean()

	return (
		<div className='flex items-center gap-2'>
			<LocaleSwitcher />

			<div onClick={searchModal.setTrue} className='glass-icon'>
				<TooltipWithText text='Search Posts'>
					<SearchIcon />
				</TooltipWithText>
			</div>

			<Modal
				title={
					<span className='text-foreground dark:text-white'>Найти статью</span>
				}
				open={searchModal.value}
				onOpenChange={searchModal.toggle}
			>
				<SearchModal />
			</Modal>

			<ThemeToggle />
		</div>
	)
}
