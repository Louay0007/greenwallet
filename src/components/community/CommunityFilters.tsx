import React, { useState } from "react";

export default function CommunityFilters({ onChange }: { onChange: (q: { query: string; city: string; sdg: number | null }) => void }) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All cities");
  const [activeSdg, setActiveSdg] = useState<number | null>(null);
  const sdgs = [6,7,11,12,13,14,15];

  const apply = () => onChange({ query, city, sdg: activeSdg });

  return (
    <div className="glass-card p-3 sm:p-4 w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search events, clubs, partners" className="flex-1 border rounded-xl px-4 py-2 bg-white/90" />
          <select value={city} onChange={(e) => setCity(e.target.value)} className="border rounded-xl px-3 py-2 bg-white/90 text-sm">
            <option>All cities</option>
            <option>Tunis</option>
            <option>Sousse</option>
            <option>Bizerte</option>
          </select>
          <button onClick={apply} className="button-primary px-5 py-2 text-sm">Search</button>
        </div>
        <div className="overflow-x-auto -mx-2 px-2">
          <div className="flex gap-2">
            {sdgs.map((n) => (
              <button key={n} onClick={() => setActiveSdg(activeSdg === n ? null : n)} className={`px-3 py-1.5 rounded-full text-xs border whitespace-nowrap ${activeSdg === n ? 'bg-pulse-500 text-white border-pulse-500' : 'bg-white text-gray-800'}`}>SDG {n}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


