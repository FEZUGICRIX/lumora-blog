'use client'

import { useTranslations } from 'next-intl'
import { Controller, useFormContext } from 'react-hook-form'

import { Switch } from '@/shared/ui/ui-kit'

export const ProfileSecuritySettings = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
	const t = useTranslations('entities.user.edit.security')

	return (
		<div className='border-border/50 bg-card/30 rounded-2xl border p-6'>
			<h2 className='mb-6 text-lg font-semibold'>{t('title')}</h2>

			<div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
				<div>
					<div className='space-y-0.5'>
						<label className='mb-1.5 block text-sm font-medium'>
							{t('twoFactor')}
						</label>
						<div className='text-muted-foreground text-xs'>
							{t('twoFactorDescription')}
						</div>
					</div>
				</div>

				<Controller
					name='isTwoFactorEnabled'
					control={control}
					render={({ field }) => (
						<Switch
							checked={field.value}
							onCheckedChange={field.onChange}
							onBlur={field.onBlur}
						/>
					)}
				/>
			</div>

			{errors.isTwoFactorEnabled && (
				<p className='mt-1 text-sm text-red-500'>
					{errors.isTwoFactorEnabled.message as string}
				</p>
			)}
		</div>
	)
}
