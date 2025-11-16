
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Calendar
} from "lucide-react";

export default function Contact() {
  const calendlyRef = useRef(null);
  const [calendlyHeight, setCalendlyHeight] = useState(900);

  useEffect(() => {
    // Set responsive height
    const updateHeight = () => {
      setCalendlyHeight(window.innerWidth < 640 ? 700 : 900);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    // Initialize Calendly inline widget
    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/p1creative/30min',
          parentElement: calendlyRef.current,
        });
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for Calendly script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(checkCalendly);
        }
      }, 100);

      return () => clearInterval(checkCalendly);
    }
  }, []);

  return (
    <div id="contact" className="py-8 sm:py-12 md:py-16 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8 md:mb-12">
          <Badge variant="secondary" className="bg-black text-white border-black text-xs sm:text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black px-2">
            Ready to Transform Your
            <span className="text-gray-600"> Medical Practice?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-2">
            Let's discuss how P1 Creative can help you attract more patients and grow your practice with our proven marketing strategies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto w-full">
          {/* Contact Info and Why Choose Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-12">
            <Card className="border border-gray-200 shadow-lg w-full">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-1.5 sm:p-2 bg-black rounded-lg flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-black text-sm sm:text-base md:text-lg mb-1">Email</div>
                      <div className="text-gray-700 text-xs sm:text-sm md:text-base break-words">info@flozyagency.io</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-1.5 sm:p-2 bg-black rounded-lg flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-black text-sm sm:text-base md:text-lg mb-1">Location</div>
                      <div className="text-gray-700 text-xs sm:text-sm md:text-base">Florida, USA</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-1.5 sm:p-2 bg-black rounded-lg flex-shrink-0">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-black text-sm sm:text-base md:text-lg mb-1">Response Time</div>
                      <div className="text-gray-700 text-xs sm:text-sm md:text-base">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gray-50 w-full">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 sm:mb-6">Why Choose P1 Creative?</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">Specialized in medical practice marketing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">HIPAA compliant strategies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">Proven results across Florida</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">Dedicated account management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Embedded Calendly Widget - Full Width */}
          <div className="flex justify-center w-full px-0 sm:px-4">
            <div 
              ref={calendlyRef}
              className="calendly-inline-widget w-full" 
              style={{ 
                minWidth: '280px', 
                height: `${calendlyHeight}px`, 
                maxWidth: '1200px' 
              }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
