'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { useGetProfile } from '@/entities/user/api'

import { getDirtyValues } from '@/shared/lib/form-utils'

import { ProfileEditHeader, ProfileEditSchema, useUpdateUser } from '../'
import type { TypeProfileEditSchema } from '../'
import { ProfileFormSkeleton } from './skeletons/ProfileFormSkeleton'

interface IProfileEditFormProps {
	children: React.ReactNode
}

export const ProfileEditForm = ({ children }: IProfileEditFormProps) => {
	const { user, isLoadingUser } = useGetProfile()
	const { update, isLoadingUpdate } = useUpdateUser()

	const formMethods = useForm<TypeProfileEditSchema>({
		resolver: zodResolver(ProfileEditSchema),
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

	// 2. Единый сабмит-хэндлер
	const onSubmit = () => {
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
