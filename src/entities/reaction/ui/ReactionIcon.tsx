import type { ReactionIconType } from '../model/reaction.types'

export const ReactionIcon = ({ icon }: { icon: ReactionIconType }) => {
	if (typeof icon === 'string') {
		return <span className='text-sm leading-none'>{icon}</span>
	}

	const Icon = icon
	return <Icon className='h-4 w-4' />
}
