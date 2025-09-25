import React from "react";

export default function ResourceItem({ id, title, url, sdgs = [], source }: { id: string; title: string; url: string; sdgs?: number[]; source?: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4 flex items-center justify-between">
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-xs text-gray-600">{source ?? new URL(url).hostname}</p>
        <div className="flex gap-1.5 mt-1">
          {sdgs.map((n) => (
            <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
          ))}
        </div>
      </div>
      <a href={url} target="_blank" rel="noreferrer" className="button-secondary text-sm py-2">Open</a>
    </div>
  );
}


