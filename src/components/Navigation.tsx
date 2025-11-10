import { useState, useEffect } from 'react';

export default function Navigation({ onQuoteClick }: { onQuoteClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802411696_3c6d2122.png" 
            alt="Joma MJ Logistics" 
            className="h-12 w-auto"
          />
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-[#333254] hover:text-[#2590d9] font-medium transition-colors">Home</button>
            <button onClick={() => scrollToSection('fleet')} className="text-[#333254] hover:text-[#2590d9] font-medium transition-colors">Fleet</button>
            <button onClick={onQuoteClick} className="bg-[#2590d9] text-white px-6 py-2.5 rounded-lg hover:bg-[#075db7] transition-all font-medium">Get Quote</button>
            <button onClick={() => scrollToSection('contact')} className="text-[#333254] hover:text-[#2590d9] font-medium transition-colors">Contact</button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#333254]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#333254] hover:text-[#2590d9] font-medium py-2">Home</button>
          <button onClick={() => scrollToSection('fleet')} className="block w-full text-left text-[#333254] hover:text-[#2590d9] font-medium py-2">Fleet</button>
          <button onClick={onQuoteClick} className="block w-full bg-[#2590d9] text-white px-6 py-2.5 rounded-lg hover:bg-[#075db7] transition-all font-medium">Get Quote</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#333254] hover:text-[#2590d9] font-medium py-2">Contact</button>
        </div>
      )}
    </nav>
  );
}
