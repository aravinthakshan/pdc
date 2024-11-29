import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Benefits from "./components/Benefits";
import EligibilityAndContact from "./components/EligibilityAndContact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] antialiased font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Benefits />
      <EligibilityAndContact />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
