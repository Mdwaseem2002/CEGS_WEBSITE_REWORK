//src\app\components\services\BPOKPOServices.tsx
import React from 'react';

export default function BPOKPOServices() {
  const services = [
    { 
      name: "Customer Support Services", 
      description: "Comprehensive inbound and outbound support solutions ensuring customer satisfaction.",
      details: ["24/7 Support", "Multi-Channel Communication", "Multilingual Support"]
    },
    { 
      name: "Knowledge Process Outsourcing (KPO)", 
      description: "High-value knowledge-based services leveraging domain expertise and analytical skills.",
      details: ["Research & Analytics", "Data Management", "Business Intelligence"]
    },
    { 
      name: "Inside Sales & Lead Generation", 
      description: "Targeted sales strategies to drive business growth and expand market reach.",
      details: ["Lead Qualification", "Sales Pipeline Management", "CRM Integration"]
    },
    { 
      name: "Data Processing & Back-Office Support", 
      description: "Efficient and accurate back-office operations to streamline business processes.",
      details: ["Data Entry", "Document Processing", "Administrative Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: '#B5A050' }}>
          BPO/KPO & Inside Sales
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#B5A050' }}>
              Outsourcing Excellence
            </h2>
            <p className="text-gray-300 mb-6">
              Our BPO and KPO services are designed to enhance operational efficiency, 
              reduce costs, and provide strategic insights for business growth.
            </p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                  <h3 className="text-xl mb-2" style={{ color: '#B5A050' }}>
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-2">{service.description}</p>
                  <ul className="pl-5 list-disc text-white">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-4" style={{ color: '#B5A050' }}>
                Our Outsourcing Benefits
              </h3>
              <ul className="space-y-3 pl-5 list-disc text-white">
                <li>Cost-Effective Solutions</li>
                <li>Scalable Operations</li>
                <li>Advanced Technology Integration</li>
                <li>Quality-Driven Approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}