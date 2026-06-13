import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { collections } from '../../data/collections'
import { whatsappLink, business } from '../../data/business'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'

function CollectionCard({ item }) {
  return (
    <motion.a
      variants={fadeUp}
      href={whatsappLink(`${business.whatsappMessage} your ${item.title} collection.`)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl shadow-luxe ring-1 ring-walnut-700/5 ${item.span} min-h-[260px]`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-matte-900/85 via-matte-900/25 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="eyebrow text-gold-300">{item.subtitle}</span>
        <h3 className="mt-2 font-display text-2xl font-bold text-ivory-50">{item.title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory-200/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
          Enquire Now <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-ivory-50 backdrop-blur-md transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-matte-900">
        <ArrowUpRight className="h-5 w-5" />
      </div>
    </motion.a>
  )
}

export default function Collections() {
  return (
    <section id="collections" className="section-pad bg-ivory-100">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Our Collections"
          title="Premium Furniture"
          highlight="Collections"
          intro="Explore signature collections crafted for every space — from statement living rooms to refined workspaces."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {collections.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
