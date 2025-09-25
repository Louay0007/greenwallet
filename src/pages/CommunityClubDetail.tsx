import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import DetailHeader from "@/components/community/Detail/DetailHeader";
import InfoSection from "@/components/community/Detail/InfoSection";

export default function CommunityClubDetail() {
  const club = { id: 'c1', name: 'Eco Youth Club', city: 'Tunis', imageUrl: '/background-section3.png', sdgs: [12,13], members: 123, about: 'A student-led club focusing on recycling drives, transport challenges, and community education.' };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-6 md:space-y-8">
        <DetailHeader title={club.name} subtitle={`${club.city} • ${club.members} members`} imageUrl={club.imageUrl} actions={<a href="#join" className="button-primary">Join</a>} />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <InfoSection title="About the club">
              <p>{club.about}</p>
            </InfoSection>
            <InfoSection title="Focus SDGs">
              <div className="flex gap-1.5">
                {club.sdgs.map((n) => (
                  <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
                ))}
              </div>
            </InfoSection>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <InfoSection title="Membership">
              <p>Open to students and community members. Weekly meetings.</p>
              <a id="join" href="#" className="button-primary w-full inline-flex justify-center mt-3">Join club</a>
            </InfoSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


