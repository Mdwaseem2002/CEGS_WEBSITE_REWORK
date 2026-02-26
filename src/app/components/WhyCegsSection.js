'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyCegsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const reasons = [
    {
      number: "01",
      title: "Expertise Across Industries",
      description: "We understand the unique demands of BPO roles and deliver candidates with the right skills and adaptability. Our candidates are not only technically proficient but also possess the right attitude and cultural fit for your business."
    },
    {
      number: "02",
      title: "Fast & Scalable Hiring",
      description: "Whether you need one hire or hundreds, we ensure fast turnarounds without compromising quality. Our efficient process helps you scale quickly with pre-screened, high-quality candidates ready to join your team."
    },
    {
      number: "03",
      title: "End-to-End Recruitment Support",
      description: "From sourcing to onboarding, we manage the entire recruitment process. You can focus on growing your business while we handle the details of hiring the best talent for your needs."
    },
    {
      number: "04",
      title: "Quality Talent Network",
      description: "Access our deep talent pool of job-ready professionals across voice, non-voice, tech support, and more. We connect you with the right talent to meet your unique business requirements."
    },
    {
      number: "05",
      title: "Proven Success Record",
      description: "Trusted by top BPOs, we have a proven track record of delivering reliable talent. We consistently reduce hiring challenges and help businesses scale efficiently by providing top-tier candidates."
    }
  ];

  const totalPages = Math.ceil(reasons.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleReasons = reasons.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="bg-[#030712] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Fixed left title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 lg:sticky lg:top-1/3 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] glass-gold mb-4">
              Choose CEGS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Why Choose{' '}
              <span className="text-gold-gradient">CEGS?</span>
            </h2>
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#D2BE60] to-transparent rounded-full mt-6" />
          </motion.div>

          {/* Scrollable right content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {visibleReasons.map((reason, index) => (
                  <motion.div
                    key={reason.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-4xl font-bold text-gold-gradient opacity-40 group-hover:opacity-70 transition-opacity flex-shrink-0">
                        {reason.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                          {reason.title}
                        </h3>
                        <p className="text-white/45 leading-relaxed font-light">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-end items-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-3 glass rounded-full hover:bg-white/[0.05] transition-colors"
                aria-label="Previous page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="text-white/30 text-sm font-medium tabular-nums">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={handleNext}
                className="p-3 glass rounded-full hover:bg-white/[0.05] transition-colors"
                aria-label="Next page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCegsSection;
