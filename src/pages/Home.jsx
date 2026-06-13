import Hero from '../components/hero/Hero'
import Marquee from '../components/common/Marquee'
import Collections from '../components/collections/Collections'
import WhyChoose from '../components/about/WhyChoose'
import Gallery from '../components/gallery/Gallery'
import About from '../components/about/About'
import Process from '../components/about/Process'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Collections />
      <WhyChoose />
      <About />
      <Gallery />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
