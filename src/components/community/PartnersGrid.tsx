import React from "react";
import PartnerCard from "./PartnerCard";

interface P { id: string; name: string; logoUrl: string; verified: boolean; sdgs?: number[] }

export default function PartnersGrid({ items }: { items: P[] }) {
  if (items.length === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <img src="/placeholder.svg" alt="" className="w-16 mx-auto opacity-60" />
        <p className="mt-2 text-sm text-gray-700">No partners yet.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {items.map((p) => (
        <PartnerCard key={p.id} {...p} />
      ))}
    </div>
  );
}


