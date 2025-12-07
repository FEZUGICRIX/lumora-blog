import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/ui-kit'

interface AvatarProps {
	displayName: string
	avatarUrl?: string | null
	className?: string
}

export const UserAvatar = ({
	displayName,
	avatarUrl,
	className,
}: AvatarProps) => {
	return (
		<Avatar className={className}>
			<AvatarImage className='object-cover' src={avatarUrl ?? undefined} />
			<AvatarFallback>{displayName?.charAt(0).toUpperCase()}</AvatarFallback>
		</Avatar>
	)
}
