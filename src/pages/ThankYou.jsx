import React, { useEffect } from "react";

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
    
    // Redirect to Instagram after a brief delay to ensure pixel fires
    setTimeout(() => {
      window.location.href = 'https://www.instagram.com/p1.creative';
    }, 500);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/p1 white.png" 
          alt="P1 Creative Logo" 
          className="h-16 w-auto mx-auto mb-6"
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Thank You!
        </h1>
        <p className="text-white/70 mb-4">
          Redirecting you to our Instagram...
        </p>
        <div className="animate-spin w-8 h-8 border-2 border-white/20 border-t-white rounded-full mx-auto"></div>
      </div>
    </div>
  );
}

