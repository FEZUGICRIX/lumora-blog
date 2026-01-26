import type { Category } from '@/shared/api/graphql/__generated__/documents'

export type CategoryMinimal = Pick<Category, 'slug' | 'name' | 'id'>

export interface SelectOption {
	label: string
	value: string
	id: string
}
