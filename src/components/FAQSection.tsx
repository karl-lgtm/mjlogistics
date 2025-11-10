import FAQItem from './FAQItem';

const faqs = [
  {
    question: "Do you offer long-term rentals?",
    answer: "Yes, we offer flexible rental periods from one day up to 12 months. Long-term rentals come with attractive fleet discounts and dedicated account management to ensure your logistics operations run smoothly."
  },
  {
    question: "Can I rent with a driver?",
    answer: "Absolutely. We provide trained, professional drivers for both local and long-haul routes. All our drivers are experienced, licensed, and familiar with South African road regulations to ensure safe and efficient deliveries."
  },
  {
    question: "Are vehicles insured?",
    answer: "All our vehicles are fully insured with comprehensive coverage. We also offer optional cargo insurance to protect your goods during transit, giving you complete peace of mind."
  },
  {
    question: "Which areas do you serve?",
    answer: "We offer nationwide pickup and drop-off services from our Johannesburg base. Whether you need delivery within Gauteng or across provinces to Cape Town, Durban, or Port Elizabeth, we've got you covered."
  },
  {
    question: "Do you deliver vehicles to site?",
    answer: "Yes, vehicle delivery to your business location is available on request. We can bring the vehicle directly to your warehouse, depot, or office, making the rental process as convenient as possible for your team."
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333254] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our rental services
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
