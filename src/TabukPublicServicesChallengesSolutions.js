import React from 'react';
import { Building, Users, Wifi, Phone, Settings, MessageSquare, BarChart2, Database } from 'lucide-react';

const ContextCard = ({ children }) => (
  <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-2xl font-semibold mb-2 text-blue-800">Local Context</h3>
    <p className="text-lg text-blue-700">{children}</p>
  </div>
);

const ChallengeCard = ({ icon, title }) => (
  <div className="bg-red-50 p-4 rounded-lg shadow-md flex items-center">
    {icon}
    <p className="text-lg font-medium ml-2 text-red-800">{title}</p>
  </div>
);

const SolutionCard = ({ icon, title, description, impact }) => (
  <div className="bg-green-50 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      {icon}
      <h4 className="text-2xl font-semibold ml-2 text-green-800">{title}</h4>
    </div>
    <p className="text-lg text-green-700 mb-2">{description}</p>
    <p className="text-lg font-medium text-green-800">Impact: {impact}</p>
  </div>
);

const TabukPublicServicesChallengesSolutions = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Tabuk's Public Services and Citizen Engagement</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Current Challenges</h3>
        <ContextCard>
          Tabuk's rapid growth has put pressure on public services, while its diverse population, including both urban and rural communities, requires inclusive engagement strategies.
        </ContextCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChallengeCard 
            icon={<Building className="text-red-500" />}
            title="Improving efficiency of municipal services"
          />
          <ChallengeCard 
            icon={<Users className="text-red-500" />}
            title="Enhancing citizen satisfaction and engagement"
          />
          <ChallengeCard 
            icon={<Wifi className="text-red-500" />}
            title="Bridging the digital divide between urban and rural areas"
          />
          <ChallengeCard 
            icon={<Phone className="text-red-500" />}
            title="Maintaining traditional communication channels while adopting new technologies"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">AI-Driven Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SolutionCard 
            icon={<Settings className="text-green-500" />}
            title="Smart Infrastructure Management"
            description="AI and IoT-powered predictive maintenance systems for public infrastructure, tailored to Tabuk's unique climate."
            impact="Reduce maintenance costs by up to 30% and extend asset lifespan by 20-25%"
          />
          <SolutionCard 
            icon={<MessageSquare className="text-green-500" />}
            title="Intelligent Citizen Engagement"
            description="AI-powered chatbots with local dialect support for 24/7 citizen services."
            impact="Handle up to 80% of routine inquiries, reduce response times by 60%, and improve citizen satisfaction scores by 40%"
          />
          <SolutionCard 
            icon={<BarChart2 className="text-green-500" />}
            title="Real-time Public Sentiment Analysis"
            description="Advanced AI algorithms for social media sentiment analysis, respecting local cultural norms."
            impact="Potentially increase public approval ratings by 15-20% through more responsive governance"
          />
          <SolutionCard 
            icon={<Database className="text-green-500" />}
            title="Data-Driven Governance Platform"
            description="Comprehensive AI-powered decision support system for city officials, integrating local governance structures."
            impact="Improve decision-making efficiency by 35% and resource allocation effectiveness by 25%"
          />
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-600">
        <p>Note: Impact figures are based on studies and may vary in Tabuk's specific context.</p>
      </div>
    </div>
  );
};

export default TabukPublicServicesChallengesSolutions;
