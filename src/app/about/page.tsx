/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Banner from '../components/Banner';
import TestimonialSlider from '../components/TestimonialSlider';
import { Clock, Star, Target, Award, Users, Briefcase, Globe2, Shield, Zap, Heart } from 'lucide-react';

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ═══════════════════════════════════════════ */
export default function AboutUs() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <Header />

      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden py-28 md:py-40">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(210,190,96,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(99,102,241,0.06),transparent)]" />

        {/* Animated ring decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[#D2BE60]/[0.06] pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.04] pointer-events-none"
        />

        {/* Floating Icons */}
        {[
          { Icon: Users, x: '12%', y: '20%', size: 'w-10 h-10', color: 'text-[#D2BE60]', delay: 0, dur: 6 },
          { Icon: Briefcase, x: '85%', y: '25%', size: 'w-9 h-9', color: 'text-[#D2BE60]/60', delay: 1, dur: 7 },
          { Icon: Globe2, x: '8%', y: '70%', size: 'w-8 h-8', color: 'text-indigo-400/50', delay: 2, dur: 5 },
          { Icon: Shield, x: '90%', y: '65%', size: 'w-9 h-9', color: 'text-[#D2BE60]/40', delay: 0.5, dur: 8 },
          { Icon: Zap, x: '25%', y: '80%', size: 'w-7 h-7', color: 'text-amber-400/40', delay: 1.5, dur: 6.5 },
          { Icon: Heart, x: '75%', y: '82%', size: 'w-8 h-8', color: 'text-rose-400/30', delay: 2.5, dur: 7 },
        ].map(({ Icon, x, y, size, color, delay, dur }, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block pointer-events-none"
            style={{ left: x, top: y }}
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
          >
            <div className="p-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
              <Icon className={`${size} ${color}`} />
            </div>
          </motion.div>
        ))}

        {/* Floating gold particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`p${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#D2BE60]/30 hidden md:block pointer-events-none"
            style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 22}%` }}
            animate={{ y: [0, -25, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
          />
        ))}

        {/* Text content */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false }}
          variants={stagger}
          className="max-w-5xl mx-auto px-6 text-center relative z-10"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D2BE60] border border-[#D2BE60]/30 bg-[#D2BE60]/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2BE60] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D2BE60]" />
              </span>
              About CEGS
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Get to <span className="text-gold-gradient">Know Us</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10"
          >
            We are a passionate team dedicated to providing exceptional HR consulting, payroll management, IT staffing, and more.
          </motion.p>

          {/* Stats row in hero */}
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '12+', label: 'Years Experience' },
              { value: '200+', label: 'Clients Served' },
              { value: '40K+', label: 'Placements' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#D2BE60] mb-1">{stat.value}</p>
                <p className="text-white/35 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ════════ ABOUT COMPANY ════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-4">
              <span className="text-white/20">[</span>
              <span className="text-[#D2BE60] tracking-[0.2em] font-medium text-sm uppercase">Our Story</span>
              <span className="text-white/20">]</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-12"
            >About Our Company</motion.h2>

            <motion.div variants={fadeUp} custom={2}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 space-y-6"
            >
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Career Experts Global Solutions is renowned for our consultative recruitment approach that has
                garnered accolades and expanded our client base.
              </p>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                We specialize in optimizing recruitment processes for our clients, delivering measurable improvements in
                Quality-of-Hire, Time-to-Fill, and Cost-per-Hire.
              </p>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Our tailored hiring solutions empower clients to achieve greater efficiency and business performance.
                Through collaborative partnerships and flawless execution, we align our efforts with their strategic
                talent acquisition goals.
              </p>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Driven by passion, integrity, and a strong work ethic, we are a preferred hiring partner. Our commitment
                to delivering exceptional value to both clients and candidates sets us apart.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════ DIRECTORS ════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">
                Leadership
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our <span className="text-gold-gradient">Directors</span>
            </motion.h2>
          </motion.div>

          {/* Director 1: Mohammed Usman Zabi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-24"
          >
            <div className="md:w-2/5 flex justify-center">
              <div className="relative group">
                <div className="w-72 h-80 rounded-2xl overflow-hidden border border-white/[0.08]">
                  <img src="/Assets/WhatsApp Image 2025-07-24 at 3.17.53 PM.jpeg" alt="Mohammed Usman Zabi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#D2BE60]/30 rounded-br-2xl" />
                <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#D2BE60]/30 rounded-tl-2xl" />
              </div>
            </div>
            <div className="md:w-3/5">
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">Mohammed Usman Zabi</h3>
              <p className="text-[#D2BE60] font-medium text-lg mb-4">Founder & Director</p>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#D2BE60] to-transparent rounded-full mb-6" />
              <p className="text-white/80 italic text-lg mb-6 font-light">&ldquo;Connecting talent with opportunity, building futures together.&rdquo;</p>
              <div className="space-y-4 text-white/50 font-light leading-relaxed">
                <p>With over 12 years of experience in global recruitment and talent acquisition, Usman has consistently pioneered innovative approaches to connecting top-tier talent with the right opportunities across diverse industries.</p>
                <p>In addition to his expertise in recruitment, Usman is a seasoned business consultant and corporate strategist, helping startups and established enterprises align their talent strategy with business growth objectives.</p>
                <p>Currently, Usman is <strong className="text-white/70">managing operations across 8 different companies</strong>, offering guidance in strategic hiring, operational optimization, and business expansion.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Leadership', 'Vision', 'Innovation'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#D2BE60]/80 bg-[#D2BE60]/5 border border-[#D2BE60]/15">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Director 2: Sheeba Begum */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12"
          >
            <div className="md:w-2/5 flex justify-center">
              <div className="relative group">
                <div className="w-72 h-80 rounded-2xl overflow-hidden border border-white/[0.08]">
                  <img src="/Assets/upscalemedia-transformed.jpeg" alt="Sheeba Begum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#D2BE60]/30 rounded-bl-2xl" />
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#D2BE60]/30 rounded-tr-2xl" />
              </div>
            </div>
            <div className="md:w-3/5">
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">Sheeba Begum</h3>
              <p className="text-[#D2BE60] font-medium text-lg mb-4">Chief Executive Officer, Operations</p>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#D2BE60] to-transparent rounded-full mb-6" />
              <p className="text-white/80 italic text-lg mb-6 font-light">&ldquo;Translating vision into action, bridging strategy with execution.&rdquo;</p>
              <div className="space-y-4 text-white/50 font-light leading-relaxed">
                <p>As the CEO of Operations, Sheeba brings exceptional leadership and operational expertise to the forefront of our organization. With a strong background in process optimization, team leadership, and strategic planning.</p>
                <p>Sheeba is known for her ability to translate vision into action, overseeing day-to-day operations with a sharp focus on efficiency, quality, and scalability.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Operations', 'Strategy', 'Excellence'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#D2BE60]/80 bg-[#D2BE60]/5 border border-[#D2BE60]/15">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ UNIQUE APPROACH ════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D2BE60]/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">
                Our Approach
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              What Makes Us <span className="text-gold-gradient">Different</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Prompt Assistance", desc: "We ensure your success and satisfaction at every stage by offering dependable and prompt assistance." },
              { icon: Star, title: "Premium Development", desc: "Providing solutions that are of the highest caliber and use cutting-edge technologies." },
              { icon: Target, title: "Competitive Price", desc: "We provide premium services at prices that maximize your return on investment." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/25 hover:bg-white/[0.05] transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D2BE60]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D2BE60]/15 transition-colors">
                  <item.icon className="w-7 h-7 text-[#D2BE60]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-white/45 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ MANAGEMENT TEAM ════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">
                Our Team
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Leadership <span className="text-gold-gradient">Team</span>
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { name: "Mohammed Raiyan Ahmed", role: "Delivery & Business Strategy Expert Director", img: "/Assets/zama-photoaidcom-cropped.png", desc: "Spearheading strategic business development initiatives while efficiently managing end-to-end billing processes and overseeing key financial operations to support organizational growth.", tags: ["Business Dev", "Finance"] },
              { name: "Nusrath Hussain", role: "Talent Acquisition Director", img: "/Assets/hussian-photoaidcom-cropped.png", desc: "HR Manager overseeing end-to-end recruitment operations, aligning talent acquisition strategies with business objectives. Responsible for optimizing hiring processes, ensuring efficiency, quality, and client satisfaction.", tags: ["Recruitment", "Talent"] },
              { name: "Heena Begum", role: "Finance & Payroll Director", img: "/Assets/henna-photoaidcom-cropped.png", desc: "HR Generalist with a dual focus on people operations and billing oversight, playing a key role in both workforce management and financial coordination. Ensuring smooth HR functions and accurate billing processes.", tags: ["HR Ops", "Payroll"] },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/20 hover:bg-white/[0.04] transition-all duration-500"
              >
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#D2BE60]/20 group-hover:border-[#D2BE60]/40 transition-colors duration-500">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute -inset-1 rounded-full border border-[#D2BE60]/0 group-hover:border-[#D2BE60]/15 transition-all duration-500" />
                  </div>
                </div>
                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white mb-1 tracking-tight group-hover:text-[#D2BE60] transition-colors duration-300">{member.name}</h3>
                  <p className="text-[#D2BE60] text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-white/45 text-sm font-light leading-relaxed mb-4">{member.desc}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {member.tags.map(t => (
                      <span key={t} className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-[#D2BE60]/70 bg-[#D2BE60]/5 border border-[#D2BE60]/15">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CORE VALUES ════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">
                Our Values
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Core <span className="text-gold-gradient">Values</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "We strive for excellence in every interaction and placement we facilitate." },
              { icon: Users, title: "Integrity", desc: "Honesty and transparency are at the core of our business relationships." },
              { icon: Target, title: "Innovation", desc: "We continuously evolve our approaches to stay ahead of industry trends." },
              { icon: Clock, title: "Commitment", desc: "We are dedicated to the long-term success of both clients and candidates." },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/20 hover:bg-white/[0.05] transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D2BE60]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D2BE60]/15 transition-colors">
                  <val.icon className="w-7 h-7 text-[#D2BE60]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{val.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS & FOOTER ════════ */}
      <TestimonialSlider />
      <Banner />
    </div>
  );
}