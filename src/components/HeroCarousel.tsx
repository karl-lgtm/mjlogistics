import { useState, useEffect } from 'react';

interface HeroSlide {
  headline: string;
  subtext: string;
  image: string;
}

const slides: HeroSlide[] = [
  {
    headline: "Reliable Truck & Van Rentals Across South Africa",
    subtext: "Flexible fleet options and fast quoting for your business.",
    image: "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802394417_f34ffb9d.png"
  },
  {
    headline: "Professional Logistics Solutions for Every Industry",
    subtext: "From light delivery to heavy freight — we've got you covered.",
    image: "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802404969_8f891266.png"
  },
  {
    headline: "Nationwide Service with Local Expertise",
    subtext: "Trusted by businesses across South Africa for dependable rentals.",
    image: "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802419278_44f514bd.png"
  }
];

export default function HeroCarousel({ onQuoteClick }: { onQuoteClick: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1a2332] via-[#2d4a6f] to-[#1d324d] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {slides.map((slide, index) => (
            <div key={index} className={`transition-all duration-1000 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'}`}>
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{slide.headline}</h1>
                <p className="text-xl text-white/90">{slide.subtext}</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={onQuoteClick} className="bg-[#2590d9] text-white px-8 py-4 rounded-lg hover:bg-[#075db7] transition-all font-semibold text-lg shadow-xl">
                    Generate a Quote
                  </button>
                  <button onClick={scrollToFleet} className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1d324d] transition-all font-semibold text-lg">
                    View Fleet
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="relative">
            {slides.map((slide, index) => (
              <img 
                key={index}
                src={slide.image} 
                alt="Joma MJ Fleet"
                className={`rounded-2xl shadow-2xl transition-all duration-1000 ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-12 bg-[#2590d9]' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
