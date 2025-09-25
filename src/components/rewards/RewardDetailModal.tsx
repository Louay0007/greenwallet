import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  reward: { id: string; title: string; cost: number; imageUrl: string; partner: { id: string; name: string } } | null;
  onConfirm: (id: string) => void;
}

export default function RewardDetailModal({ open, onClose, reward, onConfirm }: Props) {
  if (!open || !reward) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-white shadow-elegant">
        <div className="relative h-40">
          <img src={reward.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3 text-white">
            <h3 className="text-lg font-semibold drop-shadow">{reward.title}</h3>
            <p className="text-xs opacity-90">{reward.partner.name}</p>
          </div>
        </div>
        <div className="p-4 text-left space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">Cost</div>
            <div className="text-base font-semibold text-pulse-600">{reward.cost} GC</div>
          </div>
          <div className="text-sm text-gray-700">
            By confirming, your GreenCoins will be used to redeem this reward. A voucher will be issued and visible in your account.
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button onClick={onClose} className="button-secondary text-sm py-2">Cancel</button>
            <button onClick={() => onConfirm(reward.id)} className="button-primary text-sm py-2">Confirm redeem</button>
          </div>
        </div>
      </div>
    </div>
  );
}


