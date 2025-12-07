'use client'

interface ProfileMetaInfoProps {
	joinedDate: string
}

export const ProfileMetaInfo = ({ joinedDate }: ProfileMetaInfoProps) => {
	return (
		<div className='border-border/50 bg-card/30 flex items-center justify-between rounded-2xl border px-6 py-4'>
			<span className='text-muted-foreground text-sm'>Дата регистрации</span>
			<span className='text-sm'>Joined {joinedDate}</span>
		</div>
	)
}
