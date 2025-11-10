import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333254] mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Have questions? We're here to help.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#333254] mb-2">Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2590d9] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#333254] mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2590d9] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#333254] mb-2">Phone</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2590d9] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#333254] mb-2">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows={4} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2590d9] focus:outline-none" />
            </div>
            <button type="submit" className="w-full bg-[#2590d9] text-white px-6 py-4 rounded-lg hover:bg-[#075db7] transition-all font-semibold text-lg">
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2590d9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#333254] mb-1">Call Us</h3>
                  <a href="tel:+27123456789" className="text-[#2590d9] hover:underline">+27 12 345 6789</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2590d9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#333254] mb-1">Email Us</h3>
                  <a href="mailto:info@jomamj.co.za" className="text-[#2590d9] hover:underline">info@jomamj.co.za</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2590d9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#333254] mb-1">Location</h3>
                  <p className="text-gray-600">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
