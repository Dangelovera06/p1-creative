import React, { useEffect, useRef, useState } from "react";

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
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center w-full">
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
        </div>
      </div>
    </section>
  );
}


