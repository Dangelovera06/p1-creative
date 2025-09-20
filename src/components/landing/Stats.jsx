import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

export default function Stats() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-black text-white border-black mb-6">
            The Numbers Don't Lie
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Proven Results for
            <span className="text-gray-600"> Florida Businesses</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the real numbers from our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-black mb-4">250+</div>
            <div className="text-xl text-gray-600 font-medium">Medical Practices Served</div>
            <div className="text-gray-500 mt-2">Across Florida</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-black fill-current" />
              ))}
            </div>
            <div className="text-6xl font-bold text-black mb-4">4.9/5</div>
            <div className="text-xl text-gray-600 font-medium">Average Client Rating</div>
            <div className="text-gray-500 mt-2">Based on 200+ reviews</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-black mb-4">300%</div>
            <div className="text-xl text-gray-600 font-medium">Average Growth Increase</div>
            <div className="text-gray-500 mt-2">Within 6 months</div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.5M+</div>
            <div className="text-gray-700">Revenue Generated for Clients</div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">15K+</div>
            <div className="text-gray-700">New Patients Acquired</div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-700">Client Retention Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Take our quick assessment to discover your business growth potential and get a personalized strategy.
          </p>
          <Button 
            onClick={() => window.location.href = '/Quiz'}
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            Get My Growth Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
