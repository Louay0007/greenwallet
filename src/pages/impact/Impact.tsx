import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ImpactHeader from "@/components/impact/ImpactHeader";
import GoalsRing from "@/components/impact/GoalsRing";
import TrendsChart from "@/components/impact/TrendsChart";
import ImpactBreakdown from "@/components/impact/ImpactBreakdown";
import BadgesGrid from "@/components/impact/BadgesGrid";
import NextActions from "@/components/impact/NextActions";

export default function Impact() {
  const goals = [
    { label: "CO₂", value: 2.3, target: 5, color: "#f97316" },
    { label: "Waste", value: 3, target: 6, color: "#22c55e" },
    { label: "Water", value: 4, target: 8, color: "#06b6d4" },
    { label: "Energy", value: 1.2, target: 4, color: "#a855f7" },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-8 md:space-y-10 w-full max-w-[1400px]">
        <ImpactHeader totalCO2={12.4} actionsCount={37} streak={5} />
        <GoalsRing goals={goals} />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <TrendsChart />
            <ImpactBreakdown
              items={[
                { actionLabel: "Recycle plastic", value: 12, sdgs: [12, 13] },
                { actionLabel: "Public transport", value: 8, sdgs: [11, 13] },
                { actionLabel: "Energy saver", value: 5, sdgs: [7, 13] },
              ]}
            />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <BadgesGrid badges={[
              { id: "b1", name: "Starter", status: "earned" },
              { id: "b2", name: "Recycler", status: "progress", progressPct: 70 },
              { id: "b3", name: "Traveler", status: "progress", progressPct: 45 },
            ]} />
            <NextActions items={[
              { action: "Recycle bottles", points: 20, sdgs: [12,13], slug: "recycle" },
              { action: "Commute by bus", points: 30, sdgs: [11,13], slug: "transport" },
              { action: "Turn off standby", points: 15, sdgs: [7,13], slug: "energy" },
            ]} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


