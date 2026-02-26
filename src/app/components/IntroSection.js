'use client';
import { motion } from 'framer-motion';
import ProcessSlider from './ProcessSlider';
import AboutSection from './AboutSection';
import BenefitsSection from './BenefitsSection';
import VisionMissionSection from './VisionMissionSection';
import TestimonialSlider from './TestimonialSlider';
import WhyCegsSection from './WhyCegsSection';
import StatsDisplay from './StatsDisplay';
import Banner from './Banner';
import { useRouter } from 'next/navigation';
import Link from "next/link";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ═══════════════════════════════
   HERO SECTION
   ═══════════════════════════════ */
const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712]">
      {/* ── Background Video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Assets/HR_Consulting_Video_Generation_Prompt.mp4" type="video/mp4" />
      </video>

      {/* Light overlay — left darker for text, right transparent for video */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl py-20"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D2BE60] border border-[#D2BE60]/30 bg-[#D2BE60]/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2BE60] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D2BE60]" />
              </span>
              HR Consulting & Staffing
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Connecting top{' '}
            <span className="relative inline-block">
              talents
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C47 2 153 2 199 5.5" stroke="#D2BE60" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
            <br />
            with leading{' '}
            <span className="text-gold-gradient" style={{ textShadow: 'none' }}>MNC&apos;s</span>
            <br />
            across the Globe
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-white/70 text-base sm:text-lg max-w-lg leading-relaxed font-light mb-8"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
          >
            We take the hiring burden off your plate — delivering skilled,
            reliable talent tailored to your voice, non-voice, and support
            process needs. Scale confidently with us.
          </motion.p>

          {/* CTA Row */}
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(210,190,96,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-3.5 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black rounded-xl font-semibold text-sm tracking-wide shadow-lg shadow-[#D2BE60]/25 transition-all duration-300"
              onClick={() => router.push('/contact')}
            >
              <span className="flex items-center gap-2">
                Speak to Our Team
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-xl text-white font-medium text-sm tracking-wide transition-all duration-300 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-md"
              onClick={() => router.push('/about')}
            >
              Learn More →
            </motion.button>
          </motion.div>

          {/* Stats Pills */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3">
            {[
              { value: "200+", label: "Clients" },
              { value: "40K+", label: "Placements" },
              { value: "50+", label: "Experts" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-black/30 border border-white/10 backdrop-blur-md">
                <span className="text-xl font-bold text-[#D2BE60]">{stat.value}</span>
                <span className="text-white/50 text-[11px] font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
};



/* ═══════════════════════════════
   ABOUT US SECTION
   ═══════════════════════════════ */
const AboutUs = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#030712] overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgba(3, 7, 18, 0.95),
            rgba(3, 7, 18, 0.88)
          ), url('/Assets/Four.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Decorative orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="text-white/20 text-lg">[</span>
          <span className="text-[#D2BE60] tracking-[0.2em] font-medium text-sm uppercase">CEGS</span>
          <span className="text-white/20 text-lg">]</span>
        </motion.div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            About Us
          </h2>
          <div className="absolute -bottom-4 left-0 w-20 h-[3px] bg-gradient-to-r from-[#D2BE60] to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/60 text-lg leading-relaxed mb-6 font-light">
              We specialize in delivering tailored Staffing Solutions, Training and HR Recruitment services.
              Our mission is to empower businesses by providing top-tier talent, streamlined payroll
              management, and advanced digital solutions.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10 font-light">
              With our expert team and client-centric approach, we ensure your workforce
              operates efficiently and effectively.
            </p>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black px-10 py-4 text-sm font-semibold rounded-xl tracking-wide shadow-lg shadow-[#D2BE60]/20 hover:shadow-[#D2BE60]/40 transition-shadow duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Right column - Expertise Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {/* Subtle corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D2BE60]/10 rounded-full blur-[60px]" />

              <h3 className="text-xl font-semibold text-white mb-8 text-center tracking-wide">Our Expertise</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-3">
                  {['Staffing Solutions', 'HR Recruitment', 'Payroll Management', 'Digital Solutions'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/[0.03] transition-colors group"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#D2BE60]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D2BE60]/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#D2BE60]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  {['HTD Services', 'C2H Service', 'Business Strategy Planning', 'Training Courses'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/[0.03] transition-colors group"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#D2BE60]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D2BE60]/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#D2BE60]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   INTRO SECTION (Composition)
   ═══════════════════════════════ */
export default function IntroSection() {
  return (
    <div className="bg-[#030712]">
      <HeroSection />
      <AboutUs />
      <StatsDisplay />
      <ProcessSlider />
      <AboutSection />
      <BenefitsSection />
      <VisionMissionSection />
      <TestimonialSlider />
      <WhyCegsSection />
      <Banner />
    </div>
  );
}
