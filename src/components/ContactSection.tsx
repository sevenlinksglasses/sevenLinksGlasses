import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ContactForm from './ContactForm'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Location',
    details: ['Office number 10, Ahmed a hussain sajwani building', 'Al Murar,  Dubai, UAE'],
    href: 'https://maps.google.com/?q=Office+number+10,+Ahmed+a+hussain+sajwani+building,+Al+Murar,+Deira,+Dubai,+U.A.E'
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: ['+971 58 108 5140', '+971 56 727 2592'],
    href: 'tel:+971581085140'
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['info@sevenlinksglass.com'],
    href: 'mailto:info@sevenlinksglass.com'
  }
]

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-surface py-4">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Contact"
          title="Partner With Us For Lasting Solutions"
          subtitle="Reach out to our experts for personalized glass and aluminum solutions designed to transform your space beautifully."
          className="mb-10"
        />

        {/* Outer card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a1b1d] shadow-[0_20px_60px_rgba(0,0,0,.35)]">
          {/* vertical divider on desktop */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/10 lg:block"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="p-8 md:p-10"
            >
              <h3 className="text-2xl font-montserrat text-white mb-2">
                Reach Us Anytime, Anywhere
              </h3>
              <p className="text-white/70 mb-8">
                Have questions or a project in mind? Get in touch with our team today.
              </p>

              <div className="space-y-7">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.title}
                      type="button"
                      onClick={() => window.open(item.href, '_blank')}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex w-full items-start gap-4 text-left group"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#FF8F2B]/10 ring-1 ring-[#FF8F2B]/20 text-[#FF8F2B] group-hover:ring-[#FF8F2B]/40 transition-all">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-base font-semibold text-white group-hover:text-[#FF8F2B] transition-colors">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm text-white/70 leading-relaxed">
                          {item.details.map((d, idx) => (
                            <span key={idx} className="block">
                              {d}
                            </span>
                          ))}
                        </span>
                      </span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            {/* RIGHT: form in a darker inner panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="p-6 md:p-10"
            >
              <div className="rounded-2xl border border-white/8 bg-[#131518] p-6 md:p-8">
                {/* Your existing form renders the inputs + button */}
                <ContactForm />

                {/* small “we reply” line like the mock */}
                <div className="mt-3 w-100 justify-center flex items-center gap-2 text-[12px] text-white/65">
                  <Clock className="h-4 w-4 text-[#FF8F2B]" />
                  <span className="text-center">We usually reply within 24 hours.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
