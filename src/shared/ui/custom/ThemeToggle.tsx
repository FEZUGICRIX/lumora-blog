'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { TooltipWithText } from './TooltipWithText'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const tCommon = useTranslations('common')

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null // Prevents hydration mismatch

	return (
		<button
			className='glass-icon'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			<TooltipWithText text={tCommon('switchTheme')}>
				{theme === 'dark' ? (
					<Sun className='h-5 w-5 dark:text-white' />
				) : (
					<Moon className='h-5 w-5' />
				)}
			</TooltipWithText>
		</button>
	)
}
