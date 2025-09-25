import React from "react";

interface SubmissionPreviewProps {
  action: string | null;
  method: string;
  quantity: string;
  unit: string;
  onSubmit: () => void;
}

const SubmissionPreview: React.FC<SubmissionPreviewProps> = ({ action, method, quantity, unit, onSubmit }) => {
  return (
    <div className="glass-card p-5 text-left">
      <h3 className="text-lg font-semibold">Submission preview</h3>
      <p className="mt-2 text-gray-600">Action: {action ?? "—"} • Proof: {method} • </p>
      
      <div className="mt-4">
        <button onClick={onSubmit} className="button-primary">Submit</button>
      </div>
    </div>
  );
};

export default SubmissionPreview;


