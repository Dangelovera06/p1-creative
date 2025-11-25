import React from "react";

export default function SimpleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/HERO.jpg" 
          alt="Hero" 
          className="w-full h-full object-cover"
          style={{ transform: 'translateY(-3rem)' }}
        />
        {/* Gradient Fade to Black */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
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

