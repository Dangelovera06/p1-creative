import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";

export default function FinalClose() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#006eff]" />
            <span className="text-xs sm:text-sm uppercase tracking-wider text-[#006eff]">
              Ready to Start?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-2 text-white">
            Your Market Is Ready to Buy
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 md:mb-12 px-4 text-white">
            The Only Question: Are You Ready to Scale?
          </p>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/80">
              You've built the business. You've proven the model. You have clients who trust you.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80">
              The businesses that dominate in 2025 aren't the ones with the biggest budgets.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
              They're the ones who build systems that generate qualified leads on autopilot.
            </p>
          </div>

          <div className="mb-6 md:mb-8 px-4">
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
          </div>

          <p className="text-xs sm:text-sm px-4 text-white/50">
            Complete done-for-you system. Weekly tracking & optimization. Real results, not vanity metrics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
