import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Gift } from "lucide-react";

const sprintFeatures = [
  {
    title: "10 Cinematic Short-Form Videos/Month",
    description: "Shot + edited with proven scripts that turn scrolls into calls."
  },
  {
    title: "High-Converting Ads Management",
    description: "Built from Day 1 to generate qualified leads (not likes), tracked weekly."
  },
  {
    title: "Custom-Built Landing Page Funnel",
    description: "Branded, optimized for conversion, and integrated with backend tools."
  },
  {
    title: "Automated AI Caller (Inbound + Outbound)",
    description: "Instantly answers inquiries, follows up leads, and books appointments for you."
  },
  {
    title: "Appointment Pre-Qual & Booking System",
    description: "Every lead is filtered and booked using custom scripts, SOPs, and AI tools."
  },
  {
    title: "Custom SOP Guide for Front Desk & Follow-Up",
    description: "Your team knows exactly how to nurture and convert — with zero confusion."
  },
  {
    title: "P1 Concierge Support",
    description: "Slack access + biweekly strategy calls + weekly KPI reports."
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
          className="mb-12 md:mb-16"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="grid gap-4 md:gap-6">
              {sprintFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#006eff]/30 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#006eff] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg md:text-xl text-white font-bold leading-relaxed mb-2">
                      {feature.title}
                    </p>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
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


