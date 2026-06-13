import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { processSteps } from '../../data/content'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'

export default function Process() {
  return (
    <section id="process" className="section-pad bg-walnut-gradient">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Simple"
          highlight="4-Step Process"
          intro="From the first idea to white-glove delivery — a seamless journey to your perfect furniture."
          variant="light"
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, i) => (
            <motion.div key={step.step} variants={fadeUp} className="relative">
              <div className="group h-full rounded-2xl border border-ivory-200/15 bg-ivory-50/[0.06] p-7 backdrop-blur-sm transition-all hover:bg-ivory-50/[0.12]">
                <span className="font-display text-5xl font-bold text-gold-400/40 transition-colors group-hover:text-gold-300/70">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ivory-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-200/70">{step.text}</p>
              </div>

              {/* Connector arrow */}
              {i < processSteps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                  <ChevronRight className="h-7 w-7 text-gold-400/60" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
