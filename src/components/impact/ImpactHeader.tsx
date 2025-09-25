import React from "react";

export default function ImpactHeader({ totalCO2, actionsCount, streak }: { totalCO2: number; actionsCount: number; streak: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl text-left w-full">
      <img src="/background-section2.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60" />
      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Your Impact</h1>
            <p className="text-gray-700 mt-1 text-sm">{actionsCount} actions logged</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-pulse-100 text-pulse-700 text-sm border">🔥 {streak} day streak</div>
        </div>
        <div className="mt-4 flex items-end gap-6">
          <div>
            <div className="text-3xl md:text-4xl font-semibold">{totalCO2.toFixed(1)} kg</div>
            <div className="text-sm text-gray-600">CO₂ saved</div>
          </div>
        </div>
      </div>
    </div>
  );
}


