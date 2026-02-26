/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-[#030712] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            className="flex justify-center md:justify-start"
          >
            <Link href="/" passHref>
              <Image
                src="/Assets/image-Photoroom (11).png"
                alt="Logo"
                width={180}
                height={90}
                className="object-contain cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
          </motion.div>

          {/* Services, Company, and Contact Us */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-[#D2BE60] font-semibold mb-5 text-sm tracking-widest uppercase">Services</h3>
              <ul className="space-y-3">
                {[
                  { name: "HR Consulting", href: "/services/hr-consulting" },
                  { name: "Payroll Management", href: "/services/payroll-management" },
                  { name: "Staffing Solutions", href: "/services/staffing-solutions" },
                  { name: "Web Development", href: "/services/web-development" },
                  { name: "BPO/KPO & Inside Sales", href: "/services/bpo-kpo-services" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-white/40 hover:text-white/70 transition-colors text-sm font-light">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h3 className="text-[#D2BE60] font-semibold mb-5 text-sm tracking-widest uppercase">Company</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-white/40 hover:text-white/70 transition-colors text-sm font-light">About us</a></li>
                <li><a href="/careers" className="text-white/40 hover:text-white/70 transition-colors text-sm font-light">Careers</a></li>
              </ul>
            </motion.div>

            {/* Contact Us Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-[#D2BE60] font-semibold mb-5 text-sm tracking-widest uppercase">Contact Us</h3>
              <ul className="space-y-4 text-white/40">
                <li>
                  <div className="flex items-center space-x-3">
                    <img src="/Assets/image-removebg-preview (10).png" alt="Email" className="h-4 w-4 opacity-50" />
                    <span className="text-sm font-light">info@careerexpertglobalsolution.com</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-3 whitespace-nowrap">
                    <img src="/Assets/image-removebg-preview (9).png" alt="Phone" className="h-4 w-4 opacity-50" />
                    <span className="text-sm font-light">+91 7892220496 / +91 9743870225</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-3">
                    <img src="/Assets/image-removebg-preview (8).png" alt="Address" className="h-4 w-4 opacity-50" />
                    <span className="text-sm font-light">Neelsandra, Bangalore 560047</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs text-white/20 font-light">
            Copyright © 2017 CEGS. All rights reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-80 transition-opacity">
              <img src="/Assets/image-removebg-preview (11).png" alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/company/career-expert-global-solution-cegs/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-80 transition-opacity">
              <img src="/Assets/image-removebg-preview (12).png" alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
