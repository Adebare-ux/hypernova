import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StepsSection from "./components/StepsSection";
import Benefits from "./components/Benefits";
import Compensation from "./components/Compensation";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import "./global.css";

export default function WonderApps() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Outfit', sans-serif",
        background: "#0a0e1a",
        color: "#e8eaf6",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <StepsSection />
      <Benefits />
      <Compensation />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
