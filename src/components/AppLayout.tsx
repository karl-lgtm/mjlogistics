import { useState } from 'react';
import Navigation from './Navigation';
import HeroCarousel from './HeroCarousel';
import FleetSection from './FleetSection';
import EasyQuoteModal from './EasyQuoteModal';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function AppLayout() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <HeroCarousel onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <FleetSection onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <EasyQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
