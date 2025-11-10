interface Step3Props {
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function QuoteFormStep3({ startDate, setStartDate, endDate, setEndDate, onNext, onBack }: Step3Props) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-[#333254] mb-2">Rental Duration</h3>
        <p className="text-gray-600">Choose your rental period</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[#333254] mb-2">Start Date</label>
          <input 
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={today}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2590d9] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#333254] mb-2">End Date</label>
          <input 
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={startDate || today}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2590d9] focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 border-2 border-gray-300 text-[#333254] px-6 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold">
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!startDate || !endDate}
          className="flex-1 bg-[#2590d9] text-white px-6 py-4 rounded-lg hover:bg-[#075db7] transition-all font-semibold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
