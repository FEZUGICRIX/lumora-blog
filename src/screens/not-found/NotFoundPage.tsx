import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Button, FuzzyText } from '@/shared/ui/ui-kit'

export function NotFoundPage({ color }: { color?: string }) {
	const t = useTranslations('screens.notFound')

	return (
		<div className='bg-background flex min-h-screen flex-col items-center justify-center p-8 text-center text-shadow-black dark:text-white'>
			<div className='space-y-6'>
				<FuzzyText
					color={color}
					fontSize={80}
					baseIntensity={0.3}
					hoverIntensity={1.43}
					enableHover={true}
				>
					404
				</FuzzyText>

				<h2
					className='text-3xl font-bold tracking-tight md:text-4xl'
					style={{ fontSize: 30 }}
				>
					{t('title')}
				</h2>

				<p className='text-muted-foreground mx-auto max-w-md text-lg'>
					{t('description')}
				</p>

				<Button asChild size='lg'>
					<Link href='/'>{t('returnHome')}</Link>
				</Button>
			</div>
		</div>
	)
}
