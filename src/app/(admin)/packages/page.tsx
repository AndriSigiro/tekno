// src/app/packages/page.tsx
import PackageTable from "@/app/components/PackageTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function PackagesPage() {
  return (
    <div className="space-y-8 p-8 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kelola Paket Wisata
          </h1>
          <p className="text-gray-500 mt-1">
            Tambah, perbarui, dan hapus paket wisata dengan mudah
          </p>
        </div>

        <Button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl shadow-lg transition"
        >
          <Plus size={18} />
          Tambah Paket Baru
        </Button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <PackageTable />
      </div>

    </div>
  );
}
