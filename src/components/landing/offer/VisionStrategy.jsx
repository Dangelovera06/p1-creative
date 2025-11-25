import React from "react";

export default function VisionStrategy({ onCTAClick }) {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8">
          Your Vision, Our Strategy
        </h2>
        <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
          You have the vision for your business. We have the strategy and systems to bring it to life. Together, we build a lead generation machine that works around the clock.
        </p>
        <button
          onClick={(e) => onCTAClick(e, 'VisionStrategy')}
          className="px-8 py-4 bg-white text-black font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

