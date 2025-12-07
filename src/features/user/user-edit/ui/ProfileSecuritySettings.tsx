'use client'

import { Controller, useFormContext } from 'react-hook-form'

import { Switch } from '@/shared/ui/ui-kit'

export const ProfileSecuritySettings = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext()

	return (
		<div className='border-border/50 bg-card/30 rounded-2xl border p-6'>
			<h2 className='mb-6 text-lg font-semibold'>Настройки безопасности 🛡️</h2>

			<div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
				<div>
					<div className='space-y-0.5'>
						<label className='mb-1.5 block text-sm font-medium'>
							Двухфакторная аутентификация
						</label>
						<div className='text-muted-foreground text-xs'>
							Включите двухфакторную аутентификацию для вашего аккаунта (2FA)
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
