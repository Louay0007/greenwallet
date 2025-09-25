import React from "react";
import SubmissionItem from "./SubmissionItem";

interface Item {
  id: string;
  actionLabel: string;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
  points?: number;
  sdgs?: number[];
  thumbnailUrl?: string;
}

export default function SubmissionsList({ items, loading }: { items: Item[]; loading?: boolean }) {
  if (!loading && items.length === 0) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="mx-auto max-w-xl">
          <div className="relative rounded-2xl overflow-hidden">
            <img src="/background-section1.png" alt="" className="w-full h-40 object-cover opacity-30" />
            <div className="absolute inset-0 bg-white/60" />
          </div>
          <h3 className="text-xl font-semibold mt-4">No submissions yet</h3>
          <p className="text-gray-600 mt-1">Start by logging an action on the Scan page.</p>
          <a href="/scan" className="button-primary mt-4 inline-flex">Go to Scan</a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <SubmissionItem key={it.id} {...it} />
      ))}
    </div>
  );
}


