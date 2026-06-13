import { motion } from 'framer-motion'
import useCountUp from '../../hooks/useCountUp'
import { stats } from '../../data/content'

function StatItem({ stat }) {
  const [ref, value] = useCountUp(stat.value || 0)
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl lg:text-4xl">
        {stat.value !== null ? `${value}${stat.suffix || ''}` : stat.text}
      </span>
      <span className="mt-1 text-[0.7rem] font-medium uppercase tracking-wide text-ivory-200/80 sm:text-xs">
        {stat.label}
      </span>
    </div>
  )
}

export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container-luxe"
    >
      <div className="mb-[-1px] grid grid-cols-2 gap-4 rounded-t-2xl border border-b-0 border-white/10 bg-matte-900/90 px-6 py-6 backdrop-blur-md sm:grid-cols-4 sm:px-10">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </motion.div>
  )
}
