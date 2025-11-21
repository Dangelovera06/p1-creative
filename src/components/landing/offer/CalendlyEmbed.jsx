import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CalendlyEmbed() {
  const calendlyRef = useRef(null);
  const [calendlyHeight, setCalendlyHeight] = useState(900);

  useEffect(() => {
    // Set responsive height
    const updateHeight = () => {
      setCalendlyHeight(window.innerWidth < 640 ? 800 : 1000);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    // Initialize Calendly inline widget
    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/p1creative/30min',
          parentElement: calendlyRef.current,
        });
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for Calendly script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(checkCalendly);
        }
      }, 100);

      return () => clearInterval(checkCalendly);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <div
            ref={calendlyRef}
            className="calendly-inline-widget w-full"
            style={{ 
              minWidth: "320px", 
              height: `${calendlyHeight}px`, 
              maxWidth: "1200px",
              width: "100%"
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
}


