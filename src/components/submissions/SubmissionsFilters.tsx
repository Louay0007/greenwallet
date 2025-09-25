import React from "react";

interface Props {
  status: string;
  range: string;
  category: string;
  onChange: (u: Partial<{ status: string; range: string; category: string }>) => void;
}

export default function SubmissionsFilters({ status, range, category, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select value={status} onChange={(e) => onChange({ status: e.target.value })} className="w-full border rounded-lg px-3 py-2 bg-white/80">
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
      <select value={range} onChange={(e) => onChange({ range: e.target.value })} className="w-full border rounded-lg px-3 py-2 bg-white/80">
        <option value="7">Last 7 days</option>
        <option value="30">Last 30 days</option>
        <option value="90">Last 90 days</option>
      </select>
      <select value={category} onChange={(e) => onChange({ category: e.target.value })} className="w-full border rounded-lg px-3 py-2 bg-white/80">
        <option value="all">All categories</option>
        <option value="recycle">Recycle</option>
        <option value="transport">Transport</option>
        <option value="energy">Energy</option>
        <option value="water">Water</option>
        <option value="tree">Plant a Tree</option>
        <option value="cleanup">Cleanup</option>
      </select>
    </div>
  );
}


