import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const directions = {
  up: { initial: { y: 60, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  down: { initial: { y: -60, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  left: { initial: { x: 60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  right: { initial: { x: -60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  scale: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  style = {},
  as = 'div',
}) {
  const { ref, isInView } = useScrollAnimation()
  const variant = directions[direction] || directions.up
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      initial={variant.initial}
      animate={isInView ? variant.animate : variant.initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
