"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import DashboardStats from "@/app/components/DashboardStats";
import PackageTable from "@/app/components/PackageTable";
import { Waves, Package } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("tobaTripAdminLoggedIn");
    if (!isLoggedIn) router.replace("/");
  }, [router]);

  return (
    <div className="space-y-12">

      {/* HERO WELCOME */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden text-center p-12 rounded-3xl border border-white/20 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-indigo-700/20 backdrop-blur-xl shadow-2xl"
      >
        {/* Glow effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
            Selamat Datang, Admin
          </h1>
          <p className="text-lg md:text-xl text-cyan-100">
            <span className="font-semibold">PT. Toba Teknologi Wisata</span> • Sistem Manajemen Pariwisata Danau Toba
          </p>

          <div className="flex justify-center mt-8">
            <div className="p-4 rounded-full bg-cyan-400/20 animate-pulse">
              <Waves className="w-14 h-14 text-cyan-300" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* STAT CARDS */}
      <DashboardStats />

      {/* PACKAGE TABLE */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Paket Wisata Populer
            </h2>
            <p className="text-cyan-300 mt-1">
              Paket unggulan berdasarkan minat wisatawan
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-cyan-400/10 border border-cyan-300/20">
            <Package className="w-6 h-6 text-cyan-300" />
            <span className="text-lg font-semibold text-cyan-200">
              12 Paket Aktif
            </span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-lg shadow-xl">
          <PackageTable />
        </div>
      </motion.section>

    </div>
  );
}
