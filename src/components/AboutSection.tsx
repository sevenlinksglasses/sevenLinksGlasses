import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import receptionImage from '@/assets/reception.png'
import Eyebrow from './Eyebrow'


const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const timing = (d = 0) => ({ duration: 0.6, ease: 'easeOut', delay: d });

const features = [
  'Certified quality assurance',
  'Expert installation team',
  'Premium materials only',
  'Comprehensive warranty',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-4 md:py-24 bg-surface">
      <div className="container mx-auto px-6">

        {/* Centered heading block like the reference */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Eyebrow text="About us" />

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: 'easeOut' }} className="text-2xl md:text-5xl font-400 font-montserrat text-white">
            Designing Solutions That <br /> Speak Beyond Spaces
          </motion.h2>
          <br />
          <p className="md:mt-3 text-sm md:text-base text-text-muted">
            We transform your vision into powerful glass <br/>and aluminium solutions that inspire trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: image with rounded corners */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,.4)]">
              <img
                src={receptionImage}
                alt="Seven Links reception"
                className="w-full h-[380px] md:h-[420px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-[#1a1e24]/70 backdrop-blur px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,.35)]"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-xs text-text-muted">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: paragraph + (keep your feature list & button) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:pl-6"
          >
            {/* Two body paragraphs like the reference */}
            <p className="text-text leading-relaxed text-[15px] md:text-xl text-justify">
              With years of expertise, Seven Links has established itself as a trusted name in glass
              and aluminium installation and maintenance across the UAE. Our team blends technical
              precision with creative vision, ensuring every project is both reliable and visually
              impressive.
            </p>
            <p className="mt-4 text-text leading-relaxed text-[15px] md:text-xl text-justify">
              We take pride in our commitment to quality craftsmanship, timely project delivery, and
              complete customer satisfaction. Every solution we provide is tailored to match our
              clients’ vision, transforming spaces with elegance and durability.
            </p>

            {/* === KEEP: your existing features + CTA block === */}
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {features.map((feature, i) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-text">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn-outline inline-flex items-center gap-2 group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            {/* === /KEEP === */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
