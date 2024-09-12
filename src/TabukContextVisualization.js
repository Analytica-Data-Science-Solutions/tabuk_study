import React from 'react';
import { MapPin, Droplets, Users, Car, AlertTriangle, Info } from 'lucide-react';

const StatCard = ({ icon, children }) => (
  <div className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center">
    {icon}
    <p className="text-sm font-medium ml-2 text-blue-800">{children}</p>
  </div>
);

const ImpactCard = ({ icon, title, description }) => (
  <div className="bg-red-50 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      {icon}
      <h4 className="text-md font-semibold ml-2 text-red-800">{title}</h4>
    </div>
    <p className="text-sm text-red-700">{description}</p>
  </div>
);

const TabukContextVisualization = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Tabuk: Urban Growth and Environmental Challenges</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Key Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard icon={<Droplets className="text-blue-500" />}>
            28% of Tabuk City area at risk of flooding
          </StatCard>
          <StatCard icon={<Users className="text-green-500" />}>
            Rapid population growth
          </StatCard>
          <StatCard icon={<MapPin className="text-red-500" />}>
            Proximity to NEOM megacity project
          </StatCard>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">November 2018 Flood Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImpactCard 
            icon={<AlertTriangle className="text-red-500" />}
            title="Fatalities"
            description="At least 9 fatalities reported"
          />
          <ImpactCard 
            icon={<Users className="text-orange-500" />}
            title="People Affected"
            description="Thousands of people impacted by the flood"
          />
          <ImpactCard 
            icon={<Car className="text-gray-500" />}
            title="Property Damage"
            description="Over 1,000 vehicles damaged"
          />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Urgent Need</h3>
        <p className="text-lg font-medium text-center text-red-600">
          Robust flood mitigation and disaster preparedness strategies
        </p>
      </div>
      
      <div className="flex items-center text-sm text-gray-600">
        <Info className="mr-2" />
        <p>Source: Study by Abdelkarim et al. (2019)</p>
      </div>
    </div>
  );
};

export default TabukContextVisualization;
