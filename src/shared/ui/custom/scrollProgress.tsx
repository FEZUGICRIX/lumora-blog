'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { type RefObject } from 'react'

interface ScrollProgressProps {
	target: RefObject<HTMLElement | null>
}

export const ScrollProgress = ({ target }: ScrollProgressProps) => {
	const { scrollYProgress } = useScroll({
		target,
		offset: ['start start', 'end end'],
	})

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: 0.2,
	})

	return (
		<motion.div
			style={{ scaleX }}
			className='fixed top-0 left-0 z-50 h-[4px] w-full origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
		/>
	)
}
