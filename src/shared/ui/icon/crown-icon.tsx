import type { SVGProps } from 'react'

import { cn } from '@/shared/lib/shadcn/utils'

interface CrownIconProps extends SVGProps<SVGSVGElement> {
	className?: string
}

export const CrownIcon = ({ className, ...props }: CrownIconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 512 512'
		{...props}
		className={cn(
			'h-[20px] w-[20px] text-black transition dark:text-zinc-300',
			className,
		)}
	>
		<defs>
			<linearGradient id='goldGradient' x1='10%' y1='10%' x2='90%' y2='90%'>
				<stop offset='0%' stopColor='#FFE585' />
				<stop offset='25%' stopColor='#FFC629' />
				<stop offset='60%' stopColor='#F59F00' />
				<stop offset='100%' stopColor='#D96B00' />
			</linearGradient>

			<linearGradient id='depthGradient' x1='50%' y1='0%' x2='50%' y2='100%'>
				<stop offset='0%' stopColor='#FFFFFF' stopOpacity='0.4' />
				<stop offset='100%' stopColor='#000000' stopOpacity='0.1' />
			</linearGradient>

			<linearGradient id='shineGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
				<stop offset='0%' stopColor='#FFFFFF' stopOpacity='0' />
				<stop offset='50%' stopColor='#FFFFFF' stopOpacity='0.7' />
				<stop offset='100%' stopColor='#FFFFFF' stopOpacity='0' />
			</linearGradient>

			<filter id='dropShadow' x='-20%' y='-20%' width='140%' height='140%'>
				<feGaussianBlur in='SourceAlpha' stdDeviation='10' />
				<feOffset dx='0' dy='10' result='offsetblur' />
				<feComponentTransfer>
					<feFuncA type='linear' slope='0.3' />
				</feComponentTransfer>
				<feMerge>
					<feMergeNode />
					<feMergeNode in='SourceGraphic' />
				</feMerge>
			</filter>

			<path
				id='crownPath'
				d='M 120 380 C 120 380 140 430 256 430 C 372 430 392 380 392 380 L 412 180 L 332 260 L 256 90 L 180 260 L 100 180 L 120 380 Z'
			/>
		</defs>

		<g filter='url(#dropShadow)'>
			<animateTransform
				attributeName='transform'
				type='translate'
				values='0,0; 0,-15; 0,0'
				dur='2s'
				repeatCount='indefinite'
				calcMode='spline'
				keySplines='0.45 0 0.55 1; 0.45 0 0.55 1'
			/>

			<use xlinkHref='#crownPath' fill='url(#goldGradient)' />

			<use xlinkHref='#crownPath' fill='url(#depthGradient)' />

			<circle cx='100' cy='180' r='18' fill='#FFE585'>
				<animate
					attributeName='r'
					values='18;20;18'
					dur='1s'
					repeatCount='indefinite'
				/>
			</circle>
			<circle cx='256' cy='90' r='22' fill='#FFF2B2'>
				<animate
					attributeName='r'
					values='22;24;22'
					dur='1s'
					repeatCount='indefinite'
				/>
			</circle>
			<circle cx='412' cy='180' r='18' fill='#FFE585'>
				<animate
					attributeName='r'
					values='18;20;18'
					dur='1s'
					repeatCount='indefinite'
				/>
			</circle>

			<g clipPath='url(#crownClip)'>
				<clipPath id='crownClip'>
					<use xlinkHref='#crownPath' />
				</clipPath>

				<rect
					x='-300'
					y='-100'
					width='100'
					height='600'
					fill='url(#shineGradient)'
					transform='rotate(25)'
				>
					<animate
						attributeName='x'
						from='-400'
						to='800'
						dur='4s'
						repeatCount='indefinite'
						begin='1s'
					/>
				</rect>
			</g>

			<path
				d='M 130 370 Q 256 400 382 370 L 395 230 Q 340 290 332 260 L 256 120 L 180 260 Q 172 290 117 230 Z'
				fill='white'
				fillOpacity='0.15'
				transform='scale(0.9) translate(28, 20)'
			/>
		</g>
	</svg>
)
