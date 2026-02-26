'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SalesforceIntegration from './SalesforceIntegration';

// Metrics data to be animated
const metrics = [
  { value: 100, label: 'Clients', prefix: '+' },
  { value: 25, label: 'Salesforce Certifications', prefix: '+' },
  { value: 150, label: 'Projects', prefix: '+' },
  { value: 4.7, label: 'Review Clients', prefix: '' }
];

// Workflows data for display
const workflows = [
  {
    title: 'Single Source of truth',
    description: 'Turning Salesforce into Your Single Source of Truth: A Blueprint for Success.'
  },
  {
    title: 'Customer Strategy',
    description: 'Transforming Salesforce into a Powerful Customer Strategy Engine: Your Roadmap to Success.'
  },
  {
    title: 'Customer Lifecycle',
    description: 'Turning Salesforce into Success: Mastering the Customer Lifecycle.'
  },
  {
    title: 'Real-time Integration',
    description: 'Powering Success: Harnessing Real-time Integration with Salesforce.'
  },
  {
    title: 'Customer 360 view',
    description: 'Unlocking Success with Salesforce: Mastering the Customer 360 View.'
  }
];

// Component to animate numbers
const AnimatedNumber = ({ value, prefix }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Duration for the animation (in ms)
  
  
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      if (Number.isInteger(value)) {
        setCount(Math.floor(progress * value));
      } else {
        setCount(+(progress * value).toFixed(1));
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value]);

  return (
    <span>{prefix}{count}</span>
  );
};

// Main Component
const SalesforceSuccess = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metrics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <h2 className="text-4xl font-bold text-[#1A7DB4]">
              <AnimatedNumber value={metric.value} prefix={metric.prefix} />
            </h2>
            <p className="text-[#797A8C] mt-2">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/Assets/third.png"
            alt="Salesforce Consulting"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Workflow Section */}
        <div className="space-y-6">
          <div className="mb-8">
            <span className="bg-[#1A7DB4] text-white px-4 py-2 rounded-full text-sm">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl font-bold mt-4 mb-6">
              How we turn Salesforce into Success
            </h2>
          </div>

          {workflows.map((workflow, index) => (
            <div
              key={index}
              className="p-4 hover:shadow-lg transition-shadow duration-300 bg-pink-600 text-white cursor-pointer rounded-lg"
            > 
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">{workflow.title}</h3>
                  <p className="text-sm opacity-90">{workflow.description}</p>
                </div>
                <div className="ml-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SalesforceIntegration />
    </div>
  );
};

export default SalesforceSuccess;
