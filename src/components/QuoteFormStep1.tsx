interface Step1Props {
  vehicleType: string;
  setVehicleType: (value: string) => void;
  onNext: () => void;
}

export default function QuoteFormStep1({ vehicleType, setVehicleType, onNext }: Step1Props) {
  const vehicleTypes = [
    "Light Delivery Vehicle",
    "Panel Van",
    "1-8 Ton Truck",
    "Refrigerated Truck",
    "Tail-Lift Truck"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-[#333254] mb-2">Select Vehicle Type</h3>
        <p className="text-gray-600">Choose the vehicle that best fits your needs</p>
      </div>

      <div className="space-y-3">
        {vehicleTypes.map((type) => (
          <button
            key={type}
            onClick={() => setVehicleType(type)}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
              vehicleType === type 
                ? 'border-[#2590d9] bg-[#2590d9]/10 text-[#333254]' 
                : 'border-gray-200 hover:border-[#2590d9]/50'
            }`}
          >
            <span className="font-semibold">{type}</span>
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!vehicleType}
        className="w-full bg-[#2590d9] text-white px-6 py-4 rounded-lg hover:bg-[#075db7] transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
}
