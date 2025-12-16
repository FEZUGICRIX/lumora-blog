import { useState } from 'react'

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

	const isDisabled = value.trim().length === 0 || value.trim() === initialValue

	return (
		<form className='space-y-3'>
			<Textarea
				autoFocus
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder='Edit your comment...'
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
					Save
				</Button>

				<Button size='sm' variant='ghost' onClick={onCancel}>
					Cancel
				</Button>
			</div>
		</form>
	)
}
