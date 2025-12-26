import {
	Angry,
	Bookmark,
	Flame,
	Frown,
	Heart,
	Laugh,
	Sparkles,
	ThumbsUp,
} from 'lucide-react'

import { ReactionType } from '@/shared/api/graphql/__generated__/documents'

import type { ReactionConfigItem } from './reaction.types'

export const REACTIONS_CONFIG = [
	{
		type: ReactionType.Like,
		label: 'Like',
		icon: ThumbsUp,
		color: 'text-blue-500',
		ariaLabel: 'Like this',
	},
	{
		type: ReactionType.Love,
		label: 'Love',
		icon: Heart,
		color: 'text-rose-500',
		ariaLabel: 'Love this',
	},
	{
		type: ReactionType.Fire,
		label: 'Fire',
		icon: Flame,
		color: 'text-orange-500',
		ariaLabel: 'This is fire',
	},
	{
		type: ReactionType.Bookmark,
		label: 'Save',
		icon: Bookmark,
		color: 'text-amber-500',
		ariaLabel: 'Save for later',
	},
	{
		type: ReactionType.Laugh,
		label: 'Haha',
		icon: Laugh,
		color: 'text-yellow-500',
	},
	{
		type: ReactionType.Wow,
		label: 'Wow',
		icon: Sparkles,
		color: 'text-purple-500',
	},
	{
		type: ReactionType.Sad,
		label: 'Sad',
		icon: Frown,
		color: 'text-sky-500',
	},
	{
		type: ReactionType.Angry,
		label: 'Angry',
		icon: Angry,
		color: 'text-red-600',
	},
	{
		type: ReactionType.Poop,
		label: 'Poop',
		icon: '💩',
		visible: false,
	},
	{
		type: ReactionType.Clown,
		label: 'Clown',
		icon: '🤡',
		visible: false,
	},
] satisfies ReadonlyArray<ReactionConfigItem>
