import React from 'react';
import { Droplets, Cloud, Trash2 } from 'lucide-react';

interface EcoImpactMeterProps {
  waterSaved: number;
  co2Reduced: number;
  wasteReduced: string;
  className?: string;
}

const EcoImpactMeter: React.FC<EcoImpactMeterProps> = ({
  waterSaved,
  co2Reduced,
  wasteReduced,
  className = ''
}) => {
  return (
    <div className={`bg-gradient-to-r from-beige-50 to-gold-50 rounded-2xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-brown-800 mb-4 text-center">
        🌱 Environmental Impact
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="bg-beige-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
            <Droplets className="h-8 w-8 text-brown-600" />
          </div>
          <p className="text-2xl font-bold text-brown-700">{waterSaved.toLocaleString()}</p>
          <p className="text-brown-600 text-sm">Liters of water saved</p>
        </div>
        
        <div className="text-center">
          <div className="bg-gold-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
            <Cloud className="h-8 w-8 text-gold-700" />
          </div>
          <p className="text-2xl font-bold text-gold-700">{co2Reduced}kg</p>
          <p className="text-gold-600 text-sm">CO₂ emissions reduced</p>
        </div>
        
        <div className="text-center">
          <div className="bg-beige-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
            <Trash2 className="h-8 w-8 text-brown-700" />
          </div>
          <p className="text-2xl font-bold text-brown-700">{wasteReduced}</p>
          <p className="text-brown-600 text-sm">Waste diverted</p>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-brown-700 font-medium">
          🎉 Amazing! You're making a real difference for our planet!
        </p>
      </div>
    </div>
  );
};

export default EcoImpactMeter;