import React from "react";

export default function VisionStrategy() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* RIGHT aligned */}
        <div className="flex flex-col items-end">
          <div className="text-right max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8">
              Your Vision, Our Strategy
            </h2>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              You have the vision for your business. We have the strategy and systems to bring it to life. Together, we build a lead generation machine that works around the clock.
            </p>
          </div>
        </div>

        {/* Image Showcase - aligned right, BIGGER */}
        <div className="mb-12 flex flex-col sm:flex-row justify-end items-center gap-6 sm:gap-8">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/stluciedentist-68.jpg" 
              alt="Dentist" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/botox.jpg" 
              alt="Botox" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Lead', {
                  content_name: 'VisionStrategy CTA Click',
                  content_category: 'CTA Button'
                });
              }
              window.open('https://forms.fillout.com/t/6HP2aE8grBus', '_blank');
            }}
            className="inline-flex items-center gap-3 text-white font-semibold text-lg uppercase tracking-widest hover:text-white/80 transition-all duration-300"
          >
            <span>Get Started</span>
            <svg 
              className="w-6 h-6 transform hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

