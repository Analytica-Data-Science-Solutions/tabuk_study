import React from 'react';
import { TrendingUp, Building, Globe, Landmark, Brain, BarChart2, Compass, AlertTriangle } from 'lucide-react';

const Card = ({ icon: Icon, title, description, stats }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
    <div className="flex items-center mb-4">
      <Icon className="text-emerald-600 mr-3" size={24} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {stats && (
      <div className="bg-emerald-50 p-4 rounded-lg">
        <h4 className="font-semibold text-emerald-700 mb-2">Potential Impact:</h4>
        <ul className="list-disc list-inside text-emerald-600">
          {stats.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const TabukEconomicAnalyticsOverview = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-emerald-800 mb-8">Tabuk's Advanced Economic Analytics: Challenges and AI Solutions</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Local Context</h2>
        <p className="text-gray-700">
          Tabuk's economic future is closely tied to its ability to diversify and capitalize on its strategic location, especially in relation to the NEOM project. As we navigate the complexities of global economics, advanced analytics powered by AI offer unprecedented opportunities for growth and resilience.
        </p>
      </div>
      
      <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">Key Economic Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card
          icon={Building}
          title="Attracting Foreign Investment"
          description="Attracting substantial foreign direct investment (FDI) to diversify our economic sectors and fuel growth."
        />
        <Card
          icon={TrendingUp}
          title="SME Growth and Innovation"
          description="Fostering robust growth and innovation within our small-to-medium enterprises (SMEs) to build a resilient economic base."
        />
        <Card
          icon={Globe}
          title="Global Economic Adaptation"
          description="Swiftly adapting to dynamic global economic shifts to maintain competitiveness in an ever-changing market."
        />
        <Card
          icon={Landmark}
          title="Balancing Growth and Heritage"
          description="Striking a delicate balance between rapid economic expansion and the preservation of our valued local industries and cultural heritage."
        />
      </div>
      
      <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">AI-Driven Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          icon={Brain}
          title="Advanced Economic Forecasting"
          description="Machine learning models to predict market trends and economic indicators specific to Tabuk's regional context."
          stats={[
            "Improve economic planning accuracy by 40%",
            "Identify new growth sectors"
          ]}
        />
        <Card
          icon={BarChart2}
          title="AI-Powered Investment Risk Assessment"
          description="Tailored risk assessment tools incorporating local and global factors for Tabuk's economic landscape."
          stats={[
            "Increase successful investment rates by 25%",
            "Attract 30% more foreign direct investment"
          ]}
        />
        <Card
          icon={Compass}
          title="Predictive Analytics for Opportunities"
          description="Focus on potential synergies with the NEOM project to uncover new economic opportunities."
          stats={[
            "Uncover at least five new major economic opportunities annually",
            "Potentially contribute to a 15% increase in regional GDP over five years"
          ]}
        />
        <Card
          icon={AlertTriangle}
          title="Automated Global Economic Monitoring"
          description="AI-driven system to track and analyze international indicators relevant to Tabuk's key industries."
          stats={[
            "Improve economic resilience",
            "Enable 50% faster response times to global economic shifts"
          ]}
        />
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-2xl font-bold text-emerald-800">Empowering Tabuk's Economic Future Through AI</p>
        <p className="text-gray-600 mt-2">Harnessing advanced analytics for sustainable growth and global competitiveness</p>
      </div>
    </div>
  );
};

export default TabukEconomicAnalyticsOverview;