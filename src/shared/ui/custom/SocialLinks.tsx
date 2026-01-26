import { SOCIAL_LINKS } from '@/shared/constants'
import { GithubIcon, LinkedinIcon, TelegramIcon } from '@/shared/ui/icon'

import { TooltipWithText } from './TooltipWithText'

interface SocialLinksProps {
	className?: string
}

export const SocialLinks = ({ className }: SocialLinksProps) => {
	return (
		<div
			className={`flex items-center gap-4 text-zinc-700 dark:text-zinc-300 ${className ?? className}`}
		>
			<div className='flex items-center gap-2'>
				<a href={SOCIAL_LINKS.linkedin} target='_blank' className='glass-icon'>
					<TooltipWithText text='LinkedIn'>
						<LinkedinIcon />
					</TooltipWithText>
				</a>
				<a href={SOCIAL_LINKS.github} target='_blank' className='glass-icon'>
					<TooltipWithText text='GitHub'>
						<GithubIcon />
					</TooltipWithText>
				</a>
				<a href={SOCIAL_LINKS.telegram} target='_blank' className='glass-icon'>
					<TooltipWithText text='Telegram'>
						<TelegramIcon />
					</TooltipWithText>
				</a>
			</div>
		</div>
	)
}
