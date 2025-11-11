import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sprintFeatures = [
  {
    title: "10 Cinematic Short-Form Videos",
    value: "$5,000"
  },
  {
    title: "High-Converting Ads Management",
    value: "$3,500"
  },
  {
    title: "Custom-Built Landing Page Funnel",
    value: "$4,000"
  },
  {
    title: "Automated AI Caller System",
    value: "$2,500"
  },
  {
    title: "Appointment Pre-Qual & Booking System",
    value: "$2,000"
  },
  {
    title: "Custom SOP Guide",
    value: "$1,500"
  },
  {
    title: "P1 Concierge Support",
    value: "$2,500"
  }
];

export default function WhatYouGet() {
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4 text-white">
            Everything You Need to Dominate Your Market
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
            A complete done-for-you system that generates qualified leads while you focus on closing deals
          </p>
        </motion.div>

        {/* Sprint Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="space-y-4">
              {sprintFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-base md:text-lg text-white font-medium">
                    {feature.title}
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-white/20 mx-3"></div>
                  <span className="text-base md:text-lg text-[#006eff] font-bold whitespace-nowrap">
                    {feature.value}
                  </span>
                </motion.div>
              ))}
              
              {/* Total Value Line */}
              <div className="pt-6 mt-6 border-t-2 border-white/20">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-lg md:text-xl text-white/80 font-semibold">
                    Total Value
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-white/30 mx-3"></div>
                  <span className="text-lg md:text-xl text-white/80 font-bold line-through whitespace-nowrap">
                    $21,000/mo
                  </span>
                </div>
                
                {/* Actual Price */}
                <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-[#006eff]/20 to-[#0080ff]/20 border-2 border-[#006eff]">
                  <span className="text-xl md:text-2xl text-white font-bold">
                    Your Investment Today
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-white/30 mx-3"></div>
                  <span className="text-2xl md:text-4xl text-[#006eff] font-black whitespace-nowrap">
                    $4,997/mo
                  </span>
                </div>
                
                <p className="text-center text-sm md:text-base text-white/60 mt-4">
                  Save $16,003/month • Limited time offer
                </p>
              </div>
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
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 rounded-xl text-white font-bold transition-all hover:scale-105 bg-gradient-to-b from-[#0080ff] via-[#006eff] to-[#0050cc] shadow-[0_0_20px_rgba(0,110,255,0.5),0_0_40px_rgba(0,110,255,0.3),0_0_60px_rgba(0,110,255,0.2)] text-base sm:text-lg w-full sm:w-auto overflow-hidden"
            style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px' }}
          >
            <span 
              className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 via-transparent to-transparent"
            />
            <span 
              className="pointer-events-none absolute inset-0 translate-x-[-100%] animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Apply Today</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


