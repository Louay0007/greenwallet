import React from "react";

interface Card { action: string; points: number; sdgs: number[]; slug: string }

export default function NextActions({ items }: { items: Card[] }) {
  return (
    <div className="glass-card p-4 sm:p-5 text-left w-full">
      <h3 className="font-semibold">Next best actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-3">
        {items.map((c) => (
          <a
            key={c.slug}
            href={`/scan?action=${encodeURIComponent(c.slug)}`}
            className="rounded-2xl border p-4 bg-white hover:shadow-elegant transition-all flex flex-col justify-between min-h-[160px]"
          >
            <div>
              <div className="text-sm font-semibold leading-snug">{c.action}</div>
              <div className="mt-1 text-xs text-gray-600">+{c.points} GC</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {c.sdgs.map((n) => (
                  <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <span className="button-primary w-full inline-flex justify-center py-2 text-sm">Scan now</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}


