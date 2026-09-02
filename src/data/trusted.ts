import nazo from '@/assets/clients/nazo-showroom.png';
import emaar from '@/assets/clients/emaar.png';
import nakheel from '@/assets/clients/nakheel.png';
import alanwar from '@/assets/clients/al-anwar-tower.png';
import alraees from '@/assets/clients/all-raees-real-estate.png';
import damac from '@/assets/clients/damac.jpg';
import tiger from '@/assets/clients/tiger.jpg';
import happy from '@/assets/clients/happy-homes.jpg';

export type Company = { id: string; name: string; logo?: string };

export const trustedCompanies: Company[] = [
  { id: "nazo",     name: "Nazo showroom",         logo: nazo },
  { id: "happy",    name: "Happy Home building",   logo: happy },
  { id: "raees",    name: "Al Raees Real Estate",  logo: alraees },
  { id: "anwar",    name: "Al Anwar Tower",        logo: alanwar },
  { id: "nakheel",  name: "Nakheel",               logo: nakheel },
  { id: "emaar",    name: "Emaar",                 logo: emaar },
  { id: "damac",    name: "Damac",                 logo: damac },
  { id: "tiger",    name: "Tiger",                 logo: tiger },
];
