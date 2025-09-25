import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import SubmissionDetail from "@/components/submissions/SubmissionDetail";

const MOCK = {
  id: "1",
  actionLabel: "Recycle plastic bottles",
  createdAt: new Date().toISOString(),
  status: "rejected" as const,
  points: 20,
  sdgs: [12, 13],
  media: { type: "image", url: "/background-section1.png" },
  reviewerNote: "Please show the recycling logo on the bin and ensure the bottles are visible.",
};

export default function SubmissionDetailPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-28 md:pt-32 space-y-8 md:space-y-10">
        <SubmissionDetail submission={MOCK} />
      </main>
      <Footer />
    </div>
  );
}


