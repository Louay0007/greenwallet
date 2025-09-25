import React from "react";

interface Event { id: string; title: string; date: string; imageUrl: string; sdgs?: number[] }

export default function FeaturedRibbon({ items }: { items: Event[] }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Featured</h2>
      <div className="overflow-x-auto -mx-4 px-4">
        <div className="flex gap-4 snap-x snap-mandatory pb-2">
          {items.map((e) => (
            <a key={e.id} href={`#/community/events/${e.id}`} className="min-w-[260px] max-w-[320px] snap-start rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all">
              <div className="relative h-40">
                <img src={e.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <h3 className="text-base font-semibold drop-shadow line-clamp-2">{e.title}</h3>
                  <p className="text-[10px] opacity-90">{new Date(e.date).toLocaleString()}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


