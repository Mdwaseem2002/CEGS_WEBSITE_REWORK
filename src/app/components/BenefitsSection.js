'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BenefitsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const benefits = [
    {
      number: "01",
      title: "End-to-End Solutions",
      description: "From recruitment to payroll management, we offer a complete range of services under one roof. Our integrated solutions ensure smooth transitions from hiring to employee management, allowing you to focus on business growth."
    },
    {
      number: "02",
      title: "Industry Expertise",
      description: "We have in-depth knowledge of sectors like IT, healthcare, retail, BFSI, insurance, and BPO/KPO. This expertise enables us to tailor recruitment strategies and deliver the right talent for your specific industry needs."
    },
    {
      number: "03",
      title: "Technology-Driven Approach",
      description: "We utilize AI, machine learning, and advanced HR platforms to streamline candidate sourcing and HR management. Our technology-driven approach ensures faster hiring and improved accuracy in matching the right talent."
    },
    {
      number: "04",
      title: "High-Volume, Fast-Turnaround Hiring",
      description: "Our scalable systems support high-volume hiring, enabling us to quickly fill hundreds of positions. By optimizing processes and automation, we ensure quality hires even in large-scale recruitments."
    },
    {
      number: "05",
      title: "Global and Multilingual Reach",
      description: "Specializing in multilingual hiring, we source talent across regions like APAC, LATAM, and Europe. Our global reach helps you build diverse teams with the necessary language skills for your BPO needs."
    },
    {
      number: "06",
      title: "Candidate Experience & Retention",
      description: "We enhance the candidate experience through a smooth application process, quick feedback, and transparent communication. This helps improve retention rates and reduces churn in BPO roles."
    },
    {
      number: "07",
      title: "Strong Client Partnerships",
      description: "We focus on long-term relationships with clients, offering advisory services on workforce planning, salary benchmarking, and hiring strategies. This collaborative approach helps optimize your hiring process and align it with business goals."
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
    <div className="bg-[#030712] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#D2BE60]/3 rounded-full blur-[150px] pointer-events-none" />

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
              Why Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Our{' '}
              <span className="text-gold-gradient">Competitive</span>
              <br />Edge
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
                {visibleBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-4xl font-bold text-gold-gradient opacity-40 group-hover:opacity-70 transition-opacity flex-shrink-0">
                        {benefit.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-white/45 leading-relaxed font-light">
                          {benefit.description}
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

export default BenefitsSection;