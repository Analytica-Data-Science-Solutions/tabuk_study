import React, { useState } from 'react';
import { Droplets, Hospital, Zap, GraduationCap, Leaf, DollarSign, Shield, Building, Car } from 'lucide-react';
import TabukEnergyChallenges from './TabukEnergyChallenges';
import TabukMobilityComprehensive from './TabukTrafficAndMobility';
import TabukEnvironmentalSustainability from './TabukEnvironmentalSustainability';
import TabukEconomicChallengesSolutions from './TabukEconomicChallengesSolutions';
import TabukCybersecurityChallenges from './TabukCybersecurityChallenges';
import TabukPublicServicesChallengesSolutions from './TabukPublicServicesChallengesSolutions';
import TabukFloods from './TabukFloods';
import TabukHealthcareVisualization from './TabukHealthcareVisualization';
import TabukEconomicAnalyticsOverview from './TabukAdvancedEconomicAnalytics';
import TabukEducationAIInfographic from './TabukEducation';

const SectionTitle = ({ children, className }) => (
  <h2 className={`text-3xl font-bold mb-6 text-center ${className}`}>{children}</h2>
);

const ContextCard = ({ title, children, className }) => (
  <div className={`p-6 rounded-xl shadow-lg mb-8 ${className}`}>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-700">{children}</p>
  </div>
);

const ChallengeCard = ({ icon: Icon, title, description, className }) => (
  <div className={`p-6 rounded-xl shadow-lg ${className}`}>
    <div className="flex items-center mb-4">
      <Icon className="mr-3" size={24} />
      <h4 className="text-xl font-bold">{title}</h4>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SolutionCard = ({ icon: Icon, title, description, stats, className }) => (
  <div className={`p-6 rounded-xl shadow-lg ${className}`}>
    <div className="flex items-center mb-4">
      <Icon className="mr-3" size={24} />
      <h4 className="text-xl font-bold">{title}</h4>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="bg-opacity-50 bg-green-100 p-4 rounded-lg">
      <h5 className="font-semibold text-green-700 mb-2">Potential Impact:</h5>
      <ul className="list-disc list-inside text-green-600">
        {stats.map((stat, index) => (
          <li key={index}>{stat}</li>
        ))}
      </ul>
    </div>
  </div>
);

const ToggleButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center p-4 rounded-full transition-all duration-300 ${
      isActive
        ? 'bg-indigo-600 text-white shadow-lg transform scale-110'
        : 'bg-white text-indigo-600 hover:bg-indigo-100'
    }`}
  >
    <Icon size={24} className="mr-2" />
    <span className="font-semibold">{label}</span>
  </button>
);

const TabukComprehensiveDashboard = () => {
  const [activeSection, setActiveSection] = useState('economy');

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-2xl mx-auto w-full max-w-7xl">
      <h1 className="text-5xl font-bold text-center text-indigo-800 mb-12">Tabuk Development Dashboard</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <ToggleButton
          icon={DollarSign}
          label="Economy"
          isActive={activeSection === 'economy'}
          onClick={() => setActiveSection('economy')}
        />
        <ToggleButton
          icon={GraduationCap}
          label="Education"
          isActive={activeSection === 'education'}
          onClick={() => setActiveSection('education')}
        />
        <ToggleButton
          icon={Hospital}
          label="Healthcare"
          isActive={activeSection === 'healthcare'}
          onClick={() => setActiveSection('healthcare')}
        />
        <ToggleButton
          icon={Zap}
          label="Energy"
          isActive={activeSection === 'energy'}
          onClick={() => setActiveSection('energy')}
        />
        <ToggleButton
          icon={Car}
          label="Mobility"
          isActive={activeSection === 'mobility'}
          onClick={() => setActiveSection('mobility')}
        />
        <ToggleButton
          icon={Leaf}
          label="Environment"
          isActive={activeSection === 'environment'}
          onClick={() => setActiveSection('environment')}
        />
        <ToggleButton
          icon={Building}
          label="Public Services"
          isActive={activeSection === 'publicServices'}
          onClick={() => setActiveSection('publicServices')}
        />
        <ToggleButton
          icon={Shield}
          label="Cybersecurity"
          isActive={activeSection === 'cybersecurity'}
          onClick={() => setActiveSection('cybersecurity')}
        />
        <ToggleButton
          icon={DollarSign}
          label="Advanced Economic Analytics"
          isActive={activeSection === 'advancedEconomicAnalytics'}
          onClick={() => setActiveSection('advancedEconomicAnalytics')}
        />
      </div>
      
      <div className="w-full">
        {activeSection === 'economy' && <TabukEconomicChallengesSolutions />}
        {activeSection === 'education' && <TabukEducationAIInfographic />}
        {activeSection === 'healthcare' && <TabukHealthcareVisualization />}
        {activeSection === 'energy' && <TabukEnergyChallenges />}
        {activeSection === 'mobility' && <TabukMobilityComprehensive />}
        {activeSection === 'environment' && <TabukEnvironmentalSustainability />}
        {activeSection === 'publicServices' && <TabukPublicServicesChallengesSolutions />}
        {activeSection === 'cybersecurity' && <TabukCybersecurityChallenges />}
        {activeSection === 'advancedEconomicAnalytics' && <TabukEconomicAnalyticsOverview />}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-3xl font-bold text-indigo-800">Empowering Tabuk's Future Through Innovation</p>
        <p className="text-xl text-gray-600 mt-2">Transforming challenges into opportunities for sustainable growth across healthcare, energy, education, environmental, economic, cybersecurity, and public services sectors</p>
      </div>
    </div>
  );
};

export default TabukComprehensiveDashboard;