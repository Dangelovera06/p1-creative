import React from "react";
import { motion } from "framer-motion";

const socialProofImages = [
  {
    src: "/SOCIAL PROOF/3 copy.png",
    alt: "Dental team at practice",
    title: "Elite Dental Practice"
  },
  {
    src: "/SOCIAL PROOF/4 copy.png", 
    alt: "Medical aesthetics team",
    title: "Medical Aesthetics Clinic"
  },
  {
    src: "/SOCIAL PROOF/5 copy.png",
    alt: "Implant specialists team",
    title: "Implant Specialists"
  },
  {
    src: "/SOCIAL PROOF/6 copy.png",
    alt: "Full-arch restoration team",
    title: "Full-Arch Restoration"
  },
  {
    src: "/SOCIAL PROOF/3 copy.png",
    alt: "Dental team at practice",
    title: "Elite Dental Practice"
  },
  {
    src: "/SOCIAL PROOF/4 copy.png",
    alt: "Medical aesthetics team",
    title: "Medical Aesthetics Clinic"
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006eff]" />
            <span className="text-sm uppercase tracking-wider text-[#006eff]">
              Who's Already Using This System
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Clinics Already Filling Their Calendars
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70">
            Real businesses getting real results with this system
          </p>
        </motion.div>

        {/* Continuous Horizontal Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set */}
            {socialProofImages.map((image, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-1 sm:mx-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-64 h-48 sm:w-72 sm:h-54 md:w-80 md:h-60 rounded-2xl overflow-hidden group cursor-pointer ring-1 ring-white/10">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {socialProofImages.map((image, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 mx-1 sm:mx-4"
              >
                <div className="relative w-64 h-48 sm:w-72 sm:h-54 md:w-80 md:h-60 rounded-2xl overflow-hidden group cursor-pointer ring-1 ring-white/10">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}


