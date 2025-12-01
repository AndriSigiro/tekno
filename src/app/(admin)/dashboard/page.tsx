"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import DashboardStats from "@/app/components/DashboardStats";
import PackageTable from "@/app/components/PackageTable";
import { Package } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("tobaTripAdminLoggedIn");
    if (!isLoggedIn) router.replace("/");
  }, [router]);

  return (
    <div className="space-y-6">

      {/* HERO WELCOME */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-md"
      >
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Selamat Datang, Admin
          </h1>
          <p className="text-base text-white/90">
            Sistem Manajemen Pariwisata Danau Toba
          </p>
        </div>
      </motion.div>

      {/* STAT CARDS */}
      <DashboardStats />

      {/* PACKAGE TABLE */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Paket Wisata Populer
            </h2>
            <p className="text-gray-600 mt-1">
              Paket unggulan berdasarkan minat wisatawan
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              12 Paket Aktif
            </span>
          </div>
        </div>

        <PackageTable />
      </motion.section>

    </div>
  );
}