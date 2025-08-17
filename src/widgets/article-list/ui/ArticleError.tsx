'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui/ui-kit/button'
import { AlertCircle } from 'lucide-react'

export const ArticleError = () => {
	const router = useRouter()

	const onRetry = () => {
		router.refresh()
	}

	return (
		<div className='mt-10 flex flex-col items-center justify-center py-12 text-center'>
			<AlertCircle className='mb-4 h-10 w-10 text-red-500 dark:text-white' />
			<h3 className='text-lg font-semibold dark:text-white'>
				Не удалось загрузить статьи
			</h3>
			<p className='text-muted-foreground mb-4 text-sm dark:text-shadow-gray-300'>
				Попробуйте обновить страницу или повторить попытку позже.
			</p>
			<Button variant='outline' onClick={onRetry} className='dark:text-white'>
				Повторить
			</Button>
		</div>
	)
}
