'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, TrendingUp, Users, DollarSign, ArrowRight, FileText, PhoneCall, Award, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import TestimonialSlider from '../components/TestimonialSlider';
import Banner from '../components/Banner';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const jobs = [
  { id: 1, title: 'Customer Support Executive', location: 'Bangalore, India', type: 'Full-Time', description: 'Handle inbound calls and resolve customer queries efficiently.', category: 'Customer Service' },
  { id: 2, title: 'Customer Support Executive', location: 'Thane, India', type: 'Full-Time', description: 'Handle inbound calls and resolve customer queries efficiently.', category: 'Customer Service' },
  { id: 3, title: 'Customer Support Executive', location: 'Noida, India', type: 'Full-Time', description: 'Handle inbound calls and resolve customer queries efficiently.', category: 'Customer Service' },
  { id: 4, title: 'Telesales Executive', location: 'Bangalore, India', type: 'Full-Time', description: 'Drive sales through outbound calling and build customer relationships.', category: 'Sales' },
  { id: 5, title: 'Telesales Executive', location: 'Thane, India', type: 'Full-Time', description: 'Drive sales through outbound calling and build customer relationships.', category: 'Sales' },
  { id: 6, title: 'Customer Sales Representative', location: 'Bangalore, India', type: 'Full-Time', description: 'Assist customers with sales inquiries and product information.', category: 'Sales' },
  { id: 7, title: 'Customer Sales Representative', location: 'Thane, India', type: 'Full-Time', description: 'Assist customers with sales inquiries and product information.', category: 'Sales' },
  { id: 8, title: 'Collection Executive', location: 'Bangalore, India', type: 'Full-Time', description: 'Manage collection activities and maintain customer payment records.', category: 'Finance' },
  { id: 9, title: 'Customer Service Executive', location: 'Noida, India', type: 'Full-Time', description: 'Provide excellent customer service and support to clients.', category: 'Customer Service' },
  { id: 10, title: 'Chat Support Executive', location: 'Bangalore, India', type: 'Full-Time', description: 'Provide customer support through chat channels and resolve queries.', category: 'Customer Service' },
  { id: 11, title: 'Chat Support Executive', location: 'Thane, India', type: 'Full-Time', description: 'Provide customer support through chat channels and resolve queries.', category: 'Customer Service' },
  { id: 12, title: 'BPO Quality Analyst', location: 'Bangalore, India', type: 'Full-Time', description: 'Audit calls and provide performance feedback to agents.', category: 'Quality Assurance' },
  { id: 13, title: 'BPO Quality Analyst', location: 'Thane, India', type: 'Full-Time', description: 'Audit calls and provide performance feedback to agents.', category: 'Quality Assurance' },
  { id: 14, title: 'BPO Quality Analyst', location: 'Jamshedpur, India', type: 'Full-Time', description: 'Audit calls and provide performance feedback to agents.', category: 'Quality Assurance' },
  { id: 15, title: 'BPO Quality Analyst', location: 'Hubli, India', type: 'Full-Time', description: 'Audit calls and provide performance feedback to agents.', category: 'Quality Assurance' },
  { id: 16, title: 'BPO Quality Analyst', location: 'Navi Mumbai, India', type: 'Full-Time', description: 'Audit calls and provide performance feedback to agents.', category: 'Quality Assurance' },
  { id: 17, title: 'BPO Process Trainer', location: 'Bangalore, India', type: 'Full-Time', description: 'Design training modules and conduct onboarding sessions.', category: 'Training' },
  { id: 18, title: 'BPO Process Trainer', location: 'Thane, India', type: 'Full-Time', description: 'Design training modules and conduct onboarding sessions.', category: 'Training' },
  { id: 19, title: 'BPO Team Lead', location: 'Bangalore, India', type: 'Full-Time', description: 'Lead a team of executives and ensure SLA adherence.', category: 'Management' },
  { id: 20, title: 'BPO Team Lead', location: 'Thane, India', type: 'Full-Time', description: 'Lead a team of executives and ensure SLA adherence.', category: 'Management' },
  { id: 21, title: 'Technical Support Specialist', location: 'Hyderabad, India', type: 'Full-Time', description: 'Provide technical assistance for internet and software issues.', category: 'Technical' },
  { id: 22, title: 'HR Recruiter – BPO Hiring', location: 'Remote', type: 'Part-Time', description: 'Manage end-to-end recruitment for voice and non-voice roles.', category: 'Human Resources' },
  { id: 23, title: 'Voice Process Associate', location: 'Mumbai, India', type: 'Full-Time', description: 'Handle outbound/inbound voice calls and customer queries.', category: 'Customer Service' },
  { id: 24, title: 'Non-Voice Process Executive', location: 'Pune, India', type: 'Full-Time', description: 'Manage chat and email support with timely resolutions.', category: 'Customer Service' },
];

const categories = [...new Set(jobs.map(job => job.category))];
const locations = [...new Set(jobs.map(job => job.location))];

const whyJoinUs = [
  { Icon: TrendingUp, title: "Growth Opportunities", desc: "Clear career path with regular promotions and skill development" },
  { Icon: Users, title: "Amazing Team", desc: "Diverse and supportive team that values collaboration and innovation" },
  { Icon: DollarSign, title: "Competitive Benefits", desc: "Competitive salary, health insurance, flexible hours, and great perks" },
];

const processSteps = [
  { step: "01", Icon: FileText, title: "Apply Online", desc: "Submit your application through our careers page" },
  { step: "02", Icon: Search, title: "Initial Screening", desc: "Our recruiters review applications and schedule calls" },
  { step: "03", Icon: PhoneCall, title: "Interview Process", desc: "Technical and cultural fit interviews with the team" },
  { step: "04", Icon: Award, title: "Job Offer", desc: "Successful candidates receive offers to join our team" },
];

const CareersPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleApply = () => router.push('/contact');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === '' || job.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const selectClasses = "w-full p-3.5 bg-white/[0.04] border border-white/[0.08] text-white rounded-xl text-sm font-light focus:outline-none focus:border-[#D2BE60]/40 transition-all duration-300 appearance-none";

  return (
    <div className="bg-[#030712] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(210,190,96,0.08),transparent)]" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger}
          className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D2BE60] border border-[#D2BE60]/30 bg-[#D2BE60]/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2BE60] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#D2BE60]" /></span>
              Careers
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Join Our <span className="text-gold-gradient">Team</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Discover exciting career opportunities and grow with us
          </motion.p>

          {/* Process Steps in Hero */}
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-4">
            {['Find a role', 'Apply online', 'Interview', 'Get hired!'].map((step, i) => (
              <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D2BE60] to-[#F4D03F] flex items-center justify-center text-black text-xs font-bold">{i + 1}</span>
                <span className="text-white/60 text-sm font-light">{step}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Search & Filter */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#D2BE60] text-xs font-medium mb-2 tracking-wider uppercase">Search Jobs</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input type="text" placeholder="Search position or keyword" className={`${selectClasses} pl-10`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="block text-[#D2BE60] text-xs font-medium mb-2 tracking-wider uppercase">Category</label>
                <select className={selectClasses} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="">All Categories</option>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[#D2BE60] text-xs font-medium mb-2 tracking-wider uppercase">Location</label>
                <select className={selectClasses} value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                  <option value="">All Locations</option>
                  {locations.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Current <span className="text-gold-gradient">Openings</span></h2>
            <span className="text-white/35 text-sm font-light">{filteredJobs.length} positions</span>
          </div>

          {filteredJobs.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 rounded-2xl border border-white/[0.06] bg-white/[0.01]">
              <Sparkles className="w-12 h-12 mx-auto text-white/15 mb-4" />
              <h3 className="text-lg font-medium text-white/60 mb-2">No matching positions found</h3>
              <p className="text-white/30 text-sm font-light">Try changing your search criteria</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {filteredJobs.map((job, i) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  className="group p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/25 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold text-white group-hover:text-[#D2BE60] transition-colors tracking-tight">{job.title}</h3>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium text-[#D2BE60]/70 bg-[#D2BE60]/5 border border-[#D2BE60]/15 flex-shrink-0 ml-3">{job.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex items-center gap-1.5 text-white/35 text-xs font-light">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/35 text-xs font-light">
                      <Clock className="w-3.5 h-3.5" /> {job.type}
                    </div>
                  </div>
                  <p className="text-white/40 text-sm font-light leading-relaxed mb-5">{job.description}</p>
                  <motion.button onClick={handleApply} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium border border-[#D2BE60]/25 text-[#D2BE60] bg-[#D2BE60]/5 hover:bg-[#D2BE60] hover:text-black transition-all duration-300">
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">Benefits</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">Why Join <span className="text-gold-gradient">Our Team?</span></motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyJoinUs.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/25 hover:bg-white/[0.05] transition-all duration-500 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#D2BE60]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D2BE60]/15 transition-colors">
                  <w.Icon className="w-7 h-7 text-[#D2BE60]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{w.title}</h3>
                <p className="text-white/45 text-sm font-light leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] border border-[#D2BE60]/20 bg-[#D2BE60]/5 mb-4">Process</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white tracking-tight">Application <span className="text-gold-gradient">Process</span></motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl text-center">
                <span className="text-3xl font-extrabold text-[#D2BE60]/15 mb-3 block">{s.step}</span>
                <div className="w-12 h-12 rounded-xl bg-[#D2BE60]/10 flex items-center justify-center mx-auto mb-4">
                  <s.Icon className="w-6 h-6 text-[#D2BE60]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
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
              Don&apos;t see the <span className="text-gold-gradient">perfect role?</span>
            </h2>
            <p className="text-white/50 text-lg font-light max-w-xl mx-auto mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <motion.button onClick={handleApply}
              whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(210,190,96,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black rounded-xl font-semibold text-base tracking-wide shadow-lg shadow-[#D2BE60]/25 transition-all duration-300">
              Submit Your Resume →
            </motion.button>
          </motion.div>
        </div>
      </section>

      <TestimonialSlider />
      <Banner />
    </div>
  );
};

export default CareersPage;