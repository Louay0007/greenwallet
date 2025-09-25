import React from "react";

const items = [
  {
    title: "Earn GreenCoins",
    desc: "Get rewarded for recycling, saving energy, and sustainable transport.",
  },
  {
    title: "Join Quests",
    desc: "Daily and weekly missions keep you motivated with real impact.",
  },
  {
    title: "See Your Impact",
    desc: "Track CO2, waste, and water savings with beautiful charts.",
  },
];

const ValueProps = () => {
  return (
    <section className="section-container" id="features">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="glass-card p-6 text-left">
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;


