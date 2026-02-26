"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "../components/Header";
import StatsDisplay from "../components/StatsDisplay";
import TestimonialSlider from "../components/TestimonialSlider";
import Banner from "../components/Banner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const contactInfo = [
  { Icon: Phone, title: "Call Us", desc: "Ready to help you anytime", color: "text-[#D2BE60]" },
  { Icon: Mail, title: "Email Us", desc: "Send us a detailed message", color: "text-[#D2BE60]" },
  { Icon: MapPin, title: "Visit Us", desc: "Come see us in person", color: "text-[#D2BE60]" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    referredName: "",
    message: "",
    agreed: false,
    attachment: null,
  });

  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            attachment: { name: file.name, type: file.type, data: reader.result },
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Thank you for your message. We will get back to you soon!" });
        setFormData({ fullName: "", email: "", phone: "", referredName: "", message: "", agreed: false, attachment: null });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch {
      setSubmitStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-white/[0.04] border border-white/[0.08] text-white rounded-xl p-3.5 text-sm font-light placeholder:text-white/25 focus:outline-none focus:border-[#D2BE60]/40 focus:bg-white/[0.06] transition-all duration-300";

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
              Contact
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Get In <span className="text-gold-gradient">Touch</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We&apos;re here to help — whether you have a question or concern, use the form below and we&apos;ll be in touch promptly.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left — Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={stagger} className="lg:col-span-2 space-y-6">
              {contactInfo.map((c, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-[#D2BE60]/20 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-[#D2BE60]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D2BE60]/15 transition-colors">
                    <c.Icon className="w-5 h-5 text-[#D2BE60]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{c.title}</h3>
                    <p className="text-white/40 text-xs font-light">{c.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Quick Response Card */}
              <motion.div variants={fadeUp} custom={3}
                className="p-6 rounded-2xl border border-[#D2BE60]/15 bg-[#D2BE60]/[0.03] backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#D2BE60]" />
                  <h4 className="text-[#D2BE60] font-semibold text-sm">Quick Response</h4>
                </div>
                <p className="text-white/45 text-sm font-light leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
              className="lg:col-span-3 p-7 md:p-9 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-2" htmlFor="fullName">Full Name <span className="text-[#D2BE60]">*</span></label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name..." className={inputClasses} required />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-2" htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email..." className={inputClasses} required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-2" htmlFor="phone">Phone Number <span className="text-[#D2BE60]">*</span></label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 (000) 000-0000" className={inputClasses} required />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-2" htmlFor="referredName">Referred By <span className="text-[#D2BE60]">*</span></label>
                    <input type="text" id="referredName" name="referredName" value={formData.referredName} onChange={handleChange} placeholder="Who referred you..." className={inputClasses} required />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2" htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message here..." maxLength={300} className={`${inputClasses} min-h-[120px] resize-none`} required />
                  <p className="text-right text-white/20 text-xs mt-1">{formData.message.length}/300</p>
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2" htmlFor="attachment">Attachment</label>
                  <input type="file" id="attachment" name="attachment" accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleChange}
                    className="w-full text-white/40 text-sm file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border file:border-[#D2BE60]/20 file:text-sm file:bg-[#D2BE60]/10 file:text-[#D2BE60] hover:file:bg-[#D2BE60]/15 file:transition-colors file:cursor-pointer" />
                  {formData.attachment && (
                    <p className="text-sm text-white/30 mt-2">Selected: <span className="text-white/60">{formData.attachment.name}</span></p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="agreed" name="agreed" checked={formData.agreed} onChange={handleChange}
                    className="w-4 h-4 rounded border-[#D2BE60]/30 bg-transparent accent-[#D2BE60]" required />
                  <label htmlFor="agreed" className="text-white/45 text-xs font-light">
                    I hereby agree to our <a href="/privacy-policy" className="text-[#D2BE60] underline underline-offset-2">Privacy Policy terms</a>.
                  </label>
                </div>

                {submitStatus.message && (
                  <div className={`p-4 rounded-xl text-sm ${submitStatus.type === "success" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300" : "bg-red-500/10 border border-red-500/20 text-red-300"}`}>
                    {submitStatus.message}
                  </div>
                )}

                <motion.button type="submit" disabled={isSubmitting || !formData.agreed}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${isSubmitting || !formData.agreed
                      ? "bg-white/[0.05] text-white/25 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black shadow-lg shadow-[#D2BE60]/20 hover:shadow-[#D2BE60]/30"
                    }`}>
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Submit Form"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsDisplay />
      <TestimonialSlider />
      <Banner />
    </div>
  );
}