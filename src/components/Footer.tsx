import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1d324d] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">About Joma MJ</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              South Africa's trusted truck and van rental service, providing reliable vehicles for businesses nationwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-[#2590d9] transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('fleet')} className="hover:text-[#2590d9] transition-colors">Fleet</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#2590d9] transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#fleet" className="hover:text-[#2590d9] transition-colors">Truck Rentals</a></li>
              <li><a href="#fleet" className="hover:text-[#2590d9] transition-colors">Van Rentals</a></li>
              <li><a href="#fleet" className="hover:text-[#2590d9] transition-colors">Custom Solutions</a></li>
              <li><a href="#contact" className="hover:text-[#2590d9] transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-[#2590d9] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-[#2590d9] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-[#2590d9] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-[#2590d9] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Joma MJ Truck & Van Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
