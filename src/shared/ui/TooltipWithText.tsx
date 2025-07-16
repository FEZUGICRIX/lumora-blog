import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/shared/ui/ui-kit/tooltip'

interface Props {
	text: string
	children: React.ReactNode
}

export const TooltipWithText = ({ text, children }: Props) => (
	<Tooltip>
		<TooltipTrigger asChild>{children}</TooltipTrigger>
		<TooltipContent>{text}</TooltipContent>
	</Tooltip>
)
