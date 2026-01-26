'use client'

import type { JSONContent } from '@tiptap/react'
import { FileText, Pencil, Save, X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Editor, TipTapRenderer } from '@/features/editor/ui'
import { useUpdateUser } from '@/features/user/user-edit'

import { Button } from '@/shared/ui/ui-kit'

interface ProfileReadmeProps {
	username: string
	isOwnProfile: boolean
	contentJson: JSONContent | null
}

export const ProfileReadme = ({
	username,
	isOwnProfile,
	contentJson,
}: ProfileReadmeProps) => {
	const { update, isLoadingUpdate } = useUpdateUser()
	const [draftContent, setDraftContent] = useState(contentJson)
	const [isEditing, setIsEditing] = useState(false)
	const t = useTranslations('widgets.profile.readme')

	// 1. Обработка Сохранения
	const handleSave = useCallback(() => {
		// В TipTap contentJson уже содержит корневой узел doc,
		// но если state был null, пропускаем.
		if (!draftContent) return
		update({ readmeContent: draftContent })
		setIsEditing(false)
	}, [draftContent, update])

	return (
		<div>
			<div className='border-border/50 bg-card/30 mx-4 rounded-xl border md:mx-0 dark:text-white'>
				{/* Header */}
				<div className='border-border/50 flex flex-wrap items-center justify-between gap-5 border-b px-3 py-2.5 md:px-4 md:py-3'>
					<div className='flex items-center gap-2'>
						<FileText className='text-muted-foreground size-3.5 md:size-4' />
						<div className='flex gap-1'>
							<span className='text-muted-foreground block text-xs md:text-sm'>
								{username}
							</span>
							<span className='text-muted-foreground text-xs md:text-sm'>
								/
							</span>
							<span className='text-xs font-medium md:text-sm'>README.md</span>
						</div>
					</div>

					{/* Правая часть: Кнопки (Рендер только для владельца профиля) */}
					{isOwnProfile && (
						<div className='flex gap-2'>
							{/* Режим Редактирования (Save & Cancel) */}
							{isEditing ? (
								<>
									<Button
										onClick={() => setIsEditing(false)}
										variant='ghost'
										size='sm'
										disabled={isLoadingUpdate}
										className='md:h-10 md:px-4 md:py-2 md:text-sm'
									>
										<X className='mr-2 size-4' /> {t('cancel')}
									</Button>
									<Button
										onClick={handleSave}
										size='sm'
										disabled={isLoadingUpdate}
										className='md:h-10 md:px-4 md:py-2 md:text-sm'
									>
										<Save className='mr-2 size-4' /> {t('save')}
									</Button>
								</>
							) : (
								/* Режим Просмотра (Edit) */
								<Button
									className='md:h-10 md:px-4 md:py-2 md:text-sm'
									onClick={() => {
										setIsEditing(true)
									}}
								>
									<Pencil className='mr-2 size-4' /> {t('edit')}
								</Button>
							)}
						</div>
					)}
				</div>

				{!isEditing && (
					<>
						{/* Content */}
						<div className='p-4 md:p-6'>
							<TipTapRenderer
								contentJson={draftContent}
								className='prose-headings:mt-4 prose-headings:mb-2 prose-p:my-2 prose-sm md:prose-base'
							/>
						</div>
					</>
				)}

				{isEditing && (
					<Editor
						content={draftContent}
						onChange={value => setDraftContent(value)}
					/>
				)}
			</div>
		</div>
	)
}
