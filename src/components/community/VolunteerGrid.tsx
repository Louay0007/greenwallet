import React from "react";
import VolunteerCard from "./VolunteerCard";

interface V { id: string; title: string; hours: number; when: string; imageUrl: string; sdgs?: number[] }

export default function VolunteerGrid({ items }: { items: V[] }) {
  if (items.length === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <img src="/placeholder.svg" alt="" className="w-16 mx-auto opacity-60" />
        <p className="mt-2 text-sm text-gray-700">No volunteer opportunities available.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {items.map((v) => (
        <VolunteerCard key={v.id} {...v} />
      ))}
    </div>
  );
}


