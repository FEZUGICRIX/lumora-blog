// src/shared/lib/form-utils.ts
import type { FieldValues, UseFormReturn } from 'react-hook-form'

/**
 * 💡 Сеньорская утилита для получения только "грязных" (измененных) значений формы.
 * Если грязное поле является пустой строкой (''), его значение принудительно
 * заменяется на NULL для явного сброса (удаления) опционального значения на бэкенде.
 */
export const getDirtyValues = <TFieldValues extends FieldValues>(
	form: UseFormReturn<TFieldValues>,
): Partial<TFieldValues> => {
	const dirtyFields = form.formState.dirtyFields as Partial<
		Record<keyof TFieldValues, boolean>
	>

	const allValues = form.getValues()
	const dirtyValues: Partial<TFieldValues> = {}

	for (const key of Object.keys(dirtyFields)) {
		const typedKey = key as keyof TFieldValues

		if (dirtyFields[typedKey] === true) {
			const value = allValues[typedKey]

			// КЛЮЧЕВАЯ ЛОГИКА:
			if (typeof value === 'string' && value.trim() === '') {
				// 🚀 ИСПОЛЬЗУЕМ ФОКУСИРОВАННОЕ ПРИВЕДЕНИЕ ТИПА:
				// Устраняем 'as any', явно приводя null к конечному типу поля.
				// Это безопасно, так как мы требуем обновления Zod-схемы на nullable.
				dirtyValues[typedKey] = null as TFieldValues[typeof typedKey]
			} else {
				// Добавляем все остальные измененные значения
				dirtyValues[typedKey] = value
			}
		}
	}

	return dirtyValues as Partial<TFieldValues>
}
