import type { UserRole } from '@/shared/api/graphql/__generated__/documents'
import { cn } from '@/shared/lib/shadcn/utils'

import { useRoleConfig } from '../model/role.config'

interface UserRoleBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	role: UserRole
	size?: 'default' | 'small'
}

export function UserRoleBadge({
	role,
	size = 'default',
	className,
	...props
}: UserRoleBadgeProps) {
	const getRoleConfig = useRoleConfig()

	// Получаем конфигурацию для заданной роли
	const config = getRoleConfig(role)

	// Если конфигурация не найдена, не отображаем бейдж
	if (!config) {
		return null
	}

	const { label, Icon, colorClass } = config

	const badgeStyles = {
		default: {
			icon: 'h-6 w-6',
			badge: 'px-3 text-sm',
		},
		small: {
			icon: 'h-4 w-4',
			badge: 'px-1 pr-2 text-xs',
		},
	}

	const badgeStyle = size == 'default' ? badgeStyles.default : badgeStyles.small

	return (
		<div
			className={cn(
				// Базовые стили для бейджа
				`inline-flex items-center gap-1 rounded-full px-3 font-bold uppercase ${badgeStyle.badge}`,
				'cursor-default shadow-lg', // Для эффекта тени и интерактивности

				// Градиентная подложка, имитирующая фиолетовый/темный фон
				'bg-gradient-to-r from-purple-900 to-fuchsia-900/50',

				// Стили, основанные на цвете роли (для обводки и легкого тона)
				colorClass,
				'border-2',
				'shadow-2xl',

				// Текст и иконка
				'text-white/90',

				// Пользовательские классы
				className,
			)}
			{...props}
		>
			<Icon className={badgeStyle.icon} /> {/* Иконка */}
			<span>{label}</span> {/* Текст роли */}
		</div>
	)
}
