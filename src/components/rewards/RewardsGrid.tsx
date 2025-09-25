import React from "react";
import RewardCard from "./RewardCard";

interface Reward { id: string; title: string; cost: number; imageUrl: string; partner: { id: string; name: string }; sdgs?: number[]; ribbon?: 'limited'|'new'|null }

export default function RewardsGrid({ items }: { items: Reward[] }) {
  if (items.length === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <img src="/placeholder.svg" alt="" className="w-16 mx-auto opacity-60" />
        <p className="mt-2 text-sm text-gray-700">No rewards found. Try widening your filters.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
      {items.map((r) => (
        <RewardCard key={r.id} {...r} />
      ))}
    </div>
  );
}


