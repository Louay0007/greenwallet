import React from "react";

export default function PartnerCard({ id, name, logoUrl, verified, sdgs = [] }: { id: string; name: string; logoUrl: string; verified: boolean; sdgs?: number[] }) {
  return (
    <a href={`/community/partners/${id}`} className="rounded-2xl overflow-hidden shadow-elegant bg-white p-4 flex items-center justify-between block">
      <div className="flex items-center gap-3">
        <img src={logoUrl} alt={name} className="w-12 h-12 rounded-lg object-cover" />
        <div>
          <h3 className="text-base font-semibold">{name}</h3>
          <div className="flex gap-1.5 mt-1">
            {sdgs.map((n) => (
              <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
            ))}
            {verified && <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-100 text-blue-700">Verified</span>}
          </div>
        </div>
      </div>
      <span className="button-primary text-sm py-2">View</span>
    </a>
  );
}


