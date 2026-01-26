'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthWrapper } from '@/entities/auth/ui'

import { env } from '@/shared/config/env'
import { routes } from '@/shared/config/routes'
import { mapZodErrorsToForm } from '@/shared/lib/zod'
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

import { useRegister } from '../api'
import { RegisterSchema, type TypeRegisterSchema } from '../schema'

export const RegisterForm = () => {
	const t = useTranslations('features.auth.register')
	const { theme } = useTheme()
	const locale = useLocale()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const form = useForm<TypeRegisterSchema>({
		defaultValues: {
			displayName: '',
			username: '',
			email: '',
			password: '',
			passwordRepeat: '',
		},
	})

	const { register, isLoadingRegister } = useRegister()

	const onSubmit = (values: TypeRegisterSchema) => {
		// Clear previous errors
		form.clearErrors()

		// Validate with Zod
		const result = RegisterSchema.safeParse(values)

		if (!result.success) {
			// Set translated errors
			mapZodErrorsToForm({
				error: result.error,
				form,
				t,
			})
			return
		}

		if (recaptchaValue) {
			register({ data: values, recaptcha: recaptchaValue })
		} else {
			toast.error(t('errors.recaptcha'))
		}
	}

	return (
		<AuthWrapper
			title={t('title')}
			description={t('description')}
			backButtonLabel={t('links.login')}
			backButtonHref={routes.auth.login}
			isShowSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid grid-cols-1 gap-4 md:grid-cols-2'
				>
					<FormField
						control={form.control}
						name='displayName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t('form.displayName')}</FormLabel>
								<FormControl>
									<Input
										placeholder={t('form.placeholders.displayName')}
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
								<FormLabel>{t('form.username')}</FormLabel>
								<FormControl>
									<Input
										placeholder={t('form.placeholders.username')}
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
							<FormItem className='col-span-1 md:col-span-2'>
								<FormLabel>{t('form.email')}</FormLabel>
								<FormControl>
									<Input
										placeholder={t('form.placeholders.email')}
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
								<FormLabel>{t('form.password')}</FormLabel>
								<FormControl>
									<Input
										placeholder={t('form.placeholders.password')}
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
								<FormLabel>{t('form.confirmPassword')}</FormLabel>
								<FormControl>
									<Input
										placeholder={t('form.placeholders.password')}
										type='password'
										disabled={isLoadingRegister}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='col-span-1 flex justify-center md:col-span-2'>
						<ReCAPTCHA
							onChange={setRecaptchaValue}
							hl={locale}
							theme={theme == 'light' ? 'light' : 'dark'}
							sitekey={env.googleRecaptchaSiteKey}
						/>
					</div>

					<Button
						type='submit'
						disabled={isLoadingRegister}
						className='col-span-1 md:col-span-2'
					>
						{t('form.submit')}
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
