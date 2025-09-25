import React from "react";
import ClubCard from "./ClubCard";

interface Club { id: string; name: string; members: number; city: string; imageUrl: string; sdgs?: number[] }

export default function ClubsGrid({ items }: { items: Club[] }) {
  if (items.length === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <img src="/placeholder.svg" alt="" className="w-16 mx-auto opacity-60" />
        <p className="mt-2 text-sm text-gray-700">No clubs found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {items.map((c) => (
        <ClubCard key={c.id} {...c} />
      ))}
    </div>
  );
}


