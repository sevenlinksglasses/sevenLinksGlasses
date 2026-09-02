import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { categories } from '@/data/categories'
import HeroBackground from '@/components/HeroBackground'
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Mark from '@/assets/watermark.png'

const TRUST_TEXT = 'Trusted by clients across the UAE'


function MarqueeUneven({
  items,
  pxPerSec = 20,             // scroll speed (pixels/sec)
  cardWidth = 260,
  gap = 20,
  heights = [255, 300, 270, 310, 285], // skyline
}: {
  items: { id: string | number; title: string; image: string; alt?: string }[];
  pxPerSec?: number;
  cardWidth?: number;
  gap?: number;
  heights?: number[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [baseCount, setBaseCount] = useState(() => Math.max(items.length, 6));

  // ensure we render at least enough cards to cover 1× width + 1 extra
  useLayoutEffect(() => {
    const update = () => {
      const vw = containerRef.current?.offsetWidth ?? 0;
      const iw = cardWidth + gap;
      const need = Math.ceil(vw / iw) + 1; // one extra so edges show partial cards
      setBaseCount(Math.max(items.length, need));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items.length, cardWidth, gap]);

  const base = useMemo(
    () => Array.from({ length: baseCount }, (_, i) => items[i % items.length]),
    [baseCount, items]
  );

  const loop = useMemo(() => [...base, ...base], [base]);
  const distance = baseCount * (cardWidth + gap);     // px to travel per cycle
  const duration = distance / pxPerSec;               // seconds per cycle
  const startOffset = -Math.round((cardWidth + gap) * 0.40); // start with partial left card

  const styleVars = {
    ["--cardW" as any]: `${cardWidth}px`,
    ["--gap" as any]: `${gap}px`,
  } as React.CSSProperties;

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden" style={styleVars}>
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#0d0f13] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#0d0f13] to-transparent z-10" />

      <motion.div
        className="flex items-end gap-[var(--gap)] will-change-transform"
        animate={{ x: [startOffset, startOffset - distance] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((it, i) => {
          const h = heights[i % heights.length];           // total card height
          const imgPadding = 58;                            // caption + paddings
          const imgH = Math.max(140, h - imgPadding);      // image area
          return (
            <div key={`${it.id}-${i}`} className="min-w-[var(--cardW)] max-w-[var(--cardW)]" style={{ height: h }}>
              <div className="h-full rounded-[22px] bg-[#1A1E24]/70 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-2 flex flex-col">
                <div className="overflow-hidden rounded-[18px]" style={{ height: imgH }}>
                  <img
                    src={it.image}
                    alt={it.alt ?? it.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="px-2 py-2">
                  <p className="text-sm text-center text-white/90">{it.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
const timing = (delay = 0) => ({
  duration: 0.6,
  ease: "easeOut",
  delay,
});

export default function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  const toWhatsApp = () =>
    window.open('https://wa.me/971581085140', '_blank')

  return (
    <section id="home" className="relative min-h-[92vh] py-4 flex items-center pt-24 overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 z-[1] pointer-events-none select-none top-[20%]  left-[75%] ">
        {/* Mobile: smaller, tucked to the top-right; Desktop: centered & larger */}
        <img
          src={Mark}
          alt=""
          aria-hidden="true"
          className="w-50 h-50 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-contain object-left-bottom md:object-bottom opacity-30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mb-4"
          >
            <div className="flex justify-center mb-4">
              <div className="badge flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" fill="currentColor" />
                <span>{TRUST_TEXT}</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white leading-tight font-400 font-montserrat text-[26px] md:text-[58px] lg:text-[64px]">
            Shaping Modern Spaces<br /><span className="text-white/90">with Glass & Aluminium</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4 text-white/70 text-sm md:text-xl">
            We are Seven Links Glass, crafting elegant glass and aluminium solutions for every space.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollTo('#contact')} className="btn-primary shadow-glow px-6 py-3 rounded-full flex items-center gap-2">
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={toWhatsApp} className="btn-outline px-6 py-3 rounded-full">
              Lets talk on Whatsapp
            </button>
          </motion.div>

        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16">
          <MarqueeUneven items={categories} pxPerSec={25} cardWidth={260} gap={20}
            heights={[260, 310, 280, 300, 270]} />

        </motion.div>
      </div>
    </section>
  )
}

