import officeCabin from '../assets/gallery-3.jpg';
import glassPartition from '../assets/glass-partition.jpg';
import showerCabin from '../assets/shower-cabin.jpg';
import slidingWindows from '../assets/sliding-windows.jpg';
import curtainWall from '../assets/services/curtain-walls-work-done-by-seven-links-glass-and-aluminium.jpg'
import acpCladding from '../assets/services/cladding-work-done-by-seven-links-glass-and-aluminium.jpg'
import foldingDoor from '../assets/services/folding-door-done-by-seven-links-glass-and-aluminium.jpeg'
import swingDoor from '../assets/services/swing-door-done-by-seven-links-glass-and-aluminium.jpg'
import slidingDoor from '../assets/services/sliding-door-done-by-seven-links-glass-and-aluminium.jpeg'
import woodPvcDoors from '../assets/services/two-beige-door-to-bedroom-at-home-dobe-by-seven-links-and-aluminium.jpg'
import aluminiumWindows from '../assets/services/windows-done-by-seven-links-glass-and-aluminium.jpg'

export interface Category {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export const categories: Category[] = [
  {
    id: 'office-cabin',
    title: 'Office Glass Cabin',
    image: officeCabin,
    alt: 'Modern office glass cabin with aluminum frame for professional meeting spaces'
  },
  {
    id: 'glass-partition',
    title: 'Glass Partition',
    image: glassPartition,
    alt: 'Transparent glass partition walls for modern office workspace division'
  },
  {
    id: 'shower-cabin',
    title: 'Shower Cabin',
    image: showerCabin,
    alt: 'Luxury tempered glass shower cabin with premium aluminum frame'
  },
  {
    id: 'sliding-windows',
    title: 'Aluminum Sliding Window',
    image: slidingWindows,
    alt: 'High-quality aluminum sliding window systems for modern buildings'
  },
  {
    id: 'curtain-wall',
    title: 'Curtain Wall Glazing',
    image: curtainWall,
    alt: 'Large-scale structural glass façade reflecting a city skyline'
  },
  {
    id: 'acp-cladding',
    title: 'ACP / Aluminum Cladding',
    image: acpCladding,
    alt: 'Exterior aluminum composite panel cladding on a commercial façade'
  },
  {
    id: 'aluminium-folding-door',
    title: 'Aluminum Folding Door',
    image: foldingDoor,
    alt: 'Slimline aluminum glass folding door system for wide openings'
  },
  {
    id: 'swing-glass-door',
    title: 'Swing Glass Door',
    image: swingDoor,
    alt: 'Frameless swing glass door with premium patch fittings'
  },
  {
    id: 'aluminium-sliding-door',
    title: 'Aluminum Sliding Door',
    image: slidingDoor,
    alt: 'Balcony aluminum sliding door with panoramic sea view'
  },
  {
    id: 'wooden-pvc-doors',
    title: 'Wooden / PVC Doors',
    image: woodPvcDoors,
    alt: 'Interior wooden doors with minimalist light-inset design'
  },
  {
    id: 'aluminium-windows',
    title: 'Aluminum Windows',
    image: aluminiumWindows,
    alt: 'Close-up of modern aluminum window profiles with reflective glass'
  },
];