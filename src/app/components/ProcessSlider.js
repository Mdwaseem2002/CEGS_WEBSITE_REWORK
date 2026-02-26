'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Code, UserPlus, Settings, CheckCircle } from 'lucide-react';

const ProcessSlider = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01",
      step: "Step 1",
      stepName: "Discovery",
      title: "Client Onboarding & Requirement Discovery",
      description:
        "Kickoff meeting to define project scope. Identify required job roles. Volume, location (on-site/remote), shift timing, and language requirements. Discuss SLAs, budget, contract length, compliance needs.",
      buttonText: "Understand exactly what the client needs",
      icon: Users,
    },
    {
      number: "02",
      step: "Step 2",
      stepName: "Sourcing",
      title: "Talent Pool Activation",
      description:
        "Tap into internal candidate database. Activate external sourcing channels. Prioritize candidates with prior BPO experience. Filter based on client-specific needs.",
      buttonText: "Source pre-qualified candidates fast",
      icon: Code,
    },
    {
      number: "03",
      step: "Step 3",
      stepName: "Evaluation",
      title: "Candidate Screening & Evaluation",
      description:
        "Resume filtering and telephonic/virtual screening. Communication assessments (voice clarity, fluency). Skill checks. Culture and shift-readiness checks.",
      buttonText: "Screening",
      icon: UserPlus,
    },
    {
      number: "04",
      step: "Step 4",
      stepName: "Interview",
      title: "Client Interviews & Final Selection",
      description:
        "Submit shortlisted candidate profiles with assessments. Schedule interviews with client stakeholders. Collect feedback and manage rejections/selections. Handle offer communication.",
      buttonText: "Client Selection",
      icon: Settings,
    },
    {
      number: "05",
      step: "Step 5",
      stepName: "Management",
      title: "Contract Management & Scalability",
      description:
        "Manage extensions, exits, or role transitions. Support volume ramp-ups during peak demand. Offer transition-to-hire options if needed.",
      buttonText: "Scalability",
      icon: CheckCircle,
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev === 5 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 1 ? 5 : prev - 1));
  };

  const currentStep = steps[activeStep - 1];
  const Icon = currentStep.icon;

  return (
    <div className="bg-[#030712] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] glass-gold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Staff Augmentation{' '}
            <span className="text-gold-gradient">Process</span>
          </h2>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-16">
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl sm:text-7xl font-bold text-white/[0.06] leading-none">{currentStep.number}</span>
                  <div className="w-8 h-[1px] bg-[#D2BE60]/30" />
                  <span className="text-[#D2BE60] text-sm tracking-widest uppercase font-medium">{currentStep.stepName}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white tracking-tight">{currentStep.title}</h3>
                <p className="text-white/50 mb-8 text-base leading-relaxed font-light">{currentStep.description}</p>

                <button className="px-6 py-3 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black rounded-xl font-semibold text-sm tracking-wide shadow-lg shadow-[#D2BE60]/20 hover:shadow-[#D2BE60]/40 transition-all">
                  {currentStep.buttonText}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Step Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index + 1 === activeStep;
              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActiveStep(index + 1)}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-400 ${isActive
                    ? 'glass-gold glow-gold'
                    : 'glass hover:bg-white/[0.04]'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? 'bg-[#D2BE60]/20' : 'bg-white/[0.03]'
                    }`}>
                    <StepIcon className={`w-5 h-5 ${isActive ? 'text-[#D2BE60]' : 'text-white/30'}`} />
                  </div>
                  <div>
                    <span className={`text-xs font-medium tracking-widest uppercase ${isActive ? 'text-[#D2BE60]' : 'text-white/30'
                      }`}>
                      {step.step}
                    </span>
                    <p className={`text-sm font-medium ${isActive ? 'text-white' : 'text-white/50'}`}>
                      {step.stepName}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex items-center gap-4 justify-center">
          <button
            onClick={handlePrev}
            className="p-3 glass rounded-full hover:bg-white/[0.05] transition-colors"
          >
            <ChevronLeft size={20} className="text-white/60" />
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${step === activeStep ? 'bg-[#D2BE60] w-6' : 'bg-white/20 hover:bg-white/30'
                  }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 glass rounded-full hover:bg-white/[0.05] transition-colors"
          >
            <ChevronRight size={20} className="text-white/60" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessSlider;