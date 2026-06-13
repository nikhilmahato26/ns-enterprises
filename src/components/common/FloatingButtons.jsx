import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Phone, MessageSquareText, ArrowUp } from 'lucide-react'
import { business, telLink, whatsappLink } from '../../data/business'

/**
 * Sticky action rail: WhatsApp, Call, Enquiry + a Scroll-to-top button.
 */
export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  const items = [
    {
      label: 'WhatsApp',
      href: whatsappLink(),
      icon: FaWhatsapp,
      className: 'bg-[#25D366] text-white',
      external: true,
    },
    {
      label: 'Call Now',
      href: telLink,
      icon: Phone,
      className: 'bg-walnut-gradient text-ivory-50',
    },
    {
      label: 'Enquiry',
      href: '#contact',
      icon: MessageSquareText,
      className: 'bg-gold-gradient text-matte-900',
    },
  ]

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <motion.a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            {...(item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className={`group flex h-12 w-12 items-center justify-center rounded-full shadow-luxe ring-1 ring-white/30 transition-all ${item.className}`}
          >
            <Icon className="h-5 w-5" />
            <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-full bg-matte-900 px-3 py-1.5 text-xs font-medium text-ivory-50 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
              {item.label}
            </span>
          </motion.a>
        )
      })}

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-walnut-700/20 bg-ivory-50 text-walnut-800 shadow-luxe"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
