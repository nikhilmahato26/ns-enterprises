import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionHeading from '../common/SectionHeading'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-ivory-200">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Loved By Homes"
          highlight="Across India"
          intro="The trust of a thousand happy customers — from homeowners to designers and hoteliers."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div className="flex h-full flex-col rounded-2xl border border-walnut-700/10 bg-ivory-50 p-7 shadow-luxe">
                  <Quote className="h-9 w-9 text-gold-300" />
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-walnut-700">
                    “{t.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3 border-t border-walnut-700/10 pt-4">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-walnut-gradient font-display text-base font-bold text-ivory-50">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-walnut-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-walnut-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
