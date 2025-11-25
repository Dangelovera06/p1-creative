import React from "react";

export default function SimpleHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
          Transform Your Business
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
          We build systems that generate qualified leads on autopilot.
        </p>
        <button
          onClick={() => {
            if (window.fbq) {
              window.fbq('track', 'Lead', {
                content_name: 'Main Hero CTA Click',
                content_category: 'CTA Button'
              });
            }
            window.open('https://forms.fillout.com/t/6HP2aE8grBus', '_blank');
          }}
          className="px-8 py-4 bg-white text-black font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

