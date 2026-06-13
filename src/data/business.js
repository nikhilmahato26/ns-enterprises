// Central business / brand information for NS ENTERPRISES
export const business = {
  name: 'NS ENTERPRISES',
  tagline: 'All Types of Luxury Furnitures',
  phone: '+91 7986402037',
  phoneRaw: '917986402037',
  email: 'office@nsenterprisecom.org',
  whatsapp: '917986402037',
  whatsappMessage:
    "Hello NS ENTERPRISES, I'm interested in your luxury furniture collections. I'd like to enquire about",
  address: {
    line1: 'Vishavkarma Market',
    line2: 'Kartarpur',
    district: 'District Jalandhar',
    state: 'Punjab',
    country: 'India',
  },
  socials: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
    pinterest: '#',
  },
}

export const whatsappLink = (msg) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    msg || `${business.whatsappMessage} your collections.`
  )}`

export const telLink = `tel:+${business.phoneRaw}`
export const mailLink = `mailto:${business.email}`
