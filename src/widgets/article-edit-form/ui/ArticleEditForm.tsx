'use client'

import { useState } from 'react'
import {
	FormProvider,
	useFormContext,
	type UseFormReturn,
} from 'react-hook-form'
import { useTranslations } from 'next-intl'
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
	const t = useTranslations('widgets.articleEditForm')

	const handleFormSubmit = async (data: ArticleFormValues) => {
		setIsSubmitting(true)
		try {
			await onSubmit(data)
		} catch (error) {
			const appError = handleRTKError(error)
			toast.error(t('error'), {
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
							<FormLabel>{t('title')} *</FormLabel>
							<FormControl>
								<InputWithCounter
									placeholder={t('titlePlaceholder')}
									maxLength={TITLE_MAX_LENGTH}
									value={field.value}
									onChange={field.onChange}
									disabled={isSubmitting}
								/>
							</FormControl>
							<FormDescription>
								{t('titleDescription')}
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
							<FormLabel>{t('description')} *</FormLabel>
							<FormControl>
								<InputWithCounter
									placeholder={t('descriptionPlaceholder')}
									maxLength={DESCRIPTION_MAX_LENGTH}
									value={field.value}
									onChange={field.onChange}
									disabled={isSubmitting}
								/>
							</FormControl>
							<FormDescription>
								{t('descriptionDescription')}
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
							<FormLabel>{t('category')} *</FormLabel>
							<FormControl>
								<ControlledCategorySelect name='categoryId' />
							</FormControl>
							<FormDescription>{t('categoryDescription')}</FormDescription>
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
							<FormLabel>{t('content')} *</FormLabel>
							<FormControl>
								<Editor content={field.value} onChange={field.onChange} />
							</FormControl>
							<FormDescription>
								{t('contentDescription')}
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
							<FormLabel>{t('tags')}</FormLabel>
							<FormControl>
								<Input
									placeholder={t('tagsPlaceholder')}
									value={field.value}
									onChange={field.onChange}
									disabled={isSubmitting}
								/>
							</FormControl>
							<FormDescription>{t('tagsDescription')}</FormDescription>
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
							<FormLabel>{t('coverImage')}</FormLabel>
							<FormControl>
								<Input
									placeholder={t('coverImagePlaceholder')}
									disabled={isSubmitting}
									{...field}
									value={field.value || ''}
								/>
							</FormControl>
							<FormDescription>
								{t('coverImageDescription')}
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
							? t('saving')
							: isEdit
								? t('saveChanges')
								: t('createArticle')}
					</Button>
				</div>
			</form>
		</FormProvider>
	)
}
