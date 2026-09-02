import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GalleryGrid from '@/components/GalleryGrid';
import TrustedStrip from '@/components/TrustedStrip';
import ContactSection from '@/components/ContactSection';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsaAPP';

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'Seven Links Glass & Aluminium - Premium Solutions in UAE';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading provider of premium glass and aluminium solutions in UAE. Design, supply & installation of office cabins, partitions, windows & more. Get your free quote today.');
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Seven Links Glass & Aluminium - Premium Solutions in UAE');
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Leading provider of premium glass and aluminium solutions in UAE. Design, supply & installation of office cabins, partitions, windows & more.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text font-inter">
      <WhatsAppFAB />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <GalleryGrid />
        <TrustedStrip />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
