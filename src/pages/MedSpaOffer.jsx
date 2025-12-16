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
    <div className="min-h-screen flex flex-col justify-center overflow-x-hidden w-full bg-black px-5 py-8">
      {/* Logo */}
      <div className="flex justify-center mb-8 sm:mb-10">
        <img 
          src="/p1 white.png" 
          alt="P1 Creative Logo" 
          className="h-10 sm:h-12 w-auto"
        />
      </div>

      <div className="max-w-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5">
            <span className="text-white/60 text-base sm:text-lg md:text-xl font-normal block mb-2">NEW 2026 VIDEO FOR</span>
            Med Spas, Aesthetic Clinics{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-[#00a8ff] to-[#006eff]">
              & Cosmetic Pros
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-lg mx-auto">
            How we added an extra <span className="text-white font-semibold">$30K/month</span> using AI — no overpriced agencies.
          </p>
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
    </div>
  );
}

