import { Check } from 'lucide-react';

const reasons = [
  {
    title: "Affordable Rates",
    description: "Competitive pricing with flexible rental terms."
  },
  {
    title: "Reliable Fleet",
    description: "Well-maintained vehicles ensuring safety and efficiency."
  },
  {
    title: "Convenient Booking",
    description: "Easy rental process with fast approvals."
  },
  {
    title: "Nationwide Service",
    description: "Vehicles available across South Africa."
  },
  {
    title: "Custom Rental Solutions",
    description: "Tailored rental packages for businesses."
  }
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333254] mb-4">
            Why Choose Joma MJ Truck & Van Rental
          </h2>
          <p className="text-xl text-gray-600">
            The trusted choice for businesses across South Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-[#2590d9]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333254] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}