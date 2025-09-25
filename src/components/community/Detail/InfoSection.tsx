import React from "react";

export default function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="glass-card p-5 text-left">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="text-sm text-gray-800 space-y-2">
        {children}
      </div>
    </section>
  );
}


