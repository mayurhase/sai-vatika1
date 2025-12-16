import { Mail, MapPin, Phone, Globe, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-panel">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-ivory">Sai Vatika</p>
          <p className="text-sm text-slate">
            Crafting Landmark—clear-title plots, planned infrastructure, and guided visits.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-slate">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <Link to="/properties" className="hover:text-gold">
              Properties
            </Link>
            <Link to="/about" className="hover:text-gold">
              About
            </Link>
            <Link to="/contact" className="hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate">Contact</p>
          <div className="space-y-2 text-sm text-slate">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              +91 7798 221 313
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              contact@saivatika4.in
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              Nagar-Manmad Highway, Shirdi, Maharashtra
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate">Social</p>
          <div className="flex flex-wrap gap-2 text-sm text-slate">
            <a
              href="https://www.instagram.com/sai_vatika_?igsh=MXBxMDNxdzJtM2NxYg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 hover:border-gold/80 hover:text-gold"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585171734607"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 hover:border-gold/80 hover:text-gold"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a
              href="https://youtube.com/@saivatika4?si=0f_PuDan81WyYvv7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 hover:border-gold/80 hover:text-gold"
            >
              <Youtube className="h-4 w-4" /> YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/sai-vatika-102b3439b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 hover:border-gold/80 hover:text-gold"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://www.saivatika4.in/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 hover:border-gold/80 hover:text-gold"
            >
              <Globe className="h-4 w-4" /> Website
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-slate">
        © {new Date().getFullYear()} Sai Vatika. Crafted with intent.
      </div>
    </footer>
  )
}
