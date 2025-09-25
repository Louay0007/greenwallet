import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import SubmissionsFilters from "@/components/submissions/SubmissionsFilters";
import SubmissionsList from "@/components/submissions/SubmissionsList";

const MOCK = [
  { id: "1", actionLabel: "Recycle plastic bottles", createdAt: new Date().toISOString(), status: "pending", points: 20, sdgs: [12, 13], thumbnailUrl: "/background-section1.png" },
  { id: "2", actionLabel: "Commute by public transport", createdAt: new Date().toISOString(), status: "approved", points: 30, sdgs: [11, 13], thumbnailUrl: "/background-section2.png" },
  { id: "3", actionLabel: "Turn off standby devices", createdAt: new Date().toISOString(), status: "rejected", points: 15, sdgs: [7, 13], thumbnailUrl: "/background-section3.png" },
];

export default function Submissions() {
  const [filters, setFilters] = useState({ status: "all", range: "30", category: "all" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-28 md:pt-32 space-y-8 md:space-y-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="section-title">Submissions</h1>
          <SubmissionsFilters status={filters.status} range={filters.range} category={filters.category} onChange={(u) => setFilters({ ...filters, ...u })} />
        </div>

        <SubmissionsList items={MOCK} />
      </main>
      <Footer />
    </div>
  );
}


