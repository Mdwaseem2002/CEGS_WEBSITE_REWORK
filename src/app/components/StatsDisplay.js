'use client';
import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({ number, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    className="group relative flex flex-col items-center p-8 glass rounded-2xl hover:bg-white/[0.05] transition-all duration-500"
  >
    {/* Gold top accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D2BE60] to-transparent rounded-full" />

    <h2 className="text-4xl md:text-5xl font-bold text-gold-gradient mb-3 tracking-tight">{number}</h2>
    <p className="text-white/50 text-sm font-medium whitespace-nowrap text-center tracking-wide uppercase">
      {label}
    </p>
  </motion.div>
);

const StatsDisplay = () => {
  const stats = [
    { number: "200+", label: "Clients" },
    { number: "40K+", label: "Talent Placements" },
    { number: "5.0", label: "Client Reviews" },
    { number: "50+", label: "Staffing Experts" },
    { number: "100+", label: "Training Programs" }
  ];

  return (
    <div className="w-full bg-[#030712] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} number={stat.number} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;
