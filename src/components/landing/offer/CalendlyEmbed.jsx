import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#006eff] via-white to-[#0080ff] bg-clip-text text-transparent">
              Free Strategy Call
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Pick a time that works for you. We'll show you exactly how this system can fill your calendar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] p-4 sm:p-6 md:p-8"
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/p1creative/30min"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
}


