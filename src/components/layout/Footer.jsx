import { Phone, Mail, MapPin } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP, FaWhatsapp } from 'react-icons/fa'
import Logo from '../common/Logo'
import { collections } from '../../data/collections'
import { business, telLink, mailLink, whatsappLink } from '../../data/business'

const socials = [
  { icon: FaInstagram, href: business.socials.instagram, label: 'Instagram' },
  { icon: FaFacebookF, href: business.socials.facebook, label: 'Facebook' },
  { icon: FaYoutube, href: business.socials.youtube, label: 'YouTube' },
  { icon: FaPinterestP, href: business.socials.pinterest, label: 'Pinterest' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-matte-900 text-ivory-200">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-walnut-600/20 blur-3xl" />

      <div className="container-luxe relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory-200/70">
            Premium furniture crafted with passion — bringing elegance, comfort and luxury
            to every home and workspace across India.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ivory-200/15 text-ivory-200/80 transition-all hover:border-gold-400 hover:bg-gold-gradient hover:text-matte-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="font-display text-base font-semibold text-ivory-50">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-ivory-200/70 transition-colors hover:text-gold-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div className="lg:col-span-3">
          <h4 className="font-display text-base font-semibold text-ivory-50">Collections</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {collections.map((c) => (
              <li key={c.id}>
                <a
                  href="#collections"
                  className="text-ivory-200/70 transition-colors hover:text-gold-300"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="font-display text-base font-semibold text-ivory-50">Get In Touch</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={telLink} className="flex items-start gap-3 text-ivory-200/70 transition-colors hover:text-gold-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={mailLink} className="flex items-start gap-3 break-all text-ivory-200/70 transition-colors hover:text-gold-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-ivory-200/70 transition-colors hover:text-gold-300"
              >
                <FaWhatsapp className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3 text-ivory-200/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {business.address.line1}, {business.address.line2}
                <br />
                {business.address.district}, {business.address.state}, {business.address.country}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-200/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory-200/50 sm:flex-row">
          <p>© {new Date().getFullYear()} NS ENTERPRISES. All rights reserved.</p>
          <p>Luxury Furniture Manufacturer · Pan India · Made in Jalandhar, Punjab</p>
        </div>
      </div>
    </footer>
  )
}
