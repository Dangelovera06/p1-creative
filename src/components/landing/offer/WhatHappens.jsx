import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Content That Actually Converts",
    description: "10 cinematic short-form videos monthly with proven scripts that stop scrollers and turn attention into appointments. Every video is built to drive action.",
    image: "/WHAT HAPPENS/1.webp"
  },
  {
    title: "Ads That Generate Qualified Leads",
    description: "High-converting ad campaigns that generate qualified leads—not vanity metrics. Every dollar tracked, every lead filtered, calendar filling up automatically.",
    image: "/WHAT HAPPENS/2.webp"
  },
  {
    title: "Appointments Booked While You Sleep",
    description: "AI-powered callers handle inquiries 24/7. Automated booking pre-qualifies leads. Custom SOPs guide your team. The system generates appointments on autopilot.",
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
            How the System{" "}
            <span className="bg-gradient-to-r from-[#006eff] via-white to-[#006eff] bg-clip-text text-transparent">
              Fills Your Calendar
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

