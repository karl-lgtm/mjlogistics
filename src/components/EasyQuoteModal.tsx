import { useState } from 'react';
import QuoteFormStep1 from './QuoteFormStep1';
import QuoteFormStep2 from './QuoteFormStep2';
import QuoteFormStep3 from './QuoteFormStep3';
import QuoteFormStep4 from './QuoteFormStep4';
import QuoteFormStep5 from './QuoteFormStep5';

interface EasyQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EasyQuoteModal({ isOpen, onClose }: EasyQuoteModalProps) {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [vehicleType, setVehicleType] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [services, setServices] = useState<string[]>([]);

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setVehicleType('');
      setPickup('');
      setDropoff('');
      setStartDate('');
      setEndDate('');
      setServices([]);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#333254]">EasyQuote</h2>
            <p className="text-sm text-gray-600">Step {step} of 5</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {showSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#333254] mb-2">Thanks!</h3>
              <p className="text-gray-600">Your quote request has been received — we'll be in touch shortly.</p>
            </div>
          ) : (
            <>
              {step === 1 && <QuoteFormStep1 vehicleType={vehicleType} setVehicleType={setVehicleType} onNext={() => setStep(2)} />}
              {step === 2 && <QuoteFormStep2 pickup={pickup} setPickup={setPickup} dropoff={dropoff} setDropoff={setDropoff} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
              {step === 3 && <QuoteFormStep3 startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
              {step === 4 && <QuoteFormStep4 services={services} setServices={setServices} onNext={() => setStep(5)} onBack={() => setStep(3)} />}
              {step === 5 && <QuoteFormStep5 vehicleType={vehicleType} pickup={pickup} dropoff={dropoff} startDate={startDate} endDate={endDate} services={services} onSubmit={handleSubmit} onBack={() => setStep(4)} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
