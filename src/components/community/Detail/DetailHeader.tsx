import React from "react";

export default function DetailHeader({ title, subtitle, imageUrl, actions }: { title: string; subtitle?: string; imageUrl: string; actions?: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img src={imageUrl} alt="" className="w-full h-56 md:h-72 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold drop-shadow">{title}</h1>
          {subtitle && <p className="text-sm opacity-90 mt-1">{subtitle}</p>}
        </div>
        {actions}
      </div>
    </div>
  );
}


