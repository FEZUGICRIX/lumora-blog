import type { ResolvingMetadata } from 'next'

/** Props для pages в App Router с динамическим [locale] */
export type LocalizedPageProps = {
	params: Promise<{ locale: string }>
	searchParams?: Promise<Record<string, string | string[] | undefined>>
}

/** Для generateMetadata с parent (optional chaining) */
export type LocalizedMetadataProps = LocalizedPageProps & {
	parent?: ResolvingMetadata
}
