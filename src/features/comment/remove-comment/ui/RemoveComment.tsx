import { Trash2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface RemoveCommentProps {
	onDelete: () => void
}

export const RemoveComment = ({ onDelete }: RemoveCommentProps) => {
	const t = useTranslations('entities.category.comment')

	return (
		<button
			className='flex items-center gap-1 transition hover:text-red-500'
			onClick={onDelete}
		>
			<Trash2 className='h-4 w-4' />
			{t('delete')}
		</button>
	)
}
