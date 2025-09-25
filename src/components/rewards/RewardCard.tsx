import React from "react";

export default function RewardCard({ id, title, cost, imageUrl, partner, sdgs = [], ribbon, onClick }: { id: string; title: string; cost: number; imageUrl: string; partner: { id: string; name: string }; sdgs?: number[]; ribbon?: 'limited'|'new'|null; onClick?: () => void }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all hover:translate-y-[-3px] focus:outline-none focus:ring-2 focus:ring-pulse-500 cursor-pointer bg-white" onClick={onClick}>
      <div className="relative w-full h-40 sm:h-48">
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {ribbon && (
          <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-[10px] font-medium ${ribbon === 'limited' ? 'bg-red-500 text-white' : 'bg-pulse-500 text-white'}`}>{ribbon}</div>
        )}
      </div>
      <div className="p-4 text-left space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold leading-snug line-clamp-2">{title}</h3>
            <p className="text-xs text-gray-600">{partner.name}</p>
          </div>
          <span className="px-2 py-1 rounded-full text-[11px] bg-pulse-50 text-pulse-700 border border-pulse-200 font-semibold">{cost} GC</span>
        </div>
       
        <div className="pt-1">
          <span className="button-primary text-sm py-2 w-full inline-flex justify-center">Redeem</span>
        </div>
      </div>
    </div>
  );
}


