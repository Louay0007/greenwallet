import React from "react";
import EventCard from "./EventCard";

interface Event { id: string; title: string; date: string; location: string; imageUrl: string; sdgs?: number[] }

export default function EventsGrid({ items }: { items: Event[] }) {
  if (items.length === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <img src="/placeholder.svg" alt="" className="w-16 mx-auto opacity-60" />
        <p className="mt-2 text-sm text-gray-700">No events found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {items.map((e) => (
        <EventCard key={e.id} {...e} />
      ))}
    </div>
  );
}


