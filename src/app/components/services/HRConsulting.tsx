import React from 'react';

export default function HRConsulting() {
  const services = [
    "Talent Management Solutions",
    "Organizational Development",
    "Employee Engagement Strategies",
    "HR Policy & Compliance Advisory"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: '#B5A050' }}>
          HR Consulting
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#B5A050' }}>
              Comprehensive HR Solutions
            </h2>
            <p className="text-gray-300 mb-6">
              Our HR Consulting services are designed to transform your human resource management, 
              driving organizational excellence and employee satisfaction.
            </p>
            
            <h3 className="text-xl mb-4" style={{ color: '#B5A050' }}>
              Our Services Include:
            </h3>
            <ul className="space-y-3 pl-5 list-disc">
              {services.map((service, index) => (
                <li key={index} className="text-white">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-4" style={{ color: '#B5A050' }}>
                Why Choose Our HR Consulting?
              </h3>
              <ul className="space-y-3 pl-5 list-disc text-white">
                <li>Strategic Workforce Planning</li>
                <li>Enhanced Organizational Performance</li>
                <li>Tailored HR Strategies</li>
                <li>Compliance and Risk Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}