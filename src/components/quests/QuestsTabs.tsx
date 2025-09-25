import React from "react";

type QuestsTab = "daily" | "weekly" | "seasonal" | "skills";

interface QuestsTabsProps {
  active: QuestsTab;
  onChange: (tab: QuestsTab) => void;
}

const tabs: { key: QuestsTab; label: string }[] = [
  { key: "daily", label: "Daily" },
  { key: "weekly", label: "Weekly" },
  { key: "seasonal", label: "Seasonal" },
  { key: "skills", label: "Skills" },
];

const QuestsTabs: React.FC<QuestsTabsProps> = ({ active, onChange }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-flex gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === t.key
                ? "bg-pulse-500 text-white shadow"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export type { QuestsTab };
export default QuestsTabs;


