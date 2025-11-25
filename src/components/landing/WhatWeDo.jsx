import React from "react";

const services = [
  {
    title: "Content Creation",
    description: "Cinematic videos and content that stop scrollers and turn attention into appointments."
  },
  {
    title: "Paid Advertising",
    description: "Targeted ad campaigns optimized to generate qualified leads at the lowest cost."
  },
  {
    title: "Landing Pages",
    description: "Custom conversion-focused pages designed to turn visitors into booked appointments."
  },
  {
    title: "AI Automation",
    description: "24/7 AI caller system that qualifies leads, answers questions, and books appointments automatically."
  },
  {
    title: "Strategy & Support",
    description: "Weekly optimization, biweekly strategy calls, and ongoing support to ensure your system performs."
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-16 text-center">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-medium text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

