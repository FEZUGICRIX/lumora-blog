'use client'

import { Eye, Heart, Users, UserPlus } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ProfileStatsProps {
	stats: {
		followers: string | number
		following: string | number
		likes: string | number
		views: string | number
	}
}

export const ProfileStats = ({ stats }: ProfileStatsProps) => {
	const t = useTranslations('widgets.profile.stats')

	return (
		<div className="flex flex-wrap md:justify-start justify-center gap-2 md:gap-3">
			<StatCard
				icon={<Eye className="size-3.5 text-muted-foreground" />}
				label={t('views')}
				value={stats.views}
			/>
			<StatCard
				icon={<Heart className="size-3.5 text-muted-foreground" />}
				label={t('likes')}
				value={stats.likes}
			/>
			<StatCard
				icon={<Users className="size-3.5 text-muted-foreground" />}
				label={t('followers')}
				value={stats.followers}
			/>
			<StatCard
				icon={<UserPlus className="size-3.5 text-muted-foreground" />}
				label={t('following')}
				value={stats.following}
			/>
		</div>
	)
}

const StatCard = ({
	icon,
	label,
	value,
}: {
	icon: React.ReactNode
	label: string
	value: string | number
}) => (
	<div className="rounded-xl  border border-border/50 bg-card/50 px-3 py-2 transition-colors hover:border-border hover:bg-card/80 md:px-4 md:py-2.5">
		<div className="mb-1 flex items-center gap-1.5">
			{icon}
			<span className="text-[10px] text-muted-foreground md:text-xs">{label}</span>
		</div>
		<p className="text-lg font-bold tracking-tight dark:text-white md:text-xl">
			{value}
		</p>
	</div>
)
