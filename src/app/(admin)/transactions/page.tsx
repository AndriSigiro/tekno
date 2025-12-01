// src/app/transactions/page.tsx
import TransactionTable from "@/app/components/TransactionTable";
import { CreditCard } from "lucide-react";

export default function Transactions() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Manajemen Transaksi
          </h1>
          <p className="text-gray-500 mt-1">
            Kelola dan pantau semua transaksi pelanggan
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100">
          <CreditCard className="text-blue-600 w-6 h-6" />
          <span className="text-blue-700 font-semibold">
            Status: Aktif
          </span>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <TransactionTable />
      </div>
    </div>
  );
}
