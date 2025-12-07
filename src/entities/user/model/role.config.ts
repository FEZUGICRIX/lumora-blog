import { type LucideIcon, User } from 'lucide-react'

import type { UserRole } from '@/shared/api/graphql/__generated__/documents'
import { CrownIcon } from '@/shared/ui/icon'

export type RoleConfig = {
	label: string
	Icon: LucideIcon | React.ElementType
	colorClass: string // Tailwind class для цвета
}

export const ROLE_CONFIGS: Partial<Record<UserRole, RoleConfig>> = {
	ADMIN: {
		label: 'ADMIN',
		Icon: CrownIcon,
		colorClass: 'bg-purple-700/80 border-purple-500/50',
	},
	// MODERATOR: {
	// 	label: 'MODERATOR',
	// 	Icon: Shield,
	// 	colorClass: 'bg-indigo-700/80 border-indigo-500/50',
	// },
	// CREATOR: {
	// 	label: 'CREATOR',
	// 	Icon: Zap,
	// 	colorClass: 'bg-fuchsia-700/80 border-fuchsia-500/50',
	// },
	USER: {
		label: 'USER',
		Icon: User,
		colorClass: 'bg-gray-700/50 border-gray-500/30',
	},
}
