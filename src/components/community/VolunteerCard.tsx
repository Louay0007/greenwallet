import React from "react";

export default function VolunteerCard({ id, title, hours, when, imageUrl, sdgs = [] }: { id: string; title: string; hours: number; when: string; imageUrl: string; sdgs?: number[] }) {
  return (
    <a href={`/community/volunteer/${id}`} className="rounded-2xl overflow-hidden shadow-elegant bg-white block">
      <div className="relative h-32">
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-4 text-left space-y-2">
        <h3 className="text-base font-semibold line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600">{when} • {hours}h</p>
        <div className="flex flex-wrap gap-1.5">
          {sdgs.map((n) => (
            <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
          ))}
        </div>
        <span className="button-primary text-sm py-2 w-full inline-flex justify-center">Sign up</span>
      </div>
    </a>
  );
}


