// Filename: tabukCybersecurityVisualization.js

import React from 'react';
import { Shield, Lock, Zap, Users, AlertTriangle } from 'lucide-react';

const ChallengeCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="text-blue-500 mr-3" size={24} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SolutionCard = ({ icon: Icon, title, description, stats }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="text-green-500 mr-3" size={24} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
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

const TabukCybersecurityVisualization = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-100 to-teal-100 p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">Tabuk's Cybersecurity: Challenges and AI-Driven Solutions</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Local Context</h2>
        <p className="text-gray-700">
          As Tabuk embraces digital transformation, ensuring the security of its digital infrastructure becomes crucial, especially given its strategic importance and proximity to NEOM. The region faces unique challenges in safeguarding its evolving digital landscape while fostering innovation and growth.
        </p>
      </div>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Cybersecurity Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChallengeCard
            icon={Shield}
            title="Digital Landscape Protection"
            description="Safeguarding Tabuk's rapidly evolving digital landscape against sophisticated and evolving cyber threats."
          />
          
          <ChallengeCard
            icon={Lock}
            title="Data Privacy in Smart Initiatives"
            description="Ensuring robust data privacy measures in our ambitious smart city initiatives, balancing innovation with security."
          />
          
          <ChallengeCard
            icon={Zap}
            title="Critical Infrastructure Security"
            description="Fortifying critical infrastructure, particularly our vital water and energy systems, against potential cyber attacks."
          />
          
          <ChallengeCard
            icon={Users}
            title="Cybersecurity Awareness"
            description="Cultivating a culture of cybersecurity awareness across our diverse population, from tech-savvy youth to traditional communities."
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">AI-Driven Cybersecurity Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SolutionCard
            icon={Shield}
            title="AI-Powered Threat Detection"
            description="State-of-the-art AI systems tailored to Tabuk's unique digital ecosystem for real-time threat detection and prevention."
            stats={[
              "Identify and neutralize up to 99% of potential cyber threats in real-time"
            ]}
          />
          
          <SolutionCard
            icon={AlertTriangle}
            title="ML-Based Anomaly Detection"
            description="Advanced machine learning algorithms for anomaly detection in network traffic, finely tuned to Tabuk's local usage patterns."
            stats={[
              "Reduce false positives by 80%",
              "Increase threat detection accuracy by 95%"
            ]}
          />
          
          <SolutionCard
            icon={Zap}
            title="Automated Incident Response"
            description="Cutting-edge automated incident response systems specifically designed for Tabuk's critical infrastructure."
            stats={[
              "Reduce response times by 60%",
              "Minimize the impact of cyber incidents by up to 75%"
            ]}
          />
          
          <SolutionCard
            icon={Users}
            title="AI-Driven Cybersecurity Education"
            description="Comprehensive AI-driven cybersecurity education platforms, expertly adapted to local language and cultural context."
            stats={[
              "Increase cybersecurity awareness by 85% across our diverse population within the first year"
            ]}
          />
        </div>
      </section>
      
      <div className="mt-12 text-center">
        <p className="text-2xl font-bold text-indigo-800">Securing Tabuk's Digital Future Through AI</p>
        <p className="text-gray-600 mt-2">Transforming cybersecurity challenges into opportunities for a secure and innovative digital landscape</p>
      </div>
    </div>
  );
};

export default TabukCybersecurityVisualization;