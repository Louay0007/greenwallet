import React from "react";

export default function ClubCard({ id, name, members, city, imageUrl, sdgs = [] }: { id: string; name: string; members: number; city: string; imageUrl: string; sdgs?: number[] }) {
  return (
    <a href={`/community/clubs/${id}`} className="rounded-2xl overflow-hidden shadow-elegant bg-white block">
      <div className="relative h-32">
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-4 text-left space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold line-clamp-2">{name}</h3>
          <span className="text-xs text-gray-600">{city}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {sdgs.map((n) => (
            <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">{members} members</span>
          <span className="button-primary text-sm py-2">Join</span>
        </div>
      </div>
    </a>
  );
}


