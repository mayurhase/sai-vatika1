import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import type { Swiper as SwiperType } from 'swiper'
import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { properties } from '../data/properties'
import { FeaturedProject } from '../components/FeaturedProject'
import { ContactForm } from '../components/ContactForm'

const siteSlides = [
  {
    src: '/assets/sai-home1.jpg',
    title: 'Sai Vatika approach',
    description: 'Fresh captures of the main approach road framed by new plantation.',
  },
  {
    src: '/assets/sai-home2.jpg',
    title: 'Plot-side greenery',
    description: 'Internal roads with green buffers ready for visitors and weekend stays.',
  },
  {
    src: '/assets/sai-home3.jpg',
    title: 'Wide internal access',
    description: 'A clear look at the plotted grid with services running in.',
  },
]

export function Home() {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [navReady, setNavReady] = useState(false)

  useEffect(() => {
    setNavReady(true)
  }, [])

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper || !prevRef.current || !nextRef.current) return
    swiper.params.navigation = {
      ...swiper.params.navigation,
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    }
    swiper.navigation.destroy()
    swiper.navigation.init()
    swiper.navigation.update()
  }, [navReady])

  return (
    <div className="space-y-24">
      <Hero />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest photos"
          title="See Sai Vatika right now"
          description="A quick slider with the three fresh photos currently in the project library."
        />
        <div className="relative -mx-4 overflow-hidden rounded-[32px] border border-border/40 bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:-mx-6 lg:-mx-10 xl:-mx-14">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation = {
                ...swiper.params.navigation,
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            className="h-[380px] sm:h-[500px] lg:h-[640px]"
          >
            {siteSlides.map((slide) => (
              <SwiperSlide key={slide.src}>
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0"
                    aria-hidden
                  >
                    <img
                      src={slide.src}
                      alt=""
                      className="h-full w-full scale-[1.1] object-cover blur-[38px] opacity-200"
                      loading="lazy"
                    />
                  </div>
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="relative z-10 max-h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 sm:px-6">
            <button
              type="button"
              ref={prevRef}
              onClick={() => swiperRef.current?.slidePrev()}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition hover:scale-105 hover:bg-white hover:text-ink cursor-pointer active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              ref={nextRef}
              onClick={() => swiperRef.current?.slideNext()}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition hover:scale-105 hover:bg-white hover:text-ink cursor-pointer active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="home-swiper-pagination pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-2 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:bg-gold [&_.swiper-pagination-bullet]:bg-white/70" />
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading eyebrow="Shirdi Project" title="Sai Vatika Shirdi" />
        <FeaturedProject property={properties[0]} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Video"
          title="Project walkthroughs"
          description="Preview the site experience; full YouTube videos play inline."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {['https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/5NV6Rdv1a3I'].map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-border/60 bg-panel shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src={src}
                  title="Project video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Enquiry"
          title="Plan your visit"
          description="Share your details and we'll set up a guided walkthrough."
        />
        <ContactForm />
      </section>
    </div>
  )
}
