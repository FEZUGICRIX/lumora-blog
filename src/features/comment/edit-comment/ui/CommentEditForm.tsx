import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Button, Textarea } from '@/shared/ui/ui-kit'

interface CommentEditFormProps {
	initialValue: string
	onCancel: () => void
	onSubmit: (value: string) => void
}

export const CommentEditForm = ({
	initialValue,
	onCancel,
	onSubmit,
}: CommentEditFormProps) => {
	const [value, setValue] = useState(initialValue)
	const t = useTranslations('entities.category.comment')

	const isDisabled = value.trim().length === 0 || value.trim() === initialValue

	return (
		<form className='mb-4 space-y-3'>
			<Textarea
				autoFocus
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder={t('placeholder')}
				onKeyDown={e => {
					if (e.key === 'Enter' && !e.shiftKey) {
						e.preventDefault()
						onSubmit(value.trim())
					}
				}}
			/>

			<div className='flex items-center gap-2'>
				<Button
					size='sm'
					type='submit'
					disabled={isDisabled}
					onClick={() => onSubmit(value.trim())}
				>
					{t('save')}
				</Button>

				<Button size='sm' variant='ghost' onClick={onCancel}>
					{t('cancel')}
				</Button>
			</div>
		</form>
	)
}
