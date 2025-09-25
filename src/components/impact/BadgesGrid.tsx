import React from "react";

interface Badge { id: string; name: string; status: "earned" | "progress"; progressPct?: number }

export default function BadgesGrid({ badges }: { badges: Badge[] }) {
  return (
    <div className="glass-card p-4 text-left w-full">
      <h3 className="font-semibold">Badges</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-3">
        {badges.map((b) => (
          <div key={b.id} className={`rounded-2xl border p-4 text-center ${b.status === "earned" ? "bg-pulse-100/40" : "bg-white"}`}>
            <img src="/sdg.png" alt="badge" className="w-10 h-10 mx-auto" />
            <div className="mt-2 text-sm font-medium">{b.name}</div>
            {b.status === "progress" && (
              <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-2 bg-pulse-500" style={{ width: `${b.progressPct ?? 0}%` }} />
              </div>
            )}
            {b.status === "earned" && <div className="mt-2 text-xs text-pulse-700">Earned</div>}
          </div>
        ))}
      </div>
    </div>
  );
}


