
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>About GreenWallet</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Tunisia GreenWallet turns verified eco‑actions into instant rewards. Snap a photo of your recycling, scan a station QR, upload a transit ticket, or confirm an energy‑saving change at home — our AI verifies evidence (computer vision + anti‑fraud) and you earn GreenCoins immediately. Redeem at local partners, donate to NGOs, or climb leaderboards while contributing to Tunisia’s CO2, waste, energy, and water goals.
            </span>
          </h2>
          <div className="grid gap-4 sm:gap-6 md:max-w-6xl md:grid-cols-4 text-gray-700">
            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm font-semibold mb-1">How it works</p>
              <p className="text-sm">Take the action → Submit proof (photo/QR/ticket/GPS) → AI verifies → Get GreenCoins.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm font-semibold mb-1">AI‑based verification</p>
              <p className="text-sm">Computer vision detects materials, checks duplicates, and flags fraud; IoT bins fast‑track rewards when present — but photo‑only works anywhere.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm font-semibold mb-1">Built for Tunisia</p>
              <p className="text-sm">Arabic‑first (RTL), local partners and schools, city dashboards, and open impact data.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm font-semibold mb-1">Future perspective</p>
              <p className="text-sm">Designed to scale across North Africa and worldwide with localization, partner marketplaces, and open APIs for developers and cities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
