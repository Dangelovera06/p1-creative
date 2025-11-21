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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 py-16 pt-20 sm:pt-24 w-full overflow-x-hidden">
        <div className="mx-auto max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#006eff] animate-pulse"></div>
                <span className="text-sm sm:text-base text-white/90 font-medium tracking-wide uppercase">Limited Spots Available</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight px-2 break-words">
              Turn Your Business Into a{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
                Lead-Generating Machine
              </span>{' '}
              in 30 Days
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-light px-2 text-white/80 break-words">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
                Cinematic Content + High-Converting Ads + AI-Powered Follow-Up = Qualified Leads on Autopilot
              </span>
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/90 pt-2 px-2 font-medium break-words">
              Done-for-you marketing system that fills your calendar with ready-to-buy clients
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 px-4 w-full mt-10"
          >
            <RainbowButton
              onClick={handleDownload}
              className="text-base sm:text-lg font-bold w-full sm:w-auto max-w-full"
              style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px', width: '100%' }}
            >
              Get Free Playbook
            </RainbowButton>
            <p className="text-xs sm:text-sm text-white/60 font-medium">
              Limited Spots Available
            </p>
          </motion.div>

        </div>
      </div>
    </BeamsBackground>
  );
}

