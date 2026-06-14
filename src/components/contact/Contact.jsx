import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { business, telLink, mailLink, mailLink2, whatsappLink } from '../../data/business'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'

const requirements = [
  'Luxury Sofas',
  'Bedroom Furniture',
  'Dining Collections',
  'Office Furniture',
  'Modular Furniture',
  'Custom Furniture',
  'Other',
]

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: business.phone,
    href: telLink,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: business.email,
    value2: business.email2,
    href: mailLink,
    href2: mailLink2,
    isEmails: true,
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: `${business.address.line1}, ${business.address.line2}, ${business.address.district}, ${business.address.state}`,
    href: '#contact',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    requirement: requirements[0],
    city: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text =
      `*New Furniture Enquiry — NS ENTERPRISES*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Requirement:* ${form.requirement}%0A` +
      `*City:* ${form.city}%0A` +
      `*Message:* ${form.message}`
    window.open(
      `https://wa.me/${business.whatsapp}?text=${text}`,
      '_blank',
      'noopener,noreferrer'
    )
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputBase =
    'w-full rounded-xl border border-walnut-700/15 bg-ivory-50 px-4 py-3 text-sm text-walnut-900 placeholder:text-walnut-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300/40 transition'

  return (
    <section id="contact" className="section-pad bg-ivory-100">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Request Your"
          highlight="Free Enquiry"
          intro="Tell us what you have in mind. Our team will get back to you with the perfect furniture solution — anywhere in India."
        />

        {/* Contact cards */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-3"
        >
          {contactCards.map((c) => {
            const Icon = c.icon
            if (c.isEmails) {
              return (
                <motion.div
                  key={c.label}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-2xl border border-walnut-700/10 bg-ivory-50 p-6 shadow-sm"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-matte-900 shadow-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-luxe text-gold-600">
                      {c.label}
                    </p>
                    <div className="mt-1 flex flex-col gap-1 text-sm font-medium text-walnut-800">
                      <a href={c.href} className="hover:text-gold-600 transition-colors break-all">
                        {c.value}
                      </a>
                      <a href={c.href2} className="hover:text-gold-600 transition-colors break-all">
                        {c.value2}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            }
            return (
              <motion.a
                key={c.label}
                variants={fadeUp}
                href={c.href}
                className="group flex items-start gap-4 rounded-2xl border border-walnut-700/10 bg-ivory-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxe"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-matte-900 shadow-gold transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-luxe text-gold-600">
                    {c.label}
                  </p>
                  <p className="mt-1 break-words text-sm font-medium text-walnut-800">
                    {c.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-3xl border border-walnut-700/10 bg-ivory-50 p-7 shadow-luxe sm:p-9"
          >
            <h3 className="font-display text-2xl font-bold text-walnut-900">Send An Enquiry</h3>
            <p className="mt-1 text-sm text-walnut-600">
              Fill in the details and we'll connect with you shortly.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-walnut-700">Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputBase}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-walnut-700">Phone</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                  className={inputBase}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-walnut-700">
                  Furniture Requirement
                </label>
                <select
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  className={inputBase}
                >
                  {requirements.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-walnut-700">City</label>
                <input
                  required
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className={inputBase}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold text-walnut-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className={`${inputBase} resize-none`}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className="btn-primary">
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Enquiry
                  </>
                )}
              </button>
              <a href={telLink} className="btn-outline">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex bg-[#25D366] text-white hover:-translate-y-0.5 hover:shadow-luxe"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </motion.form>

          {/* Map + info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden rounded-3xl border border-walnut-700/10 shadow-luxe">
              <iframe
                title="NS ENTERPRISES Location — Kartarpur, Jalandhar"
                src="https://www.google.com/maps?q=Kartarpur,Jalandhar,Punjab,India&output=embed"
                className="h-[300px] w-full border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl bg-walnut-gradient p-7 text-ivory-100 shadow-luxe">
              <h3 className="font-display text-xl font-bold text-ivory-50">NS ENTERPRISES</h3>
              <p className="mt-1 text-sm text-ivory-200/80">{business.tagline}</p>
              <div className="mt-5 space-y-3 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  <span>
                    {business.address.line1}, {business.address.line2}
                    <br />
                    {business.address.district}, {business.address.state}, {business.address.country}
                  </span>
                </p>
                <a href={telLink} className="flex items-center gap-3 hover:text-gold-300">
                  <Phone className="h-4 w-4 text-gold-300" /> {business.phone}
                </a>
                <a href={mailLink} className="flex items-center gap-3 break-all hover:text-gold-300">
                  <Mail className="h-4 w-4 text-gold-300" /> {business.email}
                </a>
                <a href={mailLink2} className="flex items-center gap-3 break-all hover:text-gold-300">
                  <Mail className="h-4 w-4 text-gold-300" /> {business.email2}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
