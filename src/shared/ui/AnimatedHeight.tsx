'use client'

import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'

interface Props {
	children: React.ReactNode
}

export const AnimatedHeight = ({ children }: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState<number | 'auto'>('auto')

	useLayoutEffect(() => {
		if (ref.current) {
			setHeight(ref.current.scrollHeight)
		}
	}, [children])

	return (
		<motion.div
			animate={{ height }}
			initial={{ height: 0 }}
			exit={{ height: 0 }}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			className='overflow-hidden'
		>
			<div ref={ref}>{children}</div>
		</motion.div>
	)
}
