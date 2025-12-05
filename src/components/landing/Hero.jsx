import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Text tracking animation - starts spread out, clicks together on scroll
  const letterSpacing = useTransform(scrollYProgress, [0, 0.3], ["0.15em", "-0.02em"]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  // Word animations for staggered reveal
  const wordVariants = {
    hidden: { opacity: 0, y: 40, letterSpacing: "0.3em" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      letterSpacing: "0em",
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <BeamsBackground intensity="medium">
      {/* Main Hero Content */}
      <div 
        ref={containerRef}
        className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 py-16 pt-20 sm:pt-24 w-full overflow-x-hidden"
      >
        <div className="mx-auto max-w-6xl w-full">
          {/* Badge - centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 border border-[#006eff]/40 bg-[#006eff]/10 backdrop-blur-sm py-2.5 px-5 rounded-full">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006eff] animate-pulse shadow-[0_0_10px_#006eff]"></div>
              <span className="text-sm sm:text-base text-white font-semibold tracking-wider uppercase">Limited Spots Available</span>
            </div>
          </motion.div>

          {/* Main Headline - BIGGER and reactive */}
          <motion.div
            style={{ y: textY }}
            className="text-center mb-8"
          >
            <motion.h1 
              style={{ letterSpacing, scale: textScale }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight text-white leading-[0.95] px-2"
            >
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Turn Your Business
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="block"
              >
                Into a{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-[#00a8ff] to-[#006eff] animate-gradient bg-[length:200%_auto]">
                  Lead Machine
                </span>
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subheading - LEFT ALIGNED with AI messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-left max-w-3xl mb-10 px-4 sm:px-6"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed">
              We use <span className="font-bold text-[#006eff]">AI-powered systems</span> to keep you ahead of the competition — 
              automating your follow-ups, booking your calendar, and turning cold leads into paying clients.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-white/70">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium">
                <svg className="w-5 h-5 text-[#006eff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cinematic Content
              </span>
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium">
                <svg className="w-5 h-5 text-[#006eff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                High-Converting Ads
              </span>
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium">
                <svg className="w-5 h-5 text-[#006eff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                AI-Powered Follow-Up
              </span>
            </div>
          </motion.div>

          {/* Video Section - LARGER with enhanced glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="mb-10 flex justify-center items-center w-full px-2"
          >
            <div 
              className="relative w-full rounded-2xl overflow-hidden" 
              style={{ 
                maxWidth: '1000px', 
                aspectRatio: '16/9',
                boxShadow: '0 0 30px rgba(0, 110, 255, 0.5), 0 0 60px rgba(0, 110, 255, 0.3), 0 0 90px rgba(0, 110, 255, 0.15), inset 0 0 60px rgba(0, 110, 255, 0.1)'
              }}
            >
              <div className="absolute inset-0 border-2 border-[#006eff]/60 rounded-2xl pointer-events-none z-10"></div>
              <wistia-player 
                media-id="w4p6cr6l8l" 
                aspect="1.7777777777777777" 
                className="w-full h-full"
              ></wistia-player>
            </div>
          </motion.div>

          {/* CTA Button - centered */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center gap-4 md:gap-5 px-4 w-full"
          >
            <RainbowButton
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Main Hero CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('https://forms.fillout.com/t/6HP2aE8grBus', '_blank');
              }}
              className="text-lg sm:text-xl font-bold w-full sm:w-auto max-w-full transform hover:scale-105 transition-transform"
              style={{ maxWidth: '420px', height: '68px', minWidth: '300px', width: '100%' }}
            >
              Apply Today
            </RainbowButton>
            <p className="text-sm text-white/60 font-medium">
              Only accepting 5 new clients this month
            </p>
          </motion.div>

        </div>
      </div>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </BeamsBackground>
  );
}
