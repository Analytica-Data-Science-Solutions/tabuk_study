import React, { useState } from 'react';
import { Book, Target, Cpu, Zap, BarChart2, GraduationCap, Briefcase, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const ContextBox = ({ children }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Local Context</h2>
    <p className="text-gray-700 text-lg">{children}</p>
  </div>
);

const ChallengeCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg mb-4 transition-all duration-300 hover:shadow-2xl hover:bg-indigo-50">
    <div className="flex items-center mb-4">
      <Icon className="text-red-500 mr-3" size={24} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureBox = ({ icon: Icon, title, color }) => (
  <div className={`${color} p-6 rounded-xl text-white text-center transform transition-all duration-300 hover:scale-105`}>
    <Icon size={48} className="mx-auto mb-4" />
    <p className="font-semibold text-lg">{title}</p>
  </div>
);

const InfoCard = ({ icon: Icon, title, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center">
          <Icon className="text-blue-600 mr-3" size={24} />
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        {isExpanded ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
      </div>
      {isExpanded && (
        <ul className="space-y-2 mt-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 bg-blue-500 rounded-full"></div>
              <p className="ml-2 text-gray-600">{item}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TabukEducationAIInfographic = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center text-indigo-800 mb-12 animate-fade-in-down">Tabuk's Education Revolution: AI-Powered Solutions</h1>
      
      <ContextBox>
        Tabuk aims to prepare its workforce for the future while preserving its cultural heritage and meeting the needs of its growing economy, aligned with Vision 2030.
      </ContextBox>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Challenges</h2>
          <div className="grid grid-cols-2 gap-4">
            <ChallengeCard 
              icon={Briefcase}
              title="Future Workforce Preparation"
              description="Preparing workforce for future jobs, especially in tech sectors"
            />
            <ChallengeCard 
              icon={Target}
              title="Education-Market Alignment"
              description="Aligning education with market needs, including NEOM project"
            />
            <ChallengeCard 
              icon={Book}
              title="Cultural Preservation"
              description="Preserving local knowledge while adopting modern methods"
            />
            <ChallengeCard 
              icon={BarChart2}
              title="Skill Gap Addressing"
              description="Addressing skill gaps in emerging industries"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 content-center">
          <FeatureBox icon={Target} title="Targeted Skill Development" color="bg-blue-600" />
          <FeatureBox icon={Cpu} title="AI-Powered Learning" color="bg-green-600" />
          <FeatureBox icon={GraduationCap} title="Future-Ready Education" color="bg-yellow-500" />
          <FeatureBox icon={Globe} title="Global Competitiveness" color="bg-red-500" />
        </div>
      </div>
      
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">AI-Driven Solutions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard
          icon={Zap}
          title="Adaptive Learning Systems"
          items={[
            "Personalized, high-quality education",
            "Aligned with cultural values",
            "Supports future economic needs"
          ]}
        />
        
        <InfoCard
          icon={BarChart2}
          title="Advanced Data Analytics"
          items={[
            "Comprehensive skill gap analyses",
            "Strategic training program design",
            "Supports Vision 2030 objectives"
          ]}
        />
        
        <InfoCard
          icon={Cpu}
          title="AI and Data Science Curricula"
          items={[
            "World-class tech education",
            "Focus on regional challenges",
            "Positions Tabuk as an innovation hub"
          ]}
        />
        
        <InfoCard
          icon={Briefcase}
          title="VR/AR Vocational Training"
          items={[
            "Immersive skill acquisition",
            "Focus on crucial sectors (renewable energy, smart agriculture)",
            "Ensures workforce competitiveness"
          ]}
        />
      </div>
      
      <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg">
        <p className="text-3xl font-bold text-indigo-800 mb-4">Empowering Tabuk's Future Through AI and Education</p>
        <p className="text-xl text-gray-600">Bridging tradition and innovation for a knowledge-based economy</p>
      </div>
    </div>
  );
};

export default TabukEducationAIInfographic;