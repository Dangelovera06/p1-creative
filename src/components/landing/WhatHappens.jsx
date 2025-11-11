import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Your Content Starts Converting",
    description: "We shoot and edit 10 cinematic short-form videos per month with proven scripts that stop scrollers and turn attention into appointments. Your brand becomes impossible to ignore.",
    image: "/WHAT HAPPENS/1.webp"
  },
  {
    title: "Your Ads Generate Qualified Leads",
    description: "We launch and manage high-converting ad campaigns built to generate qualified leads—not vanity metrics. Every dollar is tracked, every lead is filtered, and your calendar starts filling up.",
    image: "/WHAT HAPPENS/2.webp"
  },
  {
    title: "Your System Runs on Autopilot",
    description: "With AI-powered callers handling inquiries, automated booking systems pre-qualifying leads, and custom SOPs guiding your team—your business generates appointments while you focus on closing deals.",
    image: "/WHAT HAPPENS/3.webp"
  }
];

export default function WhatHappens() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            This is What Happens After You Partner With{" "}
            <span className="bg-gradient-to-r from-[#006eff] via-white to-[#006eff] bg-clip-text text-transparent">
              P1 Creative
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 rounded-2xl text-left bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#006eff]/30 transition-all duration-300">
                {/* Image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

