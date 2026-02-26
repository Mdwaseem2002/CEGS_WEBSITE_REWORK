"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { GraduationCap, Award, Wrench, Users2, Target, Handshake } from 'lucide-react';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import TestimonialSlider from "../../components/TestimonialSlider";

const TrainingModel = dynamic(() => import('../../components/ServiceModels').then(m => ({ default: m.TrainingModel })), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const courseCategories = [
  { name: "OEM", desc: "Comprehensive OEM certification programs", icon: "🏭", courses: 45, route: "/courses/oem" },
  { name: "Microsoft", desc: "Azure, Office 365 & Windows Server", icon: "🪟", courses: 52, route: "/courses/microsoft" },
  { name: "IBM", desc: "IBM Cloud, Watson AI & Mainframe", icon: "💙", courses: 31, route: "/courses/ibm" },
  { name: "Citrix", desc: "Virtualization & networking solutions", icon: "🖥️", courses: 18, route: "/courses/citrix" },
  { name: "Redhat", desc: "Linux admin & OpenShift training", icon: "🎩", courses: 29, route: "/courses/redhat" },
  { name: "AWS", desc: "Amazon Web Services cloud specialization", icon: "☁️", courses: 67, route: "/courses/aws" },
  { name: "Cisco", desc: "Networking & cybersecurity management", icon: "🌐", courses: 43, route: "/courses/cisco" },
  { name: "Google", desc: "GCP & Workspace certifications", icon: "🔍", courses: 38, route: "/courses/google" },
  { name: "Data & AI", desc: "Data science & machine learning mastery", icon: "🤖", courses: 72, route: "/courses/data-ai" },
  { name: "Cloud", desc: "Multi-cloud & hybrid architecture", icon: "☁️", courses: 59, route: "/courses/cloud" },
  { name: "Security", desc: "Cybersecurity & ethical hacking", icon: "🔒", courses: 37, route: "/courses/security" },
  { name: "DevOps", desc: "CI/CD, containers & agile practices", icon: "⚙️", courses: 46, route: "/courses/devops" },
];

const keyBenefits = [
  { Icon: Award, title: "Industry Certifications", desc: "Globally accepted credentials from leading technology vendors" },
  { Icon: Wrench, title: "Hands-On Projects", desc: "Real-world projects and practical lab environments" },
  { Icon: Users2, title: "Expert Trainers", desc: "Learn from industry veterans with real-world experience" },
  { Icon: GraduationCap, title: "Lifetime Access", desc: "Keep learning resources forever, including updates" },
  { Icon: Target, title: "Personalized Path", desc: "Customized curriculum based on your career goals" },
  { Icon: Handshake, title: "Career Support", desc: "Job placement assistance and interview preparation" },
];

const learningSteps = [
  { step: "01", title: "Learn", desc: "Expert-led sessions covering fundamental to advanced topics" },
  { step: "02", title: "Practice", desc: "Apply knowledge in realistic simulation environments" },
  { step: "03", title: "Apply", desc: "Work on industry-standard projects and case studies" },
  { step: "04", title: "Certify", desc: "Receive globally recognized certifications" },
];

export default function TrainingCoursePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentStep(p => (p + 1) % 4), 3000);
    return () => clearInterval(interval);
  }, []);

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
                  Training
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Professional <span className="text-gold-gradient">Training Courses</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg max-w-lg font-light leading-relaxed mb-8">
                Transform your career with cutting-edge training programs designed by industry experts.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                {['Certifications', 'Hands-On Labs', 'Expert Trainers'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl text-xs font-medium text-[#D2BE60]/70 bg-[#D2BE60]/5 border border-[#D2BE60]/15">{tag}</span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.8 }}
              className="h-[350px] md:h-[450px] lg:h-[500px] relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,190,96,0.08),transparent_70%)]" />
              <TrainingModel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">Browse Courses</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Course <span className="text-gold-gradient">Categories</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courseCategories.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => router.push(c.route)}
                className="group cursor-pointer p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/30 hover:bg-white/[0.05] transition-all duration-500">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-base font-semibold text-white mb-1 tracking-tight group-hover:text-[#D2BE60] transition-colors">{c.name}</h3>
                <p className="text-white/35 text-xs font-light leading-relaxed mb-3">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#D2BE60]/60 text-xs font-medium">{c.courses} courses</span>
                  <span className="text-white/20 text-xs group-hover:text-[#D2BE60]/50 transition-colors">Explore →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">Benefits</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why Learn <span className="text-gold-gradient">With Us</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/25 hover:bg-white/[0.05] transition-all duration-500 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#D2BE60]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D2BE60]/15 transition-colors">
                  <b.Icon className="w-6 h-6 text-[#D2BE60]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{b.title}</h3>
                <p className="text-white/45 text-sm font-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">Your Journey</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Learning <span className="text-gold-gradient">Path</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {learningSteps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 text-center ${currentStep === i ? 'border-[#D2BE60]/40 bg-[#D2BE60]/[0.05]' : 'border-white/[0.08] bg-white/[0.02]'}`}>
                <span className={`text-4xl font-extrabold mb-3 block transition-colors duration-300 ${currentStep === i ? 'text-[#D2BE60]' : 'text-white/10'}`}>{s.step}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{s.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-[#D2BE60]/20 to-transparent" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#D2BE60]/15 bg-[#D2BE60]/[0.03] backdrop-blur-xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to Transform Your <span className="text-gold-gradient">Career?</span>
            </h2>
            <p className="text-white/50 text-lg font-light max-w-xl mx-auto mb-8">
              Join thousands of professionals who have advanced their careers through our comprehensive training programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(210,190,96,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/contact')}
              className="px-10 py-4 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black rounded-xl font-semibold text-base tracking-wide shadow-lg shadow-[#D2BE60]/25 transition-all duration-300 mb-10"
            >
              Enroll Now →
            </motion.button>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/[0.06]">
              {[
                { label: "Free Consultation", sub: "Discuss your career goals" },
                { label: "Flexible Payment", sub: "Multiple payment options" },
                { label: "Job Guarantee", sub: "Career support & placement" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-white font-medium text-sm mb-1">{item.label}</p>
                  <p className="text-white/35 text-xs font-light">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <TestimonialSlider />
      <Banner />
    </div>
  );
}