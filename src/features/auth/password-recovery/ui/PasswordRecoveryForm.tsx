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
import { usePasswordRecovery } from '../api'
import {
	PasswordRecoverySchema,
	type TypePasswordRecoverySchema,
} from '../schema'

export const PasswordRecoveryForm = () => {
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypePasswordRecoverySchema>({
		resolver: zodResolver(PasswordRecoverySchema),
		defaultValues: {
			email: '',
		},
	})

	const { reset, isLoadingReset } = usePasswordRecovery()

	const onSubmit = (data: TypePasswordRecoverySchema) => {
		if (recaptchaValue) {
			reset({ data, recaptcha: recaptchaValue })
		} else {
			toast.error('Пожалуйста, завершите ReCAPTCHA')
		}
	}

	return (
		<AuthWrapper
			title='Сброс пароля'
			description='Для сброса пароля введите свою почту'
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
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='Type your email'
										type='email'
										disabled={isLoadingReset}
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

					<Button type='submit' disabled={isLoadingReset}>
						Сбросить
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
