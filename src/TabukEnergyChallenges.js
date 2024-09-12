import React from 'react';
import { Sun, Zap, Home, Cpu, BarChart2, Radio, Settings } from 'lucide-react';

const ChallengeCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="text-yellow-500 mr-3" size={24} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SolutionCard = ({ icon: Icon, title, description, stats }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="text-green-500 mr-3" size={24} />
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="bg-green-50 p-4 rounded-lg">
      <h4 className="font-semibold text-green-700 mb-2">Potential Impact:</h4>
      <ul className="list-disc list-inside text-green-600">
        {stats.map((stat, index) => (
          <li key={index}>{stat}</li>
        ))}
      </ul>
    </div>
  </div>
);

const TabukEnergyVisualization = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-100 to-green-100 p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">Tabuk's Energy: Challenges and AI-Driven Solutions</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Local Context</h2>
        <p className="text-gray-700">
          Tabuk, with its abundant solar resources and growing energy needs, is well-positioned to lead in smart energy solutions.
          The region faces unique challenges due to its climate and rapid development, particularly in the context of the NEOM project.
        </p>
      </div>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Energy Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChallengeCard
            icon={Sun}
            title="Extreme Temperature Optimization"
            description="Optimizing energy consumption in a region with extreme temperatures, balancing cooling needs with efficiency goals."
          />
          
          <ChallengeCard
            icon={Zap}
            title="Renewable Energy Integration"
            description="Integrating renewable energy sources, particularly solar, into the existing grid infrastructure efficiently and reliably."
          />
          
          <ChallengeCard
            icon={Home}
            title="Urban Development vs Environment"
            description="Balancing the energy needs of rapid urban development, including NEOM, with pressing environmental concerns and sustainability goals."
          />
          
          <ChallengeCard
            icon={Cpu}
            title="Infrastructure Modernization"
            description="Modernizing energy infrastructure to support smart grid technologies while ensuring reliability in a challenging climate."
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">AI-Driven Energy Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SolutionCard
            icon={Zap}
            title="AI-Driven Energy Management"
            description="State-of-the-art AI systems optimized for Tabuk's unique climate conditions."
            stats={[
              "30% reduction in energy consumption",
              "25% increase in overall energy efficiency"
            ]}
          />
          
          <SolutionCard
            icon={BarChart2}
            title="ML-Powered Demand Prediction"
            description="Sophisticated machine learning models for precise energy demand forecasting, considering local patterns and NEOM's influence."
            stats={[
              "40% improvement in demand forecasting accuracy",
              "20% reduction in energy waste",
              "Significant cost savings"
            ]}
          />
          
          <SolutionCard
            icon={Radio}
            title="Smart Grid Optimization"
            description="Cutting-edge solutions leveraging AI and IoT, designed to integrate Tabuk's vast renewable energy potential."
            stats={[
              "50% increase in renewable energy utilization",
              "35% improvement in grid stability"
            ]}
          />
          
          <SolutionCard
            icon={Settings}
            title="Predictive Maintenance Systems"
            description="Advanced systems tailored to local environmental factors for energy infrastructure maintenance."
            stats={[
              "25% reduction in maintenance costs",
              "20% increase in equipment lifespan",
              "35% reduction in unplanned downtime"
            ]}
          />
        </div>
      </section>
      
      <div className="mt-12 text-center">
        <p className="text-2xl font-bold text-orange-800">Empowering Tabuk's Energy Future Through AI</p>
        <p className="text-gray-600 mt-2">Transforming challenges into opportunities for sustainable growth</p>
      </div>
    </div>
  );
};

export default TabukEnergyVisualization;