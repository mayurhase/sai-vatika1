import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { properties } from '../data/properties'

export function Gallery() {
  const project = properties[0]
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Gallery"
        title="Captured views"
        description="Drone flyovers and onsite captures from the Shirdi project."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.galleryImages.map((src) => (
          <button
            key={src}
            onClick={() => setLightboxSrc(src)}
            className="group overflow-hidden rounded-2xl border border-border/60 bg-panel shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition hover:scale-[1.01]"
          >
            <img
              src={src}
              alt="Project gallery"
              className="h-56 w-full object-cover transition group-hover:scale-[1.04]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxSrc(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Close
            </button>
            <img src={lightboxSrc} alt="Gallery enlarged" className="h-full max-h-[85vh] w-full object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}
