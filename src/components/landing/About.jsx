
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Award, 
  Users, 
  Clock,
  ArrowRight,
  Shield,
  Heart,
  Zap
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "All our marketing strategies are fully compliant with healthcare regulations and patient privacy laws."
  },
  {
    icon: Heart,
    title: "Patient-Focused",
    description: "We understand that healthcare marketing is about building trust and improving patient outcomes."
  },
  {
    icon: Zap,
    title: "Results-Driven",
    description: "Every campaign is optimized for measurable results - more patients, better engagement, higher ROI."
  }
];

export default function About() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Based in Florida
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Your Local Florida
                <span className="text-white/70"> Medical Marketing</span>
                Experts
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Founded in the heart of Florida, P1 Creative specializes exclusively in medical practice marketing. We understand the unique challenges and opportunities that Florida medical practices face.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">5+ Years</div>
                  <div className="text-sm text-white/60">Medical Marketing Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">250+</div>
                  <div className="text-sm text-white/60">Florida Practices Served</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Top Rated</div>
                  <div className="text-sm text-white/60">Florida Marketing Agency</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Statewide</div>
                  <div className="text-sm text-white/60">Florida Coverage</div>
                </div>
              </div>
            </div>

            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white hover:bg-white/90 text-black px-8 py-4 rounded-full"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-white/10 backdrop-blur-md bg-white/5 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-white/70">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
