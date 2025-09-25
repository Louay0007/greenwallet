import React from "react";

interface RingProps { label: string; value: number; target: number; color: string }

function Ring({ label, value, target, color }: RingProps) {
  const pct = Math.min(100, Math.round((value / Math.max(1, target)) * 100));
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 36 36" className="w-20 h-20">
          <path d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" stroke="#EEE" strokeWidth="3" />
          <path d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" stroke={color} strokeWidth="3" strokeDasharray={`${pct}, 100`} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">{pct}%</div>
      </div>
      <div className="mt-2 text-sm font-medium">{label}</div>
      <div className="text-xs text-gray-600">{value} / {target}</div>
    </div>
  );
}

export default function GoalsRing({ goals }: { goals: { label: string; value: number; target: number; color: string }[] }) {
  return (
    <div className="glass-card p-4 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {goals.map((g) => (
          <Ring key={g.label} {...g} />
        ))}
      </div>
    </div>
  );
}


