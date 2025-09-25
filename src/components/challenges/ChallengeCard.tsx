import React from "react";

interface Props {
  id: string;
  title: string;
  endsAt: string;
  joined: boolean;
  sdgs?: number[];
  banner?: string;
}

export default function ChallengeCard({ id, title, endsAt, joined, sdgs = [], banner = "/background-section1.png" }: Props) {
  return (
    <a href={`/challenges/${id}`} className="block rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all hover:translate-y-[-3px] focus:outline-none focus:ring-2 focus:ring-pulse-500">
      <div className="relative h-40 sm:h-44 md:h-56">
        <img src={banner} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
          {sdgs.map((n) => (
            <span key={n} className="px-2 py-1 rounded-full bg-white/80 text-green-700">SDG {n}</span>
          ))}
        </div>
        <div className="absolute bottom-2 sm:bottom-3 left-3 right-3 text-white flex items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-semibold drop-shadow line-clamp-2">{title}</h3>
            <p className="text-[10px] sm:text-xs opacity-90">Ends {new Date(endsAt).toLocaleDateString()}</p>
          </div>
          <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium ${joined ? "bg-white text-pulse-600" : "bg-pulse-500 text-white"}`}>{joined ? "Joined" : "Join"}</span>
        </div>
      </div>
    </a>
  );
}


