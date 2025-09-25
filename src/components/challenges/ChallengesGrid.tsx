import React from "react";
import ChallengeCard from "./ChallengeCard";

interface Item { id: string; title: string; endsAt: string; joined: boolean; sdgs?: number[]; banner?: string; }

export default function ChallengesGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {items.map((it) => (
        <ChallengeCard key={it.id} {...it} />
      ))}
    </div>
  );
}


