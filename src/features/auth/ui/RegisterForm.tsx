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

import { useRegister } from '../api/hooks'
import { RegisterSchema, type TypeRegisterSchema } from '../schema'
import { AuthWrapper } from './AuthWrapper'

export const RegisterForm = () => {
	const { theme } = useTheme()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			displayName: '',
			username: '',
			email: '',
			password: '',
			passwordRepeat: '',
		},
	})

	const { register, isLoadingRegister } = useRegister()

	const onSubmit = (data: TypeRegisterSchema) => {
		if (recaptchaValue) {
			register({ data, recaptcha: recaptchaValue })
		} else {
			toast.error('Пожалуйста, завершите ReCAPTCHA')
		}
	}

	return (
		<AuthWrapper
			title='Регистрация'
			description='Чтобы войти в аккаунт сначала введите email и пароль'
			backButtonLabel='Уже есть аккаунт? Войти'
			backButtonHref={routes.auth.login}
			isShowSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-2 space-y-2'
				>
					<FormField
						control={form.control}
						name='displayName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder='Type your display name'
										disabled={isLoadingRegister}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										placeholder='@username'
										disabled={isLoadingRegister}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
										disabled={isLoadingRegister}
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
										disabled={isLoadingRegister}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='passwordRepeat'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Repeat Password</FormLabel>
								<FormControl>
									<Input
										placeholder='Type your password'
										type='password'
										disabled={isLoadingRegister}
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
					<Button type='submit' disabled={isLoadingRegister}>
						Create account
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
