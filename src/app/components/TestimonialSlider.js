'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "CEGS is one of the best consulting firms in Bangalore, you guide like a good friend, the experience with them was very good",
    name: "Annapornanu"
  },
  {
    id: 2,
    text: "It was one of my best decision to listen to the Advise of they helped to get a best job n if u are looking for a job then this is the best place for u i would like to suggest every to visit Career Expert Global solutions they have the best staff with good experience",
    name: "Shabaz Sawar"
  },
  {
    id: 3,
    text: "I'm very thankful for Career Expert Global Solution, for the supportive nature by every staff member in the computer, and very thankful for HR for helping me from the date of interview till the date of joining and getting placed in flipcart, very much pleased by the friendly nature of cegs HRS.",
    name: "Ayesha"
  },
  {
    id: 4,
    text: "I'm very thankful for the friendly support from every staff member of cegs, and for getting me placed in amazon, I'm very thankful for HR for helping me through out the interview process from the point of interview till the joining and even after that guiding me in my work it was really amazing thanking you again for helping me.",
    name: "Prince Faizan"
  },
  {
    id: 5,
    text: "CEGS is one of the best consulting firms in Bangalore. The HRs are very professional and approachable. A special mention to HR, who made the recruitment process seamless and stress-free. She ensured every detail was communicated effectively. She is no one of the best Hr's I have come across.",
    name: "Shaheen Khan"
  },
  {
    id: 6,
    text: "I am truly impressed with the dedication and friendly nature of the consultancy team, has been exceptional in providing guidance throughout the process. Even after securing the job, she continues to stay in touch, always checking in to see how I am doing and how my work life is progressing. Her genuine care and supportive approach have made this experience truly memorable.",
    name: "Mamatha Kesaram"
  },
  {
    id: 7,
    text: "BCZ OF CEGS I GOT JOB THANKYOU SO MUCH",
    name: "Siddhanth Choudhary"
  },
  {
    id: 8,
    text: "I'M VERY THANKFUL FOR CEGS, BECAUSE OF CEGS I GOT JOB",
    name: "Tanya Yashashvi Tower"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerSlide;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevSlideIndex = prevIndex - itemsPerSlide;
      return prevSlideIndex < 0 ? Math.max(testimonials.length - itemsPerSlide, 0) : prevSlideIndex;
    });
  };

  const handleReviewClick = () => {
    window.open('https://www.google.com/search?sca_esv=677f3ddbc8bf65e8&rlz=1C1CHBF_enIN1123IN1123&sxsrf=AE3TifP_Q_spzp-mLOqSgzPUW1CYwlzjkg:1753378299908&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9roYhpRX0h83dds-RSasbt_AHxlBUjC8IOrpDnY03ytUiUTuCNEZ_Dicl8L6vN8bPlX4r9Eo0iBVVvI9ECrUizS99921AIuim8B_93U8eLeO2L4Xg%3D%3D&q=Career+Expert+Global+solutions+Reviews&sa=X&ved=2ahUKEwjmi-SVg9aOAxXuxDgGHQJYOfkQ0bkNegQIHBAD&cshid=1753378312642062&biw=1536&bih=738&dpr=1.25#lrd=0x3bae17e58b1e86e9:0x2a03d439e0c0c791,3,,,,', '_blank');
  };

  return (
    <div className="bg-[#030712] py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D2BE60]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-[#D2BE60] glass-gold mb-6">
            <Star className="w-3.5 h-3.5 fill-current" />
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What Our <span className="text-gold-gradient">Candidates Say</span>
          </h2>
          <p className="text-white/40 text-lg mb-8 max-w-2xl mx-auto font-light">
            Discover why thousands trust CEGS for their career transformation
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleReviewClick}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] text-black font-semibold py-3.5 px-8 rounded-xl text-sm tracking-wide shadow-lg shadow-[#D2BE60]/20 hover:shadow-[#D2BE60]/40 transition-shadow duration-300"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out w-full"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`px-3 md:px-4 flex-shrink-0 ${itemsPerSlide === 1 ? 'w-full' :
                    itemsPerSlide === 2 ? 'w-1/2' : 'w-1/3'
                    }`}
                >
                  <div className="glass rounded-2xl p-6 md:p-8 h-full hover:bg-white/[0.04] hover:border-[#D2BE60]/15 transition-all duration-500 group">
                    {/* Quote Icon */}
                    <div className="w-10 h-10 bg-[#D2BE60]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D2BE60]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#D2BE60]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-[#D2BE60] fill-current mx-0.5"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 font-light">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#D2BE60] to-[#F4D03F] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-semibold text-sm">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <h4 className="text-white/80 font-medium text-sm">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-[-10px] md:left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-white/60" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-10px] md:right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerSlide)}
              className={`h-1.5 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerSlide) === index
                ? 'bg-[#D2BE60] w-6'
                : 'bg-white/15 w-1.5 hover:bg-white/25'
                }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/30 text-sm mb-5 font-light">
            Have you worked with CEGS? Share your experience!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleReviewClick}
            className="inline-flex items-center gap-2 glass-gold rounded-xl py-3 px-6 text-[#D2BE60] font-medium text-sm tracking-wide hover:bg-[#D2BE60]/10 transition-all duration-300"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Write Your Review</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;