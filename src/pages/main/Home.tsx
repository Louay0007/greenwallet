import React from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/main/Hero";
import ValueProps from "@/components/main/ValueProps";
import HowItWorks from "@/components/main/HowItWorks";
import CTA from "@/components/main/CTA";
import Footer from "@/components/home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-8">
        <Hero />
        <ValueProps />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;


