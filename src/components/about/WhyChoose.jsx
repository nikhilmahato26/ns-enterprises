import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { whyChoose } from '../../data/content'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'

export default function WhyChoose() {
  return (
    <section className="section-pad relative overflow-hidden bg-matte-900">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-walnut-600/20 blur-3xl" />

      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose"
          highlight="NS ENTERPRISES"
          intro="A trusted name in luxury furniture — where premium materials, expert craftsmanship and customer satisfaction come together."
          variant="light"
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChoose.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-ivory-200/10 bg-ivory-200/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-gold-400/40"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-matte-900 shadow-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ivory-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-200/65">{item.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
