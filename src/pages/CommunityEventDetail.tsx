import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import DetailHeader from "@/components/community/Detail/DetailHeader";
import InfoSection from "@/components/community/Detail/InfoSection";

export default function CommunityEventDetail() {
  const event = {
    id: 'e1',
    title: 'Beach Cleanup Day',
    date: new Date().toISOString(),
    location: 'La Marsa, Tunis',
    imageUrl: '/background-section2.png',
    sdgs: [14,13],
    description: 'Join us to clean the beach and protect marine life. Bring gloves and water. Families welcome.',
    organizer: 'WWF Tunisia',
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-6 md:space-y-8">
        <DetailHeader title={event.title} subtitle={`${new Date(event.date).toLocaleString()} • ${event.location}`} imageUrl={event.imageUrl} actions={<a href="#rsvp" className="button-primary">RSVP</a>} />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <InfoSection title="About this event">
              <p>{event.description}</p>
            </InfoSection>
            <InfoSection title="What to bring">
              <ul className="list-disc pl-5">
                <li>Reusable gloves and bags</li>
                <li>Water bottle and hat</li>
              </ul>
            </InfoSection>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <InfoSection title="Organizer">
              <p>{event.organizer}</p>
              <div className="flex gap-1.5 mt-2">
                {event.sdgs.map((n) => (
                  <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
                ))}
              </div>
              <a id="rsvp" href="#" className="button-primary w-full inline-flex justify-center mt-3">RSVP</a>
            </InfoSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


