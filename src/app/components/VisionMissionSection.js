/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  return (
    <div className="bg-[#030712] py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left Section with Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative rounded-2xl overflow-hidden min-h-[400px]"
          >
            <img
              src="/Assets/vision.jpg"
              alt="Vision and Mission"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </motion.div>

          {/* Right Section with Cards */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-8 group hover:border-[#D2BE60]/20 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="bg-[#D2BE60]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#D2BE60]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#D2BE60]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">Our Vision</h2>
                  <p className="text-white/50 leading-relaxed font-light">
                    To be the leading provider of innovative and customized staffing and HR solutions,
                    empowering businesses to achieve sustainable growth and operational excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-2xl p-8 group hover:border-[#D2BE60]/20 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="bg-[#D2BE60]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#D2BE60]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#D2BE60]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">Our Mission</h2>
                  <p className="text-lg font-medium text-[#D2BE60]/70 italic mb-3">
                    &ldquo;Getting the Unemployed Employed in a Pan India&rdquo;
                  </p>
                  <p className="text-white/50 leading-relaxed font-light">
                    To deliver exceptional staffing, HR, and digital solutions through a client-centric approach,
                    fostering long-term partnerships and driving business success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
