'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthWrapper } from '@/entities/auth/ui'

import { env } from '@/shared/config/env'
import { Link } from '@/shared/config/i18n'
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

import { useLogin } from '../api'
import { LoginSchema, type TypeLoginSchema } from '../schema'

export const LoginForm = () => {
	const t = useTranslations('features.auth.login')
	const { theme } = useTheme()
	const locale = useLocale()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const [isShowTwoFactor, setIsShowTwoFactor] = useState(false)

	const form = useForm<TypeLoginSchema>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const { login, isLoadingLogin } = useLogin(setIsShowTwoFactor)

	const onSubmit = (values: TypeLoginSchema) => {
		// Clear previous errors
		form.clearErrors()

		// Validate with Zod
		const result = LoginSchema.safeParse(values)

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
			login({ data: values, recaptcha: recaptchaValue })
		} else {
			toast.error(t('errors.recaptcha'))
		}
	}

	return (
		<AuthWrapper
			title={t('title')}
			description={t('description')}
			backButtonLabel={t('links.register')}
			backButtonHref={routes.auth.register}
			isShowSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-2 space-y-2'
				>
					{isShowTwoFactor && (
						<FormField
							control={form.control}
							name='code'
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('form.code')}</FormLabel>
									<FormControl>
										<Input
											placeholder={t('form.placeholders.code')}
											disabled={isLoadingLogin}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}

					{!isShowTwoFactor && (
						<>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t('form.email')}</FormLabel>
										<FormControl>
											<Input
												placeholder={t('form.placeholders.email')}
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
										<div className='flex items-center justify-between'>
											<FormLabel>{t('form.password')}</FormLabel>
											<Link
												href={routes.auth.passwordRecovery}
												className='ml-auto inline-block text-sm underline'
											>
												{t('links.forgotPassword')}
											</Link>
										</div>

										<FormControl>
											<Input
												placeholder={t('form.placeholders.password')}
												type='password'
												disabled={isLoadingLogin}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</>
					)}

					<div className='flex justify-center'>
						<ReCAPTCHA
							onChange={setRecaptchaValue}
							hl={locale}
							theme={theme == 'light' ? 'light' : 'dark'}
							sitekey={env.googleRecaptchaSiteKey}
						/>
					</div>

					<Button type='submit' disabled={isLoadingLogin}>
						{t('form.submit')}
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
