import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import Logo from '../assets/seven-links-glass-and-aluminium-logo.png'

/** Tiny TikTok icon (no extra deps) */
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M33.9 14.2a10.5 10.5 0 0 1-4.7-4.9V8h-6.1v22.1a4.7 4.7 0 1 1-4.7-4.7c.6 0 1.1.1 1.7.3V20a10.8 10.8 0 1 0 7.7 10.4V18c2.2 1.7 4.9 2.8 7.8 3v-6.1c-.6 0-1.2-.1-1.7-.2z" />
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Portfolio', href: '#gallery' },
      { label: 'Contact', href: '#contact' },
    ],
    services: [
      { label: 'Glass Partition', href: '#services' },
      { label: 'Office Cabin', href: '#services' },
      { label: 'Shower Cabin', href: '#services' },
      { label: 'Aluminum Windows', href: '#services' },
    ],
    workAreas: [
      { label: 'Dubai', href: '#contact' },
      { label: 'Sharjah', href: '#contact' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/sevenlinksglass', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sevenlinksglass', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@sevenlinksglass', label: 'TikTok' },
  ]

  const scrollToSection = (href: string) => {
    if (!href.startsWith('#')) return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-border/20">
      <div className="container-custom">
        {/* ===== main ===== */}
        <div className="py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand + contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <img src={Logo} alt="Seven Links" className="h-16 md:h-28 mb-5" />
              <p className="text-text-muted leading-relaxed mb-7 max-w-md">
                Seven Links delivers premium glass & aluminium solutions across the UAE —
                precision-built, safely installed, and designed to last.
              </p>

              <div className="space-y-4">
                <a
                  href="https://maps.google.com/?q=Office 4C, Al Muteena, Dubai, UAE"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-text-muted hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Office number 10, Ahmed a hussain sajwani building,<br /> Al Murar, Deira, Dubai, U.A.E</span>
                </a>

                <a
                  href="tel:+971581085140"
                  className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+971 58 108 5140</span>
                </a>

                <a
                  href="tel:+971567272592"
                  className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+971 56 727 2592</span>
                </a>

                <a
                  href="mailto:info@sevenlinksglass.com"
                  className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>info@sevenlinksglass.com</span>
                </a>
              </div>

              {/* socials */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon as any
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.08 }}
                      className="w-10 h-10 rounded-lg border border-white/10 bg-surface text-text-muted hover:text-primary hover:border-primary/30 flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Link columns */}
            <div className="lg:col-span-7 grid grid-cols-3 sm:grid-cols-3 gap-10">
              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h4 className="text-lg font-semibold text-text mb-5">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((l, idx) => (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                    >
                      <button
                        onClick={() => scrollToSection(l.href)}
                        className="text-xs md:text-base text-text-muted hover:text-primary transition-colors text-left"
                      >
                        {l.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold text-text mb-5">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((l, idx) => (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                    >
                      <button
                        onClick={() => scrollToSection(l.href)}
                        className="text-xs md:text-base text-text-muted hover:text-primary transition-colors text-left"
                      >
                        {l.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Work Areas */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h4 className="text-lg font-semibold text-text mb-5">Work Areas</h4>
                <ul className="space-y-3">
                  {footerLinks.workAreas.map((l, idx) => (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                    >
                      <a
                        href={l.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(l.href)
                        }}
                        className="text-xs md:text-base text-text-muted hover:text-primary transition-colors"
                      >
                        {l.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ===== bottom bar ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-6 border-t border-border/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {currentYear} Seven Links Glass & Aluminium — All rights reserved.
            </p>

            {/* right-side links + powered by */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-text-muted">
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>

              {/* powered by */}
              <span className="hidden md:inline text-white/20">|</span>
              <a
                href="https://vertechcreations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Powered by Vertech Creations"
                title="Powered by Vertech Creations"
              >
                Powered by <span className="font-semibold">Vertech Creations</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
