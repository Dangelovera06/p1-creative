import React from "react";
import { motion } from "framer-motion";

export default function PerformanceImage() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <img 
            src="/Momoento Perfom.png" 
            alt="Performance Results" 
            className="w-full max-w-6xl h-auto rounded-2xl shadow-[0_0_40px_rgba(0,110,255,0.5),0_0_80px_rgba(0,110,255,0.3),0_0_120px_rgba(0,110,255,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

