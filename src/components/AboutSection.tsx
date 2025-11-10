import { useState, useEffect } from 'react';

const sliderImages = [
  "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802404969_8f891266.png",
  "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802419278_44f514bd.png",
  "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802425890_b5917211.png"
];

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333254]">
              Your Logistics Partner — Driven by Reliability
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Joma MJ Truck & Van Rental, we provide dependable, flexible, and fully insured vehicle rentals tailored for logistics, retail, and industrial clients across South Africa. From light delivery vans to heavy-duty trucks, our diverse fleet is maintained to the highest standards to ensure your cargo reaches its destination safely and on time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: keep your business moving. Through professional service, transparent communication, and competitive pricing, we've become the trusted partner for companies that demand excellence in their supply chain operations. Whether you need a vehicle for a day or a year, we're here to support your success.
            </p>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {sliderImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Joma MJ Fleet ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index ? 'w-8 bg-[#2590d9]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
