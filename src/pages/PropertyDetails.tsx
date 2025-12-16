import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Ruler, Layers, ShieldCheck, Droplet, BadgePercent, Calendar, Clock } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { properties } from '../data/properties'
import { PropertyCard } from '../components/PropertyCard'
import { SectionHeading } from '../components/SectionHeading'
import type { Property } from '../types/property'
import { submitLead } from '../lib/forms'

const infoItems = [
  { label: 'Plot sizes', icon: Ruler, accessor: (property: Property) => property.plotSizes },
  { label: 'Total acreage', icon: Layers, accessor: (property: Property) => property.acres },
  { label: 'Land use approval', icon: ShieldCheck, accessor: (property: Property) => property.landUse },
  { label: 'Utilities ready', icon: Droplet, accessor: (property: Property) => property.utilities.join(', ') },
  { label: 'Status', icon: BadgePercent, accessor: (property: Property) => property.status },
  { label: 'Category', icon: MapPin, accessor: (property: Property) => property.category },
]

export function PropertyDetails() {
  const { id } = useParams()
  const property = properties.find((item) => item.id === id)
  const similar = useMemo(() => {
    if (!property) return []
    return properties
      .filter((item) => item.id !== property.id && (item.city === property.city || item.category === property.category))
      .slice(0, 3)
  }, [property])

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  if (!property) {
    return (
      <div className="space-y-6 text-center text-slate">
        <p>We could not find this property.</p>
        <Link to="/properties" className="text-gold hover:underline">
          Back to Properties
        </Link>
      </div>
    )
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus('success')
    try {
      submitLead({
        ...formState,
        form: 'site-visit',
        property: property.title,
        city: property.city,
      }).catch(() => {
        /* swallow errors to keep success UI */
      })
    } finally {
      setFormState({ name: '', email: '', phone: '', date: '', time: '', notes: '' })
    }
  }

  const updateField = (field: keyof typeof formState, value: string) => {
    setFormState({ ...formState, [field]: value })
  }

  return (
    <div className="space-y-16">
      <section className="overflow-hidden rounded-3xl border border-border/60">
        <img src={property.mainImage} alt={property.title} className="h-[420px] w-full object-cover" />
      </section>
      <section className="grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-8 rounded-3xl border border-border/60 bg-panel p-8 text-slate shadow-xl">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-emerald">
              <MapPin className="h-4 w-4 text-gold" />
              {property.location}
            </p>
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold text-ink">{property.title}</h1>
              <p className="text-lg text-slate">Our aims to create a reliable and organized land-buying experience.</p>
            </div>
            <p className="text-2xl font-semibold text-ink">{property.price}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-border/60 p-4">
                <item.icon className="mt-0.5 h-6 w-6 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate">{item.label}</p>
                  <p className="text-sm text-ivory">{item.accessor(property)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <SectionHeading title="Overview" description={property.description} />
          </div>
          {property.features && property.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-ink">Project features</h3>
              <ul className="grid gap-2 text-sm text-ivory sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {property.benefits && property.benefits.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-ink">Investment benefits</h3>
              <ul className="grid gap-2 text-sm text-ivory sm:grid-cols-2">
                {property.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink">Site highlights</h3>
            <div className="flex flex-wrap gap-3">
              {property.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-chipborder bg-chip px-4 py-2 text-xs text-ink"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink">Connectivity & Access</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {property.connectivity.map((point) => (
                <div key={point.name} className="rounded-2xl border border-border/60 bg-panel p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald">{point.category}</p>
                  <p className="mt-2 text-lg font-semibold text-ink">{point.name}</p>
                  <p className="text-sm text-slate">{point.distance}</p>
                  <p className="mt-2 text-sm text-slate">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          {property.nearbyFacilities && property.nearbyFacilities.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-ink">Nearby facilities</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {property.nearbyFacilities.map((facility) => (
                  <div key={facility.name} className="flex items-center justify-between rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-ivory">
                    <span className="text-ink">{facility.name}</span>
                    <span className="text-slate">{facility.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ivory">Gallery</h3>
            <div className="relative -mx-2 sm:-mx-4">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={14}
                slidesPerView={1.05}
                loop
                centeredSlides
                navigation={{ prevEl: '.property-gallery-prev', nextEl: '.property-gallery-next' }}
                pagination={{ el: '.property-gallery-pagination', clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1.5, spaceBetween: 16 },
                  1024: { slidesPerView: 2.3, spaceBetween: 18 },
                }}
                className="pb-10"
              >
                {property.galleryImages.map((image) => (
                  <SwiperSlide key={image} className="!h-auto">
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-panel shadow-[0_16px_70px_rgba(0,0,0,0.08)]">
                      <div
                        className="absolute inset-0 scale-110 blur-[32px] opacity-75"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        aria-hidden
                      />
                      <img
                        src={image}
                        alt={property.title}
                        className="relative z-10 h-40 w-full object-cover sm:h-48"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-2">
                <button
                  className="property-gallery-prev pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-night/90 text-ink shadow-lg transition hover:scale-105 hover:bg-white"
                  aria-label="Previous property gallery image"
                >
                  ‹
                </button>
                <button
                  className="property-gallery-next pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-night/90 text-ink shadow-lg transition hover:scale-105 hover:bg-white"
                  aria-label="Next property gallery image"
                >
                  ›
                </button>
              </div>

              <div className="property-gallery-pagination absolute inset-x-0 -bottom-1 flex justify-center gap-2" />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-border/60 bg-panel p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-ivory">Book a site visit</h3>
            <p className="mt-1 text-sm text-slate">Share your details and we will schedule a guided connectivity tour.</p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-slate">Full Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-slate">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-slate">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate">
                    <Calendar className="h-4 w-4 text-gold" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formState.date}
                    onChange={(event) => updateField('date', event.target.value)}
                    className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate">
                    <Clock className="h-4 w-4 text-gold" />
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    required
                    value={formState.time}
                    onChange={(event) => updateField('time', event.target.value)}
                    className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-slate">Notes</label>
                <textarea
                  rows={3}
                  value={formState.notes}
                  onChange={(event) => updateField('notes', event.target.value)}
                  className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-glow transition hover:scale-[1.01] hover:bg-ink hover:text-panel disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'success' ? 'Booked' : status === 'loading' ? 'Booking...' : 'Schedule Tour'}
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-4 text-center text-sm text-emerald">Thank you. Your enquiry is sent. We will connect shortly.</p>
            )}
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Similar"
            title="Explore more connected plots"
            description="More parcels within the same city or category."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {similar.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
