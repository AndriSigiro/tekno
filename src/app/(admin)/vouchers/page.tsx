"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Ticket, Plus, TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import VoucherTable from "@/app/components/VoucherTable";

export default function VouchersPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-md"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Kelola Voucher
              </h1>
            </div>
            <p className="text-base text-purple-50/90">
              Buat dan atur voucher diskon untuk pelanggan
            </p>
          </div>

          <Link href="/vouchers/create">
            <Button className="flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 px-6 py-6 rounded-xl shadow-lg font-semibold transition-all duration-200 hover:scale-105">
              <Plus size={18} />
              Buat Voucher Baru
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
              Total
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">Total Voucher</p>
          <p className="text-2xl font-bold text-gray-900">24</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
              Active
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">Voucher Aktif</p>
          <p className="text-2xl font-bold text-gray-900">18</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              +15%
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">Digunakan</p>
          <p className="text-2xl font-bold text-gray-900">342</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
              Savings
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">Total Diskon</p>
          <p className="text-2xl font-bold text-gray-900">Rp 12M</p>
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
              <h2 className="text-xl font-bold text-gray-900">Daftar Voucher</h2>
              <p className="text-sm text-gray-600 mt-1">
                Kelola semua voucher diskon
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Semua Status</option>
                <option>Active</option>
                <option>Expired</option>
                <option>Draft</option>
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Semua Tipe</option>
                <option>Percentage</option>
                <option>Fixed Amount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <VoucherTable />
      </motion.div>
    </div>
  );
}