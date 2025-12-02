import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function ThankYou() {
  useEffect(() => {
    // Fire Facebook Pixel conversion event on page load
    if (window.fbq) {
      // Track as Lead event (standard event for form submissions)
      window.fbq('track', 'Lead', {
        content_name: 'Fillout Form Submission',
        content_category: 'Form Submission',
        value: 0,
        currency: 'USD'
      });
      
      // Track custom FormSubmission event for better segmentation
      window.fbq('trackCustom', 'FormSubmission', {
        form_name: 'Offer Qualifier Form',
        source: 'Fillout',
        timestamp: new Date().toISOString()
      });
    }
    
    // Fire tracking pixel (1x1 transparent image for additional tracking platforms)
    const trackingPixel = new Image(1, 1);
    trackingPixel.src = `https://www.facebook.com/tr?id=614618117913023&ev=Lead&cd[content_name]=Fillout%20Form%20Submission&noscript=1`;
    
    // Log to console for debugging
    console.log('Form submission tracked!');
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-1.5">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-8 pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="mx-auto w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-8">
              Your application has been received. We'll review your information and get back to you within 24-48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-[#006eff]" />
              What Happens Next?
            </h2>
            <ul className="text-left text-white/70 space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#006eff]/20 text-[#006eff] text-sm flex items-center justify-center font-semibold">1</span>
                <span>Our team will review your application</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#006eff]/20 text-[#006eff] text-sm flex items-center justify-center font-semibold">2</span>
                <span>You'll receive an email with next steps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#006eff]/20 text-[#006eff] text-sm flex items-center justify-center font-semibold">3</span>
                <span>We'll schedule a strategy call to discuss your goals</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="/" className="inline-block">
              <RainbowButton className="text-base font-semibold">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </RainbowButton>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 w-full border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-xs uppercase tracking-wider text-white/40">
            © 2025 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

