'use client'

import { Camera } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { Input } from '@/shared/ui/ui-kit'

export const ProfileImagesSection = () => {
	const { register, watch, formState } = useFormContext()

	// Наблюдаем за текущими значениями для превью
	const coverUrl = watch('coverUrl')
	const avatarUrl = watch('avatarUrl')
	const { errors } = formState

	return (
		<div className='border-border/50 bg-card/30 rounded-2xl border p-6'>
			<h2 className='mb-6 text-lg font-semibold'>Изображения профиля</h2>

			{/* Cover Image */}
			<div className='mb-6'>
				<label className='mb-2 block text-sm font-medium'>Обложка</label>
				<div className='group border-border/50 bg-card/50 hover:border-border relative mb-3 flex h-32 cursor-pointer items-center justify-center overflow-hidden rounded-xl border transition-colors'>
					{coverUrl && (
						<img
							src={!errors.coverUrl && coverUrl}
							alt='Cover preview'
							className='h-full w-full object-cover'
						/>
					)}
					<div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100'>
						<Camera className='size-6 text-white' />
					</div>
				</div>

				<div>
					<label className='text-muted-foreground mb-1.5 block text-xs'>
						URL обложки
					</label>
					<Input
						id='coverUrlInput'
						placeholder='https://example.com/cover.jpg'
						{...register('coverUrl')}
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
				<div className='group border-border/50 relative size-20 shrink-0 cursor-pointer overflow-hidden rounded-xl border'>
					{avatarUrl ? (
						<img
							src={avatarUrl}
							alt='Avatar preview'
							className='h-full w-full object-cover'
						/>
					) : (
						<div className='bg-card/50 flex size-full items-center justify-center'>
							<Camera className='text-muted-foreground size-5' />
						</div>
					)}
					<div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100'>
						<Camera className='size-5 text-white' />
					</div>
				</div>
				<div className='flex-1'>
					<label className='mb-1 block text-sm font-medium'>URL аватара</label>
					<p className='text-muted-foreground mb-2 text-xs'>
						Рекомендуем изображение минимум 400x400px
					</p>
					<Input
						// 2. Привязка поля через register
						{...register('avatarUrl')}
						placeholder='https://example.com/avatar.jpg'
					/>

					{/* 3. Отображение ошибки */}
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
