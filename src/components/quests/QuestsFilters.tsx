import React from "react";

interface QuestsFiltersProps {
  sdg: string | null;
  category: string | null;
  time: string | null;
  difficulty: string | null;
  onChange: (updates: Partial<Record<"sdg" | "category" | "time" | "difficulty", string | null>>) => void;
}

const QuestsFilters: React.FC<QuestsFiltersProps> = ({ sdg, category, time, difficulty, onChange }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <select
        value={sdg ?? ""}
        onChange={(e) => onChange({ sdg: e.target.value || null })}
        className="w-full border rounded-lg px-3 py-2 bg-white/80"
      >
        <option value="">All SDGs</option>
        <option value="6">SDG 6 • Clean Water</option>
        <option value="7">SDG 7 • Clean Energy</option>
        <option value="11">SDG 11 • Sustainable Cities</option>
        <option value="12">SDG 12 • Responsible Consumption</option>
        <option value="13">SDG 13 • Climate Action</option>
        <option value="14">SDG 14 • Life Below Water</option>
        <option value="15">SDG 15 • Life on Land</option>
      </select>

      <select
        value={category ?? ""}
        onChange={(e) => onChange({ category: e.target.value || null })}
        className="w-full border rounded-lg px-3 py-2 bg-white/80"
      >
        <option value="">All Categories</option>
        <option value="waste">Waste</option>
        <option value="transport">Transport</option>
        <option value="energy">Energy</option>
        <option value="water">Water</option>
      </select>

      <select
        value={time ?? ""}
        onChange={(e) => onChange({ time: e.target.value || null })}
        className="w-full border rounded-lg px-3 py-2 bg-white/80"
      >
        <option value="">Any Time</option>
        <option value="5">≤ 5 min</option>
        <option value="15">≤ 15 min</option>
        <option value="30">≤ 30 min</option>
      </select>

      <select
        value={difficulty ?? ""}
        onChange={(e) => onChange({ difficulty: e.target.value || null })}
        className="w-full border rounded-lg px-3 py-2 bg-white/80"
      >
        <option value="">Any Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default QuestsFilters;


