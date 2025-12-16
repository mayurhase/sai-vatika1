import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { properties } from '../data/properties'
import { FeaturedProject } from '../components/FeaturedProject'
import { ContactForm } from '../components/ContactForm'

const videoEmbeds = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/5NV6Rdv1a3I',
]

export function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <section className="space-y-10">
        <SectionHeading eyebrow="Shirdi Project" title="Sai Vatika Shirdi" />
        <FeaturedProject property={properties[0]} showGallery={false} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Video"
          title="Project walkthroughs"
          description="Preview the site experience; full YouTube videos play inline."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {videoEmbeds.map((src) => (
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
