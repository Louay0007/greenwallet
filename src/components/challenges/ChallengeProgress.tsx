import React from "react";

export default function ChallengeProgress({ current, target, timeLeft }: { current: number; target: number; timeLeft: string }) {
  const pct = Math.min(100, Math.round((current / Math.max(1, target)) * 100));
  return (
    <div className="glass-card p-4 sm:p-5 text-left">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Your progress</h3>
        <span className="text-sm text-gray-600">{timeLeft} left</span>
      </div>
      <div className="mt-4 flex items-center gap-4 sm:gap-5">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          <svg viewBox="0 0 36 36" className="w-16 h-16 sm:w-20 sm:h-20">
            <path d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" stroke="#EEE" strokeWidth="3" />
            <path d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray={`${pct}, 100`} className="text-pulse-500" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">{pct}%</div>
        </div>
        <div className="flex-1">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-3 bg-pulse-500" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs sm:text-sm text-gray-700 mt-2">{current} / {target}</p>
        </div>
      </div>
      <ul className="mt-4 text-xs sm:text-sm text-gray-700 space-y-1">
        <li>• Complete 1 recycling action</li>
        <li>• Take public transport once</li>
        <li>• Save 0.5 kWh at home</li>
      </ul>
    </div>
  );
}


