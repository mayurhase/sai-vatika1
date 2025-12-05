import { motion } from 'framer-motion'
import { Shield, Compass, BadgeCheck, Route, MapPin } from 'lucide-react'
import { Hero } from '../components/Hero'
import { StatsStrip } from '../components/StatsStrip'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { CTASection } from '../components/CTASection'
import { properties } from '../data/properties'
import { FeaturedProject } from '../components/FeaturedProject'

const testimonials = [
  {
    quote:
      'Sai Vatika gave us a corridor-by-corridor connectivity deck before we even travelled. Every plot visit in Nashik was routed around school runs and airport timings.',
    name: 'Manohar & Shreya Kulkarni',
    title: 'Parents & Entrepreneurs',
  },
  {
    quote:
      'For our Shirdi investment, the team documented shuttle schedules, temple proximity and even lease potential. The handover packet was better than most developers give.',
    name: 'Aditi N.',
    title: 'NRI Investor, Dubai',
  },
]

const features = [
  {
    icon: Route,
    title: 'Connectivity intelligence',
    description: 'Commute mapping across airports, highways, metros and schools for every plot we shortlist.',
  },
  {
    icon: Shield,
    title: 'Paperwork diligence',
    description: 'Layout approvals, title search, and infra readiness verified with independent legal partners.',
  },
  {
    icon: Compass,
    title: 'Experience tours',
    description: 'Guided site visits with live traffic updates, drone views and mobility concierge.',
  },
  {
    icon: BadgeCheck,
    title: 'Post-purchase support',
    description: 'Assistance with design & build, leasing, and compliance filings after registration.',
  },
]

const connectivitySpotlight: never[] = []

export function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <StatsStrip />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Shirdi Project"
          title="Sai Vatika Shirdi"
          description="Our flagship plotted enclave near the Nagar-Manmad Highway with approvals, ready infrastructure, and temple-town connectivity."
        />
        <FeaturedProject property={properties[0]} />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Why choose us"
          title="Crafting bespoke journeys"
          description="We merge data-backed intelligence with the art of hospitality to create seamless acquisition experiences."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border/60 bg-panel p-6 text-slate shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <feature.icon className="h-10 w-10 text-gold" />
              <h3 className="mt-4 text-xl font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices of our patrons"
          description="Families, founders, and investors who have partnered with Sai Vatika for their flagship addresses."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Removed duplicate CTA section for a leaner home page */}
    </div>
  )
}
