'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useGetUser } from '@/entities/user/api/hooks'
import { UserButton, UserButtonSkeleton } from '@/entities/user/ui'

import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Spinner,
	Switch,
} from '@/shared/ui/ui-kit'

import { useUpdateUser } from '../api'
import { SettingsSchema, type TypeSettingsSchema } from '../schema'

export const SettingsFrom = () => {
	const { user, isLoadingUser } = useGetUser()
	const { update, isLoadingUpdate } = useUpdateUser()

	const form = useForm<TypeSettingsSchema>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			displayName: user?.displayName || '',
			email: user?.email || '',
			isTwoFactorEnabled: user?.isTwoFactorEnabled || false,
		},
	})

	// 3. 🥈 Инициализация данных при их загрузке
	useEffect(() => {
		if (user) {
			form.reset({
				displayName: user.displayName || '',
				email: user.email || '',
				isTwoFactorEnabled: user.isTwoFactorEnabled || false,
			})
		}
	}, [user, form]) // Зависимости: user (данные) и form (функция reset)

	const onSubmit = (values: TypeSettingsSchema) => {
		update(values)
	}

	if (!user) return null

	return (
		<Card className='w-[400px]'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>Настройки профиля</CardTitle>
				{isLoadingUser ? <UserButtonSkeleton /> : <UserButton user={user} />}
			</CardHeader>

			<CardContent>
				{isLoadingUser ? (
					<Spinner />
				) : (
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
										<FormLabel>Display Name</FormLabel>
										<FormControl>
											<Input
												placeholder='Stan Doe'
												disabled={isLoadingUpdate}
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
												disabled={isLoadingUpdate}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='isTwoFactorEnabled'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
										<div className='space-y-0.5'>
											<FormLabel>Двухфакторная аутентификация</FormLabel>
											<FormDescription>
												Включите двухфакторную аутентификацию для вашего
												аккаунта
											</FormDescription>
										</div>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
									</FormItem>
								)}
							/>

							<Button type='submit' disabled={isLoadingUpdate}>
								Сохранить
							</Button>
						</form>
					</Form>
				)}
			</CardContent>
		</Card>
	)
}
