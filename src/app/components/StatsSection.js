import React from 'react';

const StatsSection = () => {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Client Stat */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gold mb-2">
              20
            </div>
            <p className="text-white text-lg">Clients</p>
          </div>

          {/* Salesforce Certifications Stat */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gold mb-2">
              20K
            </div>
            <p className="text-white text-lg">No. of Placed Candidates</p>
          </div>

          {/* Clients Review Stat */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gold mb-2">
              4.9
            </div>
            <p className="text-white text-lg">Client Reviews</p>
          </div>

          {/* Projects Stat */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gold mb-2">
              25
            </div>
            <p className="text-white text-lg">Skilled Recruiters & Staffing Experts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
