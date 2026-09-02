import { useEffect, useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import SectionHeading from "./SectionHeading";

type Item = (typeof galleryImages)[number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

export default function GalleryGrid() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [slide, setSlide] = useState(0);

  const items = galleryImages;
  const activeItem: Item | undefined = items[activeIdx];
  const slides = useMemo(() => {
    if (!activeItem) return [];
    if (activeItem.images?.length) return activeItem.images;
    return activeItem.image ? [activeItem.image] : [];
  }, [activeItem]);

  const openItem = (idx: number) => {
    setActiveIdx(idx);
    setSlide(0);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const prev  = useCallback(() => setSlide(s => (s - 1 + slides.length) % slides.length), [slides.length]);
  const next  = useCallback(() => setSlide(s => (s + 1) % slides.length), [slides.length]);

  // Keyboard + lock scroll when modal open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && slides.length > 1) prev();
      if (e.key === "ArrowRight" && slides.length > 1) next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, slides.length, close, prev, next]);

  // varied heights for the masonry feel
  const heights = ["h-64","h-80","h-72","h-96","h-64","h-[22rem]","h-72","h-80"];

  return (
    <section id="gallery" className="section py-4 bg-surface">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Portfolio"
          category="Shaping Modern Spaces With Lasting Impact"
          subcategory="Explore our collection of premium glass and aluminium installations"
          className="mb-16"
        />

        {/* Masonry layout via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mb-2 md:my-12">
          {items.map((image, index) => {
            const thumb = image.images?.[0] ?? image.image ?? "";
            const h = heights[index % heights.length];

            return (
              <motion.button
                key={image.id}
                type="button"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                onClick={() => openItem(index)}
                className={`group relative mb-6 block w-full overflow-hidden rounded-2xl border border-border/20 bg-surface-muted shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary break-inside-avoid ${h}`}
              >
                <motion.img
                  src={thumb}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />

                {/* gradient for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* TOP-RIGHT chip (orange bg, white text, orange border) */}
                <div className="pointer-events-none absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur"
                        style={{ background: "#FF8F2B", borderColor: "#FF8F2B" }}>
                    {image.category}
                  </span>
                </div>

                {/* subtle focus ring via border overlay */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300" />
              </motion.button>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <motion.button
            className="btn-primary flex items-center space-x-2 mx-auto group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      {open && activeItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative mx-4 w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative w-full overflow-hidden rounded-2xl bg-black/30">
              <img
                src={slides[slide]}
                alt={activeItem.alt}
                className="mx-auto max-h-[80vh] w-full object-contain"
              />

              {slides.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* counter + category */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-xs text-white backdrop-blur">
                {activeItem.category} • {slide + 1}/{slides.length || 1}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
