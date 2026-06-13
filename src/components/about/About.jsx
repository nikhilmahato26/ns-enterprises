import { motion } from 'framer-motion'
import { Check, Phone } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'
import { telLink } from '../../data/business'

const highlights = [
  'Premium materials & luxury finishing',
  'Handcrafted by expert artisans',
  'Custom furniture, made to your needs',
  'Manufactured & delivered Pan India',
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-ivory-100">
      <div className="container-luxe grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-luxe ring-1 ring-walnut-700/5">
            <img
              src="https://i.pinimg.com/webp/736x/ab/19/bb/ab19bb87f631959bbf421a6e12aee9fa.webp"
              alt="Artisan crafting premium furniture"
              className="h-[460px] w-full object-cover sm:h-[540px]"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-44 overflow-hidden rounded-2xl shadow-luxe ring-4 ring-ivory-100 sm:block lg:-right-8">
            <img
              src="https://i.pinimg.com/736x/d6/ab/78/d6ab7879f6cea0293c179a98004a70d6.jpg"
              alt="Detail of wooden furniture finishing"
              className="h-40 w-full object-cover"
            />
          </div>
          {/* Experience badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card absolute -left-4 top-8 px-5 py-4 lg:-left-8"
          >
            <p className="font-display text-3xl font-bold text-gradient-gold">100%</p>
            <p className="text-xs font-medium text-walnut-700">Handcrafted Quality</p>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-px w-6 bg-gold-400" />
            About NS ENTERPRISES
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-bold leading-tight text-walnut-900 sm:text-4xl lg:text-[2.75rem]"
          >
            Furniture Crafted With{' '}
            <span className="text-gradient-gold italic">Passion</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-walnut-700"
          >
            NS ENTERPRISES specializes in premium furniture solutions with a focus on
            quality, craftsmanship and timeless design. From homes to offices, we create
            furniture that combines beauty with functionality.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-gradient text-matte-900">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-walnut-800">{h}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a href="#collections" className="btn-primary">
              View Collections
            </a>
            <a href={telLink} className="btn-outline">
              <Phone className="h-4 w-4" />
              Talk To Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
