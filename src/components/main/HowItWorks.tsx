import React from "react";

const steps = [
  { n: 1, title: "Pick a Quest", text: "Choose a daily or weekly mission that fits your day." },
  { n: 2, title: "Do the Action", text: "Recycle, commute clean, save energy, or conserve water." },
  { n: 3, title: "Scan & Submit", text: "Upload a photo/video or scan a QR/NFC for proof." },
  { n: 4, title: "Earn & Track", text: "Receive GreenCoins and see your impact grow over time." },
];

const HowItWorks = () => {
  return (
    <section className="section-container" id="how-it-works">
      <h2 className="section-title">How it works</h2>
      <p className="section-subtitle">A simple loop that turns everyday actions into measurable climate impact.</p>
      <div className="grid md:grid-cols-4 gap-6 mt-8">
        {steps.map((s) => (
          <div key={s.n} className="feature-card bg-white">
            <div className="w-10 h-10 rounded-full bg-pulse-100 text-pulse-600 flex items-center justify-center font-bold">
              {s.n}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;


