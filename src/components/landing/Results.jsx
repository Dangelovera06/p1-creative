import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average Patient Growth",
    description: "Within 6 months of working with us"
  },
  {
    icon: Users,
    value: "15,000+",
    label: "New Patients Generated",
    description: "Across all our Florida practices"
  },
  {
    icon: Target,
    value: "4.2x",
    label: "ROI Improvement",
    description: "On average across all campaigns"
  },
  {
    icon: DollarSign,
    value: "$2.3M",
    label: "Revenue Generated",
    description: "For our medical practice clients"
  }
];

export default function Results() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
            Proven Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            The Numbers Don't Lie
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our data-driven approach delivers measurable results for medical practices across Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border border-white/10 backdrop-blur-md bg-white/5 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-lg font-semibold text-white/80 mb-2">{stat.label}</div>
                    <div className="text-sm text-white/60">{stat.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-white/60">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>Updated in real-time • Last updated: Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}