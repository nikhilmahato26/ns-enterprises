import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/motion'

/**
 * Consistent premium section heading with eyebrow, title and optional intro.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = 'center',
  variant = 'dark',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const titleColor = variant === 'light' ? 'text-ivory-50' : 'text-walnut-900'
  const introColor = variant === 'light' ? 'text-ivory-200/80' : 'text-walnut-600'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-gold-400" />
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}{' '}
        {highlight && <span className="text-gradient-gold italic">{highlight}</span>}
      </h2>
      {intro && <p className={`text-base leading-relaxed ${introColor}`}>{intro}</p>}
    </motion.div>
  )
}
