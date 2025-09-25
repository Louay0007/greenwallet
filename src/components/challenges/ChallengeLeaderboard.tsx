import React from "react";

interface Row { rank: number; user: string; points: number; me?: boolean }

export default function ChallengeLeaderboard({ rows }: { rows: Row[] }) {
  return (
    <div className="glass-card p-4 sm:p-5 text-left">
      <h3 className="font-semibold mb-2 sm:mb-3">Leaderboard</h3>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.rank} className={`flex items-center justify-between rounded-lg border px-3 py-2 ${r.me ? "bg-pulse-50 border-pulse-200" : "bg-white"}`}>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-6 text-xs sm:text-sm font-semibold">{r.rank}</span>
              <span className={`text-xs sm:text-sm ${r.me ? "text-pulse-700" : "text-gray-800"}`}>{r.user}</span>
            </div>
            <span className="text-xs sm:text-sm font-medium">{r.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}


