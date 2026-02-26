import React, { useState } from 'react';

const Whycges = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const benefits = [
    {
      number: "01",
      title: "No Recruitment Hassles",
      description: "Our IT augmentation services save your company the hassle of searching and recruiting vetted development talent. We take over the screening process and send you approved CVs."
    },
    {
      number: "02",
      title: "Lower Operational Costs",
      description: "Reduce your company spending by eliminating the costs of office space, equipment, and taxes. Pay for what drives the most value for your company."
    },
    {
      number: "03",
      title: "Fewer Legal Hassles",
      description: "Within our IT augmentation services, we remain the official employers of your hires. Our company takes care of all legal responsibilities and documentation."
    },
    {
      number: "04",
      title: "Access to Vetted Talent",
      description: "Device Software offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists."
    },
    {
      number: "05",
      title: "Aggressive Deadlines",
      description: "Ramp up your technical capacity when chasing a stringent deadline. Our team of developers dedicates their efforts to delivering the project in time."
    },
    {
      number: "06",
      title: "Full Control",
      description: "You choose who to cherry-pick your team members and participate in the screening process. Manage your project success and stay updated on all changes."
    }
  ];

  const totalPages = Math.ceil(benefits.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleBenefits = benefits.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Fixed left title */}
          <div className="lg:w-1/3 lg:sticky lg:top-1/3 lg:self-start">
            <h1 className="text-3xl lg:text-3xl font-bold leading-tight mb-4">
              Why CEGS ?
            </h1>
          </div>

          {/* Scrollable right content */}
          <div className="lg:w-2/3">
            <div className="space-y-16 relative">
              {visibleBenefits.map((benefit) => (
                <div key={benefit.number} className="relative">
                  <div className="text-5xl text-gray-700 font-bold mb-4">
                    {benefit.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-end items-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Previous page"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <span className="text-gray-400">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Next page"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whycges;
