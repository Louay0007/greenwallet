import React, { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

interface Props {
  category: string;
  duration: string;
  status: string;
  onChange: (u: Partial<{ category: string; duration: string; status: string }>) => void;
}

export default function ChallengesFilters({ category, duration, status, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const categories = [
    { key: "all", label: "All" },
    { key: "recycle", label: "Recycle" },
    { key: "transport", label: "Transport" },
    { key: "energy", label: "Energy" },
    { key: "water", label: "Water" },
    { key: "tree", label: "Tree" },
    { key: "cleanup", label: "Cleanup" },
  ];

  const labelFor = (key: string, map: Record<string, string>, fallback = key) => map[key] ?? fallback;
  const summaryCategory = labelFor(category, Object.fromEntries(categories.map((c) => [c.key, c.label])));
  const summaryDuration = labelFor(duration, { weekly: "Weekly", monthly: "Monthly", seasonal: "Seasonal" });

  return (
    <div className="glass-card p-3 sm:p-4 w-full">
      {/* Mobile: collapsible with chip scroller */}
      <button
        className="sm:hidden w-full flex items-center justify-between rounded-xl border px-4 py-2 bg-white/90 shadow-elegant"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-2 text-gray-800">
          <SlidersHorizontal size={18} />
          <span className="text-sm font-medium">Filters</span>
          <span className="text-xs text-gray-500">{summaryCategory} • {summaryDuration}</span>
        </div>
        <ChevronDown size={18} className={`${open ? "rotate-180" : ""} transition-transform`} />
      </button>

      <div className={`sm:hidden ${open ? "mt-3" : "hidden"}`}>
        <div className="overflow-x-auto -mx-2 px-2">
          <div className="flex gap-2 pb-1">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => onChange({ category: c.key })}
                className={`px-3 py-1.5 rounded-full text-xs border whitespace-nowrap shadow-sm ${
                  category === c.key ? "bg-pulse-500 text-white border-pulse-500" : "bg-white text-gray-800"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <select value={duration} onChange={(e) => onChange({ duration: e.target.value })} className="w-full border rounded-xl px-3 py-2 bg-white/90 text-sm min-h-[44px]">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="seasonal">Seasonal</option>
          </select>
          <select value={status} onChange={(e) => onChange({ status: e.target.value })} className="w-full border rounded-xl px-3 py-2 bg-white/90 text-sm min-h-[44px]">
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
      </div>

      {/* Desktop/tablet filters */}
      <div className="hidden sm:grid grid-cols-3 gap-3">
        <label className="flex items-center gap-2">
          <span className="text-xs text-gray-600">Category</span>
          <select value={category} onChange={(e) => onChange({ category: e.target.value })} className="w-full border rounded-full px-4 py-2 bg-white/80">
            {categories.map((c) => (
              <option key={c.key} value={c.key}>{c.label}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-xs text-gray-600">Duration</span>
          <select value={duration} onChange={(e) => onChange({ duration: e.target.value })} className="w-full border rounded-full px-4 py-2 bg-white/80">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="seasonal">Seasonal</option>
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-xs text-gray-600">Status</span>
          <select value={status} onChange={(e) => onChange({ status: e.target.value })} className="w-full border rounded-full px-4 py-2 bg-white/80">
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </label>
      </div>
    </div>
  );
}


