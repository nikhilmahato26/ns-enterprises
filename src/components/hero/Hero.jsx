import { motion } from 'framer-motion'
import { Phone, ArrowRight, Star, Sparkles } from 'lucide-react'
import { fadeUp, stagger } from '../../utils/motion'
import { telLink } from '../../data/business'
import Stats from './Stats'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury living room with premium wooden furniture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ivory-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory-100 via-transparent to-transparent" />
      </div>

      <div className="container-luxe grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left copy */}
        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.span
            variants={fadeUp}
            className="glass-card inline-flex items-center gap-2 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-luxe text-walnut-800"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-500" />
            Pan India Luxury Furniture
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] text-walnut-900 sm:text-5xl lg:text-6xl"
          >
            Crafting Timeless Furniture For Modern Homes
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-display text-2xl italic text-gradient-gold sm:text-3xl"
          >
            NS ENTERPRISES
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-walnut-700 sm:text-lg"
          >
            Premium furniture collections designed to bring elegance, comfort and luxury
            to every home and workspace.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className="btn-primary">
              Explore Collections
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Us
            </a>
            <a href={telLink} className="btn-gold">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-3 text-sm text-walnut-700"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="font-medium">Trusted by 1000+ happy customers across India</span>
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxe ring-1 ring-white/40">
            <img
              src="https://i.pinimg.com/webp/736x/aa/77/81/aa778185877859539d59e4b05f5093ba.webp"
              alt="Premium interior with luxury furniture"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-900/30 to-transparent" />
          </div>

          {/* Floating glass card — top */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card absolute -left-3 top-10 hidden p-4 sm:block lg:-left-8"
          >
            <p className="font-display text-2xl font-bold text-walnut-900">500+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-walnut-600">
              Furniture Designs
            </p>
          </motion.div>

          {/* Floating glass card — bottom */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card absolute -right-3 bottom-12 hidden items-center gap-3 p-4 sm:flex lg:-right-8"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient">
              <Sparkles className="h-5 w-5 text-matte-900" />
            </div>
            <div>
              <p className="font-display text-base font-bold text-walnut-900">Premium</p>
              <p className="text-xs font-medium text-walnut-600">Craftsmanship</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="absolute inset-x-0 bottom-0">
        <Stats />
      </div>
    </section>
  )
}
