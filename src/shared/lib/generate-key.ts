/**
 * Генерирует уникальный ключ с префиксом и случайной частью
 * @param prefix - префикс для ключа (опционально)
 * @returns Уникальный ключ в формате "prefix-randomId"
 */
export const generateKey = (prefix?: string): string => {
	const randomId = Math.random().toString(36).substr(2, 6) // 6 случайных символов
	return prefix ? `${prefix}-${randomId}` : randomId
}
