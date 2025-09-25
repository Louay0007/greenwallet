import React from "react";

export default function WalletCard({ balance, last7dEarned }: { balance: number; last7dEarned: number[] }) {
  const max = Math.max(...last7dEarned, 1);
  return (
    <div className="relative overflow-hidden rounded-2xl text-left w-full">
      <img src="/background-section1.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/70" />
      <div className="relative p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Wallet</h1>
            <p className="text-gray-700 mt-1 text-sm">GreenCoin balance</p>
            <div className="mt-2 text-3xl md:text-4xl font-semibold">{balance.toFixed(0)} GC</div>
          </div>
          <div className="flex gap-2">
            <a href="/quests" className="button-secondary text-sm px-4 py-2">Earn more</a>
            <a href="#market" className="button-primary text-sm px-4 py-2">Browse rewards</a>
          </div>
        </div>
        <div className="mt-5">
          <svg viewBox={`0 0 ${last7dEarned.length} ${max}`} className="w-full h-14 sm:h-16">
            <polyline fill="url(#earnArea)" stroke="none" points={last7dEarned.map((v, i) => `${i+1},${max}`).join(" ") + " " + last7dEarned.map((v, i) => `${i+1},${max - v}`).join(" ")} />
            <polyline fill="none" stroke="#22c55e" strokeWidth="0.5" points={last7dEarned.map((v, i) => `${i+1},${max - v}`).join(" ")} />
            <defs>
              <linearGradient id="earnArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}


