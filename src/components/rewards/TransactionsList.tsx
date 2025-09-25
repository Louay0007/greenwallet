import React from "react";

type TxType = "earn" | "spend" | "donate";
interface Tx { id: string; type: TxType; amount: number; ref: string; createdAt: string; status: "pending" | "settled" }

export default function TransactionsList({ items }: { items: Tx[] }) {
  if (items.length === 0) {
    return (
      <div className="glass-card p-5 text-center">
        <img src="/placeholder.svg" alt="" className="w-16 mx-auto opacity-60" />
        <p className="mt-2 text-sm text-gray-700">No transactions yet.</p>
      </div>
    );
  }
  return (
    <div className="glass-card p-5 text-left w-full">
      <h3 className="font-semibold mb-3">Transactions</h3>
      <div className="divide-y">
        {items.map((t) => (
          <div key={t.id} className="py-3 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium capitalize">{t.type}</div>
              <div className="text-xs text-gray-600">{new Date(t.createdAt).toLocaleString()} • {t.ref}</div>
            </div>
            <div className="text-right">
              <div className={`text-sm font-semibold ${t.type === 'earn' ? 'text-green-600' : 'text-gray-900'}`}>{t.type === 'earn' ? '+' : '-'}{t.amount} GC</div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] border ${t.status === 'pending' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 'bg-green-100 text-green-800 border-green-200'}`}>{t.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


