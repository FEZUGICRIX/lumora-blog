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
		emoji: '👍',
		color: 'text-blue-500',
		ariaLabel: 'Like this 👍',
	},
	{
		type: ReactionType.Love,
		label: 'Love',
		icon: Heart,
		emoji: '❤️',
		color: 'text-rose-500',
		ariaLabel: 'Love this ❤️',
	},
	{
		type: ReactionType.Fire,
		label: 'Fire',
		icon: Flame,
		emoji: '🔥',
		color: 'text-orange-500',
		ariaLabel: 'This is fire 🔥',
	},
	{
		type: ReactionType.Bookmark,
		label: 'Save',
		icon: Bookmark,
		emoji: '🔖',
		color: 'text-amber-500',
		ariaLabel: 'Save for later 🔖',
	},
	{
		type: ReactionType.Laugh,
		label: 'Haha',
		icon: Laugh,
		emoji: '😂',
		color: 'text-yellow-500',
		ariaLabel: 'Haha 😂',
	},
	{
		type: ReactionType.Wow,
		label: 'Wow',
		icon: Sparkles,
		emoji: '✨',
		color: 'text-purple-500',
		ariaLabel: 'Wow ✨',
	},
	{
		type: ReactionType.Sad,
		label: 'Sad',
		icon: Frown,
		emoji: '😢',
		color: 'text-sky-500',
		ariaLabel: 'Sad 😢',
	},
	{
		type: ReactionType.Angry,
		label: 'Angry',
		icon: Angry,
		emoji: '😡',
		color: 'text-red-600',
		ariaLabel: 'Angry 😡',
	},
	{
		type: ReactionType.Poop,
		label: 'Poop',
		icon: '💩', // Native emoji
		emoji: '💩',
		color: 'text-amber-700',
		ariaLabel: 'Poop 💩',
	},
	{
		type: ReactionType.Clown,
		label: 'Clown',
		icon: '🤡',
		emoji: '🤡',
		color: 'text-indigo-500',
		ariaLabel: 'Clown 🤡',
	},
] satisfies ReadonlyArray<ReactionConfigItem>
