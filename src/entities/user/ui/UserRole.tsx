import type { UserRole } from '@/shared/api/graphql/__generated__/documents'
import { cn } from '@/shared/lib/shadcn/utils'

import { ROLE_CONFIGS } from '../model/role.config'

interface UserRoleBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	role: UserRole
}

export function UserRoleBadge({
	role,
	className,
	...props
}: UserRoleBadgeProps) {
	// Получаем конфигурацию для заданной роли
	const config = ROLE_CONFIGS[role]

	// Если конфигурация не найдена, не отображаем бейдж
	if (!config) {
		return null
	}

	const { label, Icon, colorClass } = config
	return (
		<div
			className={cn(
				// Базовые стили для бейджа
				'inline-flex items-center gap-1 rounded-full px-3 text-sm font-bold uppercase',
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
			<Icon className='h-6 w-6' /> {/* Иконка */}
			<span>{label}</span> {/* Текст роли */}
		</div>
	)
}
