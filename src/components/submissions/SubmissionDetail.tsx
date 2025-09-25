import React from "react";
import StatusPill from "./StatusPill";

interface Media { type: "image" | "video"; url: string; }
interface Props {
  submission: {
    id: string;
    actionLabel: string;
    createdAt: string;
    status: "pending" | "approved" | "rejected";
    points?: number;
    sdgs?: number[];
    media?: Media;
    reviewerNote?: string;
  };
}

export default function SubmissionDetail({ submission }: Props) {
  const s = submission;
  return (
    <div className="space-y-6">
      <div className="relative rounded-2xl overflow-hidden">
        {s.media ? (
          s.media.type === "image" ? (
            <img src={s.media.url} alt={s.actionLabel} className="w-full h-64 md:h-96 object-cover" />
          ) : (
            <video src={s.media.url} controls className="w-full h-64 md:h-96 object-cover" />
          )
        ) : (
          <img src="/background-section2.png" alt="" className="w-full h-64 md:h-96 object-cover opacity-60" />
        )}
        <div className="absolute top-4 left-4">
          <StatusPill status={s.status} />
        </div>
      </div>

      <div className="glass-card p-5 text-left">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-2xl font-semibold">{s.actionLabel}</h1>
          <div className="flex items-center gap-2">
            {typeof s.points === "number" && (
              <span className="px-2 py-1 rounded-full bg-pulse-100 text-pulse-700 border">{s.points} GC</span>
            )}
            {(s.sdgs || []).map((n) => (
              <span key={n} className="px-2 py-1 rounded-full bg-green-50 border text-green-700 text-xs">SDG {n}</span>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">{new Date(s.createdAt).toLocaleString()}</p>
      </div>

      {s.reviewerNote && (
        <div className="glass-card p-5 text-left border-red-200">
          <h3 className="font-semibold text-red-700">Reviewer note</h3>
          <p className="text-sm text-red-700/90 mt-1">{s.reviewerNote}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <a href="/scan" className="button-primary">Resubmit</a>
        <a href="/submissions" className="button-secondary">Back to submissions</a>
      </div>
    </div>
  );
}


