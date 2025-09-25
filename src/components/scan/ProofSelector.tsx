import React from "react";

export type ProofMethod = "photo" | "qr" | "location";

interface ProofSelectorProps {
  method: ProofMethod;
  onChange: (m: ProofMethod) => void;
}

const ProofSelector: React.FC<ProofSelectorProps> = ({ method, onChange }) => {
  const btn = (key: ProofMethod, label: string) => (
    <button
      key={key}
      type="button"
      onClick={() => onChange(key)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        method === key ? "bg-pulse-500 text-white" : "bg-white border hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-wrap gap-2">
      {btn("photo", "Photo/Video")}
      {btn("qr", "QR/NFC")}
      {btn("location", "Location")}
    </div>
  );
};

export default ProofSelector;


