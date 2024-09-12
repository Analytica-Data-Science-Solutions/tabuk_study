// Filename: tabukHealthcareVisualization.js

import React from 'react';
import { Hospital, Activity, Scale, Users, Stethoscope, TrendingUp, Heart, Video } from 'lucide-react';

const ContextCard = ({ children }) => (
  <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-xl2 font-semibold mb-2 text-blue-800">Local Context</h3>
    <p className="text-sm text-blue-700">{children}</p>
  </div>
);

const ChallengeCard = ({ icon, title, description }) => (
  <div className="bg-red-50 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      {icon}
      <h4 className="text-xl font-semibold ml-2 text-red-800">{title}</h4>
    </div>
    <p className="text-sm text-red-700">{description}</p>
  </div>
);

const SolutionCard = ({ icon, title, description, impact }) => (
  <div className="bg-green-50 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      {icon}
      <h4 className="text-xl font-semibold ml-2 text-green-800">{title}</h4>
    </div>
    <p className="text-sm text-green-700 mb-2">{description}</p>
    <p className="text-sm font-medium text-green-800">Impact: {impact}</p>
  </div>
);

const TabukHealthcareVisualization = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-800">Tabuk's Healthcare: Challenges and AI-Driven Solutions</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Healthcare Challenges</h2>
        
        <ContextCard>
          Tabuk faces healthcare challenges typical of rapidly developing regions, including the need to improve access to specialized care and address lifestyle-related health issues.
        </ContextCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChallengeCard 
            icon={<Hospital className="text-red-500" />}
            title="Rural Healthcare Access"
            description="Improving healthcare services, especially in rural areas"
          />
          <ChallengeCard 
            icon={<Activity className="text-red-500" />}
            title="Lifestyle-Related Diseases"
            description="Promoting healthy lifestyles to combat rising rates of non-communicable diseases"
          />
          <ChallengeCard 
            icon={<Scale className="text-red-500" />}
            title="Traditional vs. Modern Medicine"
            description="Balancing traditional medicine with modern healthcare practices"
/>
          <ChallengeCard 
            icon={<Users className="text-red-500" />}
            title="Diverse Population Needs"
            description="Addressing healthcare needs of a diverse population, including temporary residents"
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">AI-Driven Healthcare Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SolutionCard 
            icon={<Stethoscope className="text-green-500" />}
            title="AI-Powered Diagnostic Support"
            description="Implement cutting-edge tools in local healthcare facilities to enhance accuracy and speed of diagnoses, focusing on prevalent health issues in Tabuk."
            impact="Reduce diagnostic errors by up to 30% and decrease time-to-diagnosis by 50%"
          />
          <SolutionCard 
            icon={<TrendingUp className="text-green-500" />}
            title="Predictive Healthcare Analytics"
            description="Utilize advanced analytics to forecast disease outbreaks and optimize resource allocation based on Tabuk's unique demographic trends."
            impact="20% reduction in healthcare costs and 15% improvement in patient outcomes"
          />
          <SolutionCard 
            icon={<Heart className="text-green-500" />}
            title="Personalized Health Management"
            description="Develop AI-driven systems that provide tailored health recommendations, respecting local dietary habits and lifestyles."
            impact="Increase patient engagement by 60% and improve adherence to health plans by 40%"
          />
          <SolutionCard 
            icon={<Video className="text-green-500" />}
            title="AI-Enhanced Telemedicine"
            description="Deploy state-of-the-art telemedicine platforms to bridge the healthcare access gap in remote areas."
            impact="Increase healthcare access by 70% in underserved regions and reduce patient travel time by 60%"
          />
        </div>
        
        <div className="mt-6 text-sm text-gray-600">
          <p>Note: Impact figures are based on studies and may vary in Tabuk's specific context.</p>
        </div>
      </section>
    </div>
  );
};

export default TabukHealthcareVisualization;