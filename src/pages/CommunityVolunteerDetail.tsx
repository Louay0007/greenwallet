import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import DetailHeader from "@/components/community/Detail/DetailHeader";
import InfoSection from "@/components/community/Detail/InfoSection";

export default function CommunityVolunteerDetail() {
  const opp = { id: 'v1', title: 'Park Tree Care', hours: 3, when: 'Sat 10:00', imageUrl: '/background-section2.png', sdgs: [15,13], desc: 'Support the city parks team by caring for newly planted trees. Gloves provided.' };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-6 md:space-y-8">
        <DetailHeader title={opp.title} subtitle={`${opp.when} • ${opp.hours} hours`} imageUrl={opp.imageUrl} actions={<a href="#signup" className="button-primary">Sign up</a>} />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <InfoSection title="About this opportunity">
              <p>{opp.desc}</p>
            </InfoSection>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <InfoSection title="Details">
              <div className="flex gap-1.5">
                {opp.sdgs.map((n) => (
                  <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
                ))}
              </div>
              <a id="signup" href="#" className="button-primary w-full inline-flex justify-center mt-3">Sign up</a>
            </InfoSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


