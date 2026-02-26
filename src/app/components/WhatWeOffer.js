'use client';
import { useState } from 'react';
import SalesforceSuccess from './SalesforceSuccess';  // Import SalesforceSuccess component

function WhatWeOffer() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: 'Salesforce Consulting',
      description: 'Unlock the full potential of your Salesforce investment with tailored consulting services.',
      bgColor: 'bg-[#D91567]',
      items: ['Salesforce Implementation', 'Customization & Optimization', 'Salesforce Health Check', 'Integration with Other Systems', 'Ongoing Support & Maintenance', 'User Training & Enablement']
    },
    {
      title: 'Web Development',
      description: 'Transform your digital presence with our innovative web development solutions.',
      bgColor: 'bg-[#086B92]',
      items: [
        'CMS Development (WordPress, Joomla)',
        'E-commerce Solutions',
        'Website Performance Optimization',
        'Maintenance & Support Services',
        'Responsive Web Design',
        'Custom Web Applications'
      ]
    },
    {
      title: 'Consulting and Training',
      description: 'Aligning workforce skills with strategic goals for impactful results.',
      bgColor: 'bg-[#D91567]',
      items: [
        'Customized Training Programs',
        'Workshops & Seminars',
        'Leadership Development',
        'Performance Improvement Strategies',
        'Business Strategy Consulting',
        'Change Management Solutions'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Boost your brand visibility with our strategic digital marketing and creative campaigns.',
      bgColor: 'bg-[#D91567]',
      items: [
        'SEO & SEM Strategies',
        'Email Marketing Campaigns',
        'PPC Advertising',
        'Analytics & Reporting',
        'Social Media Management',
        'Content Marketing Services'
      ]
    },
    {
      title: 'App Development',
      description: 'Transform your app ideas into reality with our intuitive, high-performance development services.',
      bgColor: 'bg-[#086B92]',
      items: [
        'Mobile App Development (iOS & Android)',
        'Cross-Platform Solutions',
        'Custom Software Development',
        'UI/UX Design',
        'App Maintenance & Support',
        'API Development & Integration'
      ]
    },
    {
      title: 'Data Migration',
      description: 'Effortlessly migrate data with a focus on integrity, security, and compliance.',
      bgColor: 'bg-[#D91567]',
      items: [
        'Data Assessment & Strategy',
        'Data Cleansing & Preparation',
        'Compliance & Data Governance',
        'Post-Migration Support',
        'Migration to Salesforce',
        'Secure Data Transfer'
      ]
    }
  ];

  return (
    <div className="py-10 px-5">
      <div className="text-center mb-10">
        <span className="bg-[#086B92] text-white px-6 py-2 rounded-full inline-block mb-5">WHAT WE OFFER</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">Pentacloud is your trusted partner</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="relative">
            <div className={`${service.bgColor} p-6 rounded-t-lg`}>
              <h3
                className="text-white text-xl font-semibold"
                onMouseEnter={() => setHoveredService(index)} // Show dropdown when hover over title
                onMouseLeave={() => setHoveredService(null)} // Hide dropdown when mouse leaves
              >
                {service.title}
              </h3>
            </div>

            {hoveredService === index && (
              <div className="absolute z-10 w-full bg-white shadow-lg rounded-b-lg">
                {service.items.map((item, i) => (
                  <div key={i} className={`px-6 py-3 ${service.bgColor === 'bg-[#D91567]' ? 'text-[#D91567]' : 'text-[#086B92]'} hover:bg-gray-50`}>
                    {item}
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white p-6 rounded-b-lg shadow-lg">
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className={`${service.bgColor} text-white px-6 py-2 rounded-full hover:opacity-90`}>
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporting combined component
export default function CombinedPage() {
  return (
    <div>
      {/* Salesforce Success Section */}

      {/* What We Offer Section */}
      <WhatWeOffer />
      <SalesforceSuccess />
    </div>
  );
}
