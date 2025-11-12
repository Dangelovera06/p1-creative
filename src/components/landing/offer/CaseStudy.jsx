import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-[#006eff]" />
            <span className="text-sm uppercase tracking-wider text-[#006eff]">
              Case Study
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            How Dr. Hans Went From Inconsistent Leads to{" "}
            <span className="bg-gradient-to-r from-[#006eff] via-white to-[#0080ff] bg-clip-text text-transparent">
              Booked Solid Every Month
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Image - Medium Size */}
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] rounded-2xl overflow-hidden border-2 border-[#006eff]/30 shadow-2xl shadow-[#006eff]/20 mb-8">
            <img 
              src="/stluciedentist-68.jpg" 
              alt="Dr. Hans"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Results */}
          <div className="space-y-6 max-w-3xl w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                After Implementing All Systems:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006eff] flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-white/90">
                    <span className="font-bold text-[#006eff]">Consistent implant cases</span> booked every single month
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006eff] flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-white/90">
                    <span className="font-bold text-[#006eff]">Zero manual follow-up</span> — AI caller handles everything
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006eff] flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-white/90">
                    <span className="font-bold text-[#006eff]">Pre-qualified leads only</span> — no more tire-kickers
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006eff] flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-white/90">
                    <span className="font-bold text-[#006eff]">Calendar fills on autopilot</span> while focusing on patient care
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#006eff]/10 to-[#0080ff]/10 border border-[#006eff]/30">
              <p className="text-lg sm:text-xl text-white/90 italic">
                "The system runs itself. My team knows exactly what to do, and qualified appointments show up every week without me chasing anyone."
              </p>
              <p className="text-base sm:text-lg text-[#006eff] font-bold mt-4">
                — Dr. Hans
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

