import React from "react";

import PlaybookHero from "../components/landing/PlaybookHero";
import PlaybookStats from "../components/landing/PlaybookStats";
import Testimonials from "../components/landing/Testimonials";
import Services from "../components/landing/Services";
import Results from "../components/landing/Results";
import About from "../components/landing/About";
import Founder from "../components/landing/Founder";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Playbook() {

  return (
    <div className="min-h-screen bg-black">
      <PlaybookHero />
      <PlaybookStats />
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

