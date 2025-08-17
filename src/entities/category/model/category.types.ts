import type { Category } from '@/shared/api/graphql/__generated__/graphql'

export type CategoryMinimal = Pick<Category, 'slug' | 'name'>
