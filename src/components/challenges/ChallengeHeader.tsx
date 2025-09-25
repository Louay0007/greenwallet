import React from "react";

export default function ChallengeHeader({ title, endsAt, sdgs = [], banner = "/background-section2.png", joined = false }: { title: string; endsAt: string; sdgs?: number[]; banner?: string; joined?: boolean }) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img src={banner} alt="" className="w-full h-48 sm:h-56 md:h-72 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold drop-shadow">{title}</h1>
          <p className="text-xs opacity-90">Ends {new Date(endsAt).toLocaleDateString()}</p>
          <div className="flex gap-2 mt-2 text-xs">
            {sdgs.map((n) => (
              <span key={n} className="px-2 py-1 rounded-full bg-white/80 text-green-800">SDG {n}</span>
            ))}
          </div>
        </div>
        <a href="#join" className={`px-4 py-2 rounded-full text-sm font-medium ${joined ? "bg-white text-pulse-600" : "bg-pulse-500 text-white"}`}>{joined ? "Joined" : "Join challenge"}</a>
      </div>
    </div>
  );
}


