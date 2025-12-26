import type { LucideIcon } from 'lucide-react'

import type { ReactionType } from '@/shared/api/graphql/__generated__/documents'

export type ReactionIconType = LucideIcon | string

export type ReactionConfigItem = {
	type: ReactionType
	label: string
	icon: ReactionIconType
	color?: string // tailwind token
	ariaLabel?: string
	visible?: boolean // для скрытых/экспериментальных
}
