import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sprintFeatures = [
  "10 Cinematic Videos That Convert",
  "High-Converting Paid Ad System",
  "Custom Landing Page + AI Caller",
  "Automated Booking System",
  "SOPs + Slack + Weekly Optimization"
];

export default function WhatYouGet({ onCTAClick, ctaText = "Claim Your Spot" }) {
  return (
    <section className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm bg-white/[0.03] text-[#006eff] border border-white/10 uppercase tracking-wider">
              What You're Getting
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 px-4 text-white">
            Here's What We Install for You:
          </h2>
        </motion.div>

        {/* Sprint Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="p-6 sm:p-8 md:p-12 rounded-2xl bg-white/[0.03] border border-white/10 max-w-2xl mx-auto">
            <div className="space-y-4 sm:space-y-5">
              {sprintFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <span className="text-[#006eff] text-xl sm:text-2xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-base sm:text-lg md:text-xl text-white font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <button
            onClick={(e) => onCTAClick(e, 'WhatYouGet')}
            className="relative inline-flex items-center justify-center gap-2 rounded-xl text-white font-bold transition-all hover:scale-105 bg-gradient-to-b from-[#0080ff] via-[#006eff] to-[#0050cc] shadow-[0_0_20px_rgba(0,110,255,0.5),0_0_40px_rgba(0,110,255,0.3),0_0_60px_rgba(0,110,255,0.2)] text-base sm:text-lg w-full sm:w-auto overflow-hidden"
            style={{ maxWidth: '450px', height: '70px', minWidth: '300px' }}
          >
            <span 
              className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 via-transparent to-transparent"
            />
            <span 
              className="pointer-events-none absolute inset-0 translate-x-[-100%] animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative z-10 flex flex-col items-center justify-center gap-1">
              <span className="font-black text-lg sm:text-xl">{ctaText}</span>
            </span>
          </button>
          <p className="text-white/60 text-sm sm:text-base mt-4 px-4">
            We only onboard 3 clinics/month. Book a call to see if you qualify.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


