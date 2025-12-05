import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* RIGHT aligned heading */}
        <div className="flex flex-col items-end mb-12">
          <div className="text-right max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8">
              Book a Call
            </h2>
            <p className="text-lg text-white/60">
              Schedule a free strategy session to see how we can help grow your business
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div 
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden" 
            data-url="https://calendly.com/p1creative/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=006eff"
            style={{ 
              minWidth: '320px', 
              height: '700px', 
              maxWidth: '1000px',
              width: '100%'
            }}
          />
        </div>
      </div>
    </section>
  );
}
