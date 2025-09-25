import React from "react";
import DonationCard from "./DonationCard";

interface Donation { id: string; title: string; min: number; sdgs?: number[]; impactPerCoin: string; imageUrl: string; verified: boolean }

export default function DonationGrid({ items }: { items: Donation[] }) {
  if (items.length === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <img src="/placeholder.svg" alt="" className="w-16 mx-auto opacity-60" />
        <p className="mt-2 text-sm text-gray-700">No donation campaigns found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((d) => (
        <DonationCard key={d.id} {...d} />
      ))}
    </div>
  );
}


