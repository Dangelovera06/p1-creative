import React from "react";

import SimpleHero from "../components/landing/offer/SimpleHero";
import BringingToLife from "../components/landing/offer/BringingToLife";
import WhatWeDo from "../components/landing/offer/WhatWeDo";
import WhatClientsSay from "../components/landing/offer/WhatClientsSay";
import VisionStrategy from "../components/landing/offer/VisionStrategy";
import OurMission from "../components/landing/offer/OurMission";
import CalendlyEmbed from "../components/landing/offer/CalendlyEmbed";

export default function Offer() {
  const handleCTAClick = (e, location) => {
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: `${location} CTA Click`,
        content_category: 'CTA Button'
      });
    }
    window.open('https://forms.fillout.com/t/6HP2aE8grBus', '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-black">
      {/* Floating Navigation Header - Visible Throughout Site */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-4 gap-4">
          {/* Logo - Left */}
          <div className="flex items-center">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* CTA Button - Right */}
          <button
            onClick={(e) => handleCTAClick(e, 'Header')}
            className="px-6 py-2 bg-white text-black font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
          >
            Get Started
          </button>
        </div>
      </header>

      <SimpleHero onCTAClick={handleCTAClick} />
      <BringingToLife />
      <WhatWeDo />
      <WhatClientsSay />
      <VisionStrategy onCTAClick={handleCTAClick} />
      <OurMission />
      <CalendlyEmbed />

      {/* Footer */}
      <footer className="py-12 w-full border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm mb-6 text-white/60">
            Turning businesses into lead-generating machines
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs text-white/40">
            © 2025 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

