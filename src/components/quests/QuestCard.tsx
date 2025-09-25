import React from "react";

export interface QuestCardProps {
  title: string;
  points: number;
  impact: string;
  sdgs: number[];
  timeEstimate: string;
  proofType: string;
}

const QuestCard: React.FC<QuestCardProps> = ({ title, points, impact, sdgs, timeEstimate, proofType }) => {
  return (
    <div className="glass-card p-5 text-left">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="px-2 py-1 rounded-md text-xs bg-pulse-100 text-pulse-700 border border-pulse-200">+{points} GC</span>
      </div>
      <p className="mt-2 text-gray-600">{impact}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-1 rounded-full bg-gray-100 border">{timeEstimate}</span>
        <span className="px-2 py-1 rounded-full bg-gray-100 border">Proof: {proofType}</span>
        {sdgs.map((n) => (
          <span key={n} className="px-2 py-1 rounded-full bg-green-50 border text-green-700">SDG {n}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <a href="/scan" className="button-primary">Start</a>
        <button className="button-secondary">Save</button>
      </div>
    </div>
  );
};

export default QuestCard;


