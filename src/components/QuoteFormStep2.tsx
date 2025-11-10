interface Step2Props {
  pickup: string;
  setPickup: (value: string) => void;
  dropoff: string;
  setDropoff: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function QuoteFormStep2({ pickup, setPickup, dropoff, setDropoff, onNext, onBack }: Step2Props) {
  const cities = [
    "Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth",
    "Bloemfontein", "East London", "Polokwane", "Nelspruit", "Kimberley"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-[#333254] mb-2">Pickup & Drop-off Locations</h3>
        <p className="text-gray-600">Select your collection and delivery points</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[#333254] mb-2">Pickup Location</label>
          <select 
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2590d9] focus:outline-none"
          >
            <option value="">Select pickup city</option>
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#333254] mb-2">Drop-off Location</label>
          <select 
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2590d9] focus:outline-none"
          >
            <option value="">Select drop-off city</option>
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 border-2 border-gray-300 text-[#333254] px-6 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold">
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!pickup || !dropoff}
          className="flex-1 bg-[#2590d9] text-white px-6 py-4 rounded-lg hover:bg-[#075db7] transition-all font-semibold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
