import React from "react";

interface Item { actionLabel: string; value: number; sdgs: number[] }

export default function ImpactBreakdown({ items }: { items: Item[] }) {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <div className="glass-card p-4 text-left w-full">
      <h3 className="font-semibold">Top actions</h3>
      <div className="mt-3 space-y-3">
        {items.map((i) => (
          <div key={i.actionLabel} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="text-sm font-medium">{i.actionLabel}</div>
              <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                <div className="h-2 bg-pulse-500" style={{ width: `${Math.round((i.value / max) * 100)}%` }} />
              </div>
            </div>
            <div className="text-sm w-16 text-right">{i.value}</div>
            <div className="flex gap-1">
              {i.sdgs.map((n) => (
                <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


