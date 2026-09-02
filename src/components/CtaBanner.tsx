import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Eyebrow from './Eyebrow'

export default function CtaBanner() {
  const toWhatsApp = () =>
    window.open('https://wa.me/971581085140', '_blank')

  return (
    <section className="py-4 md:py-10 bg-surface">
      <div className="container-custom">
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="
            relative mx-auto w-full
            max-w-[1200px] lg:max-w-[1800px]    /* ⬅️ wider card */
            overflow-hidden rounded-3xl
            p-8 md:p-12 ring-1 ring-white/10
            shadow-[0_30px_80px_rgba(0,0,0,.35)]
          "
          style={{
            /* Colors from logo:
               Blue:  #0C97EE
               Orange: #FF8F2B (with a deeper #FF6A00 at the core) */
            backgroundImage: `
            radial-gradient(140% 100% at 18% 40%,
              rgba(12,151,238, .95) 0%,
              rgba(12,151,238, .75) 35%,
              rgba(12,151,238, .28) 62%,
              rgba(12,151,238,  0) 78%),
            radial-gradient(140% 100% at 82% 58%,
              rgba(255,106,0,  .95) 0%,
              rgba(255,143,43, .75) 30%,
              rgba(255,143,43, .28) 60%,
              rgba(255,143,43,  0) 78%),
            /* soft white highlight to ‘lift’ brightness in the middle */
            radial-gradient(120% 80% at 50% 50%,
              rgba(255,255,255,.20) 0%,
              rgba(255,255,255, 0) 60%)
          `,
            filter: 'saturate(1.25) brightness(1.06)',
            backdropFilter: 'blur(0.5px)',
          }}
        >
          {/* subtle grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[.18]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,.16) 1px, transparent 1px)
              `,
              backgroundSize: '42px 42px',
              mixBlendMode: 'overlay',
            }}
          />

          {/* content */}
          <div className="relative z-10 text-center mx-auto">
            <Eyebrow text="Start Your Journey!" />

            <h2 className="font-montserrat font-400 text-white leading-tight text-xl md:text-5xl">
              Bring Clarity To Your Space
              <br />
              <span className="text-white">With Seven Links Glass</span>
            </h2>

            <p className="mt-3 md:mt-4 text-white/80 text-sm md:text-base">
              We craft glass and aluminum solutions that combine elegance,<br />
              durability, and timeless design.
            </p>

            <div className="mt-6 md:mt-8">
              <motion.button
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={toWhatsApp}
                className="inline-flex items-center gap-2 rounded-full bg-black/85 px-5 py-3 text-white shadow-[0_8px_24px_rgba(0,0,0,.35)] ring-1 ring-white/10 hover:bg-black"
              >
                Let’s Talk on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
