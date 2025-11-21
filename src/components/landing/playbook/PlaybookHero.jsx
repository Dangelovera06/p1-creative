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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-8 pt-16 sm:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#006eff] animate-pulse"></div>
                <span className="text-sm sm:text-base text-white/90 font-medium tracking-wide uppercase">Free Download</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-tight px-2">
              Get Your Free{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white to-[#0080ff] animate-gradient">
                Marketing Playbook
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium px-2">
              The Complete Guide to Growing Your Business
            </p>
          </motion.div>

          {/* Image Section - Replacing VSL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mb-4 md:mb-6 max-w-7xl mx-auto w-full px-0 sm:px-2"
          >
            <div className="relative overflow-hidden">
              <img 
                src="/new replace.png" 
                alt="Marketing System" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-2 px-4 mt-2"
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

