'use client'

import { useState } from 'react'
import {
	FormProvider,
	useFormContext,
	type UseFormReturn,
} from 'react-hook-form'
import { toast } from 'sonner'

import { Editor } from '@/features/editor/ui'

import { CategorySelect } from '@/entities/category/ui'

import {
	Button,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	InputWithCounter,
} from '@/shared/ui/ui-kit'

import { handleRTKError } from '../lib/error-handling'
import { type ArticleFormValues } from '../models/form.types'

const TITLE_MAX_LENGTH = 85
const DESCRIPTION_MAX_LENGTH = 300

// Кастомный селект категорий для интеграции с RHF
function ControlledCategorySelect({ name }: { name: string }) {
	const { setValue, trigger, watch } = useFormContext()
	const value = watch(name)

	const handleChange = async (newValue: string) => {
		setValue(name, newValue)
		await trigger(name)
	}

	return <CategorySelect value={value} onValueChange={handleChange} />
}

interface ArticleEditFormProps {
	form: UseFormReturn<ArticleFormValues>
	onSubmit: (data: ArticleFormValues) => Promise<void>
	isEdit: boolean
}

export function ArticleEditForm({
	form,
	onSubmit,
	isEdit,
}: ArticleEditFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleFormSubmit = async (data: ArticleFormValues) => {
		setIsSubmitting(true)
		try {
			await onSubmit(data)
		} catch (error) {
			const appError = handleRTKError(error)
			toast.error('Ошибка', {
				description: appError.message,
				duration: 5000,
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(handleFormSubmit)}
				className='mx-auto max-w-4xl space-y-6 p-4'
			>
				{/* Заголовок */}
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Заголовок *</FormLabel>
							<FormControl>
								<InputWithCounter
									placeholder='Введите заголовок статьи'
									maxLength={TITLE_MAX_LENGTH}
									value={field.value}
									onChange={field.onChange}
									disabled={isSubmitting}
								/>
							</FormControl>
							<FormDescription>
								Название вашей статьи (обязательное поле)
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Описание */}
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Описание *</FormLabel>
							<FormControl>
								<InputWithCounter
									placeholder='Краткое описание статьи'
									maxLength={DESCRIPTION_MAX_LENGTH}
									value={field.value}
									onChange={field.onChange}
									disabled={isSubmitting}
								/>
							</FormControl>
							<FormDescription>
								Краткое описание для превью (обязательное поле)
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Категория */}
				<FormField
					control={form.control}
					name='categoryId'
					render={() => (
						<FormItem>
							<FormLabel>Категория *</FormLabel>
							<FormControl>
								<ControlledCategorySelect name='categoryId' />
							</FormControl>
							<FormDescription>Выберите категорию для статьи</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Контент */}
				<FormField
					control={form.control}
					name='content'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Содержание *</FormLabel>
							<FormControl>
								<Editor content={field.value} onChange={field.onChange} />
							</FormControl>
							<FormDescription>
								Основное содержание статьи в формате Rich Text
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Теги */}
				<FormField
					control={form.control}
					name='tags'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Теги</FormLabel>
							<FormControl>
								<Input
									placeholder='тег1, тег2, тег3 (через пробел)'
									value={field.value}
									onChange={field.onChange}
									disabled={isSubmitting}
								/>
							</FormControl>
							<FormDescription>Теги (через пробел)</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Обложка */}
				<FormField
					control={form.control}
					name='coverImage'
					render={({ field }) => (
						<FormItem>
							<FormLabel>URL обложки</FormLabel>
							<FormControl>
								<Input
									placeholder='https://example.com/image.jpg'
									disabled={isSubmitting}
									{...field}
									value={field.value || ''}
								/>
							</FormControl>
							<FormDescription>
								Ссылка на изображение для обложки статьи
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Кнопки действий */}
				<div className='flex gap-4 pt-6'>
					<Button
						type='submit'
						disabled={isSubmitting || !form.formState.isValid}
						className='flex-1'
					>
						{isSubmitting
							? 'Сохранение...'
							: isEdit
								? 'Сохранить изменения'
								: 'Создать статью'}
					</Button>
				</div>
			</form>
		</FormProvider>
	)
}
