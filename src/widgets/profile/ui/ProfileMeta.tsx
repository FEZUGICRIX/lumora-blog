'use client'

import { Calendar, Link as LinkIcon, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ProfileMetaProps {
	location?: string | null
	websiteUrl?: string | null
	joinedDate: string
}

export const ProfileMeta = ({
	location,
	websiteUrl,
	joinedDate,
}: ProfileMetaProps) => {
	const t = useTranslations('widgets.profile')

	return (
		<div className='text-muted-foreground flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs md:justify-start md:gap-x-4 md:text-sm'>
			{location && (
				<div className='flex items-center gap-1.5'>
					<MapPin className='size-3 md:size-3.5' />
					<span>{location}</span>
				</div>
			)}
			<div className='flex items-center gap-1.5'>
				<Calendar className='size-3 md:size-3.5' />
				<span>{t('joined')} {joinedDate}</span>
			</div>
			{websiteUrl && (
				<a
					href={
						websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`
					}
					target='_blank'
					rel='noopener noreferrer'
					className='text-primary flex items-center gap-1.5 hover:underline'
				>
					<LinkIcon className='size-3 md:size-3.5' />
					<span>{websiteUrl.replace(/^https?:\/\//, '')}</span>
				</a>
			)}
		</div>
	)
}
