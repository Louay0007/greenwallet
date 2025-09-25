import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CommunityFilters from "@/components/community/CommunityFilters";
import FeaturedRibbon from "@/components/community/FeaturedRibbon";
import EventsGrid from "@/components/community/EventsGrid";
import ClubsGrid from "@/components/community/ClubsGrid";
import VolunteerGrid from "@/components/community/VolunteerGrid";
import PartnersGrid from "@/components/community/PartnersGrid";
import ResourcesList from "@/components/community/ResourcesList";

export default function Community() {
  const [filters, setFilters] = useState({ query: "", city: "All cities", sdg: null as number | null });
  const featured = [
    { id: 'e1', title: 'Beach Cleanup Day', date: new Date().toISOString(), imageUrl: '/background-section2.png', sdgs: [14,13] },
    { id: 'e2', title: 'Tree Planting Festival', date: new Date().toISOString(), imageUrl: '/background-section1.png', sdgs: [15,13] },
  ];
  const events = [
    { id: 'e3', title: 'City Bike to Work', date: new Date().toISOString(), location: 'Tunis', imageUrl: '/background-section3.png', sdgs: [11,13] },
    { id: 'e4', title: 'Community Recycling Workshop', date: new Date().toISOString(), location: 'Sousse', imageUrl: '/background-section1.png', sdgs: [12,13] },
    { id: 'e5', title: 'Water Conservation Talk', date: new Date().toISOString(), location: 'Bizerte', imageUrl: '/background-section2.png', sdgs: [6,13] },
  ];
  const clubs = [
    { id: 'c1', name: 'Eco Youth Club', members: 123, city: 'Tunis', imageUrl: '/background-section3.png', sdgs: [12,13] },
    { id: 'c2', name: 'Green Campus', members: 88, city: 'Sousse', imageUrl: '/background-section1.png', sdgs: [7,13] },
  ];
  const volunteer = [
    { id: 'v1', title: 'Park Tree Care', hours: 3, when: 'Sat 10:00', imageUrl: '/background-section2.png', sdgs: [15,13] },
    { id: 'v2', title: 'River Cleanup', hours: 4, when: 'Sun 09:00', imageUrl: '/background-section1.png', sdgs: [14,13] },
  ];
  const partners = [
    { id: 'p1', name: 'WWF Tunisia', logoUrl: '/public/logo.png', verified: true, sdgs: [14,15,13] },
    { id: 'p2', name: 'City Transit', logoUrl: '/public/logo.png', verified: true, sdgs: [11,13] },
  ];
  const resources = [
    { id: 'r1', title: 'Household Energy Savings Guide', url: 'https://example.com/energy', sdgs: [7,13], source: 'Ministry of Energy' },
    { id: 'r2', title: 'Plastic-Free Living Toolkit', url: 'https://example.com/plastic', sdgs: [12,14,13], source: 'NGO' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-8 md:space-y-12">
        <CommunityFilters onChange={setFilters} />
        <FeaturedRibbon items={featured} />
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Events near you</h2>
          <a href="#" className="text-sm text-pulse-600 hover:underline">View all</a>
        </div>
        <EventsGrid items={events} />

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Clubs</h2>
          <a href="#" className="text-sm text-pulse-600 hover:underline">View all</a>
        </div>
        <ClubsGrid items={clubs} />

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Volunteer</h2>
          <a href="#" className="text-sm text-pulse-600 hover:underline">View all</a>
        </div>
        <VolunteerGrid items={volunteer} />

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Partners</h2>
          <a href="#" className="text-sm text-pulse-600 hover:underline">View all</a>
        </div>
        <PartnersGrid items={partners as any} />

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Resources</h2>
          <a href="#" className="text-sm text-pulse-600 hover:underline">View all</a>
        </div>
        <ResourcesList items={resources} />
      </main>
      <Footer />
    </div>
  );
}


