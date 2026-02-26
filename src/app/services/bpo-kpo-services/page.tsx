"use client";

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Headphones, BookOpen, Phone, Database } from 'lucide-react';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import TestimonialSlider from "../../components/TestimonialSlider";

const BPOModel = dynamic(() => import('../../components/ServiceModels').then(m => ({ default: m.BPOModel })), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  { Icon: Headphones, title: "Customer Support Services", desc: "Comprehensive inbound and outbound support solutions ensuring customer satisfaction.", details: ["24/7 Support", "Multi-Channel Communication", "Multilingual Support"] },
  { Icon: BookOpen, title: "Knowledge Process Outsourcing", desc: "High-value knowledge-based services leveraging domain expertise and analytical skills.", details: ["Research & Analytics", "Data Management", "Business Intelligence"] },
  { Icon: Phone, title: "Inside Sales & Lead Generation", desc: "Targeted sales strategies to drive business growth and expand market reach.", details: ["Lead Qualification", "Sales Pipeline Management", "CRM Integration"] },
  { Icon: Database, title: "Data Processing & Back-Office", desc: "Efficient and accurate back-office operations to streamline business processes.", details: ["Data Entry", "Document Processing", "Administrative Support"] },
];

export default function BPOKPOServices() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <Header />

      {/* Hero with 3D Model */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(210,190,96,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger}>
              <motion.div variants={fadeUp} custom={0} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D2BE60] border border-[#D2BE60]/30 bg-[#D2BE60]/10 backdrop-blur-md">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2BE60] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#D2BE60]" /></span>
                  Service
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                BPO/KPO & <span className="text-gold-gradient">Inside Sales</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-lg font-light leading-relaxed mb-8">
                Transform your business operations with our comprehensive BPO, KPO, and sales staffing services.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                {['Customer Support', 'KPO', 'Lead Generation'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl text-xs font-medium text-[#D2BE60]/70 bg-[#D2BE60]/5 border border-[#D2BE60]/15">{tag}</span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.8 }}
              className="h-[350px] md:h-[450px] lg:h-[500px] relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,190,96,0.08),transparent_70%)]" />
              <BPOModel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">What We Offer</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our <span className="text-gold-gradient">Services</span></motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/25 hover:bg-white/[0.05] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#D2BE60]/10 flex items-center justify-center mb-5 group-hover:bg-[#D2BE60]/15 transition-colors">
                  <s.Icon className="w-6 h-6 text-[#D2BE60]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{s.title}</h3>
                <p className="text-white/45 text-sm font-light leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-white/40 text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D2BE60]/60 flex-shrink-0" />{d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger}>
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Our <span className="text-gold-gradient">Expertise</span></motion.h2>
            <motion.div variants={fadeUp} custom={1} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 md:p-12">
              <p className="text-white/55 text-lg leading-relaxed font-light">
                We leverage the latest technologies and best practices to deliver exceptional BPO and KPO solutions,
                helping businesses optimize their operations and achieve sustainable growth through outsourced excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TestimonialSlider />
      <Banner />
    </div>
  );
}