import React from "react";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero({ onCTAClick }) {

  return (
    <BeamsBackground intensity="medium">
      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight px-2">
              Let Our System Fill Your Calendar With{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
                Qualified Appointments
              </span>{' '}
              — Every Month, On Autopilot.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-light px-2 text-white/80">
              Content, ads, AI follow-up, and automated booking — fully done for you by our team in 30 days.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 px-4"
          >
            <RainbowButton
              onClick={(e) => onCTAClick(e, 'Hero')}
              className="text-base sm:text-lg font-bold w-full sm:w-auto"
              style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px' }}
            >
              Build My Funnel!
            </RainbowButton>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}
