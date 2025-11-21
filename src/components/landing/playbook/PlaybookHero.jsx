import React from "react";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function PlaybookHero() {
  const handleDownload = () => {
    // Track download event
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Playbook Download',
        content_category: 'Download'
      });
    }
    // Download the playbook file
    const link = document.createElement('a');
    link.href = '/playbook.pdf';
    link.download = 'playbook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BeamsBackground intensity="medium">
      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-0 py-16 pt-24 sm:pt-28">
        <div className="mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight px-2">
              Let Our System Fill Your Calendar With{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
                Qualified Appointments
              </span>{' '}
              — Every Month, On Autopilot.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-light px-2 text-white/80">
              Content, ads, AI follow-up, and automated booking — fully done for you by our team in 30 days.
            </p>
          </motion.div>

          {/* Image Section - Replacing VSL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 mb-10 md:mb-12 w-full"
          >
            <div className="relative overflow-hidden flex justify-center">
              <img 
                src="/new replace.png" 
                alt="Marketing System" 
                className="w-full h-auto"
                style={{ width: '100%', maxWidth: '100vw' }}
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 px-4"
          >
            <RainbowButton
              onClick={handleDownload}
              className="text-base sm:text-lg font-bold w-full sm:w-auto"
              style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px' }}
            >
              Get Free Playbook
            </RainbowButton>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}

