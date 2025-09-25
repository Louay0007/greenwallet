import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WalletCard from "@/components/rewards/WalletCard";
import TransactionsList from "@/components/rewards/TransactionsList";
import RewardsFilters from "@/components/rewards/RewardsFilters";
import RewardsGrid from "@/components/rewards/RewardsGrid";
import RewardCard from "@/components/rewards/RewardCard";
import DonationGrid from "@/components/rewards/DonationGrid";
import RewardDetailModal from "@/components/rewards/RewardDetailModal";

export default function Rewards() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const wallet = { balance: 240, last7dEarned: [2,3,1,4,2,5,3] };
  const txs = [
    { id: 't1', type: 'earn', amount: 20, ref: 'SUB-123', createdAt: new Date().toISOString(), status: 'settled' },
    { id: 't2', type: 'spend', amount: 15, ref: 'VCH-456', createdAt: new Date().toISOString(), status: 'settled' },
  ];
  const rewards = [
    { id: 'r1', title: 'Eco Cafe Voucher', cost: 50, imageUrl: '/background-section1.png', partner: { id: 'p1', name: 'Eco Cafe' }, sdgs: [12,13], ribbon: 'limited' },
    { id: 'r2', title: 'Transit Day Pass', cost: 80, imageUrl: '/background-section2.png', partner: { id: 'p2', name: 'City Transit' }, sdgs: [11,13] },
    { id: 'r3', title: 'LED Bulb Discount', cost: 40, imageUrl: '/background-section3.png', partner: { id: 'p3', name: 'BrightHome' }, sdgs: [7,13], ribbon: 'new' },
  ];
  const donations = [
    { id: 'd1', title: 'Tree Planting', min: 10, sdgs: [15,13], impactPerCoin: '1 GC = 1 sapling', imageUrl: '/background-section2.png', verified: true },
    { id: 'd2', title: 'Beach Cleanup', min: 5, sdgs: [14,13], impactPerCoin: '1 GC = 2kg trash removed', imageUrl: '/background-section1.png', verified: true },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24 sm:pt-28 md:pt-32 space-y-8 md:space-y-12">
        <WalletCard balance={wallet.balance} last7dEarned={wallet.last7dEarned} />

        <div className="grid lg:grid-cols-5 gap-5 sm:gap-6">
          <div className="lg:col-span-3 space-y-5 sm:space-y-6">
            <RewardsFilters onSearch={() => {}} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {rewards.map((r) => (
                <RewardCard key={r.id} {...r} onClick={() => { setSelected(r); setOpen(true); }} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <TransactionsList items={txs as any} />
            <DonationGrid items={donations as any} />
          </div>
        </div>
      </main>
      <RewardDetailModal open={open} onClose={() => setOpen(false)} reward={selected} onConfirm={() => { setOpen(false); }} />
      <Footer />
    </div>
  );
}


