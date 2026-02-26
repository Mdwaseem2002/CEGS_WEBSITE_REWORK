import Header from "./components/Header";
import IntroSection from "./components/IntroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Top Banner */}
      <div className="relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#111827] to-[#030712]" />
        <div className="relative container mx-auto flex items-center justify-center px-4 py-2.5">
          <p className="text-sm md:text-[13px] flex items-center space-x-2 text-center text-white/50 font-light tracking-wide">
            <span>
              Start your digital journey now and elevate your online presence
              to new heights!
            </span>
            <a
              href="/contact"
              className="text-[#D2BE60] font-medium hover:text-[#F4D03F] transition-colors duration-300 border-b border-[#D2BE60]/30 hover:border-[#D2BE60] pb-0.5 ml-1"
            >
              Let&rsquo;s Connect!
            </a>
          </p>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Intro Section */}
      <IntroSection />
    </div>
  );
}
