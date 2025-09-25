import React from "react";

export default function EventCard({ id, title, date, location, imageUrl, sdgs = [] }: { id: string; title: string; date: string; location: string; imageUrl: string; sdgs?: number[] }) {
  return (
    <a href={`/community/events/${id}`} className="rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all bg-white block">
      <div className="relative h-40">
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-2 left-3 right-3 text-white">
          <h3 className="text-base font-semibold drop-shadow line-clamp-2">{title}</h3>
          <p className="text-[10px] opacity-90">{new Date(date).toLocaleString()} • {location}</p>
        </div>
      </div>
      <div className="p-4 text-left space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {sdgs.map((n) => (
            <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
          ))}
        </div>
        <span className="button-primary text-sm py-2 w-full inline-flex justify-center">RSVP</span>
      </div>
    </a>
  );
}


