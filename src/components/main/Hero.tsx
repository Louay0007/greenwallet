import React from "react";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-16">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img src="/Header-background.webp" alt="Background" className="w-full h-full object-cover opacity-70" />
      </div>
      <div className="section-container mx-auto max-w-6xl text-left md:text-center">
        <span className="pulse-chip">Tunisia GreenWallet</span>
        <h1 className="section-title mt-4 bg-hero-gradient bg-clip-text text-transparent">
          Turn Everyday Actions into Real Climate Impact
        </h1>
        <p className="section-subtitle">
          Log eco-actions, join quests, and earn GreenCoins while helping Tunisia reach its sustainability goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start md:justify-center">
          <a href="#quick-actions" className="button-primary">Start an Action</a>
          <a href="#how-it-works" className="button-secondary">How it works</a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;


