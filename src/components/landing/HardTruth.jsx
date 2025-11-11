import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const benefits = [
  {
    title: "YOU DON'T NEED A BIG MARKETING BUDGET",
    description: "We build your entire lead generation system from scratch—content, ads, landing pages, and follow-up automation—all optimized to generate qualified leads at the lowest possible cost.",
    icon: "/website icons/29.png"
  },
  {
    title: "YOU DON'T NEED TO HIRE A VIDEO TEAM",
    description: "We shoot, edit, and script 10 cinematic short-form videos every month that stop scrollers dead in their tracks and turn attention into appointments.",
    icon: "/website icons/30.png"
  },
  {
    title: "YOU DON'T NEED TO CHASE LEADS",
    description: "Our AI-powered caller system handles both inbound inquiries and outbound follow-ups automatically—qualifying leads, answering questions, and booking appointments 24/7.",
    icon: "/website icons/31.png"
  },
  {
    title: "YOU DON'T NEED TO FIGURE IT OUT ALONE",
    description: "P1 Concierge Support means you have Slack access, biweekly strategy calls, and weekly KPI reports. We're in the trenches with you, optimizing every step of the way.",
    icon: "/website icons/32.png"
  }
];

export default function HardTruth() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-[#006eff]" />
            <span className="text-sm text-[#006eff] uppercase tracking-wider">
              Good News
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop Wasting Money on Marketing That Doesn't Convert
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-3xl mx-auto">
            Most businesses burn through cash on ads, content, and agencies that generate vanity metrics but zero qualified leads.
          </p>

          <p className="text-xl sm:text-2xl font-bold text-[#006eff] mb-12 max-w-3xl mx-auto">
            P1 Creative builds you a complete lead-generation system that actually fills your calendar.
          </p>

          <div className="space-y-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl text-left bg-white/[0.02] border border-white/10 backdrop-blur-sm"
              >
                <img 
                  src={benefit.icon} 
                  alt="" 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90 mb-6"
                />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#006eff] mb-3">
                  {benefit.title}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <RainbowButton
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Benefits Section CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('#', '_blank');
              }}
              className="text-base sm:text-lg font-bold w-full sm:w-auto"
              style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px' }}
            >
              Apply Today
            </RainbowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
