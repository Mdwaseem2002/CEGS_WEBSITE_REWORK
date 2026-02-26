import React from 'react';

export default function StaffingSolutions() {
  const staffingTypes = [
    { 
      name: "C2H (Contract-to-Hire) Staffing", 
      description: "Flexible hiring approach allowing companies to evaluate candidates before permanent placement."
    },
    { 
      name: "Permanent Staffing", 
      description: "Finding and placing top talent for long-term organizational growth and stability."
    },
    { 
      name: "Contract Staffing", 
      description: "Providing skilled professionals for specific project durations or temporary needs."
    },
    { 
      name: "IT Staffing", 
      description: "Specialized recruitment of technology professionals across various domains and expertise levels."
    },
    { 
      name: "Recruitment Process Outsourcing (RPO)", 
      description: "End-to-end recruitment management tailored to your organizational requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: '#B5A050' }}>
          Staffing Solutions
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#B5A050' }}>
              Flexible Talent Acquisition
            </h2>
            <p className="text-gray-300 mb-6">
              Our staffing solutions are designed to provide businesses with the right talent 
              at the right time, ensuring organizational agility and performance.
            </p>
            
            <div className="space-y-4">
              {staffingTypes.map((type, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                  <h3 className="text-xl mb-2" style={{ color: '#B5A050' }}>
                    {type.name}
                  </h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-4" style={{ color: '#B5A050' }}>
                Our Staffing Advantages
              </h3>
              <ul className="space-y-3 pl-5 list-disc text-white">
                <li>Extensive Talent Network</li>
                <li>Rigorous Screening Process</li>
                <li>Quick Turnaround Times</li>
                <li>Industry-Specific Expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}