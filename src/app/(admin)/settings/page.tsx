"use client";

import { motion } from "framer-motion";
import SettingsForm from "@/app/components/SettingsForm";
import { Settings, Shield, Bell, Palette } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">

      {/* Header Section with Gradient */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-md"
      >
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg mb-4">
            <Settings className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Pengaturan Sistem
          </h1>
          <p className="text-base text-blue-50/90">
            Konfigurasi dan keamanan aplikasi TOBA TRIP
          </p>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { 
            icon: Shield, 
            title: "Keamanan", 
            desc: "Password, login & autentikasi",
            gradient: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-50 to-cyan-50",
          },
          { 
            icon: Bell, 
            title: "Notifikasi", 
            desc: "Email, pesan & push alert",
            gradient: "from-purple-500 to-pink-500",
            bgColor: "from-purple-50 to-pink-50",
          },
          { 
            icon: Palette, 
            title: "Tampilan", 
            desc: "Tema, warna & branding",
            gradient: "from-orange-500 to-yellow-500",
            bgColor: "from-orange-50 to-yellow-50",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className={`group relative rounded-xl p-6 text-center border border-gray-200 bg-gradient-to-br ${item.bgColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
          >
            {/* Hover glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-xl`} />

            <div className="relative">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Settings Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        {/* Form Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Informasi Perusahaan</h2>
          <p className="text-sm text-gray-600 mt-1">
            Kelola informasi utama perusahaan dan branding
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <SettingsForm />
        </div>
      </motion.div>

    </div>
  );
}