import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Target,
  MapPin,
  Mail,
  Calendar,
  Play
} from "lucide-react";

import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Testimonials from "../components/landing/Testimonials";
import Services from "../components/landing/Services";
import Results from "../components/landing/Results";
import About from "../components/landing/About";
import Founder from "../components/landing/Founder";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Stats />
      <Testimonials />
      <Services />
      <Results />
      <About />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}