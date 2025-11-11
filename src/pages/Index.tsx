import React, { useState } from 'react';
import { AppProvider } from '@/contexts/AppContext';
import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import WhyChooseSection from '@/components/WhyChooseSection';
import FleetSection from '@/components/FleetSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import EasyQuoteModal from '@/components/EasyQuoteModal';

const Index: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleQuoteClick = () => {
    setQuoteModalOpen(true);
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Navigation onQuoteClick={handleQuoteClick} />
        <HeroCarousel onQuoteClick={handleQuoteClick} />
        <WhyChooseSection />
        <FleetSection onQuoteClick={handleQuoteClick} />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <EasyQuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      </div>
    </AppProvider>
  );
};

export default Index;
