import React from "react";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero() {

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
            {/* Urgency Badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-red-600/20 border border-red-500/50 rounded-full text-red-400 text-sm sm:text-base font-bold uppercase tracking-wider animate-pulse">
                ⚠️ Only 3 Spots Left This Month
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] px-2">
              Stop Wasting Money on Marketing That Doesn't Convert
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold px-2 text-white leading-tight">
              Get a{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white to-[#0080ff]">
                Complete Lead-Generation System
              </span>{' '}
              That Fills Your Calendar With Qualified Appointments Every Week
            </p>

            <div className="pt-4 pb-2">
              <p className="text-base sm:text-lg md:text-xl text-white/90 px-2 font-medium mb-3">
                ✅ 10 Cinematic Videos Monthly • ✅ AI-Powered Caller • ✅ Pre-Qualified Leads Only
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-[#006eff] px-2 font-bold">
                No More Chasing Leads. No More Wasted Ad Spend. No More Missed Opportunities.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-2 text-white/70 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">Trusted by 50+ Businesses</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <div className="font-semibold">
                Average: 30+ Qualified Leads/Month
              </div>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 mb-10 md:mb-12 max-w-6xl mx-auto w-full px-2"
          >
            <div className="relative overflow-hidden border-2 border-[#006eff]/30 shadow-2xl shadow-[#006eff]/20">
              <wistia-player media-id="w4p6cr6l8l" aspect="1.7777777777777777" style={{ transform: 'scale(1.02)' }}></wistia-player>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 px-4"
          >
            <div className="space-y-3">
              <RainbowButton
                onClick={() => {
                  if (window.fbq) {
                    window.fbq('track', 'Lead', {
                      content_name: 'Main Hero CTA Click',
                      content_category: 'CTA Button'
                    });
                  }
                  window.open('#', '_blank');
                }}
                className="text-base sm:text-lg font-black w-full sm:w-auto uppercase tracking-wide"
                style={{ maxWidth: '450px', height: '70px', minWidth: '300px' }}
              >
                YES! I Want Qualified Leads →
              </RainbowButton>
              <p className="text-white/60 text-sm sm:text-base">
                🔒 Free Strategy Call • No Credit Card Required • Setup in 7 Days
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}
