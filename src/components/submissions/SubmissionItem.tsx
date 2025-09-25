import React from "react";
import StatusPill from "./StatusPill";

interface Props {
  id: string;
  actionLabel: string;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
  points?: number;
  sdgs?: number[];
  thumbnailUrl?: string;
}

export default function SubmissionItem({ id, actionLabel, createdAt, status, points, sdgs = [], thumbnailUrl }: Props) {
  return (
    <a href={`/submissions/${id}`} className="glass-card overflow-hidden block">
      <div className="aspect-video w-full bg-gray-100 relative">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={actionLabel} className="w-full h-full object-cover" />
        ) : (
          <img src="/placeholder.svg" alt="Placeholder" className="w-20 opacity-50 absolute inset-0 m-auto" />
        )}
      </div>
      <div className="p-4 text-left">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{actionLabel}</h3>
          <StatusPill status={status} />
        </div>
        <p className="text-xs text-gray-500 mt-1">{new Date(createdAt).toLocaleString()}</p>
        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          {typeof points === "number" && (
            <span className="px-2 py-1 rounded-full bg-pulse-100 text-pulse-700 border">{points} GC</span>
          )}
          {sdgs.map((n) => (
            <span key={n} className="px-2 py-1 rounded-full bg-green-50 border text-green-700">SDG {n}</span>
          ))}
        </div>
      </div>
    </a>
  );
}


