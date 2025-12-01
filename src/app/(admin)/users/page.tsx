"use client";

import UserTable from "@/app/components/UserTable";
import { Button } from "@/components/ui/button";
import { Plus, Users, Search, Filter, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

export default function UsersPage() {
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
                <Users className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Kelola Pengguna
              </h1>
            </div>
            <p className="text-blue-50/90">
              Atur akun, role, dan akses pengguna sistem
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 font-medium mb-1">Total Users</p>
          <p className="text-3xl font-bold text-gray-900">1,234</p>
          <p className="text-xs text-green-600 mt-2">+12% from last month</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 font-medium mb-1">Active Users</p>
          <p className="text-3xl font-bold text-gray-900">892</p>
          <p className="text-xs text-green-600 mt-2">+8% from last month</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 font-medium mb-1">New This Month</p>
          <p className="text-3xl font-bold text-gray-900">47</p>
          <p className="text-xs text-green-600 mt-2">+23% from last month</p>
        </div>
      </motion.div>

      {/* Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        {/* Table Header with Actions */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Daftar Pengguna</h2>
              <p className="text-sm text-gray-600 mt-1">
                Kelola dan monitor semua pengguna sistem
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Cari user..."
                  className="pl-10 pr-4 py-2 w-64 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Filter */}
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-300 hover:bg-gray-50"
              >
                <Filter size={16} />
                Filter
              </Button>

              {/* Export */}
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-300 hover:bg-gray-50"
              >
                <Download size={16} />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <UserTable />
      </motion.div>

    </div>
  );
}