// src/data/services.ts
import kitchen from '@/assets/services/wooden-kitchen-done-byseven-links-glass-and-aluminium.jpg';
import cladding from '@/assets/services/cladding-work-done-by-seven-links-glass-and-aluminium.jpg';
import wallscurtains from '@/assets/services/curtain-walls-work-done-by-seven-links-glass-and-aluminium.jpg';
import shower from '@/assets/services/frameless-shower-enclosure-done-by-seven-links-glass-aluminium.jpeg';
import gypsum from '@/assets/services/gypsum-wall-wrok-done-by-seven-glass-links-glass-and-aluminium.jpg';
import cabin from '@/assets/services/office-cabin-done-by-seven-links-glass.jpeg';
import Door from '@/assets/services/two-beige-door-to-bedroom-at-home-dobe-by-seven-links-and-aluminium.jpg';
import FoldingDoor from '@/assets/services/folding-door-done-by-seven-links-glass-and-aluminium.jpeg';
import Window from '@/assets/services/windows-done-by-seven-links-glass-and-aluminium.jpg';
import SlidingDoor from '@/assets/services/sliding-door-done-by-seven-links-glass-and-aluminium.jpeg';
import ssHandrail from '@/assets/services/ss-handrail-staircase-done-by-seven-links-glass-and-aluminium.jpg';

export type Service = {
  id: string
  title: string
  blurb: string
  image?: string
}

export const services: Service[] = [
  {
    id: "office-glass-cabins",
    title: "Office Glass Cabins",
    blurb:
      "Modular glass cabins and partitions with acoustic seals and premium hardware—create private rooms while keeping natural light flowing.",
    image: cabin,
  },
  {
    id: "shower-cabin",
    title: "Shower Cabin",
    blurb:
      "Frameless tempered-glass shower enclosures—hinged or sliding—with anti-limescale fittings and watertight seals for a clean, modern bath.",
    image: shower,
  },
  {
    id: "gypsum-wall-work",
    title: "Gypsum Wall Work",
    blurb:
      "Gypsum board partitions and ceilings—fire-rated and acoustic options—installed fast and finished paint-ready for a crisp interior.",
    image: gypsum,
  },
  {
    id: "wooden-aluminium-kitchen-cabinet",
    title: "Wooden and Aluminium Kitchen Cabinet",
    blurb:
      "Cabinetry with aluminium carcass and wooden facades—waterproof, termite-free, hygienic and easy to maintain for long-lasting kitchens.",
    image: kitchen,
  },
  {
    id: "cladding-sheet",
    title: "Cladding Sheet",
    blurb:
      "Exterior cladding in aluminium/ACP and metal sheet systems—weather-resistant façades with clean lines and improved insulation.",
    image: cladding,
  },
  {
    id: "curtain-wall-window",
    title: "Curtain Wall Window",
    blurb:
      "Stick or unitized curtain-wall glazing with thermal breaks and high-performance glass—sleek façades engineered for wind and water tightness.",
    image: wallscurtains,
  },
  {
    id: "glass-desigining-sticker-wooden-pvc-door",
    title: "Wooden/PVC Doors",
    blurb:
      "Premium wooden and PVC doors offering durability, easy upkeep, and privacy control, tailored to your opening size and design style.",
    image: Door,
  },
  {
    id: "swing-glass-door",
    title: "Swing/Sliding Glass Door (Hardware & Installation)",
    blurb:
      "Supply and installation of floor springs/door closers, patch fittings, and top–bottom pivots for frameless swing glass doors—smooth self-closing, precise alignment, and long-term reliability.",
    image: SlidingDoor,
  },
  {
    id: "aluminium-sliding-window",
    title: "Aluminium Sliding Window",
    blurb:
      "Durable aluminium frames with smooth-glide rollers and tight weather seals—double-glazing and insect screen options available.",
    image: Window,
  },
  {
    id: "aluminium-glass-folding-door",
    title: "Aluminium Glass Folding Door",
    blurb:
      "Space-saving bi-fold door systems that stack neatly to open wide—top-hung or bottom-run tracks, with thermal and security options.",
    image: FoldingDoor,
  },
  {
    id: "stainless-steel-works",
    title: "Stainless Steel (SS) Works",
    blurb:
      "304/316-grade stainless steel fabrication and installation: handrails & balustrades, balcony/terrace grills, safety railings, staircase systems, glass-clamp railings, and custom grills (bar or laser-cut). Satin or mirror finishes, indoor/outdoor, corrosion-resistant and low-maintenance.",
    image: ssHandrail,
  },
]
