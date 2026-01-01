'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from '@/shared/ui/ui-kit'
import { AlertCircle } from 'lucide-react'

export const ArticleError = () => {
	const router = useRouter()
	const t = useTranslations('widgets.articleList')

	const onRetry = () => {
		router.refresh()
	}

	return (
		<div className='mt-10 flex flex-col items-center justify-center py-12 text-center'>
			<AlertCircle className='mb-4 h-10 w-10 text-red-500 dark:text-white' />
			<h3 className='text-lg font-semibold dark:text-white'>
				{t('loadError')}
			</h3>
			<p className='text-muted-foreground mb-4 text-sm dark:text-shadow-gray-300'>
				{t('loadErrorDescription')}
			</p>
			<Button variant='outline' onClick={onRetry} className='dark:text-white'>
				{t('retry')}
			</Button>
		</div>
	)
}
