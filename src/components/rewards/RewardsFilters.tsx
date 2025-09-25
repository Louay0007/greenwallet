import React, { useState } from "react";

export default function RewardsFilters({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <div className="glass-card p-3 sm:p-4 w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search rewards or partners" className="flex-1 border rounded-xl px-4 py-2 bg-white/90" />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          <select className="border rounded-xl px-3 py-2 bg-white/90 text-sm">
            <option>All categories</option>
            <option>Food</option>
            <option>Mobility</option>
            <option>Energy</option>
            <option>Culture</option>
          </select>
          <select className="border rounded-xl px-3 py-2 bg-white/90 text-sm">
            <option>All partners</option>
            <option>Partner A</option>
            <option>Partner B</option>
          </select>
          <select className="border rounded-xl px-3 py-2 bg-white/90 text-sm">
            <option>Popular</option>
            <option>Price (low)</option>
            <option>Price (high)</option>
            <option>New</option>
          </select>
        </div>
        <button onClick={() => onSearch(q)} className="button-primary px-5 py-2 text-sm">Search</button>
      </div>
    </div>
  );
}


