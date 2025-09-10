import Fuse from 'fuse.js'
import { useMemo } from 'react'
import type { IFuseOptions } from 'fuse.js'

export function useFuseSearch<T>(
	data: T[],
	query: string,
	options: IFuseOptions<T>,
): T[] {
	const fuse = useMemo(() => new Fuse(data, options), [data, options])
	const results = useMemo(() => {
		if (!query) return data
		return fuse.search(query).map((res) => res.item)
	}, [query, fuse, data])
	return results
}
