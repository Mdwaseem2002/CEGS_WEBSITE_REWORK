//src\app\components\Header.js
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Track scroll for header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileServices = (e) => {
    e.stopPropagation();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const navigateToService = (path) => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsDropdownOpen(false);
    router.push(path);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const services = [
    { name: "HR Consulting", path: "/services/hr-consulting" },
    { name: "Payroll Management", path: "/services/payroll-management" },
    { name: "Staffing Solutions", path: "/services/staffing-solutions" },
    { name: "Web Development Services", path: "/services/web-development" },
    { name: "BPO/KPO & Inside Sales Staffing", path: "/services/bpo-kpo-services" },
    { name: "Training Courses", path: "/services/training-courses" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-2xl bg-black/70 border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        : "bg-black/40 backdrop-blur-md border-b border-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" passHref>
            <Image
              src="/Assets/image-Photoroom (11).png"
              alt="Logo"
              width={150}
              height={100}
              className="object-contain cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#D2BE60] focus:outline-none p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {[
            { label: "About Us", href: "/about" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative text-white/80 hover:text-white text-[15px] font-medium tracking-wide transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}

          {/* Services dropdown */}
          <li
            ref={dropdownRef}
            className="relative"
          >
            <button
              className="flex items-center text-white/80 hover:text-white text-[15px] font-medium tracking-wide transition-colors duration-300 group focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1.5 h-4 w-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] group-hover:w-full transition-all duration-300" />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 mt-3 w-72 backdrop-blur-2xl bg-black/80 border border-white/[0.1] rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                >
                  <ul className="py-2" role="menu" aria-orientation="vertical">
                    {services.map((service) => (
                      <li
                        key={service.path}
                        className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] cursor-pointer text-sm transition-all duration-200 flex items-center gap-3 group"
                        onClick={() => navigateToService(service.path)}
                        role="menuitem"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D2BE60]/40 group-hover:bg-[#D2BE60] transition-colors duration-200" />
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {[
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative text-white/80 hover:text-white text-[15px] font-medium tracking-wide transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide shadow-lg shadow-[#D2BE60]/20 hover:shadow-[#D2BE60]/40 transition-shadow duration-300"
            onClick={() => navigateToService("/contact")}
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden backdrop-blur-2xl bg-black/90 border-t border-white/[0.05] overflow-hidden"
          >
            <ul className="flex flex-col space-y-1 py-4 px-6">
              <li>
                <Link
                  href="/about"
                  className="block py-3 text-white/80 hover:text-[#D2BE60] transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  className="flex justify-between items-center w-full py-3 text-white/80 hover:text-[#D2BE60] transition-colors font-medium"
                  onClick={toggleMobileServices}
                  aria-expanded={isMobileServicesOpen}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transform transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 overflow-hidden"
                    >
                      {services.map((service) => (
                        <li
                          key={service.path}
                          className="py-2.5 text-white/60 hover:text-[#D2BE60] cursor-pointer text-sm transition-colors flex items-center gap-2"
                          onClick={() => navigateToService(service.path)}
                        >
                          <span className="w-1 h-1 rounded-full bg-[#D2BE60]/50" />
                          {service.name}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="block py-3 text-white/80 hover:text-[#D2BE60] transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-3 text-white/80 hover:text-[#D2BE60] transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-3">
                <button
                  className="w-full bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black px-4 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-[#D2BE60]/20 transition-all"
                  onClick={() => navigateToService("/contact")}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}