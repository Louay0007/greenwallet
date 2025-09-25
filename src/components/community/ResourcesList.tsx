import React from "react";
import ResourceItem from "./ResourceItem";

interface R { id: string; title: string; url: string; sdgs?: number[]; source?: string }

export default function ResourcesList({ items }: { items: R[] }) {
  if (items.length === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <img src="/placeholder.svg" alt="" className="w-16 mx-auto opacity-60" />
        <p className="mt-2 text-sm text-gray-700">No resources yet.</p>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {items.map((r) => (
        <ResourceItem key={r.id} {...r} />
      ))}
    </div>
  );
}


