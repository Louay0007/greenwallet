import React, { useState } from "react";

const METRICS = ["CO2", "Waste", "Water", "Energy"] as const;

export default function TrendsChart() {
  const [metric, setMetric] = useState<(typeof METRICS)[number]>("CO2");
  const [range, setRange] = useState<"7" | "30" | "90">("30");

  // Mock trend data
  const points = Array.from({ length: parseInt(range, 10) }, (_, i) => ({ x: i + 1, y: Math.round(5 + Math.sin(i / 3) * 2 + (metric === "CO2" ? 1 : 0)) }));
  const maxY = Math.max(...points.map((p) => p.y)) + 2;

  return (
    <div className="glass-card p-4 text-left w-full">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {METRICS.map((m) => (
            <button key={m} onClick={() => setMetric(m)} className={`px-3 py-1.5 rounded-full text-xs border ${metric === m ? "bg-pulse-500 text-white border-pulse-500" : "bg-white"}`}>{m}</button>
          ))}
        </div>
        <div className="flex gap-2">
          {(["7", "30", "90"] as const).map((r) => (
            <button key={r} onClick={() => setRange(r)} className={`px-2.5 py-1 rounded-full text-xs border ${range === r ? "bg-gray-900 text-white border-gray-900" : "bg-white"}`}>{r}d</button>
          ))}
        </div>
      </div>
      <div className="mt-4 mx-auto w-full max-w-[360px] sm:max-w-none">
        <svg viewBox={`0 0 ${points.length} ${maxY}`} className="w-full h-40 sm:h-56">
          <polyline fill="url(#area)" stroke="none" points={points.map((p) => `${p.x},${maxY}`).join(" ") + " " + points.map((p) => `${p.x},${maxY - p.y}`).join(" ")} />
          <polyline fill="none" stroke="#f97316" strokeWidth="0.5" points={points.map((p) => `${p.x},${maxY - p.y}`).join(" ")} />
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}


