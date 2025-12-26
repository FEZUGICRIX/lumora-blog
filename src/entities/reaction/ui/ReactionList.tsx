import {
	ReactionTargetType,
	ReactionType,
	type ToggleReactionInput,
} from '@/shared/api/graphql/__generated__/documents'
import { cn } from '@/shared/lib/shadcn/utils'
import { Button } from '@/shared/ui/ui-kit'

import { REACTIONS_CONFIG } from '../model/reaction.config'
import { ReactionIcon } from './ReactionIcon'

interface ReactionListProps {
	reactions: Partial<Record<ReactionType, number>>
	myReactions?: Partial<Record<ReactionType, number>>
	isAuthenticated: boolean
	targetId: string
	targetType: ReactionTargetType

	onReactionToggle: (data: ToggleReactionInput) => void
	className?: string
}

export const ReactionList = ({
	reactions,
	myReactions,
	isAuthenticated,
	targetId,
	targetType,

	onReactionToggle,
	className,
}: ReactionListProps) => {
	return (
		<div className={`flex flex-wrap gap-1.5 ${className} `}>
			{REACTIONS_CONFIG.map(({ type, icon }) => {
				const count = reactions[type] ?? 0
				const isActive = Boolean(myReactions?.[type])

				return (
					<Button
						type='button'
						key={type}
						disabled={!isAuthenticated}
						onClick={() => {
							if (isAuthenticated) {
								onReactionToggle({
									targetId,
									targetType,
									type,
								})
							}
						}}
						className={cn(
							'flex items-center gap-1 rounded-full border px-2 py-1 text-xs transition',
							'border-zinc-200 bg-white/70 hover:bg-zinc-100',
							'text-dark dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-800',
							isActive &&
								'border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800',
						)}
					>
						<ReactionIcon icon={icon} />

						{count > 0 && (
							<span className='min-w-[10px] text-[11px] font-medium dark:text-white'>
								{count}
							</span>
						)}
					</Button>
				)
			})}
		</div>
	)
}
