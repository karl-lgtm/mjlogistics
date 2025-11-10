interface Step5Props {
  vehicleType: string;
  pickup: string;
  dropoff: string;
  startDate: string;
  endDate: string;
  services: string[];
  onSubmit: () => void;
  onBack: () => void;
}

export default function QuoteFormStep5(props: Step5Props) {
  const calculateEstimate = () => {
    const distances: { [key: string]: number } = {
      'Johannesburg-Cape Town': 1400, 'Johannesburg-Durban': 570, 'Cape Town-Durban': 1650,
      'Johannesburg-Pretoria': 50, 'Johannesburg-Port Elizabeth': 1050
    };
    const key = `${props.pickup}-${props.dropoff}`;
    const distance = distances[key] || distances[`${props.dropoff}-${props.pickup}`] || 500;
    
    const days = Math.ceil((new Date(props.endDate).getTime() - new Date(props.startDate).getTime()) / (1000 * 60 * 60 * 24)) || 1;
    const baseRate = 850;
    const perKm = 12;
    const servicesCost = props.services.length * 250;
    
    return {
      distance,
      days,
      subtotal: (baseRate * days) + (distance * perKm),
      services: servicesCost,
      total: (baseRate * days) + (distance * perKm) + servicesCost
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-[#333254] mb-2">Quote Summary</h3>
        <p className="text-gray-600">Review your rental details</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex justify-between"><span className="text-gray-600">Vehicle:</span><span className="font-semibold">{props.vehicleType}</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Route:</span><span className="font-semibold">{props.pickup} → {props.dropoff}</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Distance:</span><span className="font-semibold">~{estimate.distance} km</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Duration:</span><span className="font-semibold">{estimate.days} days</span></div>
        {props.services.length > 0 && (
          <div className="flex justify-between"><span className="text-gray-600">Services:</span><span className="font-semibold">{props.services.join(', ')}</span></div>
        )}
        <div className="border-t pt-4 flex justify-between text-lg"><span className="font-bold text-[#333254]">Estimated Total:</span><span className="font-bold text-[#2590d9]">R {estimate.total.toLocaleString()}</span></div>
      </div>

      <div className="flex gap-3">
        <button onClick={props.onBack} className="flex-1 border-2 border-gray-300 text-[#333254] px-6 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold">Back</button>
        <button onClick={props.onSubmit} className="flex-1 bg-[#2590d9] text-white px-6 py-4 rounded-lg hover:bg-[#075db7] transition-all font-semibold">Send Quote Request</button>
      </div>
    </div>
  );
}
