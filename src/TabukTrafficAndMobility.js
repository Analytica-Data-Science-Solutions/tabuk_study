import React from 'react';
import { Car, Wind, Bus, Map, Cpu, Truck, Compass, ParkingSquare } from 'lucide-react';
import { Sun, Zap, Home } from 'lucide-react'; // Add these imports

const Card = ({ icon: Icon, title, description, stats }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
    <div className="flex items-center mb-4">
      <Icon className="text-indigo-500 mr-3" size={24} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {stats && (
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h4 className="font-semibold text-indigo-700 mb-2">Potential Impact:</h4>
        <ul className="list-disc list-inside text-indigo-600">
          {stats.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const ChallengeCard = ({ icon: Icon, title, description }) => (
  <div className="bg-red-50 p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="text-yellow-500 mr-3" size={24} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TabukMobilityComprehensive = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">Tabuk's Traffic and Mobility: Challenges and AI Solutions</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Local Context</h2>
        <p className="text-gray-700">
          Tabuk's growing population and expanding urban area necessitate innovative mobility solutions that can cope with the city's unique layout and climate. As the city evolves, so too must its approach to urban transportation and mobility, balancing tradition with cutting-edge technology.
        </p>
      </div>
      
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card
          icon={Car}
          title="Urban Congestion"
          description="Increasing urban congestion due to rapid population growth and city expansion, straining existing infrastructure."
        />
        <Card
          icon={Wind}
          title="Air Quality Concerns"
          description="Deteriorating air quality resulting from traffic emissions and the unique desert environment of Tabuk."
        />
        <Card
          icon={Bus}
          title="Public Transit Efficiency"
          description="Suboptimal public transportation system efficiency, struggling to meet the needs of a growing and diverse population."
        />
        <Card
          icon={Map}
          title="Traditional vs Modern"
          description="Need to harmonize modern transit solutions with Tabuk's traditional urban layout and cultural heritage."
        />
      </div>
      
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">AI-Driven Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          icon={Cpu}
          title="Intelligent Traffic Management"
          description="AI and IoT-powered system for real-time traffic optimization, adapting to Tabuk's unique street layouts and patterns."
          stats={[
            "Reduce traffic congestion by 30%",
            "Decrease average commute times by 20%"
          ]}
        />
        <Card
          icon={Truck}
          title="Smart Public Transport Fleet Management"
          description="AI-powered predictive maintenance systems for public transport vehicles, tailored to Tabuk's climate conditions."
          stats={[
            "Increase fleet reliability by 25%",
            "Reduce maintenance costs by 15%"
          ]}
        />
        <Card
          icon={Compass}
          title="Dynamic Public Transit Routing"
          description="AI algorithms for real-time route optimization of public transit, incorporating local travel patterns and demand fluctuations."
          stats={[
            "Improve public transit efficiency by 40%",
            "Increase ridership by 35%"
          ]}
        />
        <Card
          icon={ParkingSquare}
          title="AI-Enhanced Smart Parking"
          description="Intelligent parking systems integrated with local points of interest, utilizing AI for predictive availability and guided navigation."
          stats={[
            "Reduce parking-related congestion by 50%",
            "Improve parking space utilization by 30%"
          ]}
        />
      </div>
    </div>
  );
};

export default TabukMobilityComprehensive;