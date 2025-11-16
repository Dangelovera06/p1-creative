import React from "react";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero() {

  return (
    <BeamsBackground intensity="medium">
      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 py-16 pt-20 sm:pt-24 w-full overflow-x-hidden">
        <div className="mx-auto max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight px-2 break-words">
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

          {/* Video Section - Blue Glowing Outline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mb-10 flex justify-center items-center w-full"
          >
            <div className="relative w-full" style={{ maxWidth: '853px', aspectRatio: '16/9' }}>
              <wistia-player 
                media-id="w4p6cr6l8l" 
                aspect="1.7777777777777777" 
                className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-[#006eff]"
                style={{
                  boxShadow: '0 0 20px rgba(0, 110, 255, 0.6), 0 0 40px rgba(0, 110, 255, 0.4), 0 0 60px rgba(0, 110, 255, 0.2)'
                }}
              ></wistia-player>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 px-4 w-full mt-10"
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
              className="text-base sm:text-lg font-bold w-full sm:w-auto max-w-full"
              style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px', width: '100%' }}
            >
              Apply Today
            </RainbowButton>
          </motion.div>

        </div>
      </div>
    </BeamsBackground>
  );
}
