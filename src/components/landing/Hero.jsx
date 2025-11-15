import React from "react";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero() {

  return (
    <BeamsBackground intensity="medium">
      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 py-16 pt-24 sm:pt-28 w-full overflow-x-hidden">
        <div className="mx-auto max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight px-2 break-words">
              Turn Your Business Into a{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
                Lead-Generating Machine
              </span>{' '}
              in 30 Days
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-light px-2 text-white/80 break-words">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
                Cinematic Content + High-Converting Ads + AI-Powered Follow-Up = Qualified Leads on Autopilot
              </span>
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/90 pt-2 px-2 font-medium break-words">
              Done-for-you marketing system that fills your calendar with ready-to-buy clients
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 mb-10 md:mb-12 max-w-6xl mx-auto w-full px-2 overflow-hidden"
          >
            <div className="relative w-full overflow-hidden border-2 border-[#006eff]/30 shadow-2xl shadow-[#006eff]/20 rounded-lg">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <wistia-player 
                  media-id="w4p6cr6l8l" 
                  aspect="1.7777777777777777" 
                  className="absolute top-0 left-0 w-full h-full"
                ></wistia-player>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
                window.open('https://build.fillout.com/editor/6HP2aE8grBus/edit', '_blank');
              }}
              className="text-base sm:text-lg font-bold w-full sm:w-auto max-w-full"
              style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px', width: '100%' }}
            >
              Apply Today
            </RainbowButton>
          </motion.div>

          {/* Book a Call Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 md:mt-12 w-full px-4"
          >
            <div className="bg-gradient-to-r from-[#006eff]/20 via-white/10 to-[#0080ff]/20 backdrop-blur-md border-2 border-[#006eff]/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-[#006eff]/30 max-w-2xl mx-auto">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Ready to Get Started?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90">
                  Book a free 30-minute strategy call to discuss how we can transform your business
                </p>
                <button
                  onClick={() => {
                    if (window.fbq) {
                      window.fbq('track', 'Schedule', {
                        content_name: 'Book a Call Button',
                        content_category: 'Calendly'
                      });
                    }
                    window.open('https://calendly.com/p1creative/30min', '_blank');
                  }}
                  className="w-full sm:w-auto bg-white text-[#006eff] hover:bg-white/90 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  📅 Book Your Free Strategy Call
                </button>
                <p className="text-sm sm:text-base text-white/70">
                  No commitment • 30 minutes • See how we can help
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}
