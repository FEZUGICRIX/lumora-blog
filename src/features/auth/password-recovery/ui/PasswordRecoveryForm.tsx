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

import { usePasswordRecovery } from '../api'
import {
	PasswordRecoverySchema,
	type TypePasswordRecoverySchema,
} from '../schema'

export const PasswordRecoveryForm = () => {
	const t = useTranslations('features.auth.passwordRecovery')
	const { theme } = useTheme()
	const locale = useLocale()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypePasswordRecoverySchema>({
		defaultValues: {
			email: '',
		},
	})

	const { reset, isLoadingReset } = usePasswordRecovery()

	const onSubmit = (values: TypePasswordRecoverySchema) => {
		// Clear previous errors
		form.clearErrors()

		// Validate with Zod
		const result = PasswordRecoverySchema.safeParse(values)

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
			reset({ data: values, recaptcha: recaptchaValue })
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
								<FormLabel>{t('form.email')}</FormLabel>
								<FormControl>
									<Input
										placeholder={t('form.placeholders.email')}
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
							hl={locale}
							theme={theme == 'light' ? 'light' : 'dark'}
							sitekey={env.googleRecaptchaSiteKey}
						/>
					</div>

					<Button type='submit' disabled={isLoadingReset}>
						{t('form.submit')}
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
