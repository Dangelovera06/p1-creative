import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const struggles = [
  "Spending thousands on ads that generate clicks but zero qualified appointments.",
  "Chasing leads manually because your team can't keep up with inquiries and follow-ups.",
  "Watching competitors book out their calendars while you're stuck with inconsistent lead flow.",
  "Hiring expensive agencies that promise results but deliver reports instead of revenue."
];

export default function EmotionalCore() {
  return (
    <section className="py-32 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">
            The Problem Most Clinics Face
          </h2>

          <p className="text-lg md:text-xl mb-12 text-white/80">
            You're stuck in the same cycle:
          </p>

          <div className="space-y-4 mb-12">
            {struggles.map((struggle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl text-center bg-white/[0.02] border border-white/10 backdrop-blur-sm"
              >
                <p className="text-lg text-white/80">
                  {struggle}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20">
            <p className="text-xl md:text-2xl font-semibold text-white/90">
              This system generates leads, follows up automatically, and books qualified appointments — 24/7, without you lifting a finger.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
