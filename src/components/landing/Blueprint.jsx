import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Week 1: Discovery & Setup",
    description: "We map out your ideal customer, script your content, and build your custom landing page funnel. AI caller and booking system configured from day one."
  },
  {
    icon: Target,
    title: "Week 2-3: Content & Campaigns",
    description: "We shoot and edit your first batch of cinematic videos, launch targeted ad campaigns, and integrate all backend tools with your team's SOPs."
  },
  {
    icon: TrendingUp,
    title: "Week 4: Optimize & Scale",
    description: "Your system is live and generating leads. We analyze weekly KPIs, optimize what's working, and scale your best-performing content and ads."
  }
];

export default function Blueprint() {
  return (
    <section id="blueprint" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm bg-white/[0.03] text-[#006eff] border border-white/10 uppercase tracking-wider">
              The Process
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4 text-white">
            From Setup to Qualified Leads in 30 Days
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
            >
              {/* Large Number with Icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0080ff] to-[#0050cc] flex items-center justify-center shadow-2xl shadow-[#006eff]/30">
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-xl font-black shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white via-[#006eff] to-white bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#0080ff] via-[#006eff] to-[#0050cc] text-white font-bold text-base sm:text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,110,255,0.5),0_0_40px_rgba(0,110,255,0.3),0_0_60px_rgba(0,110,255,0.2)] w-full sm:w-auto overflow-hidden"
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
