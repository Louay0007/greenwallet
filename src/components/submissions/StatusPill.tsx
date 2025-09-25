import React from "react";

type Status = "pending" | "approved" | "rejected";

const COLORS: Record<Status, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  approved: "bg-green-100 text-green-800 border-green-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
};

const LABELS: Record<Status, string> = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
};

export default function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs border ${COLORS[status]}`}>{LABELS[status]}</span>
  );
}


