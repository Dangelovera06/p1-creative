
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
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-black text-white border-black">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Ready to Transform Your
            <span className="text-gray-600"> Medical Practice?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's discuss how P1 Creative can help you attract more patients and grow your practice with our proven marketing strategies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-black rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Email</div>
                      <div className="text-gray-700">info@flozyagency.io</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-black rounded-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Location</div>
                      <div className="text-gray-700">Florida, USA</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-black rounded-lg">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Response Time</div>
                      <div className="text-gray-700">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-[#006eff] to-[#0080ff] text-white">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <Calendar className="h-12 w-12 text-white mx-auto" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      Book Your Free Strategy Call
                    </h3>
                    <p className="text-white/90 text-lg">
                      Schedule a 30-minute call to discuss how we can transform your business and fill your calendar with ready-to-buy clients.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/80">
                      📅 30 minutes • 💬 No commitment • 🚀 See how we can help
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
                    className="w-full bg-white text-[#006eff] hover:bg-gray-100 py-4 text-lg font-semibold"
                  >
                    <Calendar className="mr-2 h-6 w-6" />
                    Book Your Free Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-black to-gray-800 text-white">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <TrendingUp className="h-12 w-12 text-white mx-auto" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      Discover Your Business Growth Potential
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Take our quick assessment to get a personalized marketing strategy and see how much your business could grow.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      ✨ Get instant results • 📊 Personalized analysis • 🚀 Growth recommendations
                    </p>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/Quiz'}
                    className="w-full bg-white text-black hover:bg-gray-100 py-4 text-lg font-semibold"
                  >
                    <TrendingUp className="mr-2 h-6 w-6" />
                    Start Your Growth Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Why Choose P1 Creative?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Specialized in medical practice marketing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">HIPAA compliant strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Proven results across Florida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Dedicated account management</span>
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
