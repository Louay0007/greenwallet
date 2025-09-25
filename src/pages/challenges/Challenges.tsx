import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ChallengesFilters from "@/components/challenges/ChallengesFilters";
import ChallengesGrid from "@/components/challenges/ChallengesGrid";
import ChallengeCard from "@/components/challenges/ChallengeCard";

const MOCK = [
  { id: "c1", title: "Recycle Week", endsAt: new Date(Date.now() + 7*864e5).toISOString(), joined: true, sdgs: [12,13], banner: "/background-section1.png" },
  { id: "c2", title: "Car-Free Commute", endsAt: new Date(Date.now() + 10*864e5).toISOString(), joined: false, sdgs: [11,13], banner: "/background-section2.png" },
  { id: "c3", title: "Power Saver", endsAt: new Date(Date.now() + 20*864e5).toISOString(), joined: false, sdgs: [7,13], banner: "/background-section3.png" },
];

export default function Challenges() {
  const [filters, setFilters] = useState({ category: "all", duration: "weekly", status: "active" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-10 md:space-y-14">

        {/* Featured ribbon */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Featured</h2>
            <a href="#grid" className="text-sm text-pulse-600 hover:underline">View all</a>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-4 snap-x snap-mandatory pb-2">
              {MOCK.map((c) => (
                <div key={c.id} className="min-w-[260px] max-w-[320px] snap-start">
                  <ChallengeCard {...c} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Browse challenges</h2>
          <div className="w-full sm:w-auto">
            <ChallengesFilters category={filters.category} duration={filters.duration} status={filters.status} onChange={(u) => setFilters({ ...filters, ...u })} />
          </div>
        </div>

        {/* Grid */}
        <div id="grid">
          <ChallengesGrid items={MOCK} />
        </div>
      </main>
      <Footer />
    </div>
  );
}


