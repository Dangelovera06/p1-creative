import React from "react";
import { Badge } from "@/components/ui/badge";

export default function Founder() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-4 mb-12">
          <Badge
            variant="secondary"
            className="bg-black text-white border-black"
          >
            The Visionary
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Meet the Founder
          </h2>
        </div>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 md:text-left">
          <div className="flex-shrink-0">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/48b723725_DSC04789.jpg"
              alt="Founder of P1 Creative"
              className="w-48 h-48 rounded-full object-cover object-top shadow-lg border-4 border-white"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              "I started P1 Creative with a single mission: to empower medical
              professionals by telling their unique stories. In a world
              saturated with generic marketing, we focus on authentic,
              high-impact content that builds trust and connects with patients
              on a deeper level. My passion is blending creative storytelling
              with data-driven strategy to help you become the #1 trusted name
              in your community."
            </p>
            <div>
              <p className="font-bold text-xl text-black">D'Angelo Vera</p>
              <p className="text-gray-600">
                Founder & Creative Director, P1 Creative
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
