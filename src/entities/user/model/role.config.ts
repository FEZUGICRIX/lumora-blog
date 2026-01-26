import { type LucideIcon, User } from 'lucide-react'
import { useTranslations } from 'next-intl'

import type { UserRole } from '@/shared/api/graphql/__generated__/documents'
import { CrownIcon } from '@/shared/ui/icon'

export type RoleConfig = {
	labelKey: string
	Icon: LucideIcon | React.ElementType
	colorClass: string // Tailwind class для цвета
}

export const ROLE_CONFIGS: Partial<Record<UserRole, RoleConfig>> = {
	ADMIN: {
		labelKey: 'ADMIN',
		Icon: CrownIcon,
		colorClass: 'bg-purple-700/80 border-purple-500/50',
	},
	// MODERATOR: {
	// 	labelKey: 'MODERATOR',
	// 	Icon: Shield,
	// 	colorClass: 'bg-indigo-700/80 border-indigo-500/50',
	// },
	// CREATOR: {
	// 	labelKey: 'CREATOR',
	// 	Icon: Zap,
	// 	colorClass: 'bg-fuchsia-700/80 border-fuchsia-500/50',
	// },
	USER: {
		labelKey: 'USER',
		Icon: User,
		colorClass: 'bg-gray-700/50 border-gray-500/30',
	},
}

export const useRoleConfig = () => {
	const t = useTranslations('entities.user.roles')

	return (role: UserRole) => {
		const config = ROLE_CONFIGS[role]
		if (!config) return null

		return {
			...config,
			label: t(config.labelKey)
		}
	}
}
