import { motion } from 'framer-motion'

const items = [
  'Luxury Sofas',
  'Designer Beds',
  'Modular Kitchens',
  'Office Interiors',
  'Custom Furniture',
  'Dining Sets',
  'Wardrobes',
  'Hotel Furniture',
  'TV Units',
]

/**
 * Continuous scrolling keyword marquee — a premium accent strip.
 */
export default function Marquee() {
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-walnut-700/10 bg-matte-900 py-5">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg font-medium tracking-wide text-ivory-200/70">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-gradient" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
