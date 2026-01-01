'use client'

import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'

import { useGetProfile } from '@/entities/user/api'

import { getDirtyValues } from '@/shared/lib/form-utils'
import { mapZodErrorsToForm } from '@/shared/lib/zod'

import { ProfileEditHeader, ProfileEditSchema, useUpdateUser } from '../'
import type { TypeProfileEditSchema } from '../'
import { ProfileFormSkeleton } from './skeletons/ProfileFormSkeleton'

interface IProfileEditFormProps {
	children: React.ReactNode
}

export const ProfileEditForm = ({ children }: IProfileEditFormProps) => {
	const { user, isLoadingUser } = useGetProfile()
	const { update, isLoadingUpdate } = useUpdateUser()
	const t = useTranslations('entities.user.edit')

	const formMethods = useForm<TypeProfileEditSchema>({
		defaultValues: {},
		mode: 'onBlur',
	})

	// 💡 Эффект для синхронизации/сброса при загрузке данных
	useEffect(() => {
		if (user) {
			// 💡 Мы используем оператор ?? '', чтобы обеспечить, что
			// опциональные поля, которые могут быть null/undefined из GraphQL/Prisma,
			// преобразуются в '' для корректной работы <input> и Zod transform (если оно еще не сработало).
			formMethods.reset({
				username: user.username ?? '',
				displayName: user.displayName ?? '',
				bio: user.bio ?? '',
				location: user.location ?? '',
				coverUrl: user.coverUrl ?? '',
				avatarUrl: user.avatarUrl ?? '',
				websiteUrl: user.websiteUrl ?? '',
				isTwoFactorEnabled: user.isTwoFactorEnabled ?? false,
			})
		}
	}, [user, formMethods])

	// 2. Единый сабмит-хэндлер с валидацией
	const onSubmit = (values: TypeProfileEditSchema) => {
		const result = ProfileEditSchema.safeParse(values)

		if (!result.success) {
			// Set translated errors
			mapZodErrorsToForm({
				error: result.error,
				form: formMethods,
				t,
			})
			return
		}

		const dirtyValues = getDirtyValues(formMethods)
		update(dirtyValues)
	}

	if (isLoadingUser || !user) return <ProfileFormSkeleton />

	return (
		<FormProvider {...formMethods}>
			<form onSubmit={formMethods.handleSubmit(onSubmit)} className='space-y-6'>
				<ProfileEditHeader
					username={user.username}
					isButtonCancelDisabled={isLoadingUpdate}
					isButtonSaveDisabled={
						!formMethods.formState.isDirty || isLoadingUpdate
					}
				/>

				{children}
			</form>
		</FormProvider>
	)
}
