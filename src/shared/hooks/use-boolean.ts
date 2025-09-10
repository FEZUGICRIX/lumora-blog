import { useCallback, useState } from 'react'

export type UseBooleanReturn = {
	value: boolean
	setTrue: () => void
	setFalse: () => void
	toggle: () => void
	set: (val: boolean) => void
	isTrue: boolean
	isFalse: boolean
}

/**
 * A custom React hook for managing boolean state with a clear and expressive API.
 * Useful for handling toggles, modal visibility, feature flags, dropdowns, switches, etc.
 */
export function useBoolean(initial = false): UseBooleanReturn {
	const [value, setValue] = useState<boolean>(initial)

	const setTrue = useCallback(() => setValue(true), [])
	const setFalse = useCallback(() => setValue(false), [])
	const toggle = useCallback(() => setValue((prev) => !prev), [])
	const set = useCallback((val: boolean) => setValue(val), [])

	return {
		value,
		setTrue,
		setFalse,
		toggle,
		set,
		isTrue: value,
		isFalse: !value,
	}
}
