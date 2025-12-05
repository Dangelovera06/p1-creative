import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* RIGHT aligned */}
        <div className="flex flex-col items-end">
          <div className="text-right max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8">
              Book a Call
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Schedule a free strategy session to see how we can help grow your business
            </p>
            <a
              href="https://calendly.com/p1creative/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Book a Call CTA Click',
                    content_category: 'CTA Button'
                  });
                }
              }}
              className="inline-flex items-center gap-3 text-white font-semibold text-lg sm:text-xl uppercase tracking-widest hover:text-white/80 transition-all duration-300 group"
            >
              <span>Schedule Now</span>
              <svg 
                className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
