import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import DetailHeader from "@/components/community/Detail/DetailHeader";
import InfoSection from "@/components/community/Detail/InfoSection";

export default function CommunityPartnerDetail() {
  const partner = { id: 'p1', name: 'WWF Tunisia', logoUrl: '/logo.png', verified: true, imageUrl: '/background-section1.png', sdgs: [14,15,13], about: 'WWF Tunisia partners with local communities to protect biodiversity and reduce pollution.', programs: ['Beach cleanup campaigns', 'Tree planting drives', 'Education workshops'] };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-6 md:space-y-8">
        <DetailHeader title={partner.name} subtitle={partner.verified ? 'Verified partner' : ''} imageUrl={partner.imageUrl} actions={<a href="#programs" className="button-primary">Programs</a>} />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <InfoSection title="About">
              <p>{partner.about}</p>
            </InfoSection>
            <InfoSection title="Programs" >
              <ul className="list-disc pl-5">
                {partner.programs.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </InfoSection>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <InfoSection title="Focus SDGs">
              <div className="flex gap-1.5">
                {partner.sdgs.map((n) => (
                  <span key={n} className="px-2 py-0.5 rounded-full text-[10px] border bg-green-50 text-green-700">SDG {n}</span>
                ))}
              </div>
              <a id="programs" href="#" className="button-secondary w-full inline-flex justify-center mt-3">Contact partner</a>
            </InfoSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


