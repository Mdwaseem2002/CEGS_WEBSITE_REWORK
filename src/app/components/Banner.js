'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Footer from './Footer';

const Banner = () => {
  return (
    <div>
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2BE60]/10 via-[#030712] to-[#D2BE60]/10" />
        <div className="absolute inset-0 bg-[#030712]/80" />

        <div className="relative z-10 w-full px-4 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                Build. Grow. <span className="text-gold-gradient">Excel.</span>
              </h3>
              <p className="text-white/40 font-light">
                Your success powered by the right people and scalable talent solutions.
              </p>
            </div>

            <div className="flex items-center gap-3 glass-gold rounded-xl py-3 px-5">
              <Mail className="text-[#D2BE60] w-5 h-5 flex-shrink-0" />
              <div>
                <div className="text-white/30 uppercase text-[10px] tracking-widest font-medium mb-0.5">
                  Email
                </div>
                <a
                  href="mailto:info@careerexpertglobalsolution.com"
                  className="text-[#D2BE60] hover:text-[#F4D03F] transition-colors text-sm font-medium"
                >
                  info@careerexpertglobalsolution.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Banner;