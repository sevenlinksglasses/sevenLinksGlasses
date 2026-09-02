// src/components/TrustedOrbit.tsx
import { motion } from "framer-motion";
import { trustedCompanies } from "@/data/trusted";
import Mark from '@/assets/watermark.png'

const spots = [
  "left-[3%]   top-[5%]   -rotate-2",
  "left-[42%]  top-[7%]    rotate-1",
  "right-[6%]  top-[8%]   -rotate-3",
  "right-[10%] bottom-[12%] rotate-1",
  "left-[42%]  bottom-[8%] -rotate-1",
  "left-[8%]   bottom-[14%] rotate-2",
];

export default function TrustedOrbit() {
  const items = trustedCompanies;

  return (
    <section className="py-4 bg-surface" aria-labelledby="trusted-heading">
      <div className="container-custom">
        {/* Mobile heading (visible under md) */}
        <div className="md:hidden text-center mb-8">
          <h3
            id="trusted-heading"
            className="text-xl font-montserrat font-400 text-white"
          >
            Trusted By Leading Businesses Across UAE
          </h3>
          <p className="mt-1 text-sm text-text-muted">
            For Premium Glass, Aluminium and Wood Works
          </p>
        </div>

        {/* Desktop/tablet: centered heading with logos around it */}
        <div className="relative hidden md:block mx-auto max-w-6xl">
          <div className="relative h-[520px] isolate">
            {/* Centered copy block */}
            <div className="pointer-events-none absolute inset-0 grid place-items-center z-10">
              <div className="text-center">
                <h3
                  id="trusted-heading-desktop"
                  className="text-2xl md:text-3xl font-montserrat font-400 text-white"
                >
                  Trusted By Leading Businesses Across UAE
                </h3>
                <p className="mt-1 text-text-muted">
                  For Premium Glass, Aluminium and Wood Works
                </p>
              </div>
            </div>

            {/* Logos placed around the center */}
            {items.slice(0, spots.length).map((c, i) => {
              const initials = c.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 3);

              return (
                <motion.div
                  key={c.id}
                  className={`absolute ${spots[i]} flex flex-col items-center z-0`}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 7 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
                    className="w-28 h-28 rounded-2xl bg-[#101318] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)] grid place-items-center"
                  >
                    {c.logo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="max-h-[70%] max-w-[70%] object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="text-white/80 text-sm">{initials}</span>
                    )}
                  </motion.div>
                  <div className="mt-2 text-xs text-white/70 text-center max-w-[120px] leading-tight">
                    {c.name}
                  </div>
                </motion.div>
              );
            })}
            <div className="absolute inset-0 z-[1] pointer-events-none select-none top-[10%]  left-[-30%] ">
              {/* Mobile: smaller, tucked to the top-right; Desktop: centered & larger */}
              <img
                src={Mark}
                alt=""
                aria-hidden="true"
                className="w-50 h-50 md:w-96 md:h-96 lg:w-[300px] lg:h-[300px] object-contain object-left-bottom md:object-bottom opacity-30"
              />
            </div>
          </div>
        </div>

        {/* Mobile fallback: heading above + simple grid */}
        <div className="md:hidden grid grid-cols-3 gap-4">
          {items.map((c, i) => {
            const initials = c.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3);

            return (
              <motion.div
                key={c.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 7 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#101318] border border-white/10 grid place-items-center"
                >
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-[70%] max-w-[70%] object-contain"
                    />
                  ) : (
                    <span className="text-white/80 text-xs">{initials}</span>
                  )}
                </motion.div>
                <div className="mt-1 text-[10px] text-white/70 text-center">
                  {c.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
