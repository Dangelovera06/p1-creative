import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MedSpaOffer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track with Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Med Spa Offer Opt-in',
        content_category: 'Lead Magnet'
      });
    }

    // Submit to Netlify Forms
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "medspa-optin",
          ...formData
        }).toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-black">
      {/* Hero with Opt-in Form */}
      <section className="px-5 pt-8 pb-12 sm:pt-12 sm:pb-16 bg-black">
        <div className="max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            {/* Top Label */}
            <p className="text-white/50 text-base sm:text-lg md:text-xl font-normal mb-4">NEW 2026 VIDEO FOR</p>
            
            {/* Main Headline - one paragraph */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2]">
              Med Spas, Aesthetic Clinics <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-[#00a8ff] to-[#006eff]">&amp; Cosmetic Pros</span> — How we added an extra <span className="text-white">$30K/month</span> using AI, no overpriced agencies.
            </h1>
          </motion.div>

          {/* Opt-in Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md mx-auto"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-white hover:bg-white/90 text-black font-bold text-base sm:text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Me The Video →"}
                </button>
                <p className="text-center text-white/30 text-sm pt-1">
                  Your info is safe. We hate spam too.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Check Your Inbox!</h3>
                <p className="text-white/60">We just sent the video to your email.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              What You'll Discover In This Video
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              "The exact AI system we use to follow up with leads 24/7 (without hiring more staff)",
              "How to turn cold leads into booked appointments automatically",
              "Why most med spas waste 80% of their ad spend — and how to fix it",
              "The 3-step funnel that generated $30K+ in additional monthly revenue",
              "How to scale without the headaches of traditional agencies"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#006eff]/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#006eff]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-white/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              What You're Getting
            </h2>
            <p className="text-lg text-white/60">Here's what we install for you:</p>
          </motion.div>

          <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10 max-w-2xl mx-auto">
            <div className="space-y-5">
              {[
                "10 Cinematic Videos That Convert",
                "High-Converting Paid Ad System",
                "Custom Landing Page + AI Caller",
                "Automated Booking System",
                "SOPs + Slack + Weekly Optimization"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <span className="text-[#006eff] text-xl flex-shrink-0">✓</span>
                  <span className="text-base sm:text-lg text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Ready To Add $30K+ To Your Monthly Revenue?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Get the free video and see exactly how we do it.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-3 text-white font-semibold text-lg uppercase tracking-widest hover:text-white/70 transition-all duration-300 group"
            >
              <span>Get Free Access</span>
              <svg 
                className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 w-full border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-white/60">
            Turning med spas into lead-generating machines
          </p>
          <div className="text-xs uppercase tracking-wider text-white/40">
            © 2025 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

