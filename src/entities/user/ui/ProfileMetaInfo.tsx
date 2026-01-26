'use client'

import { useTranslations } from 'next-intl'

import { useFormattedDate } from '@/shared/config/dayjs'

interface ProfileMetaInfoProps {
	joinedDate: Date
}

export const ProfileMetaInfo = ({ joinedDate }: ProfileMetaInfoProps) => {
	const t = useTranslations('entities.user.profile')
	const formattedDate = useFormattedDate(joinedDate)

	return (
		<div className='border-border/50 bg-card/30 flex items-center justify-between rounded-2xl border px-6 py-4'>
			<span className='text-muted-foreground text-sm'>{t('joinedDate')}</span>
			<span className='text-sm'>
				{t('joined')} {formattedDate}
			</span>
		</div>
	)
}
