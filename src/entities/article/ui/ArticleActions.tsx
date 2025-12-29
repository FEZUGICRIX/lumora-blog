'use client'

import { Check, Copy, Edit, MoreHorizontal, Share2, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/ui-kit'

interface ArticleActionsProps {
	articleSlug: string
	variant?: 'full' | 'compact'
	onDelete?: (e: React.MouseEvent) => void
	className?: string
}

export const ArticleActions = ({
	articleSlug,
	onDelete,
	variant = 'full',
	className,
}: ArticleActionsProps) => {
	const [copied, setCopied] = useState(false)

	const handleCopyLink = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()

		const url = `${window.location.origin}/blog/${articleSlug}`
		navigator.clipboard.writeText(url)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	const handleShare = async (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()

		const url = `${window.location.origin}/blog/${articleSlug}`
		if (navigator.share) {
			await navigator.share({
				title: 'Статья',
				url,
			})
		} else {
			handleCopyLink(e)
		}
	}

	return (
		<div className={className}>
			<div className='flex items-center gap-2'>
				{/* Edit button */}
				{variant === 'full' && (
					<Button variant='outline' size='sm' asChild className='gap-1.5'>
						<Link href={routes.editor.editArticle(articleSlug)}>
							<Edit className='size-4' />
							<span className='hidden sm:inline'>Редактировать</span>
						</Link>
					</Button>
				)}

				{/* More actions dropdown */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' size='icon' className='glass-dark size-8'>
							<MoreHorizontal className='size-4 text-white mix-blend-difference' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end' className='w-48'>
						{variant === 'compact' && (
							<DropdownMenuItem asChild className='gap-2'>
								<Link href={`/editor/${articleSlug}`}>
									<Edit className='size-4' />
									Редактировать
								</Link>
							</DropdownMenuItem>
						)}

						<DropdownMenuItem onClick={handleShare} className='gap-2'>
							<Share2 className='size-4' />
							Поделиться
						</DropdownMenuItem>
						<DropdownMenuItem onClick={handleCopyLink} className='gap-2'>
							{copied ? (
								<Check className='size-4 text-emerald-500' />
							) : (
								<Copy className='size-4' />
							)}
							{copied ? 'Скопировано!' : 'Копировать ссылку'}
						</DropdownMenuItem>

						<DropdownMenuSeparator />

						<DropdownMenuItem
							onClick={onDelete}
							className='text-destructive focus:text-destructive gap-2'
						>
							<Trash2 className='size-4' />
							Удалить статью
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
