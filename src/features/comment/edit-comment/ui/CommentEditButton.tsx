import { Edit2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface CommentEditButtonProps {
	setIsEditing: (value: boolean) => void
}

export const CommentEditButton = ({ setIsEditing }: CommentEditButtonProps) => {
	const t = useTranslations('entities.category.comment')

	return (
		<button
			onClick={() => setIsEditing(true)}
			className='flex items-center gap-1 transition hover:text-zinc-900 dark:hover:text-zinc-100'
		>
			<Edit2 className='h-4 w-4' />
			{t('edit')}
		</button>
	)
}
