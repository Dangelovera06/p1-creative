import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SimpleHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Text clicks together on scroll - starts spread, compresses
  const letterSpacing = useTransform(scrollYProgress, [0, 0.4], ["0.12em", "-0.03em"]);
  const headlineY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const headlineScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.92]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden"
    >
      {/* Hero Image Background - LARGER and fills more */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ scale: imageScale, y: imageY }}
      >
        <img 
          src="/HERO.jpg" 
          alt="Hero" 
          className="w-full h-full object-cover scale-110"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Main Headline - MUCH BIGGER with reactive text */}
        <motion.div
          style={{ y: headlineY, scale: headlineScale }}
          className="text-center mb-10"
        >
          <motion.h1 
            style={{ letterSpacing }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 80, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.02em" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="block"
            >
              TRANSFORM
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.02em" }}
              transition={{ duration: 1, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70"
            >
              YOUR BUSINESS
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subheading - LEFT ALIGNED with AI messaging */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-left max-w-2xl mb-12 px-2"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 leading-relaxed mb-4">
            We use <span className="font-semibold text-white">AI-powered systems</span> to keep you ahead of the game — 
            generating qualified leads while you focus on what matters.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              Cinematic Content
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              AI Follow-Up
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              Automated Booking
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-left px-2"
        >
          <button
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Lead', {
                  content_name: 'Main Hero CTA Click',
                  content_category: 'CTA Button'
                });
              }
              window.open('https://forms.fillout.com/t/6HP2aE8grBus', '_blank');
            }}
            className="group relative px-10 py-5 bg-white text-black font-semibold text-sm uppercase tracking-widest hover:bg-white/95 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

