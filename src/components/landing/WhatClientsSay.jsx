import React from "react";

const testimonials = [
  {
    text: "P1 Creative took us from inconsistent leads to 45 qualified appointments per month. Their AI caller system alone saves us 20 hours a week.",
    name: "Sarah Chen",
    role: "Med Spa Owner"
  },
  {
    text: "Within 60 days, P1 filled our calendar with pre-qualified leads. The cinematic videos they produce stop people mid-scroll.",
    name: "Marcus Johnson",
    role: "Commercial Real Estate"
  },
  {
    text: "We were spending $15K/month on ads with zero results. P1 Creative rebuilt our entire system and now we're booking 30+ qualified calls monthly.",
    name: "Elena Rodriguez",
    role: "Luxury Home Builder"
  },
  {
    text: "The AI caller handles our inbound leads 24/7. No more missed calls, no more manual follow-ups. P1 Creative gave us back our time.",
    name: "Michael Thompson",
    role: "HVAC Company Owner"
  }
];

export default function WhatClientsSay() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-16 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-t border-white/10 pt-6">
              <p className="text-white/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="text-white font-medium">{testimonial.name}</div>
                <div className="text-white/50 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

