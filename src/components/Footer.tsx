export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1d324d] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/69123aa83f5ea47b878bb8fa_1762802411696_3c6d2122.png" 
              alt="Joma MJ Logistics" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              South Africa's trusted partner for commercial vehicle rentals. Reliable, flexible, and professional logistics solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('fleet')} className="text-white/80 hover:text-white transition-colors">Fleet</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Light Delivery Vehicles</li>
              <li>Panel Vans</li>
              <li>1-8 Ton Trucks</li>
              <li>Refrigerated Transport</li>
              <li>Tail-Lift Vehicles</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="tel:+27123456789" className="hover:text-white transition-colors">+27 12 345 6789</a></li>
              <li><a href="mailto:info@jomamj.co.za" className="hover:text-white transition-colors">info@jomamj.co.za</a></li>
              <li>Johannesburg, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2025 Joma MJ Truck & Van Rental. All rights reserved.</p>
          <p className="text-white/60 text-sm">Powered by <span className="text-[#2590d9] font-semibold">Octothorp Digital Services</span></p>
        </div>
      </div>
    </footer>
  );
}
