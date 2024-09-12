import React from 'react';
import { Brain, Droplets, MapPin, Cpu, Bell } from 'lucide-react';

const SolutionCard = ({ icon: Icon, title, description, impact }) => (
  <div className="bg-green-50 p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="mr-3 text-green-600" size={24} />
      <h4 className="text-xl font-bold text-green-800">{title}</h4>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="bg-green-100 p-4 rounded-lg">
      <h5 className="font-semibold text-green-700 mb-2">Potential Impact:</h5>
      <p className="text-green-600">{impact}</p>
    </div>
  </div>
);

const AISolutionsForTabuk = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">AI-Driven Solutions for Tabuk's Urban Challenges</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <SolutionCard
          icon={Brain}
          title="Predictive Modeling"
          description="AI-powered population growth and infrastructure needs prediction, considering NEOM's influence."
          impact="30% reduction in infrastructure planning time (based on Songdo, South Korea project)"
        />
        
        <SolutionCard
          icon={Droplets}
          title="Hydrological Modeling"
          description="Real-time flood prediction models tailored to Tabuk's wadi topography."
          impact="Early warnings up to 5 hours in advance with 75% accuracy (based on Iowa, USA model)"
        />
        
        <SolutionCard
          icon={MapPin}
          title="GIS-Integrated Planning"
          description="Urban planning tools for sustainable development, respecting traditional layouts."
          impact="40% reduction in flood-related damages (based on Dar es Salaam, Tanzania project)"
        />
        
        <SolutionCard
          icon={Cpu}
          title="Smart City Platform"
          description="Efficient resource allocation platform considering local constraints."
          impact="20% improvement in resource utilization (based on Singapore's Smart Nation initiative)"
        />
        
        <SolutionCard
          icon={Bell}
          title="Early Warning System"
          description="AI-powered system for timely alerts and disaster management."
          impact="Up to 67% reduction in flood-related casualties and 30% in economic losses (based on Bangladesh implementation)"
        />
      </div>
      
      <div className="mt-6 text-sm text-gray-600">
        <p>Note: Impact figures are based on similar projects in other locations and may vary in Tabuk's context.</p>
      </div>
    </div>
  );
};

export default AISolutionsForTabuk;
