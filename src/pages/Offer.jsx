import React from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";

import Hero from "../components/landing/offer/Hero";
import HardTruth from "../components/landing/offer/HardTruth";
import WhatHappens from "../components/landing/offer/WhatHappens";
import EmotionalCore from "../components/landing/offer/EmotionalCore";
import Blueprint from "../components/landing/offer/Blueprint";
import FinalClose from "../components/landing/offer/FinalClose";
import Testimonials from "../components/landing/offer/Testimonials";
import WhatYouGet from "../components/landing/offer/WhatYouGet";

export default function Offer() {

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-950">
      {/* Floating Navigation Header - Visible Throughout Site */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 gap-4">
          {/* Logo and Name - Left */}
          <div className="flex items-center gap-1.5">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Offer Text - Center */}
          <div className="hidden md:block text-xs sm:text-sm font-bold tracking-widest text-white/60 uppercase">
            Limited Spots Available
          </div>

          {/* CTA Button - Right */}
          <button
            onClick={(e) => {
              if (window.fbq) {
                window.fbq('track', 'Lead', {
                  content_name: 'Header CTA Click',
                  content_category: 'CTA Button'
                });
              }
              window.open('#', '_blank');
            }}
            className="px-4 py-2 bg-gradient-to-r from-[#006eff] to-[#0080ff] text-white font-light text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:from-[#0080ff] hover:to-[#006eff] transition-all duration-300 shadow-[0_0_15px_rgba(0,110,255,0.5)] hover:shadow-[0_0_25px_rgba(0,110,255,0.8)] whitespace-nowrap"
          >
            APPLY
          </button>
        </div>
      </header>

      <Hero />
      <WhatYouGet />
      <Testimonials />
      <HardTruth />
      <WhatHappens />
      <EmotionalCore />
      <Blueprint />
      <FinalClose />

      {/* Footer */}
      <footer className="py-8 sm:py-12 w-full border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl sm:text-2xl mb-3 sm:mb-4 font-display font-bold text-white">
            P<span className="text-[#006eff]">1</span> Creative
          </div>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-white/60">
            Turning businesses into lead-generating machines
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-white/40">
            © 2025 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

