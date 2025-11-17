import { SOCIAL_LINKS } from '@/shared/constants'
import { GithubIcon, LinkedinIcon } from '@/shared/ui/icon'
import { TooltipWithText } from './TooltipWithText'

export const SocialLinks = () => {
	return (
		<div className='ml-6 flex items-center gap-4 text-zinc-700 dark:text-zinc-300'>
			<div className='flex items-center gap-2'>
				<a
					href={SOCIAL_LINKS.linkedin}
					target='_blank'
					className='glass-icon'
				>
					<TooltipWithText text='LinkedIn'>
						<LinkedinIcon />
					</TooltipWithText>
				</a>
				<a
					href={SOCIAL_LINKS.github}
					target='_blank'
					className='glass-icon'
				>
					<TooltipWithText text='GitHub'>
						<GithubIcon />
					</TooltipWithText>
				</a>
			</div>
		</div>
	)
}
