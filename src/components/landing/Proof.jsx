import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Star, TrendingUp } from "lucide-react";

const stats = [
  { number: "20+", label: "Implant Consults", sublabel: "in the first 14 days" },
  { number: "$250K–$500K+", label: "New Revenue", sublabel: "month after month" },
  { number: "100%", label: "Full-Arch Cases", sublabel: "that transform lives" }
];

const testimonials = [
  {
    quote: "We added $400K in revenue in the first 90 days. Archify.io didn't just fill our schedule — it transformed our practice.",
    author: "Dr. Michael Stevens",
    practice: "Advanced Dental Implants, Austin TX",
    rating: 5
  },
  {
    quote: "Before Archify.io, we were spending $8K/month on ads with zero ROI. Now we have a waitlist for full-arch cases.",
    author: "Dr. Sarah Chen",
    practice: "Pacific Smile Center, San Diego CA",
    rating: 5
  },
  {
    quote: "The patient quality is incredible. These aren't tire-kickers — they're ready to move forward with treatment.",
    author: "Dr. James Rodriguez",
    practice: "Elite Implant Solutions, Miami FL",
    rating: 5
  }
];

export default function Proof() {
  return (
    <section id="proof" className="py-32 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-yellow-400" />
            <span className="text-sm uppercase tracking-wider text-yellow-400">
              Real Results
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Practices Using Archify.io Are Seeing $250K–$500K+ in New Implant Revenue
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
            >
              <CheckCircle className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2 text-white">
                {stat.label}
              </div>
              <div className="text-sm text-white/60">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials - Horizontal Slider */}
        <div className="relative overflow-x-auto">
          <div className="flex animate-scroll-reviews scrollbar-hide min-w-max">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-1 sm:mx-3 w-48 sm:w-64"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-3 sm:p-6 rounded-2xl h-full bg-white/[0.02] border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed text-white/80 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="text-center pt-3 sm:pt-4 border-t border-white/10">
                    <div className="text-xs sm:text-sm font-semibold mb-1 text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-white/50">
                      {testimonial.practice}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 mx-1 sm:mx-3 w-48 sm:w-64"
              >
                <Card 
                  className="p-3 sm:p-6 rounded-2xl h-full bg-white/[0.02] border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed text-white/80 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="text-center pt-3 sm:pt-4 border-t border-white/10">
                    <div className="text-xs sm:text-sm font-semibold mb-1 text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-white/50">
                      {testimonial.practice}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-reviews {
          animation: scroll-reviews 15s linear infinite;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .animate-scroll-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
