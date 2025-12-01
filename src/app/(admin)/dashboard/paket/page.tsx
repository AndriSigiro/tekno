// src/app/dashboard/paket/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PackageTable from "@/app/components/PackageTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function PaketPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("tobaTripAdminLoggedIn");
    if (!isLoggedIn) router.push("/");
  }, [router]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">
            Kelola Paket Wisata
          </h1>
          <p className="text-gray-500 mt-1">
            Tambah, edit, dan kelola semua paket wisata
          </p>
        </div>

        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-5 rounded-xl shadow-lg transition">
          <Plus size={20} />
          Tambah Paket Baru
        </Button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <PackageTable />
      </div>
    </div>
  );
}
