interface Step4Props {
  services: string[];
  setServices: (value: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function QuoteFormStep4({ services, setServices, onNext, onBack }: Step4Props) {
  const availableServices = [
    { id: "driver", label: "With Driver", description: "Professional driver included" },
    { id: "refrigerated", label: "Refrigerated", description: "Temperature-controlled transport" },
    { id: "taillift", label: "Tail-Lift", description: "Hydraulic loading assistance" }
  ];

  const toggleService = (serviceId: string) => {
    setServices(
      services.includes(serviceId)
        ? services.filter(s => s !== serviceId)
        : [...services, serviceId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-[#333254] mb-2">Optional Services</h3>
        <p className="text-gray-600">Select any additional services you need</p>
      </div>

      <div className="space-y-3">
        {availableServices.map((service) => (
          <button
            key={service.id}
            onClick={() => toggleService(service.id)}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
              services.includes(service.id)
                ? 'border-[#2590d9] bg-[#2590d9]/10'
                : 'border-gray-200 hover:border-[#2590d9]/50'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                services.includes(service.id) ? 'bg-[#2590d9] border-[#2590d9]' : 'border-gray-300'
              }`}>
                {services.includes(service.id) && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <div className="font-semibold text-[#333254]">{service.label}</div>
                <div className="text-sm text-gray-600">{service.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 border-2 border-gray-300 text-[#333254] px-6 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold">
          Back
        </button>
        <button onClick={onNext} className="flex-1 bg-[#2590d9] text-white px-6 py-4 rounded-lg hover:bg-[#075db7] transition-all font-semibold">
          Continue
        </button>
      </div>
    </div>
  );
}
