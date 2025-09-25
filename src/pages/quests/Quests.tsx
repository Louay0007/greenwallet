import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import QuestsTabs, { QuestsTab } from "@/components/quests/QuestsTabs";
import QuestsFilters from "@/components/quests/QuestsFilters";
import QuestsGrid from "@/components/quests/QuestsGrid";

const MOCK_QUESTS = [
  { title: "Recycle plastic bottles", points: 20, impact: "Divert 0.5kg of plastic from landfill", sdgs: [12, 13, 14], timeEstimate: "~5 min", proofType: "Photo" },
  { title: "Commute by public transport", points: 30, impact: "Reduce 1.2kg CO2", sdgs: [11, 13], timeEstimate: "~20 min", proofType: "QR/Location" },
  { title: "Turn off standby devices", points: 15, impact: "Save ~0.3 kWh", sdgs: [7, 13], timeEstimate: "~3 min", proofType: "Photo" },
];

const Quests = () => {
  const [tab, setTab] = useState<QuestsTab>("daily");
  const [filters, setFilters] = useState({ sdg: null as string | null, category: null as string | null, time: null as string | null, difficulty: null as string | null });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-28 md:pt-32 space-y-8 md:space-y-10">
        <div className="flex flex-wrap items-baseline gap-4 md:gap-6 justify-start md:justify-between">
          <h1 className="section-title">Quests</h1>
          <div className="mt-2 md:mt-0">
            <QuestsTabs active={tab} onChange={setTab} />
          </div>
        </div>

        <QuestsFilters
          sdg={filters.sdg}
          category={filters.category}
          time={filters.time}
          difficulty={filters.difficulty}
          onChange={(u) => setFilters({ ...filters, ...u })}
        />

        <div className="mt-2 md:mt-4">
          <QuestsGrid items={MOCK_QUESTS} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quests;


