import { useState } from 'react';

interface FleetCardProps {
  image: string;
  title: string;
  tagline: string;
  onQuoteClick: () => void;
}

export default function FleetCard({ image, title, tagline, onQuoteClick }: FleetCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0)' }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-50">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-t from-[#1d324d] via-[#1d324d]/90 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/90 text-sm mb-4">{tagline}</p>
        <button 
          onClick={onQuoteClick}
          className="bg-[#2590d9] text-white px-6 py-2.5 rounded-lg hover:bg-[#075db7] transition-all font-medium w-full"
        >
          Generate Quote
        </button>
      </div>

      <div className={`p-6 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-[#333254] text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{tagline}</p>
      </div>
    </div>
  );
}
