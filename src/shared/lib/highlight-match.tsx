/**
 * Подсвечивает совпадения в тексте, оборачивая их в span с стилями подсветки
 *
 * @param text - Исходный текст, в котором нужно подсветить совпадения
 * @param match - Строка для поиска и подсветки (регистронезависимый поиск)
 * @returns React-ноды с подсвеченными совпадениями. Совпадения оборачиваются в span
 * с классами для желтого фона, остальной текст возвращается как есть.
 *
 * @example
 * // Возвращает: "Hello <span>World</span>"
 * highlightMatch("Hello World", "World")
 *
 * @example
 * // Возвращает: "Hello World" (без изменений, так как совпадений нет)
 * highlightMatch("Hello World", "test")
 *
 * @note Использует индекс массива как ключ, что допустимо так как порядок частей стабилен
 * и функция используется только для статического отображения (не для списков)
 */
export function highlightMatch(text: string, match: string) {
	if (!match) return text

	const regex = new RegExp(`(${match})`, 'gi')
	return text.split(regex).map((part, i) =>
		part.toLowerCase() === match.toLowerCase() ? (
			<span
				key={i}
				className='rounded bg-yellow-300 px-[0.5px] dark:bg-yellow-500/30'
			>
				{part}
			</span>
		) : (
			part
		),
	)
}
