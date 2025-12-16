import { SectionHeading } from '../components/SectionHeading'

const pillars = [
  {
    title: 'Our Story',
    description:
      'Founded in 2014, Sai Vatika pivoted from luxury homes to land after mapping the growth of the Shirdi–Pune belt and the need for curated, approval-ready plots.',
  },
  {
    title: 'Our Mission',
    description:
      'To help families and investors secure clear-title, infrastructure-ready plots backed by commute research, legal diligence, and on-ground support.',
  },
  {
    title: 'Our Vision',
    description:
      'To be the most trusted plotted-development advisory in Maharashtra by staying rooted in transparency, data, and hospitality.',
  },
]

const values = [
  'Connectivity-first research',
  'Transparent title diligence',
  'Sahyadri corridor expertise',
  'White-glove client support',
]

const directors = [
  {
    name: 'Prasad Mate (Kaka)',
    title: 'Director',
    email: 'prasadmate1313@gmail.com',
  },
  {
    name: 'Kailas Katore',
    title: 'Director',
    email: 'kailaskatore82@gmail.com',
  },
  {
    name: 'Vishwanath Shetty',
    title: 'Director',
    email: 'hotelshettysswasthik@gmail.com',
  },
  {
    name: 'Sopan Bhadange',
    title: 'Director',
    email: 'sopanbhadange54@gmail.com',
  },
]

const businessDetails = [
  { label: 'Business Name', value: 'SAI VATIKA' },
  { label: 'Brand Line', value: 'Crafting Landmark' },
  { label: 'Domain', value: 'saivatika4.in' },
  { label: 'Phone', value: '+91 7798 221 313' },
  { label: 'Email', value: 'contact@saivatika4.in' },
]

const businessSummary =
  'Sai Vatika is a residential/farmhouse plotting project near the Nagar–Manmad Highway. Planned plots, internal roads, essential utilities, and clear documentation make it a reliable, organized land-buying experience suitable for both home-building and long-term appreciation.'

export function About() {
  const initialsFor = (fullName: string) =>
    fullName
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()

  return (
    <div className="space-y-16">
      <section className="space-y-10">
        <SectionHeading
          eyebrow="About"
          title="Sai Vatika Properties"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-border/60 bg-panel p-6 text-slate shadow-lg">
              <h3 className="text-xl font-semibold text-ivory">{pillar.title}</h3>
              <p className="mt-3 text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Business summary"
          title="Sai Vatika at a glance"
          description={businessSummary}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {businessDetails.map((detail) => (
            <div key={detail.label} className="rounded-2xl border border-border/60 bg-panel px-6 py-4 text-slate shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">{detail.label}</p>
              <p className="text-lg font-semibold text-ivory">{detail.value}</p>
            </div>
          ))}
          
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Values"
          title="Our approach is rooted in"
          description="Principles that ensure every engagement is thoughtful and bespoke."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <div key={value} className="rounded-2xl border border-border/60 bg-panel px-6 py-4 text-slate">
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow="Directors" title="Leadership & contact" />
        <div className="grid gap-6 md:grid-cols-4">
          {directors.map((member) => (
            <div key={member.name} className="rounded-2xl border border-border/60 bg-panel p-6 text-center shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-chip text-lg font-semibold text-ink">
                {initialsFor(member.name)}
              </div>
              <p className="mt-4 text-lg font-semibold text-ivory">{member.name}</p>
              <p className="text-sm text-slate">{member.title}</p>
              <p className="mt-2 text-xs text-slate">{member.email}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
