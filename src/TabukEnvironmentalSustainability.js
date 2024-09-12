import React from 'react';
import { Droplets, Wind, Recycle, Leaf } from 'lucide-react';

const ChallengeCard = ({ icon, title, description }) => (
  <div className="bg-red-50 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-2xl font-semibold ml-2 text-red-800">{title}</h3>
    </div>
    <p className="text-sm text-red-700">{description}</p>
  </div>
);

const SolutionCard = ({ icon, title, description, impact }) => (
  <div className="bg-green-50 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-2xl font-semibold ml-2 text-green-800">{title}</h3>
    </div>
    <p className="text-sm mb-2 text-green-700">{description}</p>
    <div className="bg-green-100 p-2 rounded">
      <p className="text-sm font-medium text-green-800">Impact: {impact}</p>
    </div>
  </div>
);

const TabukEnvironmentalSustainability = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Tabuk's Environmental Sustainability</h2>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Local Context</h3>
        <p className="text-gray-600">Tabuk's semi-arid climate, limited water resources, and agricultural heritage make environmental sustainability a critical concern.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Key Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChallengeCard 
            icon={<Droplets className="text-red-500" />}
            title="Water Scarcity"
            description="Critical water scarcity intensified by climate change and agricultural demands"
          />
          <ChallengeCard 
            icon={<Wind className="text-red-500" />}
            title="Air Pollution"
            description="Escalating air pollution due to rapid urbanization and desert dust"
          />
          <ChallengeCard 
            icon={<Recycle className="text-red-500" />}
            title="Waste Management"
            description="Inefficient waste management in our fast-growing urban landscape"
          />
          <ChallengeCard 
            icon={<Leaf className="text-red-500" />}
            title="Ecosystem Protection"
            description="Urgent need to safeguard our unique local ecosystems and biodiversity"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">AI-Driven Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SolutionCard 
            icon={<Droplets className="text-green-500" />}
            title="AI-Powered Water Management"
            description="Tailored to Tabuk's unique hydrological profile, including vital aquifers and seasonal wadis."
            impact="30% reduction in water waste, 25% boost in water management efficiency"
          />
          <SolutionCard 
            icon={<Wind className="text-green-500" />}
            title="ML for Air Quality Monitoring"
            description="Comprehensive air quality monitoring and prediction, accounting for desert dust and urban pollutants."
            impact="40% enhancement in air quality forecasting accuracy"
          />
          <SolutionCard 
            icon={<Recycle className="text-green-500" />}
            title="Smart Waste Management"
            description="IoT and AI-powered systems to address Tabuk's unique waste composition and maximize recycling potential."
            impact="35% increase in recycling rates, 20% cost savings in waste management"
          />
          <SolutionCard 
            icon={<Leaf className="text-green-500" />}
            title="AI-Driven Climate Models"
            description="Predictive models for assessing climate change impacts and formulating mitigation strategies."
            impact="Up to 40% enhancement in climate adaptation effectiveness"
          />
        </div>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>Note: Impact figures are projections based on similar implementations and may vary in Tabuk's specific context.</p>
      </div>
    </div>
  );
};

export default TabukEnvironmentalSustainability;
