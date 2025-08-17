export function toArray(v?: string | string[]): string[] {
	if (!v) return []
	return Array.isArray(v) ? v : [v]
}

/** Достаёт ВСЕ значения параметра (?category=a&category=b) */
export function getMulti(params: URLSearchParams, key: string): string[] {
	return params.getAll(key).filter(Boolean)
}

/** Полностью перезаписывает мульти-параметр значениями */
export function setMulti(
	params: URLSearchParams,
	key: string,
	values: string[],
) {
	params.delete(key)
	values.forEach((val) => params.append(key, val))
	return params
}

/** Тогглит значение в списке, с дедупом и сортировкой для каноничности URL */
export function toggleValue(list: string[], value: string): string[] {
	const set = new Set(list)
	if (set.has(value)) set.delete(value)
	else set.add(value)
	return Array.from(set).sort() // каноничный порядок → меньше дубликатов URL
}
