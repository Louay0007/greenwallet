import React from "react";

export type ScanAction =
  | "recycle"
  | "transport"
  | "energy"
  | "water"
  | "tree"
  | "cleanup"
  | null;

interface ActionPickerProps {
  value: ScanAction;
  onChange: (action: ScanAction) => void;
}

const ACTIONS: { key: Exclude<ScanAction, null>; label: string; desc: string; img: string }[] = [
  { key: "recycle", label: "Recycle", desc: "Plastic, glass, paper", img: "/background-section1.png" },
  { key: "transport", label: "Transport", desc: "Bus, metro, bike", img: "/background-section2.png" },
  { key: "energy", label: "Energy", desc: "Save kWh at home", img: "/background-section3.png" },
  { key: "water", label: "Water", desc: "Conserve liters", img: "/background-section1.png" },
  { key: "tree", label: "Plant a Tree", desc: "Life on Land", img: "/background-section2.png" },
  { key: "cleanup", label: "Cleanup", desc: "Beach/river/park", img: "/background-section3.png" },
];

const ActionPicker: React.FC<ActionPickerProps> = ({ value, onChange }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {ACTIONS.map((a) => (
        <button
          key={a.key}
          type="button"
          onClick={() => onChange(a.key)}
          className={`relative overflow-hidden rounded-2xl border transition-all text-left p-4 sm:p-5 bg-white/70 backdrop-blur-sm hover:shadow-elegant focus:outline-none focus:ring-2 focus:ring-pulse-500 min-h-[96px] ${
            value === a.key ? "ring-2 ring-pulse-500" : ""
          }`}
        >
          <img src={a.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-pulse-100/40" />
          <div className="relative">
            <div className="text-xs sm:text-sm text-gray-700">{a.desc}</div>
            <div className="mt-1 text-lg sm:text-xl font-semibold">{a.label}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ActionPicker;


