import React from "react";

import SimpleHero from "../components/landing/SimpleHero";
import BringingToLife from "../components/landing/BringingToLife";
import WhatWeDo from "../components/landing/WhatWeDo";
import WhatClientsSay from "../components/landing/WhatClientsSay";
import VisionStrategy from "../components/landing/VisionStrategy";
import OurMission from "../components/landing/OurMission";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SimpleHero />
      <BringingToLife />
      <WhatWeDo />
      <WhatClientsSay />
      <VisionStrategy />
      <OurMission />
      <Contact />
      <Footer />
    </div>
  );
}