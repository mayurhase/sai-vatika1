import { useMemo, useRef, useState } from 'react'
import { MapPin, Route, ShieldCheck, TreePine, BadgeCheck, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Property } from '../types/property'

interface FeaturedProjectProps {
  property: Property
  sitePlanSrc?: string
  locationMapSrc?: string
  showPlans?: boolean
  showGallery?: boolean
}

export function FeaturedProject({
  property,
  sitePlanSrc = '/assets/site-plan-current.png',
  locationMapSrc = '/assets/location-map.png',
  showPlans = true,
  showGallery = true,
}: FeaturedProjectProps) {
  const [siteSrc, setSiteSrc] = useState(property.sitePlanImage || sitePlanSrc)
  const [mapSrc, setMapSrc] = useState(property.locationMapImage || locationMapSrc)
  const sectionRef = useRef<HTMLElement | null>(null)
  const lanesRef = useRef<HTMLDivElement | null>(null)
  const connectivityRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ['start end', 'end start'],
  })
  const mapY = useTransform(scrollYProgress, [0, 1], ['-6px', '6px'])

  const features = property.features || []
  const benefits = property.benefits || []
  const facilities = property.nearbyFacilities || []
  const connectivity = property.connectivity
  const hasGallery = useMemo(() => (property.galleryImages || []).length > 0, [property.galleryImages])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const bulletVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-10"
    >
      {/* Band 1: title band */}
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-panel p-8 shadow-[0_30px_80px_rgba(0,0,0,0.06)] lg:p-12">
        <div className="absolute inset-y-6 left-0 w-1 rounded-full bg-gold" aria-hidden />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3 pl-4">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-emerald">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Current Project
            </p>
            <h2 className="text-3xl font-semibold text-ink">{property.title}</h2>
            <p className="text-base text-slate">{property.tagline}</p>
            <p className="inline-flex items-center gap-2 text-sm text-emerald">
              <MapPin className="h-4 w-4 text-gold" />
              {property.location}
            </p>
            <p className="text-xl font-semibold text-ink">{property.price}</p>
          </div>
          <span className="rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald">
            {property.status}
          </span>
        </div>
      </div>

      {showGallery && hasGallery && (
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">Gallery</p>
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-white shadow-inner">
            <div className="flex snap-x snap-mandatory overflow-x-auto">
              {(property.galleryImages || []).map((src, index) => (
                <div
                  key={src}
                  className="relative h-[360px] min-w-full snap-center overflow-hidden border-r border-border/50 last:border-r-0 md:h-[440px]"
                >
                  <img src={src} alt={`Gallery ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white">
                    {index + 1} / {(property.galleryImages || []).length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Plans: site + location map (single map) */}
      {showPlans && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">Site plan</p>
            </div>
            <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-white shadow-inner md:h-[520px]">
              <img
                src={siteSrc}
                alt="Site plan"
                className="h-full w-full object-contain"
                loading="lazy"
                onError={() => setSiteSrc(sitePlanSrc)}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">Location map</p>
            </div>
            <motion.div
              ref={mapRef}
              style={{ y: mapY }}
              className="flex h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-white shadow-inner md:h-[520px]"
            >
              <img
                src={mapSrc}
                alt="Location map"
                className="h-full w-full object-contain"
                loading="lazy"
                onError={() => setMapSrc(locationMapSrc)}
              />
            </motion.div>
          </div>
        </div>
      )}

      {/* Lanes: Features / Benefits / Nearby */}
      <motion.div
        ref={lanesRef}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        animate="show"
        className="grid gap-6 lg:grid-cols-3"
      >
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02, y: -2, boxShadow: '0 14px 40px rgba(0,0,0,0.08)' }}
          className="space-y-4 rounded-2xl bg-panel p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <div className="flex items-center gap-2 text-ink">
            <Sparkles className="h-5 w-5 text-ink" />
            <p className="text-lg font-semibold text-ink">Key Features</p>
          </div>
          <div className="space-y-3 text-sm text-ink">
            {features.map((feature) => (
              <motion.div
                key={feature}
                variants={bulletVariants}
                className="flex items-start gap-3 rounded-xl bg-panel/80 px-3 py-2 text-justify"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02, y: -2, boxShadow: '0 14px 40px rgba(0,0,0,0.08)' }}
          className="space-y-4 rounded-2xl bg-panel p-6 shadow-[0_22px_60px_rgba(0,0,0,0.07)]"
        >
          <div className="flex items-center gap-2 text-ink">
            <BadgeCheck className="h-5 w-5 text-ink" />
            <p className="text-lg font-semibold text-ink">Investment Benefits</p>
          </div>
          <div className="space-y-3 text-sm text-ink">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={bulletVariants}
                className="flex items-start gap-3 rounded-xl bg-panel/80 px-3 py-2 text-justify"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02, y: -2, boxShadow: '0 14px 40px rgba(0,0,0,0.08)' }}
          className="space-y-4 rounded-2xl bg-panel p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <div className="flex items-center gap-2 text-ink">
            <MapPin className="h-5 w-5 text-ink" />
            <p className="text-lg font-semibold text-ink">Nearby Facilities</p>
          </div>
          <div className="space-y-2 text-sm text-ink">
            {facilities.map((facility) => (
              <motion.div
                key={facility.name}
                variants={bulletVariants}
                className="flex items-center justify-between rounded-xl bg-panel/80 px-3 py-2"
              >
                <span className="flex items-center gap-2 text-ink">
                  <TreePine className="h-4 w-4 text-emerald" />
                  {facility.name}
                </span>
                <span className="whitespace-nowrap text-xs text-slate">{facility.distance}</span>
              </motion.div>
            ))}
            </div>
          </motion.div>
      </motion.div>

      {/* Connectivity */}
      <motion.div
        ref={connectivityRef}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-4 rounded-3xl border border-border/60 bg-panel p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald">Connectivity</p>
            <p className="text-sm text-slate">
              Temple, airport, rail, and highways within minutes - commutes and weekend travel made effortless.
            </p>
          </div>
          <Route className="h-6 w-6 flex-shrink-0 text-gold" />
        </div>
        <div className="rounded-2xl border border-border/60 bg-panel p-4 shadow-sm">
          <div className="divide-y divide-border/70 text-sm text-ivory">
            {connectivity.map((point) => (
              <motion.div
                key={point.name}
                variants={rowVariants}
                whileHover={{ scale: 1.01, backgroundColor: 'rgba(20,83,45,0.03)' }}
                className="flex items-center justify-between px-3 py-3"
              >
                <span className="font-semibold text-ink">{point.name}</span>
                <span className="whitespace-nowrap text-xs text-slate">{point.distance}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
