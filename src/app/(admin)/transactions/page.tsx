// src/app/transactions/page.tsx
"use client";

import TransactionTable from "@/app/components/TransactionTable";
import { CreditCard, TrendingUp, DollarSign, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Transactions() {
  return (
    <div className="space-y-6">

      {/* Header Section with Gradient */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-md"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Manajemen Transaksi
              </h1>
            </div>
            <p className="text-blue-50/90">
              Kelola dan pantau semua transaksi pelanggan secara real-time
            </p>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold">
              Sistem Aktif
            </span>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
              +18.2%
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900">Rp 150M</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              +12.5%
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">This Month</p>
          <p className="text-2xl font-bold text-gray-900">Rp 45.2M</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
              892
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">Completed</p>
          <p className="text-2xl font-bold text-gray-900">95.4%</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
              24
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">Pending</p>
          <p className="text-2xl font-bold text-gray-900">4.6%</p>
        </div>
      </motion.div>

      {/* Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        {/* Table Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Riwayat Transaksi</h2>
              <p className="text-sm text-gray-600 mt-1">
                Monitor dan kelola seluruh transaksi pembayaran
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Semua Status</option>
                <option>Success</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>7 Hari Terakhir</option>
                <option>30 Hari Terakhir</option>
                <option>3 Bulan Terakhir</option>
                <option>Tahun Ini</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <TransactionTable />
      </motion.div>

    </div>
  );
}