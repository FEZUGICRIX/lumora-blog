import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from '@/shared/ui/icon'
import { TooltipWithText } from './TooltipWithText'
import { socialLinks } from '@/shared/constants'

export const SocialLinks = () => {
	return (
		<div className='ml-6 hidden items-center gap-4 text-zinc-700 md:flex dark:text-zinc-300'>
			<div className='flex items-center gap-2'>
				<Link
					href={socialLinks.linkedin}
					target='_blank'
					className='glass-icon'
				>
					<TooltipWithText text='LinkedIn'>
						<LinkedinIcon />
					</TooltipWithText>
				</Link>
				<Link
					href={socialLinks.github}
					target='_blank'
					className='glass-icon'
				>
					<TooltipWithText text='GitHub'>
						<GithubIcon />
					</TooltipWithText>
				</Link>
			</div>
		</div>
	)
}
