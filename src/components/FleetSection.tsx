import FleetCard from './FleetCard';

const fleetCategories = [
  {
    title: "Light Delivery Vehicles",
    tagline: "Perfect for urban deliveries and small cargo",
    image: "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802425890_b5917211.png"
  },
  {
    title: "Panel Vans",
    tagline: "Versatile solutions for medium-sized loads",
    image: "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802431247_27b96adf.png"
  },
  {
    title: "1-8 Ton Trucks",
    tagline: "Heavy-duty capacity for larger freight",
    image: "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802394417_f34ffb9d.png"
  },
  {
    title: "Refrigerated Trucks",
    tagline: "Temperature-controlled transport for perishables",
    image: "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802437823_03f09fbc.jpg"
  },
  {
    title: "Tail-Lift Trucks",
    tagline: "Easy loading and unloading for heavy cargo",
    image: "https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802441421_1580dc5a.jpg"
  }
];

export default function FleetSection({ onQuoteClick }: { onQuoteClick: () => void }) {
  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333254] mb-4">
            Our Fleet — Built for Every Delivery Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From light vans to heavy trucks, we provide the right vehicle for your logistics requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetCategories.map((category, index) => (
            <FleetCard 
              key={index}
              title={category.title}
              tagline={category.tagline}
              image={category.image}
              onQuoteClick={onQuoteClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
