import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ChallengeHeader from "@/components/challenges/ChallengeHeader";
import ChallengeProgress from "@/components/challenges/ChallengeProgress";
import ChallengeLeaderboard from "@/components/challenges/ChallengeLeaderboard";

const HEADER = { title: "Recycle Week", endsAt: new Date(Date.now() + 7*864e5).toISOString(), sdgs: [12,13], banner: "/background-section1.png", joined: true };
const ROWS = [
  { rank: 1, user: "Amina", points: 120 },
  { rank: 2, user: "Youssef", points: 110 },
  { rank: 3, user: "Sara", points: 95, me: true },
];

export default function ChallengeDetail() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-28 md:pt-32 space-y-8 md:space-y-10">
        <ChallengeHeader {...HEADER} />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <ChallengeProgress current={45} target={100} timeLeft="6 days" />
            <div className="glass-card p-5 text-left">
              <h3 className="font-semibold">Rules</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1">
                <li>Log only genuine recycling actions with clear photos.</li>
                <li>One submission per action; duplicates will be rejected.</li>
                <li>Use public transport, bike, or on-foot for extra multipliers.</li>
              </ul>
              <a href="/scan" className="button-primary mt-4 inline-flex">Scan now</a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ChallengeLeaderboard rows={ROWS} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


