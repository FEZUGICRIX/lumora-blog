'use client'

import { Camera } from 'lucide-react'
import React, { useRef, useState } from 'react'
// 💡 Добавляем useState
import { useFormContext } from 'react-hook-form'

import { useUploadFile } from '@/entities/upload/api'

import { Input, Spinner } from '@/shared/ui/ui-kit'

// 💡 Импортируем Spinner

export const ProfileImagesSection = () => {
	const { register, watch, formState, setValue } = useFormContext()
	const { uploadFile } = useUploadFile()

	// 1. Локальное состояние для отслеживания загрузки
	const [isUploadingCover, setIsUploadingCover] = useState(false)
	const [isUploadingAvatar, setIsUploadingAvatar] = useState(false)

	const coverInputRef = useRef<HTMLInputElement>(null)
	const avatarInputRef = useRef<HTMLInputElement>(null)

	const coverUrl = watch('coverUrl')
	const avatarUrl = watch('avatarUrl')
	const { errors } = formState

	/**
	 * Общий обработчик клика, который вызывает клик на скрытом инпуте
	 */
	const handleImageClick = (ref: React.RefObject<HTMLInputElement | null>) => {
		ref.current?.click()
	}

	/**
	 * Обработчик выбора файла обложки
	 */
	const handleCoverChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = event.target.files?.[0]

		if (file) {
			const localPreviewUrl = URL.createObjectURL(file)

			// 1. Начинаем загрузку и показываем превью
			setValue('coverUrl', localPreviewUrl, { shouldValidate: false })
			setIsUploadingCover(true) // 💡 Включаем индикатор

			try {
				const uploadedUrl = await uploadFile({ file })

				// 2. Успех: Заменяем локальный URL на постоянный URL с сервера
				setValue('coverUrl', uploadedUrl, {
					shouldValidate: true,
					shouldDirty: true,
				})
			} catch (error) {
				// 3. Ошибка: Сбрасываем URL к исходному значению (или null)
				setValue('coverUrl', watch('coverUrl', ''), { shouldValidate: false })
				console.error(error)
			} finally {
				// 4. Завершение: Выключаем индикатор и очищаем
				setIsUploadingCover(false) // 💡 Выключаем индикатор
				URL.revokeObjectURL(localPreviewUrl)
				event.target.value = ''
			}
		}
	}

	/**
	 * Обработчик выбора файла аватара
	 */
	const handleAvatarChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = event.target.files?.[0]

		if (file) {
			const localPreviewUrl = URL.createObjectURL(file)
			setValue('avatarUrl', localPreviewUrl, { shouldValidate: false })
			setIsUploadingAvatar(true) // 💡 Включаем индикатор

			try {
				const uploadedUrl = await uploadFile({ file })

				// 2. Успех
				setValue('avatarUrl', uploadedUrl, {
					shouldValidate: true,
					shouldDirty: true,
				})
			} catch (error) {
				setValue('avatarUrl', watch('avatarUrl', ''), {
					shouldValidate: false,
				})
				console.error(error)
			} finally {
				// 3. Завершение
				setIsUploadingAvatar(false) // 💡 Выключаем индикатор
				URL.revokeObjectURL(localPreviewUrl)
				event.target.value = ''
			}
		}
	}

	// 💡 Функция, которая решает, отображать ли кнопку или спиннер
	const renderOverlayContent = (isUploading: boolean) => (
		<div
			className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity ${
				isUploading ? 'opacity-100' : 'opacity-0 group-hover:opacity-100' // 💡 Постоянный оверлей при загрузке
			}`}
		>
			{isUploading ? (
				<Spinner className='text-white' /> // 💡 Отображаем спиннер
			) : (
				<Camera className='size-6 text-white' />
			)}
		</div>
	)

	return (
		<div className='border-border/50 bg-card/30 rounded-2xl border p-6'>
			<h2 className='mb-6 text-lg font-semibold'>Изображения профиля</h2>

			{/* Cover Image */}
			<div className='mb-6'>
				<label className='mb-2 block text-sm font-medium'>Обложка</label>

				{/* 1. Блок, по которому происходит клик */}
				<div
					// 💡 Блокируем клик, пока идет загрузка
					className={`group border-border/50 bg-card/50 relative mb-3 flex h-52 items-center justify-center overflow-hidden rounded-xl border transition-colors ${
						isUploadingCover
							? 'border-primary/50 cursor-not-allowed'
							: 'hover:border-border cursor-pointer'
					}`}
					onClick={
						isUploadingCover ? undefined : () => handleImageClick(coverInputRef)
					}
				>
					{coverUrl && (
						<img
							src={coverUrl}
							alt='Cover preview'
							className={`h-full w-full object-cover ${
								isUploadingCover ? 'opacity-50' : ''
							}`} // Уменьшаем прозрачность при загрузке
						/>
					)}
					{renderOverlayContent(isUploadingCover)}
				</div>

				{/* 2. Скрытый инпут для выбора файла */}
				<input
					type='file'
					ref={coverInputRef}
					onChange={handleCoverChange}
					className='hidden'
					accept='image/*'
				/>

				<div>
					<label className='text-muted-foreground mb-1.5 block text-xs'>
						URL обложки
					</label>
					<Input
						id='coverUrlInput'
						placeholder='https://example.com/cover.jpg'
						{...register('coverUrl')}
						disabled={isUploadingCover} // Блокируем ручной ввод
					/>

					{errors.coverUrl && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.coverUrl.message as string}
						</p>
					)}
				</div>
			</div>

			{/* Avatar */}
			<div className='flex items-start gap-4'>
				{/* 1. Блок, по которому происходит клик */}
				<div
					className={`group border-border/50 relative size-20 shrink-0 overflow-hidden rounded-xl border ${
						isUploadingAvatar
							? 'border-primary/50 cursor-not-allowed'
							: 'cursor-pointer'
					}`}
					onClick={
						isUploadingAvatar
							? undefined
							: () => handleImageClick(avatarInputRef)
					}
				>
					{avatarUrl ? (
						<img
							src={avatarUrl}
							alt='Avatar preview'
							className={`h-full w-full object-cover ${
								isUploadingAvatar ? 'opacity-50' : ''
							}`}
						/>
					) : (
						<div className='bg-card/50 flex size-full items-center justify-center'>
							<Camera className='text-muted-foreground size-5' />
						</div>
					)}
					<div
						className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity ${
							isUploadingAvatar
								? 'opacity-100'
								: 'opacity-0 group-hover:opacity-100'
						}`}
					>
						{isUploadingAvatar ? (
							<Spinner className='text-white' />
						) : (
							<Camera className='size-5 text-white' />
						)}
					</div>
				</div>

				{/* 2. Скрытый инпут для выбора файла */}
				<input
					type='file'
					ref={avatarInputRef}
					onChange={handleAvatarChange}
					className='hidden'
					accept='image/*'
				/>

				<div className='flex-1'>
					<label className='mb-1 block text-sm font-medium'>URL аватара</label>
					<p className='text-muted-foreground mb-2 text-xs'>
						Рекомендуем изображение минимум 400x400px
					</p>
					<Input
						{...register('avatarUrl')}
						placeholder='https://example.com/avatar.jpg'
						disabled={isUploadingAvatar} // 💡 Блокируем ручной ввод
					/>

					{errors.avatarUrl && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.avatarUrl.message as string}
						</p>
					)}
				</div>
			</div>
		</div>
	)
}
