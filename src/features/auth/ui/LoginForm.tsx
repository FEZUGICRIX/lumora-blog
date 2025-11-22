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

import { useLogin } from '../api/hooks'
import { LoginSchema, type TypeLoginSchema } from '../schema'
import { AuthWrapper } from './AuthWrapper'

export const LoginForm = () => {
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const { login, isLoadingLogin } = useLogin()

	const onSubmit = (data: TypeLoginSchema) => {
		if (recaptchaValue) {
			login({ data, recaptcha: recaptchaValue })
		} else {
			toast.error('Пожалуйста, завершите ReCAPTCHA')
		}
	}

	return (
		<AuthWrapper
			title='Войти'
			description='Чтобы войти введите ваш email и пароль'
			backButtonLabel='Еще нет аккаунта? Регистрация'
			backButtonHref={routes.auth.register}
			isShowSocial
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
										disabled={isLoadingLogin}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										placeholder='Type your password'
										type='password'
										disabled={isLoadingLogin}
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

					<Button type='submit' disabled={isLoadingLogin}>
						Login to account
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
