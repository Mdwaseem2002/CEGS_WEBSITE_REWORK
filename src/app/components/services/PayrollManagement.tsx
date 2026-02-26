import React from 'react';

export default function PayrollManagement() {
  const services = [
    { 
      name: "End-to-End Payroll Processing", 
      description: "Comprehensive payroll management from salary calculation to final disbursement.",
      benefits: ["Accurate Salary Computations", "Timely Payments", "Complete Confidentiality"]
    },
    { 
      name: "Statutory Compliance & Tax Filing", 
      description: "Ensuring adherence to all legal requirements and seamless tax management.",
      benefits: ["Regulatory Compliance", "Minimal Legal Risks", "Transparent Reporting"]
    },
    { 
      name: "Employee Benefits Administration", 
      description: "Streamlined management of employee benefits, incentives, and compensation structures.",
      benefits: ["Comprehensive Benefits Tracking", "Customized Benefit Packages", "Employee Satisfaction"]
    },
    { 
      name: "Payroll Audit & Reporting", 
      description: "Detailed auditing and comprehensive reporting for financial transparency.",
      benefits: ["Comprehensive Financial Oversight", "Error Detection", "Strategic Insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: '#B5A050' }}>
          Payroll Management
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#B5A050' }}>
              Precision Payroll Solutions
            </h2>
            <p className="text-gray-300 mb-6">
              Our payroll management services provide end-to-end solutions that ensure 
              accurate, compliant, and efficient financial processing for your workforce.
            </p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                  <h3 className="text-xl mb-2" style={{ color: '#B5A050' }}>
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-2">{service.description}</p>
                  <ul className="pl-5 list-disc text-white">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-4" style={{ color: '#B5A050' }}>
                Why Choose Our Payroll Management?
              </h3>
              <ul className="space-y-3 pl-5 list-disc text-white">
                <li>Technology-Driven Solutions</li>
                <li>Comprehensive Compliance</li>
                <li>Data Security & Confidentiality</li>
                <li>Cost-Effective Processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}