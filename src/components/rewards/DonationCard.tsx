import React from "react";

export default function DonationCard({ id, title, min, sdgs = [], impactPerCoin, imageUrl, verified }: { id: string; title: string; min: number; sdgs?: number[]; impactPerCoin: string; imageUrl: string; verified: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-elegant w-full bg-white">
      <div className="relative w-full h-40 sm:h-48">
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-4 text-left space-y-2">
        <h3 className="text-base font-semibold leading-snug line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600">Impact: {impactPerCoin}</p>
        
        <div className="pt-1">
          <a href={`#/donate/${id}`} className="button-primary text-sm py-2 w-full inline-flex justify-center">Donate</a>
        </div>
      </div>
    </div>
  );
}


