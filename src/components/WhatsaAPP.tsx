// src/components/WhatsAppFAB.tsx
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsAppFAB() {
  const phone = "971581085140";
  const msg = encodeURIComponent(
    "Hello 👋 I’m interested in your services and would love more info on options and pricing."
  );

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed z-[100] group
        right-5 md:right-6
        bottom-[calc(1.1rem+env(safe-area-inset-bottom,0px))]
      "
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* soft pulse */}
      <span
        className="absolute inset-0 rounded-full ring-2 ring-[#25D366]/25 animate-[ping_2.6s_linear_infinite]"
        aria-hidden
      />

      {/* button (bigger) */}
      <span
        className="
          relative grid place-items-center
          h-16 w-16 md:h-18 md:w-18
          rounded-full
          bg-gradient-to-b from-[#25D366] to-[#1ebe5b]
          text-white
          shadow-[0_14px_36px_rgba(37,211,102,.28)]
          ring-1 ring-black/10 border border-white/10
        "
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="h-7 w-7 md:h-8 md:w-8"
        />
        {/* glossy highlight */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white/15
                         [mask-image:radial-gradient(120%_90%_at_25%_15%,#000_0,transparent_60%)]" />
      </span>

      {/* tooltip (nudged for bigger button) */}
      <span
        className="
          pointer-events-none select-none
          absolute right-[88px] md:right-[96px]
          bottom-1/2 translate-y-1/2
          hidden md:inline-block
          rounded-full bg-[#101318] text-white/90
          px-3.5 py-1.5 text-xs font-medium
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-200
          ring-1 ring-white/10 shadow-[0_6px_18px_rgba(0,0,0,.25)]
        "
      >
        WhatsApp
      </span>
    </motion.a>
  );
}
