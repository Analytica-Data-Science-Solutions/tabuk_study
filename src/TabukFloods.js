import React from 'react';
import { MapPin, Droplets, Users, Car, AlertTriangle, Info, Brain, Cpu, Bell } from 'lucide-react';

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

const TabukComprehensiveVisualization = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-800">Tabuk: Urban Challenges and AI-Driven Solutions</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Urban Growth and Environmental Challenges</h2>
        
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
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-800">AI-Driven Solutions for Tabuk's Urban Challenges</h2>
        
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
      </section>
    </div>
  );
};

export default TabukComprehensiveVisualization;