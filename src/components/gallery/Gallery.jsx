import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { gallery } from '../../data/gallery'
import { scaleIn, stagger, viewportOnce } from '../../utils/motion'

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-ivory-200">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Featured Gallery"
          title="A Glimpse Of Our"
          highlight="Craftsmanship"
          intro="From luxury sofas to modular kitchens and hotel furniture — a curated look at the spaces we bring to life."
        />

        {/* Masonry via CSS columns */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          {gallery.map((item) => (
            <motion.figure
              key={item.id}
              variants={scaleIn}
              className="group relative block break-inside-avoid overflow-hidden rounded-2xl shadow-luxe ring-1 ring-walnut-700/5"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 ${
                  item.h === 'tall' ? 'h-[420px]' : 'h-[280px]'
                }`}
              />
              {/* Glassmorphism overlay */}
              <figcaption className="absolute inset-0 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-matte-900/80 via-matte-900/20 to-transparent" />
                <div className="relative m-4 flex items-center justify-between rounded-xl border border-white/30 bg-white/15 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-luxe text-gold-300">
                      {item.category}
                    </p>
                    <p className="mt-0.5 font-display text-lg font-semibold text-ivory-50">
                      {item.title}
                    </p>
                  </div>
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-gradient text-matte-900">
                    <Plus className="h-5 w-5" />
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
