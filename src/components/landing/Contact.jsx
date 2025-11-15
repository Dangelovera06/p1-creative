
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Calendar,
  TrendingUp
} from "lucide-react";

export default function Contact() {

  return (
    <div id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <Badge variant="secondary" className="bg-black text-white border-black text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Ready to Transform Your
            <span className="text-gray-600"> Medical Practice?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Let's discuss how P1 Creative can help you attract more patients and grow your practice with our proven marketing strategies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 bg-black rounded-lg flex-shrink-0">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black text-sm sm:text-base">Email</div>
                      <div className="text-gray-700 text-sm sm:text-base">info@flozyagency.io</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 bg-black rounded-lg flex-shrink-0">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black text-sm sm:text-base">Location</div>
                      <div className="text-gray-700 text-sm sm:text-base">Florida, USA</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 bg-black rounded-lg flex-shrink-0">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black text-sm sm:text-base">Response Time</div>
                      <div className="text-gray-700 text-sm sm:text-base">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-[#006eff] to-[#0080ff] text-white">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center space-y-3 sm:space-y-4">
                  <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-white mx-auto" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      Book Your Free Strategy Call
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      Schedule a 30-minute call to discuss how we can transform your business
                    </p>
                  </div>
                  <Button 
                    onClick={() => {
                      if (window.fbq) {
                        window.fbq('track', 'Schedule', {
                          content_name: 'Book a Call - Contact Section',
                          content_category: 'Calendly'
                        });
                      }
                      window.open('https://calendly.com/p1creative/30min', '_blank');
                    }}
                    className="w-full bg-white text-[#006eff] hover:bg-gray-100 font-bold text-base sm:text-lg rounded-full"
                    style={{ height: '56px', maxWidth: '320px', margin: '0 auto' }}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Free Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-black to-gray-800 text-white">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center space-y-3 sm:space-y-4">
                  <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-white mx-auto" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      Discover Your Business Growth Potential
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Take our quick assessment to get a personalized marketing strategy
                    </p>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/Quiz'}
                    className="w-full bg-white text-black hover:bg-gray-100 font-bold text-base sm:text-lg rounded-full"
                    style={{ height: '56px', maxWidth: '320px', margin: '0 auto' }}
                  >
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Start Your Growth Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gray-50">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">Why Choose P1 Creative?</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Specialized in medical practice marketing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">HIPAA compliant strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Proven results across Florida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Dedicated account management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
