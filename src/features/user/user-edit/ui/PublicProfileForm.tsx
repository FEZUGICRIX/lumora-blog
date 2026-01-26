'use client'

import { Link as LinkIcon, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'

import { Input, Textarea } from '@/shared/ui/ui-kit'

export const PublicProfileForm = () => {
	// 1. Получаем методы регистрации и ошибок из контекста, созданного ProfileEditForm
	const {
		register,
		formState: { errors },
	} = useFormContext()
	const t = useTranslations('entities.user.edit.publicProfile')
	const tCommon = useTranslations('common.placeholders')

	return (
		<div className='border-border/50 bg-card/30 rounded-2xl border p-6'>
			<h2 className='mb-6 text-lg font-semibold'>{t('title')}</h2>

			{/* Name & Username row */}
			<div className='mb-5 grid gap-4 md:grid-cols-2'>
				<div>
					<label className='mb-1.5 block text-sm font-medium'>
						{t('displayName')}
					</label>
					<Input {...register('displayName')} placeholder={tCommon('displayName')} />
					{/* 3. Отображение ошибки (строго типизированная ошибка) */}
					{errors.displayName && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.displayName.message as string}
						</p>
					)}
				</div>

				<div>
					<label className='mb-1.5 block text-sm font-medium'>
						{t('username')}
					</label>
					<Input
						id='username'
						placeholder={tCommon('username')}
						{...register('username')}
					/>
					{errors.username && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.username.message as string}
						</p>
					)}
				</div>
			</div>

			{/* Bio */}
			<div className='mb-5'>
				<label className='mb-1.5 block text-sm font-medium'>{t('bio')}</label>
				<p className='text-muted-foreground mb-2 text-xs'>{t('bioHint')}</p>
				<Textarea
					id='bio'
					placeholder={t('bioPlaceholder')}
					className='min-h-24 resize-none'
					{...register('bio')}
				/>
				{errors.bio && (
					<p className='mt-1 text-sm text-red-500'>
						{errors.bio.message as string}
					</p>
				)}
			</div>

			{/* Location & Website row */}
			<div className='grid gap-4 md:grid-cols-2'>
				<div>
					<label className='mb-1.5 block text-sm font-medium'>
						{t('location')}
					</label>
					<div className='relative'>
						<Input
							id='location'
							placeholder={tCommon('location')}
							className='pr-9'
							{...register('location')}
						/>
						<MapPin className='text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2' />
					</div>
					{errors.location && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.location.message as string}
						</p>
					)}
				</div>
				<div>
					<label className='mb-1.5 block text-sm font-medium'>
						{t('website')}
					</label>
					<div className='relative'>
						<Input
							id='websiteUrl'
							placeholder={tCommon('website')}
							className='pr-9'
							{...register('websiteUrl')}
						/>
						<LinkIcon className='text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2' />
					</div>
					{errors.websiteUrl && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.websiteUrl.message as string}
						</p>
					)}
				</div>
			</div>
		</div>
	)
}
