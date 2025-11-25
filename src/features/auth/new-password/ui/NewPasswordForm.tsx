'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { env } from '@/shared/config/env'
import { routes } from '@/shared/config/routes'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from '@/shared/ui/ui-kit'

import { AuthWrapper } from '../../ui'
import { useNewPassword } from '../api'
import { NewPasswordSchema, type TypeNewPasswordSchema } from '../schema'

export const NewPasswordForm = () => {
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypeNewPasswordSchema>({
		resolver: zodResolver(NewPasswordSchema),
		defaultValues: {
			password: '',
		},
	})

	const { newPassword, isLoadingNew } = useNewPassword()

	const onSubmit = (data: TypeNewPasswordSchema) => {
		if (recaptchaValue) {
			newPassword({ data, recaptcha: recaptchaValue })
		} else {
			toast.error('Пожалуйста, завершите ReCAPTCHA')
		}
	}

	return (
		<AuthWrapper
			title='Новый пароль'
			description='Придумайте новый пароль для вашего аккаунта '
			backButtonLabel='Войти в аккаунт'
			backButtonHref={routes.auth.login}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-2 space-y-2'
				>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Новый пароль</FormLabel>

								<FormControl>
									<Input
										placeholder='******'
										type='password'
										disabled={isLoadingNew}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='flex justify-center'>
						<ReCAPTCHA
							onChange={setRecaptchaValue}
							theme={theme == 'light' ? 'light' : 'dark'}
							sitekey={env.googleRecaptchaSiteKey}
						/>
					</div>

					<Button type='submit' disabled={isLoadingNew}>
						Продолжить
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
