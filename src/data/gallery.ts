import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'project-1',
    image: gallery1,
    alt: 'Modern glass office building facade with aluminum frames',
    category: 'Commercial'
  },
  {
    id: 'project-2',
    image: gallery2,
    alt: 'Glass curtain wall installation on commercial building',
    category: 'Curtain Wall'
  },
  {
    id: 'project-3',
    image: gallery3,
    alt: 'Interior glass partition office design with aluminum frames',
    category: 'Office'
  },
  {
    id: 'project-4',
    image: gallery4,
    alt: 'Luxury glass railing with aluminum handrail on modern staircase',
    category: 'Railing'
  },
  {
    id: 'project-5',
    image: gallery5,
    alt: 'Glass skylight installation with aluminum frame on modern building',
    category: 'Skylight'
  },
  {
    id: 'project-6',
    image: gallery6,
    alt: 'Modern glass storefront with aluminum frame, commercial entrance',
    category: 'Storefront'
  },
  {
    id: 'project-7',
    image: gallery7,
    alt: 'Glass conference room with floor-to-ceiling windows and aluminum frames',
    category: 'Office'
  },
  {
    id: 'project-8',
    image: gallery4,
    alt: 'Modern glass storefront with aluminum frame, commercial entrance',
    category: 'Storefront'
  },
  {
    id: 'project-9',
    image: gallery7,
    alt: 'Glass conference room with floor-to-ceiling windows and aluminum frames',
    category: 'Office'
  }
];