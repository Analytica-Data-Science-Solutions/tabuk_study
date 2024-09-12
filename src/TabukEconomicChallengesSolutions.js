import React from 'react';
import { Tractor, Briefcase, Plane, Building, BarChart, Map, TrendingUp, MessageSquare, Calendar, Database, HeadphonesIcon } from 'lucide-react';

const ChallengeCard = ({ icon: Icon, title, description }) => (
  <div className="bg-red-50 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      <Icon className="text-red-500" />
      <h3 className="text-lg font-semibold ml-2 text-red-800">{title}</h3>
    </div>
    <p className="text-sm text-red-700">{description}</p>
  </div>
);

const SolutionCard = ({ icon: Icon, title, description, impact }) => (
  <div className="bg-green-50 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      <Icon className="text-green-500" />
      <h3 className="text-lg font-semibold ml-2 text-green-800">{title}</h3>
    </div>
    <p className="text-sm mb-2 text-green-700">{description}</p>
    <div className="bg-green-100 p-2 rounded">
      <p className="text-sm font-medium text-green-800">Impact: {impact}</p>
    </div>
  </div>
);

const TabukEconomicChallengesSolutions = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Tabuk's Economic Transformation</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Local Context</h3>
        <p className="text-gray-600">Tabuk's economy has traditionally relied on agriculture, military presence, and its position as a transport hub. The region has significant potential for historical and eco-tourism.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Key Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChallengeCard 
            icon={Tractor}
            title="Reducing dependence on traditional sectors"
            description="Need to diversify economy beyond agriculture and military presence"
          />
          <ChallengeCard 
            icon={Plane}
            title="Developing tourism industry"
            description="Balancing tourism growth while preserving local culture and heritage"
          />
          <ChallengeCard 
            icon={Building}
            title="Leveraging proximity to NEOM"
            description="Capitalizing on opportunities presented by the nearby megaproject"
          />
          <ChallengeCard 
            icon={Briefcase}
            title="Supporting local SMEs"
            description="Assisting small businesses in transitioning to new economic sectors"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">AI-Driven Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SolutionCard 
            icon={BarChart}
            title="Data Analytics for Investment"
            description="Identify promising sectors based on Tabuk's location and resources"
            impact="20% increase in targeted investments"
          />
          <SolutionCard 
            icon={Map}
            title="Personalized Tourism Recommendations"
            description="Highlight Tabuk's historical sites and natural attractions"
            impact="30% boost in tourist engagement and satisfaction"
          />
          <SolutionCard 
            icon={TrendingUp}
            title="Predictive Tourism Analytics"
            description="Forecast trends to optimize resource allocation and marketing"
            impact="25% improvement in tourism revenue forecasting"
          />
          <SolutionCard 
            icon={MessageSquare}
            title="AI-Powered Sentiment Analysis"
            description="Monitor and analyze tourist feedback for real-time improvements"
            impact="15% increase in positive tourist experiences"
          />
          <SolutionCard 
            icon={Calendar}
            title="Personalized Travel Planner"
            description="Create tailored itineraries for tourists"
            impact="40% increase in tourist satisfaction, 10-15% boost in revenue"
          />
          <SolutionCard 
            icon={Database}
            title="Tourism Intelligence System"
            description="Integrate diverse data sources for a 360-degree view of tourism patterns"
            impact="35% enhancement in tourism strategy effectiveness"
          />
          <SolutionCard 
            icon={HeadphonesIcon}
            title="AI Virtual Assistants"
            description="Provide 24/7 multilingual support for tourists"
            impact="50% reduction in tourist inquiries handling time"
          />
        </div>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>Note: Impact figures are projections based on similar implementations and may vary in Tabuk's specific context.</p>
      </div>
    </div>
  );
};

export default TabukEconomicChallengesSolutions;
