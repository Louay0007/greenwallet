import React from "react";

const MediaShowcase = () => {
  return (
    <section className="section-container">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="rounded-2xl overflow-hidden shadow-elegant bg-black/5">
          <video
            className="w-full h-full object-cover"
            src="/loop-animation.webm"
            autoPlay
            muted
            loop
            playsInline
            aria-label="GreenWallet animation"
          />
        </div>
        <div className="grid gap-6">
          <img src="/hero-image.jpg" alt="Hero" className="rounded-2xl shadow-elegant" />
          <img src="/ecoact.jpg" alt="Eco actions" className="rounded-2xl shadow-elegant" />
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;


