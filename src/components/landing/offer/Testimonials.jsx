import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "P1 Creative took us from inconsistent leads to 45 qualified appointments per month. Their AI caller system alone saves us 20 hours a week. Game-changer.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Chen",
    role: "Med Spa Owner",
  },
  {
    text: "Within 60 days, P1 filled our calendar with pre-qualified leads. The cinematic videos they produce stop people mid-scroll. Best ROI we've ever seen on marketing.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Marcus Johnson",
    role: "Commercial Real Estate",
  },
  {
    text: "We were spending $15K/month on ads with zero results. P1 Creative rebuilt our entire system and now we're booking 30+ qualified calls monthly. Worth every penny.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Elena Rodriguez",
    role: "Luxury Home Builder",
  },
  {
    text: "The AI caller handles our inbound leads 24/7. No more missed calls, no more manual follow-ups. P1 Creative gave us back our time while doubling our bookings.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Michael Thompson",
    role: "HVAC Company Owner",
  },
  {
    text: "P1 Creative's videos are cinematic and their ads actually convert. We went from 5 leads per month to 40+ qualified appointments. Our business has completely transformed.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Lisa Martinez",
    role: "Plastic Surgeon",
  },
  {
    text: "Their concierge support is unmatched. Weekly KPI reports, biweekly strategy calls, and Slack access whenever we need help. They're truly invested in our success.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "David Kim",
    role: "Law Firm Partner",
  },
  {
    text: "P1 Creative built our landing page, launched our ads, and automated our entire follow-up process. We're now closing $200K+ per month from qualified leads they generate.",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    name: "Amanda Foster",
    role: "Roofing Company CEO",
  },
  {
    text: "We tried three agencies before P1 Creative. None of them delivered. P1 gave us a complete system that actually works—content, ads, booking automation, everything.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Jason Park",
    role: "Dental Practice Owner",
  },
  {
    text: "The custom SOPs they created for our front desk team eliminated all the confusion. Now every lead is handled perfectly and our close rate is 3x what it was.",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Jennifer Blake",
    role: "Financial Advisor",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-[#030303] py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006eff]/[0.03] via-transparent to-[#0050cc]/[0.03]" />

      <div className="container z-10 mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] py-2 px-4 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#006eff]"></div>
              <span className="text-sm text-white/60 tracking-wide">Success Stories</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Real Businesses.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
              Real Results.
            </span>
          </h2>
          
          <p className="text-center text-base md:text-lg text-white/50 leading-relaxed">
            See what business owners are saying about their transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={19} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={17} 
          />
        </motion.div>
      </div>
    </section>
  );
}
