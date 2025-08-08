'use client'

import { SearchModal } from '@/features/search-posts'
import { LocaleSwitcher } from '@/features/locale-switcher'
import { useBoolean } from '@/shared/hooks/useBoolean'
import { TooltipWithText } from '@/shared/ui/TooltipWithText'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { SearchIcon } from '@/shared/ui/icon'
import { Modal } from '@/shared/ui/Modal'

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
				title='Найти статью'
				open={searchModal.value}
				onOpenChange={searchModal.toggle}
			>
				<SearchModal />
			</Modal>

			<ThemeToggle />
		</div>
	)
}
